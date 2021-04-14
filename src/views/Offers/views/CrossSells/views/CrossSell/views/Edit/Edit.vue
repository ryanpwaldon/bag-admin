<template>
  <div class="grid gap-6">
    <StatusForm v-model:crossSell="crossSellModelled" />
    <EditForm v-model:crossSell="crossSellModelled" />
    <DeleteForm v-model:crossSell="crossSellModelled" />
  </div>
</template>

<script lang="ts">
import EditForm from './components/EditForm/EditForm.vue'
import DeleteForm from './components/DeleteForm/DeleteForm.vue'
import { CrossSell } from '@/services/api/services/crossSellService'
import StatusForm from './components/StatusForm/StatusForm.vue'
import useModelWrapper from '@/composables/useModelWrapper'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {
    StatusForm,
    EditForm,
    DeleteForm
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props, { emit }) {
    return {
      crossSellModelled: useModelWrapper(props, emit, 'crossSell')
    }
  }
})
</script>
