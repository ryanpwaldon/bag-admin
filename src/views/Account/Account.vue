<template>
  <BaseHeader />
  <BaseLoader v-if="loading" />
  <template v-else>
    <TrialCountdown
      :trial-days="activeSubscription?.trialDays"
      :subscription-start="activeSubscription?.createdAt"
      v-if="activeSubscription?.trialDays && activeSubscription?.createdAt"
    />
    <PlanForm
      class="mt-8"
      :title="activeSubscription?.title || subscription?.title"
      :price="activeSubscription?.price || subscription?.price"
      :interval="activeSubscription?.interval || subscription?.interval"
    />
    <NotificationsForm class="mt-8" />
    <CancelForm class="mt-8" />
  </template>
</template>

<script lang="ts">
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import PlanForm from '@/views/Account/components/PlanForm/PlanForm.vue'
import CancelForm from '@/views/Account/components/CancelForm/CancelForm.vue'
import TrialCountdown from '@/views/Account/components/TrialCountdown/TrialCountdown.vue'
import NotificationsForm from '@/views/Account/components/NotificationsForm/NotificationsForm.vue'
import subscriptionService, { ActiveSubscription, Subscription } from '@/services/api/services/subscriptionService'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    PlanForm,
    BaseHeader,
    CancelForm,
    BaseLoader,
    TrialCountdown,
    NotificationsForm
  },
  async created() {
    const [subscription, activeSubscription] = await subscriptionService.findMySubscriptionDetails()
    this.subscription = subscription
    this.activeSubscription = activeSubscription
    this.loading = false
  },
  data: () => ({
    loading: true,
    subscription: null as Subscription | null,
    activeSubscription: null as ActiveSubscription | null
  })
})
</script>
