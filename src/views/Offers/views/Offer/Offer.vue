<template>
  <BaseLayout>
    <BaseHeading />
    <div class="border-4 border-gray-200 border-dashed rounded-lg h-96" />
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeading from '@/components/BaseHeading/BaseHeading.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Offer',
  components: {
    BaseLayout,
    BaseHeading
  }
})
</script>
