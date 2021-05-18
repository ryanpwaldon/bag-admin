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
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Clock
  },
  props: {
    trialDays: {
      type: Number,
      required: true
    },
    subscriptionStart: {
      type: String,
      required: true
    }
  },
  created() {
    const subscribedDays = this.$dayjs().diff(this.$dayjs(this.subscriptionStart), 'day')
    this.trialDaysRemaining = this.trialDays - subscribedDays > 0 ? this.trialDays - subscribedDays : 0
  },
  data: () => ({
    trialDaysRemaining: 0
  })
})
</script>
