<template>
  <div class="flex items-center justify-center w-screen h-screen bg-gray-100">
    <BaseSpinner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
export default defineComponent({
  components: {
    BaseSpinner
  }
})
</script>
