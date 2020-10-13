<template>
  <BaseCard>
    <div class="flex items-center">
      <div class="relative flex-shrink-0 w-20 h-20">
        <div
          class="flex-shrink-0 w-full h-full bg-center bg-cover rounded-md shadow-inner bg-gray-50"
          :style="{ backgroundImage: `url(${image})` }"
        />
      </div>
      <div class="ml-4">
        <div class="text-lg font-medium leading-5 text-gray-900">
          {{ title }}
        </div>
        <div class="mt-1 text-sm leading-5 text-gray-500">
          {{ subtitle }}
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script lang="ts">
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseButton',
  components: {
    BaseCard
  },
  props: {
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    }
  }
})
</script>
