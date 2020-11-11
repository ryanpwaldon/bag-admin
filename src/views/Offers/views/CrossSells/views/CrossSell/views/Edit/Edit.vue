<template>
  <div class="grid gap-6">
    <StatusForm v-model:item="crossSell" />
    <CopyForm v-model:item="crossSell" />
    <TriggersForm v-model:item="crossSell" />
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
    item: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props, { emit }) {
    return {
      crossSell: useModelWrapper(props, emit, 'item')
    }
  }
})
</script>
