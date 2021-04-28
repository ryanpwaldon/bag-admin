<template>
  <div class="grid items-center justify-center w-screen h-screen">
    <div class="flex flex-col items-center max-w-xs py-16 text-center">
      <Logo class="h-7" />
      <h3 class="mt-8 text-lg font-medium text-gray-800">Welcome</h3>
      <p class="mt-1 text-sm text-gray-500">
        We’ve selected a suitable plan based on the size of your store. Select monthly, or yearly billing to start your free trial.
      </p>
      <BaseInputTextToggle class="w-full mt-8" v-model="selectedBillingPeriod" :options="billingPeriods" />
      <BasePlanCard
        price="28"
        interval="month"
        class="w-full mt-6"
        title="Medium store"
        description="For stores processing<br />$10K – $50K sales per month."
      />
      <BaseButton class="w-full mt-6" text="Start your 30 day free trial →" theme="black" />
      <button class="mt-8 text-sm text-gray-500 focus:outline-none" @click="openBeacon">
        Need help?
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store/store'
import Logo from '@/icons/Logo.vue'
import router from '@/router/router'
import { defineComponent, ref } from 'vue'
import useBeacon from '@/composables/useBeacon'
import BaseInputTextToggle from '@/components/BaseInputTextToggle/BaseInputTextToggle.vue'
import BasePlanCard from '@/components/BasePlanCard/BasePlanCard.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
export default defineComponent({
  components: {
    Logo,
    BaseButton,
    BasePlanCard,
    BaseInputTextToggle
  },
  beforeRouteEnter() {
    if (store.state.user?.subscription) router.push({ name: 'home' })
  },
  setup() {
    const { openBeacon } = useBeacon()
    const billingPeriods = [
      { label: 'Monthly', value: 'monthly' },
      { label: 'Yearly', value: 'yearly', badge: 'Save 16%' }
    ]
    const selectedBillingPeriod = ref(billingPeriods[0].value)
    return { openBeacon, billingPeriods, selectedBillingPeriod }
  }
})
</script>
