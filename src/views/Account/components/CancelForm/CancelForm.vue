<template>
  <BaseTerminateCard
    title="Cancel plan"
    button-text="Cancel plan"
    @terminate="handleCancellation"
    button-confirmation-text="Confirm cancellation"
    description="If you decide to re-install the app in the future, all your settings will be restored. If you have any questions, please reach out via the messenger."
  />
</template>

<script lang="ts">
import BaseTerminateCard from '@/components/BaseTerminateCard/BaseTerminateCard.vue'
import subscriptionService from '@/services/api/services/subscriptionService'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseTerminateCard
  },
  methods: {
    async handleCancellation() {
      const user = await subscriptionService.cancel()
      this.$store.commit('setUser', user)
      this.$router.push({ name: 'subscribe' })
    }
  }
})
</script>
