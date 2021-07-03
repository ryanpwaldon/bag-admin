<template>
  <BaseSpinner class="w-6 h-6 m-auto" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import isFramed from '@/utils/isFramed'
import getShopOrigin from '@/utils/getShopOrigin'
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
import userService, { User } from '@/services/api/services/userService'
import accessScopeService from '@/services/api/services/accessScopeService'
import installationService from '@/services/api/services/installationService'
export default defineComponent({
  components: {
    BaseSpinner
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
    continueToRoute() {
      return this.$store.state.continueToRoute
    }
  },
  methods: {
    async start() {
      const shopOrigin = getShopOrigin()
      if (!shopOrigin) return this.displayError('Shop origin missing')
      const user = await userService.findMe().catch(() => null)
      if (!user) return this.redirectToInstallationUrl(shopOrigin)
      const accessScopesUpToDate = await accessScopeService.checkStatus().catch(() => null)
      if (!accessScopesUpToDate) return this.redirectToInstallationUrl(shopOrigin)
      this.$store.commit('setUser', user)
      if (!isFramed) return this.displayError('App must be embedded')
      return this.authSuccess(user)
    },
    displayError(message: string) {
      this.$router.push({ name: 'error', params: { message } })
    },
    redirectToInstallationUrl(shopOrigin: string) {
      installationService.install(shopOrigin)
    },
    authSuccess(user: User) {
      if (!this.continueToRoute) return this.displayError('Continue to route is not defined.')
      userService.updateMe({ appOpens: user.appOpens + 1 })
      if (this.continueToRoute.name === 'setup') return this.$router.push({ name: 'setup' })
      this.$router.push(this.continueToRoute)
    }
  }
})
</script>
