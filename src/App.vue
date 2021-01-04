<template>
  <BasePageLoader v-if="loading" />
  <component v-else :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BasePageLoader from '@/components/BasePageLoader/BasePageLoader.vue'
import installationService from '@/services/api/services/installationService'
import getShopOriginFromUrl from '@/utils/getShopOriginFromUrl'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseLayout,
    BasePageLoader
  },
  async created() {
    await this.start()
    this.loading = false
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'div'
    }
  },
  methods: {
    async start() {
      const shopOrigin = getShopOriginFromUrl()
      if (!shopOrigin) return this.$router.push({ name: 'error', params: { message: 'Shop origin missing' } })
      const framed = window.top !== window.self
      if (!framed) return this.$router.push({ name: 'error', params: { message: 'App must be embedded' } })
      const user = await this.$store.dispatch('authenticate')
      if (!user) return installationService.install(shopOrigin)
      if (!user.subscription) return this.$router.push({ name: 'welcome' })
    }
  }
})
</script>
