<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">
          Advanced
        </h3>
      </template>
      <div class="space-y-6">
        <BaseInputColor
          label="Backdrop color"
          :error="fields.backdropColor.error.value"
          v-model="fields.backdropColor.value.value"
          description="The color of the page overlay that appears over your site when the cart is open."
        />
        <BaseInputText
          label="Backdrop opacity"
          :error="fields.backdropOpacity.error.value"
          v-model="fields.backdropOpacity.value.value"
          description="The amount of transparency applied to the backdrop. Enter a value between 0 (transparent) and 1 (opaque)."
        />
        <BaseInputText
          label="Cart spacing"
          :error="fields.cartPadding.error.value"
          v-model="fields.cartPadding.value.value"
          description="The distance, in pixels, between the cart and the edge of the page. Set this to 0 to make the cart flush with the edge of the page."
        />
        <BaseInputText
          label="Hover intensity"
          :error="fields.brightness1.error.value"
          v-model="fields.brightness1.value.value"
          description="Adjust the hover state of elements. 0 is no change, and 1 is maximum change."
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
import { object, number } from 'yup'
import { cloneDeep, merge } from 'lodash'
import { requiredHex } from '@/validators'
import useForm from '@/composables/useForm'
import injectStrict from '@/utils/injectStrict'
import { computed, defineComponent, ref } from 'vue'
import cartService from '@/services/api/services/cartService'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import { CartInjection, UpdateCartInjection } from '@/views/Cart/Cart.vue'
import BaseInputColor from '@/components/BaseInputColor/BaseInputColor.vue'
export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
    BaseInputText,
    BaseInputColor
  },
  setup() {
    const loading = ref(false)
    const cart = injectStrict(CartInjection)
    const updateCart = injectStrict(UpdateCartInjection)
    // prettier-ignore
    const schema = computed(() => object({
      backdropColor: requiredHex().default(cart.value.cartSettings.backdropColor),
      backdropOpacity: number().required().min(0).max(1).default(cart.value.cartSettings.backdropOpacity),
      brightness1: number().required().min(0).max(1).default(cart.value.cartSettings.brightness1),
      cartPadding: number().required().min(0).max(24).default(cart.value.cartSettings.cartPadding)
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
