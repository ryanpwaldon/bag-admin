<template>
  <BaseLayout v-if="$route.name !== 'login'"><router-view /></BaseLayout>
  <router-view v-else />
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseLayout
  }
})
</script>
