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
          Cart
        </h3>
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Cart background color"
          :error="fields.colorBackground.error.value"
          v-model="fields.colorBackground.value.value"
          description="Change the background color of the cart."
        />
        <BaseInputText
          class="max-w-2xl ml-auto"
          label="Cart spacing"
          :error="fields.paddingCart.error.value"
          v-model="fields.paddingCart.value.value"
          description="The distance, in pixels, between the cart and the edge of the page. Set this to 0 to make the cart flush with the edge of the page."
        />
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Elements
        </h3>
        <BaseInputToggleHorizontal
          label="Rounded"
          class="max-w-2xl ml-auto"
          description="Give cart elements a soft rounded feel."
          v-model="fields.roundedCorners.value.value"
        />
        <BaseInputToggleHorizontal
          label="Shadows"
          class="max-w-2xl ml-auto"
          description="Give cart elements a shadowed feel."
          v-model="fields.displayShadows.value.value"
        />
        <BaseInputToggleHorizontal
          label="Borders"
          class="max-w-2xl ml-auto"
          description="Give cart elements a bordered feel."
          v-model="fields.displayBorders.value.value"
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Border colors"
          :error="fields.colorBorderPrimary.error.value"
          v-model="fields.colorBorderPrimary.value.value"
        />
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Progress bar
        </h3>
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Bar color"
          :error="fields.colorProgressBarPrimary.error.value"
          v-model="fields.colorProgressBarPrimary.value.value"
        />
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Font
        </h3>
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Font color (primary)"
          :error="fields.colorTextPrimary.error.value"
          v-model="fields.colorTextPrimary.value.value"
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Font color (secondary)"
          :error="fields.colorTextSecondary.error.value"
          v-model="fields.colorTextSecondary.value.value"
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Font color (links)"
          :error="fields.colorTextLink.error.value"
          v-model="fields.colorTextLink.value.value"
        />
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Checkout button
        </h3>
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Button background color"
          :error="fields.colorButtonPrimaryBackground.error.value"
          v-model="fields.colorButtonPrimaryBackground.value.value"
        />
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Button font color"
          :error="fields.colorButtonPrimaryText.error.value"
          v-model="fields.colorButtonPrimaryText.value.value"
        />
        <h3 class="pb-1 font-medium text-gray-800 border-b border-gray-300 text-md">
          Advanced
        </h3>
        <BaseInputColor
          class="max-w-2xl ml-auto"
          label="Backdrop color"
          :error="fields.colorBackdrop.error.value"
          v-model="fields.colorBackdrop.value.value"
          description="The color of the page overlay that appears over your site."
        />
        <BaseInputText
          class="max-w-2xl ml-auto"
          label="Backdrop opacity"
          :error="fields.opacityBackdrop.error.value"
          v-model="fields.opacityBackdrop.value.value"
          description="The amount of transparency applied to the backdrop. Enter a value between 0 (transparent) and 1 (opaque)."
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
      colorBackdrop: requiredHex().default(props.modelValue.cartSettings.colorBackdrop),
      colorBackground: requiredHex().default(props.modelValue.cartSettings.colorBackground),
      colorBorderPrimary: requiredHex().default(props.modelValue.cartSettings.colorBorderPrimary),
      colorButtonPrimaryBackground: requiredHex().default(props.modelValue.cartSettings.colorButtonPrimaryBackground),
      colorButtonPrimaryText: requiredHex().default(props.modelValue.cartSettings.colorButtonPrimaryText),
      colorProgressBarPrimary: requiredHex().default(props.modelValue.cartSettings.colorProgressBarPrimary),
      colorTextLink: requiredHex().default(props.modelValue.cartSettings.colorTextLink),
      colorTextPrimary: requiredHex().default(props.modelValue.cartSettings.colorTextPrimary),
      colorTextSecondary: requiredHex().default(props.modelValue.cartSettings.colorTextSecondary),
      displayBorders: boolean().required().default(props.modelValue.cartSettings.displayBorders),
      displayShadows: boolean().required().default(props.modelValue.cartSettings.displayShadows),
      opacityBackdrop: number().required().default(props.modelValue.cartSettings.opacityBackdrop),
      paddingCart: number().required().default(props.modelValue.cartSettings.paddingCart),
      roundedCorners: boolean().required().default(props.modelValue.cartSettings.roundedCorners),
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
