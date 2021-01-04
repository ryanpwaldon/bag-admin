<template>
  <div
    v-if="trialDaysRemaining > 0"
    class="flex items-center px-6 py-4 space-x-6 overflow-hidden rounded-lg shadow bg-gradient-to-tr from-blue-700 to-blue-400"
  >
    <div class="p-2 bg-blue-800 rounded-lg">
      <Clock class="h-6 text-white" />
    </div>
    <p class="font-medium text-white">Your trial ends in {{ trialDaysRemaining }} days</p>
  </div>
</template>

<script lang="ts">
import Clock from '@/icons/Clock.vue'
import subscriptionService from '@/services/api/services/subscriptionService'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Clock
  },
  async created() {
    const activeSubscription = await subscriptionService.findActiveSubscription()
    if (!activeSubscription) return
    const { createdAt, trialDays } = activeSubscription
    const subscribedDays = this.$dayjs().diff(this.$dayjs(createdAt), 'day')
    this.trialDaysRemaining = trialDays - subscribedDays > 0 ? trialDays - subscribedDays : 0
  },
  data: () => ({
    trialDaysRemaining: 0
  })
})
</script>
