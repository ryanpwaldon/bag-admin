<template>
  <div class="max-w-2xl px-4 m-auto mt-16 sm:px-6 lg:px-8">
    <Logo class="h-5" />
    <h1 class="mt-8 text-2xl font-semibold leading-8 md:text-3xl">Welcome!</h1>
    <p class="mt-2 text-base leading-6 text-gray-500 md:text-lg">We’re so excited to have you on board.<br />Select a plan to get started.</p>
    <div class="mt-10">
      <div class="flex space-x-6" v-if="subscriptions.length">
        <div class="flex-1 p-6 bg-white rounded-lg shadow" v-for="(subscription, i) in subscriptions" :key="i">
          <div class="font-medium">{{ subscription.title }}</div>
          <div class="mt-3">
            <span class="text-3xl font-semibold">${{ subscription.price }}</span>
            <span class="text-sm text-gray-500"> / {{ convertInterval(subscription.interval) }}</span>
          </div>
          <div class="mt-3 text-sm text-gray-500">{{ subscription.description }}</div>
          <div class="space-y-1 mt-7">
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
              :loading="selectedSubscription === subscription.name"
            />
            <p class="text-sm text-gray-500" v-if="subscription.trialDays">Free for {{ subscription.trialDays }} days</p>
          </div>
        </div>
      </div>
      <BaseLoader v-else />
    </div>
    <button class="mt-10 text-sm text-gray-500 rounded focus:outline-none focus:ring-2 ring-blue-600">
      Need some help?
    </button>
  </div>
</template>

<script lang="ts">
import Logo from '@/icons/Logo.vue'
import Check from '@/icons/Check.vue'
import Cross from '@/icons/Cross.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import subscriptionService, { Interval, Subscription } from '@/services/api/services/subscriptionService'
import { defineComponent } from 'vue'
import useCreateSubscription from '@/composables/useCreateSubscription'
export default defineComponent({
  components: {
    Logo,
    Cross,
    Check,
    BaseButton,
    BaseLoader
  },
  setup() {
    return useCreateSubscription()
  },
  created() {
    this.fetchSubscriptions()
  },
  data: () => ({
    subscriptions: [] as Subscription[],
    selectedSubscription: null as string | null
  }),
  methods: {
    async fetchSubscriptions() {
      this.subscriptions = await subscriptionService.findAll()
    },
    convertInterval(interval: Interval) {
      return interval === Interval.Monthly ? 'month' : 'year'
    },
    handleSubmit(subscription: Subscription) {
      this.selectedSubscription = subscription.name
      if (subscription.price === 0) this.createFreeSubscription(subscription.name)
      else this.createPaidSubscription(subscription.name)
    }
  }
})
</script>
