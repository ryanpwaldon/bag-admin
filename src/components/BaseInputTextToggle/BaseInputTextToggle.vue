<template>
  <div class="grid grid-flow-col grid-cols-2 gap-1 p-1 bg-white rounded-md shadow group">
    <button
      :key="option.value"
      v-for="option in options"
      @click="updateModelValue(option)"
      :tabindex="active(option) ? '0' : '-1'"
      class="flex rounded-md focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100"
    >
      <span
        class="p-1.5 lg:pl-2.5 lg:pr-3.5 rounded flex items-center text-sm font-medium space-x-2 w-full text-center justify-center"
        :class="active(option) && 'bg-gray-100'"
      >
        <span :class="active(option) ? 'text-gray-800' : 'text-gray-500 group-hover:text-gray-800'">{{ option.label }}</span>
        <BaseBadge v-if="option.badge" :text="option.badge" shape="sm-rounded" theme="blue" />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'

interface TextToggleOption {
  value: unknown
  label: string
  badge?: string
}

export default defineComponent({
  components: { BaseBadge },
  props: {
    options: {
      type: Array as PropType<TextToggleOption[]>,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  methods: {
    active(option: TextToggleOption) {
      return option.value === this.modelValue
    },
    updateModelValue(option: TextToggleOption) {
      this.$emit('update:modelValue', option.value)
    }
  }
})
</script>
