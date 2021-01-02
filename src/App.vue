<template>
  <component v-if="$store.state.user" :is="layout">
    <router-view />
  </component>
  <BasePageLoader v-else />
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BasePageLoader from '@/components/BasePageLoader/BasePageLoader.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseLayout,
    BasePageLoader
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'div'
    }
  }
})
</script>
