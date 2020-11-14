<template>
  <BaseHeader />
  <BaseCard />
</template>

<script lang="ts">
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseHeader,
    BaseCard
  }
})
</script>
