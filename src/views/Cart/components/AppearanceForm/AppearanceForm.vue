<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">
          Appearance
        </h3>
      </template>
      <div class="space-y-6">
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Look & Feel
        </h3>
        <BaseInputToggleHorizontal
          label="Shadows"
          class="max-w-2xl ml-auto"
          description="Add shadows to elements."
          v-model="fields.showShadows.value.value"
        />
        <BaseInputToggleHorizontal
          label="Borders"
          class="max-w-2xl ml-auto"
          description="Toggle to add a thin border to elements. Adjust the color of borders below."
          v-model="fields.showBorders.value.value"
        />
        <BaseInputToggleHorizontal
          label="Rounded corners"
          class="max-w-2xl ml-auto"
          description="Toggle on for rounded, or toggle off for squared corners."
          v-model="fields.roundCorners.value.value"
        />
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Theme colors
        </h3>
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Cart background"
          :error="fields.themeColor1.error.value"
          v-model="fields.themeColor1.value.value"
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Item backgrounds"
          :error="fields.themeColor2.error.value"
          v-model="fields.themeColor2.value.value"
          description="The background color for line items, offers, inputs, and the continue shopping button."
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Borders"
          :error="fields.borderColor1.error.value"
          v-model="fields.borderColor1.value.value"
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Progress bar"
          :error="fields.progressBarColor.error.value"
          v-model="fields.progressBarColor.value.value"
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Checkout button"
          :error="fields.checkoutButtonColor.error.value"
          v-model="fields.checkoutButtonColor.value.value"
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Checkout button text"
          :error="fields.checkoutButtonTextColor.error.value"
          v-model="fields.checkoutButtonTextColor.value.value"
        />
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Text colors
        </h3>
        <BaseInputColor class="max-w-2xl ml-auto" label="Titles" :error="fields.textColor1.error.value" v-model="fields.textColor1.value.value" />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Descriptions"
          :error="fields.textColor2.error.value"
          v-model="fields.textColor2.value.value"
        />
        <BaseInputColor class="max-w-2xl ml-auto" label="Links" :error="fields.textColor3.error.value" v-model="fields.textColor3.value.value" />
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Advanced
        </h3>
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Backdrop color"
          :error="fields.backdropColor.error.value"
          v-model="fields.backdropColor.value.value"
          description="The color of the page overlay that appears over your site when the cart is open."
        />
        <BaseInputText
          class="max-w-2xl ml-auto"
          label="Backdrop opacity"
          :error="fields.backdropOpacity.error.value"
          v-model="fields.backdropOpacity.value.value"
          description="The amount of transparency applied to the backdrop. Enter a value between 0 (transparent) and 1 (opaque)."
        />
        <BaseInputText
          class="max-w-2xl ml-auto"
          label="Cart spacing"
          :error="fields.cartPadding.error.value"
          v-model="fields.cartPadding.value.value"
          description="The distance, in pixels, between the cart and the edge of the page. Set this to 0 to make the cart flush with the edge of the page."
        />
        <BaseInputText
          class="max-w-2xl ml-auto"
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
import { requiredHex } from '@/validators'
import useForm from '@/composables/useForm'
import { boolean, object, number } from 'yup'
import { computed, defineComponent, PropType, ref } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import cartService, { Cart } from '@/services/api/services/cartService'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputColor from '@/components/BaseInputColor/BaseInputColor.vue'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'
export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
    BaseInputText,
    BaseInputColor,
    BaseInputToggleHorizontal
  },
  props: {
    modelValue: {
      type: Object as PropType<Cart>,
      required: true
    }
  },
  setup(props, { emit }) {
    const loading = ref(false)
    // prettier-ignore
    const schema = computed(() => object({
      backdropColor: requiredHex().default(props.modelValue.cartSettings.backdropColor),
      backdropOpacity: number().required().min(0).max(1).default(props.modelValue.cartSettings.backdropOpacity),
      borderColor1: requiredHex().default(props.modelValue.cartSettings.borderColor1),
      brightness1: number().required().min(0).max(1).default(props.modelValue.cartSettings.brightness1),
      cartPadding: number().required().min(0).max(24).default(props.modelValue.cartSettings.cartPadding),
      checkoutButtonColor: requiredHex().default(props.modelValue.cartSettings.checkoutButtonColor),
      checkoutButtonTextColor: requiredHex().default(props.modelValue.cartSettings.checkoutButtonTextColor),
      progressBarColor: requiredHex().default(props.modelValue.cartSettings.progressBarColor),
      roundCorners: boolean().required().default(props.modelValue.cartSettings.roundCorners),
      showBorders: boolean().required().default(props.modelValue.cartSettings.showBorders),
      showShadows: boolean().required().default(props.modelValue.cartSettings.showShadows),
      textColor1: requiredHex().default(props.modelValue.cartSettings.textColor1),
      textColor2: requiredHex().default(props.modelValue.cartSettings.textColor2),
      textColor3: requiredHex().default(props.modelValue.cartSettings.textColor3),
      themeColor1: requiredHex().default(props.modelValue.cartSettings.themeColor1),
      themeColor2: requiredHex().default(props.modelValue.cartSettings.themeColor2)
    }).defined())
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      let cart = { ...props.modelValue }
      cart.cartSettings = getValues()
      cart = await cartService.updateOne(cart)
      emit('update:modelValue', cart)
      loading.value = false
    }
    return { fields, modified, handleSubmit: handleSubmit(onSubmit), loading }
  }
})
</script>
