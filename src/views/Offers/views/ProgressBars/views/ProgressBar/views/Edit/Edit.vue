<template>
  <div class="grid gap-6">
    <EditForm v-model:progressBar="progressBarModelled" />
    <DeleteForm v-model:progressBar="progressBarModelled" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import EditForm from './components/EditForm/EditForm.vue'
import useModelWrapper from '@/composables/useModelWrapper'
import DeleteForm from './components/DeleteForm/DeleteForm.vue'
import { ProgressBar } from '@/services/api/services/progressBarService'
export default defineComponent({
  components: {
    EditForm,
    DeleteForm
  },
  props: {
    progressBar: {
      type: Object as PropType<ProgressBar>,
      required: true
    }
  },
  setup(props, { emit }) {
    return {
      progressBarModelled: useModelWrapper(props, emit, 'progressBar')
    }
  }
})
</script>
