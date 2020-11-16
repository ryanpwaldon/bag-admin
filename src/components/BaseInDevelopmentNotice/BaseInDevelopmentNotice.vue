<template>
  <BaseGridCard>
    <div class="flex flex-col items-center justify-center h-44">
      <img class="h-10" src="@/assets/img/construction.png" />
      <p class="mt-2 text-base font-medium leading-6 text-gray-700">Stay tuned</p>
      <p class="mt-1 text-sm leading-5 text-gray-500">This feature is currently in development</p>
    </div>
  </BaseGridCard>
</template>

<script lang="ts">
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { BaseGridCard }
})
</script>
