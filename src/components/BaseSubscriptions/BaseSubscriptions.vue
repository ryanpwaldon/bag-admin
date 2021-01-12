<template>
  <div class="flex flex-col space-x-0 space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0" v-if="subscriptions.length">
    <div class="flex flex-col flex-1 p-6 bg-white rounded-lg shadow" v-for="(subscription, i) in subscriptions" :key="i">
      <div class="flex space-x-3">
        <div class="font-medium">{{ subscription.title }}</div>
        <BaseBadge v-if="subscription.legacy" text="Legacy" theme="grayOutline" />
        <BaseBadge v-if="!subscription.subscribed && subscription.trialAvailable" :text="`Free for ${subscription.trialDays} days`" theme="blue" />
      </div>
      <div class="mt-3">
        <span class="text-3xl font-semibold">${{ subscription.price }}</span>
        <span class="text-sm text-gray-500"> / {{ subscription.displayInterval }}</span>
      </div>
      <div class="mt-3 text-sm text-gray-500">{{ subscription.description }}</div>
      <div class="mt-auto space-y-1 pt-7">
        <div class="flex items-center space-x-2" v-for="(feature, i) in subscription.featuresIncluded" :key="i">
          <Check class="h-4 text-green-700" />
          <div class="text-sm text-gray-500">{{ feature }}</div>
        </div>
        <div class="flex items-center space-x-2" v-for="(feature, i) in subscription.featuresExcluded" :key="i">
          <Cross class="h-4 text-red-700" />
          <div class="text-sm text-gray-500">{{ feature }}</div>
        </div>
      </div>
      <div class="flex items-center space-x-3 mt-7">
        <BaseButton
          size="md"
          :text="subscription.ctaText"
          :theme="subscription.ctaTheme"
          @click="handleSubmit(subscription)"
          :disabled="subscription.subscribed"
          :loading="selectedSubscription === subscription.name"
        />
      </div>
    </div>
  </div>
  <BaseLoader v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cross from '@/icons/Cross.vue'
import Check from '@/icons/Check.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import useCreateSubscription from '@/composables/useCreateSubscription'
import subscriptionService, { SubscriptionExtended } from '@/services/api/services/subscriptionService'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
export default defineComponent({
  components: {
    Cross,
    Check,
    BaseButton,
    BaseLoader,
    BaseBadge
  },
  setup() {
    const createSubscription = useCreateSubscription()
    return { createSubscription }
  },
  created() {
    this.fetchSubscriptions()
  },
  data: () => ({
    subscriptions: [] as SubscriptionExtended[],
    selectedSubscription: null as string | null
  }),
  methods: {
    async fetchSubscriptions() {
      this.subscriptions = await subscriptionService.findAll()
    },
    async handleSubmit(subscription: SubscriptionExtended) {
      this.selectedSubscription = subscription.name
      await this.createSubscription(subscription)
    }
  }
})
</script>
