<template>
  <div class="grid gap-6">
    <StatusForm v-model:crossSell="crossSellModelled" />
    <CopyForm v-model:crossSell="crossSellModelled" />
    <TriggersForm v-model:crossSell="crossSellModelled" />
  </div>
</template>

<script lang="ts">
import CopyForm from './components/CopyForm/CopyForm.vue'
import StatusForm from './components/StatusForm/StatusForm.vue'
import TriggersForm from './components/TriggersForm/TriggersForm.vue'
import { CrossSell } from '@/services/api/services/crossSellService'
import useModelWrapper from '@/composables/useModelWrapper'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {
    StatusForm,
    CopyForm,
    TriggersForm
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props, { emit }) {
    return {
      crossSellModelled: useModelWrapper(props, emit, 'item')
    }
  }
})
</script>
