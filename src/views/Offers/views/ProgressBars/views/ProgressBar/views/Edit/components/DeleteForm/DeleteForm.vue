<template>
  <BaseTerminateCard
    title="Delete"
    button-text="Delete"
    button-confirmation-text="Confirm deletion"
    description="Once you delete this offer, you will lose all data associated with it."
    @terminate="handleDelete"
  />
</template>

<script lang="ts">
import progressBarService, { ProgressBar } from '@/services/api/services/progressBarService'
import BaseTerminateCard from '@/components/BaseTerminateCard/BaseTerminateCard.vue'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {
    BaseTerminateCard
  },
  props: {
    progressBar: {
      type: Object as PropType<ProgressBar>,
      required: true
    }
  },
  methods: {
    async handleDelete() {
      await progressBarService.deleteOneById(this.progressBar.id)
      this.$router.push({ name: 'progress-bars' })
    }
  }
})
</script>
