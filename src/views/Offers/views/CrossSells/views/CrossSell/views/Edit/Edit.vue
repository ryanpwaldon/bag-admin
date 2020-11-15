<template>
  <div class="grid gap-6">
    <EditForm v-model:crossSell="crossSellModelled" />
    <DeleteForm v-model:crossSell="crossSellModelled" />
  </div>
</template>

<script lang="ts">
import EditForm from './components/EditForm/EditForm.vue'
import DeleteForm from './components/DeleteForm/DeleteForm.vue'
import { CrossSell } from '@/services/api/services/crossSellService'
import useModelWrapper from '@/composables/useModelWrapper'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {
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
