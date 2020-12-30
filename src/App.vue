<template>
  <template v-if="$route.name === 'login'">
    <router-view />
  </template>
  <template v-else>
    <BaseLayout v-if="$store.state.user">
      <router-view />
    </BaseLayout>
    <BasePageLoader v-else />
  </template>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BasePageLoader from '@/components/BasePageLoader/BasePageLoader.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseLayout,
    BasePageLoader
  }
})
</script>
