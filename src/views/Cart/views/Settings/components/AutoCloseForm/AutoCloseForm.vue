<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">Auto close</h3>
      </template>
      <div class="space-y-5">
        <BaseInputToggleHorizontal
          class="w-full"
          label="Enable auto close"
          v-model="fields.autoCloseEnabled.value.value"
          description="Automatically close the cart after a few seconds of inactivity. Auto close only applies to cart opens that originated from an &#34;add to cart&#34; action."
        />
        <BaseInputText
          label="Auto close delay"
          :error="fields.autoCloseDelay.error.value"
          v-model="fields.autoCloseDelay.value.value"
          description="The amount of seconds the cart should stay open before closing."
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
import { boolean, object, number } from 'yup'
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
      autoCloseEnabled: boolean().required().default(cart.value.cartSettings.autoCloseEnabled),
      autoCloseDelay: number().max(5, 'Must be less than 5.').required().default(cart.value.cartSettings.autoCloseDelay)
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
