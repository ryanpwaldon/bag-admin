<template>
  <BaseLayout>
    <router-view />
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
export default defineComponent({
  name: 'App',
  components: {
    BaseLayout
  }
})
</script>
