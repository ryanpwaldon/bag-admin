<template>
  <transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    mode="out-in"
  >
    <BaseSpinner class="w-6 h-6 m-auto" v-if="loading" />
    <div class="flex flex-col items-center text-center" v-else>
      <Lightning class="w-6 m-auto transform -rotate-3" />
      <h3 class="mt-8 text-lg font-medium text-gray-800">Upgrade to premium</h3>
      <p class="mt-1 text-sm text-gray-500">
        {{ primaryCopy }}
      </p>
      <BaseInputTextToggle class="w-full mt-8" v-model="selectedSubscription" :options="subscriptionOptions" />
      <template v-for="(subscription, i) in subscriptions" :key="i">
        <BasePlanCard
          class="w-full mt-6"
          :price="subscription.price"
          :title="subscription.title"
          :description="subscription.description"
          v-if="subscription === selectedSubscription"
          :interval="subscription.interval === Interval.Monthly ? 'month' : 'year'"
        />
      </template>
      <BaseButton
        size="md"
        theme="black"
        class="w-full mt-6"
        :loading="submitting"
        @click="handleSubmit"
        :disabled="!selectedSubscription"
        :text="ctaCopy"
      />
      <BaseButton size="md" theme="white" class="w-full mt-3" @click="$router.back()" text="No thanks" />
      <p class="mt-8 text-sm text-gray-500">
        <button class="focus:outline-none" @click="openBeacon">Need help?</button>
      </p>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBeacon from '@/composables/useBeacon'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BasePlanCard from '@/components/BasePlanCard/BasePlanCard.vue'
import useCreateSubscription from '@/composables/useCreateSubscription'
import subscriptionService, { Interval, Subscription } from '@/services/api/services/subscriptionService'
import BaseInputTextToggle, { TextToggleOption } from '@/components/BaseInputTextToggle/BaseInputTextToggle.vue'
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
import Lightning from '@/icons/Lightning.vue'
export default defineComponent({
  components: {
    BaseButton,
    BasePlanCard,
    BaseInputTextToggle,
    BaseSpinner,
    Lightning
  },
  setup() {
    const { openBeacon } = useBeacon()
    const createSubscription = useCreateSubscription()
    return { createSubscription, openBeacon, Interval }
  },
  async created() {
    this.subscriptions = await this.fetchAvailableSubscriptionPair()
    const [monthlySubscription, yearlySubscription] = this.subscriptions
    this.subscriptionOptions = [
      { label: 'Monthly', value: monthlySubscription },
      { label: 'Yearly', value: yearlySubscription, badge: 'Save 16%' }
    ]
    this.selectedSubscription = this.subscriptionOptions[0].value as Subscription
    this.loading = false
  },
  data: () => ({
    loading: true,
    submitting: false,
    subscriptions: [] as Subscription[],
    subscriptionOptions: [] as TextToggleOption[],
    selectedSubscription: null as Subscription | null
  }),
  computed: {
    primaryCopy(): string {
      return this.$store.state.user?.prevSubscriptions.length
        ? 'Upgrade to create unlimited cross sells, progress bars, and gain access to more features coming soon.'
        : 'Upgrade to create unlimited cross sells, progress bars, and gain access to more features coming soon.'
    },
    ctaCopy(): string {
      return this.$store.state.user?.prevSubscriptions.length ? 'Continue →' : 'Start free trial →'
    }
  },
  methods: {
    fetchAvailableSubscriptionPair() {
      return subscriptionService.findSuitableSubscriptionPair()
    },
    async handleSubmit() {
      if (this.selectedSubscription) {
        this.submitting = true
        await this.createSubscription(this.selectedSubscription.name, false)
      }
    }
  }
})
</script>
