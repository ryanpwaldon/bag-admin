<template>
  <fieldset>
    <legend class="sr-only">
      {{ label }}
    </legend>
    <ul class="relative -space-y-px bg-white rounded-md">
      <li v-for="(option, i) in options" :key="i">
        <div
          :class="[
            i === 0 && 'rounded-tl-md rounded-tr-md',
            i === options.length - 1 && 'rounded-bl-md rounded-br-md',
            modelValue === option.value ? 'bg-blue-50 border-blue-200 z-10' : 'border-gray-200'
          ]"
          class="relative flex flex-col p-4 border md:pl-4 md:pr-6 md:grid md:grid-cols-3"
        >
          <label class="flex items-center space-x-3 text-sm leading-5 cursor-pointer">
            <input
              :name="name"
              type="radio"
              :checked="modelValue === option.value"
              @input="$emit('update:modelValue', option.value)"
              class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out cursor-pointer form-radio"
            />
            <span class="font-medium text-gray-900">{{ option.label }}</span>
          </label>
          <p class="pl-1 ml-6 text-sm leading-5 md:ml-0 md:pl-0 md:text-center">
            <span :class="modelValue === option.value ? 'text-blue-900' : 'text-gray-900'" class="font-medium">{{ option.meta1 }}</span>
            <span :class="modelValue === option.value ? 'text-blue-700' : 'text-gray-500'" v-if="option.col3">{{ option.meta2 }}</span>
          </p>
          <p
            :class="modelValue === option.value ? 'text-blue-700' : 'text-gray-500'"
            class="pl-1 ml-6 text-sm leading-5 md:ml-0 md:pl-0 md:text-right"
          >
            {{ option.meta3 }}
          </p>
        </div>
      </li>
    </ul>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type RadioGroupOption = {
  value: string
  label: string
  meta1: string
  meta2?: string
  meta3: string
}

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array as PropType<RadioGroupOption[]>,
      required: true
    }
  }
})
</script>
