<template>
  <BaseHeader description="Your plan scales with your business. Your plan will be re-evaluated at the end of each billing period.">
    <template #actions>
      <BaseInputTextToggle v-model="selectedInterval" :options="intervalOptions" />
    </template>
  </BaseHeader>
  <BaseLoader v-if="!subscriptions.length" />
  <div class="grid grid-flow-col grid-cols-4 gap-6" v-else>
    <BasePlanCard
      :key="i"
      :price="plan.price"
      :title="plan.title"
      :description="plan.description"
      v-for="(plan, i) in selectedPlanGroup"
      :interval="convertShopifyInterval(plan.interval)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBeacon from '@/composables/useBeacon'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import convertShopifyInterval from '@/utils/convertShopifyInterval'
import BasePlanCard from '@/components/BasePlanCard/BasePlanCard.vue'
import BaseInputTextToggle from '@/components/BaseInputTextToggle/BaseInputTextToggle.vue'
import subscriptionService, { Interval, Subscription } from '@/services/api/services/subscriptionService'
export default defineComponent({
  components: { BaseLoader, BaseHeader, BasePlanCard, BaseInputTextToggle },
  setup() {
    const { openBeacon } = useBeacon()
    const intervalOptions = [
      { label: 'Monthly', value: Interval.Monthly },
      { label: 'Yearly', value: Interval.Annually, badge: 'Save 16%' }
    ]
    return { openBeacon, convertShopifyInterval, intervalOptions }
  },
  async created() {
    this.subscriptions = await subscriptionService.findAllNonLegacy()
  },
  computed: {
    selectedPlanGroup(): Subscription[] {
      return this.subscriptions.filter(item => item.interval === this.selectedInterval)
    }
  },
  data: () => ({
    selectedInterval: Interval.Monthly,
    subscriptions: [] as Subscription[]
  })
})
</script>
