<template>
  <nav class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
    <div class="hidden sm:block">
      <p class="text-sm leading-5 text-gray-700">
        Showing
        <span class="font-medium">{{ first }}</span>
        to
        <span class="font-medium">{{ last }}</span>
        of
        <span class="font-medium">{{ total }}</span>
        results
      </p>
    </div>
    <div class="flex justify-between flex-1 sm:justify-end sm:grid sm:gap-3 sm:grid-flow-col">
      <BaseButton text="Previous" theme="white" :disabled="!hasPrevPage" @click="$emit('update:page', page - 1)" />
      <BaseButton text="Next" theme="white" :disabled="!hasNextPage" @click="$emit('update:page', page + 1)" />
    </div>
  </nav>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseButton
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      required: true
    },
    pages: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  computed: {
    first(): number {
      return this.limit * (this.page - 1) + 1
    },
    last(): number {
      return Math.min(this.limit * this.page, this.total)
    },
    hasPrevPage(): boolean {
      return this.page > 1
    },
    hasNextPage(): boolean {
      return this.page < Math.ceil(this.total / this.limit)
    }
  }
})
</script>
