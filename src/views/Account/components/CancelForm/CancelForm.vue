<template>
  <BaseTerminateCard
    button-text="Cancel"
    title="Cancel subscription"
    button-confirmation-text="Confirm cancellation"
    description="If you have any questions, feel free to get in touch via the messenger."
    @terminate="handleCancellation"
  />
</template>

<script lang="ts">
import BaseTerminateCard from '@/components/BaseTerminateCard/BaseTerminateCard.vue'
import subscriptionService from '@/services/api/services/subscriptionService'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseTerminateCard
  },
  methods: {
    async handleCancellation() {
      const user = await subscriptionService.cancel()
      this.$store.commit('setUser', user)
      this.$router.push({ name: 'subscribe' })
    }
  }
})
</script>
