<template>
  <BaseCard>
    <BaseInputToggleHorizontal
      label="Status"
      description="Pause or set this offer live."
      v-model="fields.active.value.value"
      :error="fields.active.error.value"
      :class="loading && 'pointer-events-none'"
      class="w-full"
    />
  </BaseCard>
</template>

<script lang="ts">
import useForm from '@/composables/useForm'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import { defineComponent, PropType, ref, watch } from 'vue'
import { boolean, object } from 'yup'

export default defineComponent({
  components: {
    BaseCard,
    BaseInputToggleHorizontal
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props, { emit }) {
    const loading = ref(false)
    const schema = object({ active: boolean().default(props.crossSell.active) }).defined()
    const { fields, getValues } = useForm(schema)
    watch(fields.active.value, async () => {
      loading.value = true
      const crossSell = await crossSellService.updateOneById(props.crossSell.id, getValues())
      emit('update:crossSell', crossSell)
      loading.value = false
    })
    return { fields, loading }
  }
})
</script>
