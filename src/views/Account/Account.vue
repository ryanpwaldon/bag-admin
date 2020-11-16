<template>
  <BaseHeader />
  <PlanForm />
</template>

<script lang="ts">
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import PlanForm from '@/views/Account/components/PlanForm/PlanForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    BaseHeader,
    PlanForm
  }
})
</script>
