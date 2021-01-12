<template>
  <BasePageLoader v-if="loading" />
  <div v-else class="pb-32">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import isFramed from '@/utils/isFramed'
import getShopOriginFromUrl from '@/utils/getShopOriginFromUrl'
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BasePageLoader from '@/components/BasePageLoader/BasePageLoader.vue'
import installationService from '@/services/api/services/installationService'
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
      const user = await this.$store.dispatch('authenticate')
      if (!user) return installationService.install(shopOrigin)
      if (!isFramed) return this.$router.push({ name: 'error', params: { message: 'App must be embedded' } })
      if (!user.subscription) return this.$router.push({ name: 'welcome' })
    }
  }
})
</script>
