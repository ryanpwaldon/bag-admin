<template>
  <BaseLayout>
    <BaseHeader />
    <div class="border-4 border-gray-200 border-dashed rounded-lg h-96" />
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseLayout,
    BaseHeader
  }
})
</script>
