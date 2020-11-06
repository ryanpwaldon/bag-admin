<template>
  <BaseCard>
    <form @submit="statusForm.handleSubmit(() => onSubmit(statusForm))"></form>
  </BaseCard>
  <CopyForm :item="item" @update:item="$emit('update:item', $event)" />
  <BaseCard>
    <form @submit="triggerProductIdsForm.handleSubmit(() => onSubmit(triggerProductIdsForm))"></form>
  </BaseCard>
</template>

<script lang="ts">
import useForm from '@/composables/useForm'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import { defineComponent, PropType } from 'vue'
import { array, boolean, object } from 'yup'
import CopyForm from '@/views/Offers/views/CrossSells/views/CrossSell/views/Edit/components/CopyForm/CopyForm.vue'

export default defineComponent({
  components: {
    BaseCard,
    CopyForm
  },
  props: {
    item: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props, { emit }) {
    const statusForm = useForm(
      object({
        active: boolean()
          .required('This field is required.')
          .default(props.item.active)
      }).defined()
    )
    const triggerProductIdsForm = useForm(
      object({
        triggerProductIds: array()
          .required()
          .min(1, 'This field requires at least one item.')
          .default(props.item.triggerProductIds)
      }).defined()
    )
    const onSubmit = async (form: ReturnType<typeof useForm>) => {
      const item = await crossSellService.updateOneById(props.item.id, form.getValues())
      emit('update:item', item)
    }
    return { statusForm, triggerProductIdsForm, onSubmit }
  }
})
</script>
