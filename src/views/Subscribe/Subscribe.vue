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
      <Logo class="h-7" />
      <h3 class="mt-8 text-lg font-medium text-gray-800">Welcome</h3>
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
      <p class="mt-8 text-sm text-gray-500">
        <button class="focus:outline-none" @click="openBeacon">Need help?</button>
        <span> · </span>
        <router-link class="focus:outline-none" :to="{ name: 'coupon' }">Have a code?</router-link>
      </p>
    </div>
  </transition>
</template>

<script lang="ts">
import store from '@/store/store'
import Logo from '@/icons/Logo.vue'
import router from '@/router/router'
import { defineComponent } from 'vue'
import useBeacon from '@/composables/useBeacon'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BasePlanCard from '@/components/BasePlanCard/BasePlanCard.vue'
import useCreateSubscription from '@/composables/useCreateSubscription'
import subscriptionService, { Interval, Subscription } from '@/services/api/services/subscriptionService'
import BaseInputTextToggle, { TextToggleOption } from '@/components/BaseInputTextToggle/BaseInputTextToggle.vue'
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
export default defineComponent({
  components: {
    Logo,
    BaseButton,
    BasePlanCard,
    BaseInputTextToggle,
    BaseSpinner
  },
  beforeRouteEnter() {
    if (store.state.user?.subscription) router.push({ name: 'home' })
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
        ? 'We’ve selected a suitable plan based on the size of your store. Select monthly, or yearly billing to continue.'
        : 'We’ve selected a suitable plan based on the size of your store. Select monthly, or yearly billing to start your free trial.'
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
