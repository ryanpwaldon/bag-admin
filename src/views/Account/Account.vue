<template>
  <BaseHeader />
  <BaseLoader v-if="loading" />
  <template v-else>
    <TrialCountdown v-if="activeSubscription" :active-subscription="activeSubscription" />
    <PlanForm class="mt-8" :subscriptions="subscriptions" />
    <CancelForm class="mt-8" />
  </template>
</template>

<script lang="ts">
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import PlanForm from '@/views/Account/components/PlanForm/PlanForm.vue'
import CancelForm from '@/views/Account/components/CancelForm/CancelForm.vue'
import TrialCountdown from '@/views/Account/components/TrialCountdown/TrialCountdown.vue'
import subscriptionService, { ActiveSubscription, Subscription } from '@/services/api/services/subscriptionService'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    PlanForm,
    BaseHeader,
    TrialCountdown,
    CancelForm,
    BaseLoader
  },
  async created() {
    const [subscriptions, activeSubscription] = await Promise.all([subscriptionService.findAll(), subscriptionService.findActiveSubscription()])
    this.subscriptions = subscriptions
    this.activeSubscription = activeSubscription
    this.loading = false
  },
  data: () => ({
    loading: true,
    subscriptions: [] as Subscription[],
    activeSubscription: null as ActiveSubscription | null
  })
})
</script>
