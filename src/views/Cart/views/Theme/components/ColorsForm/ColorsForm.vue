<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">
          Colors
        </h3>
      </template>
      <div class="space-y-5">
        <BaseInputColor
          label="Background"
          :error="fields.themeColor1.error.value"
          v-model="fields.themeColor1.value.value"
          description="The background color of the cart drawer."
        />
        <BaseInputColor
          label="Card backgrounds"
          :error="fields.themeColor2.error.value"
          v-model="fields.themeColor2.value.value"
          description="The background color for line items, offers, forms, and the continue shopping button."
        />
        <BaseInputColor label="Title text" :error="fields.textColor1.error.value" v-model="fields.textColor1.value.value" />
        <BaseInputColor label="Description text" :error="fields.textColor2.error.value" v-model="fields.textColor2.value.value" />
        <BaseInputColor label="Link text" :error="fields.textColor3.error.value" v-model="fields.textColor3.value.value" />
        <BaseInputColor label="Borders" :error="fields.borderColor1.error.value" v-model="fields.borderColor1.value.value" />
        <BaseInputColor label="Progress bar" :error="fields.progressBarColor.error.value" v-model="fields.progressBarColor.value.value" />
        <BaseInputColor label="Checkout button" :error="fields.checkoutButtonColor.error.value" v-model="fields.checkoutButtonColor.value.value" />
        <BaseInputColor
          label="Checkout button text"
          :error="fields.checkoutButtonTextColor.error.value"
          v-model="fields.checkoutButtonTextColor.value.value"
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
import { object } from 'yup'
import { cloneDeep, merge } from 'lodash'
import { requiredHex } from '@/validators'
import useForm from '@/composables/useForm'
import injectStrict from '@/utils/injectStrict'
import { computed, defineComponent, ref } from 'vue'
import cartService from '@/services/api/services/cartService'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import { CartInjection, UpdateCartInjection } from '@/views/Cart/Cart.vue'
import BaseInputColor from '@/components/BaseInputColor/BaseInputColor.vue'
export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
    BaseInputColor
  },
  setup() {
    const loading = ref(false)
    const cart = injectStrict(CartInjection)
    const updateCart = injectStrict(UpdateCartInjection)
    // prettier-ignore
    const schema = computed(() => object({
      borderColor1: requiredHex().default(cart.value.cartSettings.borderColor1),
      checkoutButtonColor: requiredHex().default(cart.value.cartSettings.checkoutButtonColor),
      checkoutButtonTextColor: requiredHex().default(cart.value.cartSettings.checkoutButtonTextColor),
      progressBarColor: requiredHex().default(cart.value.cartSettings.progressBarColor),
      textColor1: requiredHex().default(cart.value.cartSettings.textColor1),
      textColor2: requiredHex().default(cart.value.cartSettings.textColor2),
      textColor3: requiredHex().default(cart.value.cartSettings.textColor3),
      themeColor1: requiredHex().default(cart.value.cartSettings.themeColor1),
      themeColor2: requiredHex().default(cart.value.cartSettings.themeColor2)
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
