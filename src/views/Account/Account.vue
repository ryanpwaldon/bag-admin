<template>
  <BaseHeader />
  <BaseLoader v-if="!activeSubscription" />
  <template v-else>
    <TrialCountdown :active-subscription="activeSubscription" />
    <PlanForm class="mt-8" :active-subscription="activeSubscription" />
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
import subscriptionService, { ActiveSubscription } from '@/services/api/services/subscriptionService'
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
    const activeSubscription = await subscriptionService.findActiveSubscription()
    this.activeSubscription = activeSubscription
  },
  data: () => ({
    activeSubscription: null as ActiveSubscription | null
  })
})
</script>
