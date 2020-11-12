<template>
  <form @submit="handleSubmit">
    <BaseCard>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-full">
          <p class="text-base font-medium leading-6 text-gray-700">Trigger products</p>
          <p class="text-sm text-gray-500">
            This offer will only be visible to the customer if they have added at least one trigger product to their cart.
          </p>
        </div>
        <BaseInputProducts
          name="triggerProductIds"
          v-model="fields.triggerProductIds.value.value"
          :error="fields.triggerProductIds.error.value"
          class="col-span-full"
        />
      </div>
      <template #footer>
        <BaseButton class="ml-auto" text="Save" type="submit" :loading="loading" />
      </template>
    </BaseCard>
  </form>
</template>

<script lang="ts">
import useForm from '@/composables/useForm'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseInputProducts from '@/components/BaseInputProducts/BaseInputProducts.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import { defineComponent, PropType, ref } from 'vue'
import { array, object } from 'yup'

export default defineComponent({
  components: {
    BaseCard,
    BaseInputProducts,
    BaseButton
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props, { emit }) {
    const loading = ref(false)
    const schema = object({
      triggerProductIds: array()
        .min(1, 'At least 1 trigger product is required.')
        .required('At least 1 trigger product is required.')
        .default(props.crossSell.triggerProductIds)
    }).defined()
    const { fields, getValues, handleSubmit } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const crossSell = await crossSellService.updateOneById(props.crossSell.id, getValues())
      emit('update:crossSell', crossSell)
      loading.value = false
    }
    return { fields, handleSubmit: handleSubmit(onSubmit), loading }
  }
})
</script>
