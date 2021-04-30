<template>
  <div class="flex items-center justify-center w-screen h-screen bg-gray-100">
    <BaseSpinner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import isFramed from '@/utils/isFramed'
import getShopOrigin from '@/utils/getShopOrigin'
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
import installationService from '@/services/api/services/installationService'
import userService from '@/services/api/services/userService'
import accessScopeService from '@/services/api/services/accessScopeService'
export default defineComponent({
  components: {
    BaseSpinner
  },
  props: {
    continueToRouteName: {
      type: String,
      required: true
    }
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
  methods: {
    async start() {
      const shopOrigin = getShopOrigin()
      if (!shopOrigin) return this.displayError('Shop origin missing.')
      const user = await userService.findMe().catch(() => null)
      if (!user) return this.redirectToInstallationUrl(shopOrigin)
      const accessScopesUpToDate = await accessScopeService.checkStatus().catch(() => null)
      if (!accessScopesUpToDate) return this.redirectToInstallationUrl(shopOrigin)
      this.$store.commit('setUser', user)
      if (!isFramed) return this.displayError('App must be embedded.')
      if (!user.subscription) return this.$router.push({ name: 'subscribe' })
      return this.authSuccess()
    },
    displayError(message: string) {
      this.$router.push({ name: 'error', params: { message } })
    },
    redirectToInstallationUrl(shopOrigin: string) {
      installationService.install(shopOrigin)
    },
    authSuccess() {
      this.$router.push({ name: this.continueToRouteName, query: this.$route.query })
    }
  }
})
</script>
