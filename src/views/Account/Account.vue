<template>
  <BaseHeader />
  <TrialCountdown />
  <PlanForm class="mt-8" />
</template>

<script lang="ts">
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import PlanForm from '@/views/Account/components/PlanForm/PlanForm.vue'
import TrialCountdown from '@/views/Account/components/TrialCountdown/TrialCountdown.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PlanForm,
    BaseHeader,
    TrialCountdown
  }
})
</script>
