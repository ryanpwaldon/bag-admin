<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">
          General
        </h3>
      </template>
      <div class="space-y-6">
        <BaseInputToggleHorizontal label="Shadows" description="Add shadows to elements." v-model="fields.showShadows.value.value" />
        <BaseInputToggleHorizontal
          label="Borders"
          description="Outline elements with a thin border. You can change the color of this border below."
          v-model="fields.showBorders.value.value"
        />
        <BaseInputToggleHorizontal
          label="Rounded corners"
          description="Toggle on for rounded, or toggle off for squared corners."
          v-model="fields.roundCorners.value.value"
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
import { boolean, object } from 'yup'
import { cloneDeep, merge } from 'lodash'
import useForm from '@/composables/useForm'
import injectStrict from '@/utils/injectStrict'
import { computed, defineComponent, ref } from 'vue'
import cartService from '@/services/api/services/cartService'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import { CartInjection, UpdateCartInjection } from '@/views/Cart/Cart.vue'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'
export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
    BaseInputToggleHorizontal
  },
  setup() {
    const loading = ref(false)
    const cart = injectStrict(CartInjection)
    const updateCart = injectStrict(UpdateCartInjection)
    // prettier-ignore
    const schema = computed(() => object({
      roundCorners: boolean().required().default(cart.value.cartSettings.roundCorners),
      showBorders: boolean().required().default(cart.value.cartSettings.showBorders),
      showShadows: boolean().required().default(cart.value.cartSettings.showShadows)
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
