<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">Terms & Conditions</h3>
      </template>
      <div class="space-y-5">
        <BaseInputToggleHorizontal
          class="w-full"
          v-model="fields.termsEnabled.value.value"
          label="Enable terms and conditions checkbox"
          description="Require customers to agree to terms & conditions before proceeding to checkout."
        />
        <BaseInputText
          label="Terms title"
          :error="fields.termsTitle.error.value"
          v-model="fields.termsTitle.value.value"
          description="The title of the terms agreement checkbox."
        />
        <BaseInputText
          label="Terms agreement"
          :error="fields.termsAgreement.error.value"
          v-model="fields.termsAgreement.value.value"
          description="The &#34;I agree to&#34; copy. What the customer agrees to by clicking the checkbox."
        />
        <BaseInputText
          :optional="true"
          label="Terms link URL"
          placeholder="https://site.com/terms"
          :error="fields.termsLinkUrl.error.value"
          v-model="fields.termsLinkUrl.value.value"
          description="Provide a link to your full terms."
        />
        <BaseInputText
          :optional="true"
          label="Terms link text"
          placeholder="View full terms."
          :error="fields.termsLinkText.error.value"
          v-model="fields.termsLinkText.value.value"
          description="The display text for the link to your full terms."
        />
      </div>
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Save" type="submit" :loading="loading" :disabled="!modified" />
        </div>
      </template>
    </BaseGridCard>
  </form>
</template>

<script lang="ts">
import { cloneDeep, merge } from 'lodash'
import useForm from '@/composables/useForm'
import { boolean, object, string } from 'yup'
import injectStrict from '@/utils/injectStrict'
import { computed, defineComponent, ref } from 'vue'
import cartService from '@/services/api/services/cartService'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import { CartInjection, UpdateCartInjection } from '@/views/Cart/Cart.vue'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'

export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
    BaseInputText,
    BaseInputToggleHorizontal
  },
  setup() {
    const loading = ref(false)
    const cart = injectStrict(CartInjection)
    const updateCart = injectStrict(UpdateCartInjection)
    // prettier-ignore
    const schema = computed(() => object({
      termsEnabled: boolean().default(cart.value.cartSettings.termsEnabled),
      termsTitle: string().max(40, 'Must be less than 40 characters.').default(cart.value.cartSettings.termsTitle),
      termsAgreement: string().max(92, 'Must be less than 92 characters').default(cart.value.cartSettings.termsAgreement),
      termsLinkText: string().max(32, 'Must be less than 32 characters').default(cart.value.cartSettings.termsLinkText),
      termsLinkUrl: string().url('Must be a valid URL.').default(cart.value.cartSettings.termsLinkUrl),
    }).defined())
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      let newCart = cloneDeep(cart.value)
      newCart.cartSettings = merge(newCart.cartSettings, getValues())
      newCart = await cartService.updateOne(newCart)
      updateCart(newCart)
      loading.value = false
    }
    return { fields, modified, handleSubmit: handleSubmit(onSubmit), loading }
  }
})
</script>
