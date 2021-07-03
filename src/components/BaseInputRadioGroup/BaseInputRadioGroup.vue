<template>
  <fieldset>
    <legend class="sr-only">
      {{ name }}
    </legend>
    <div class="-space-y-px bg-white rounded-md">
      <template v-for="(option, i) in options" :key="i">
        <div
          :class="[
            'relative flex p-4 border',
            option.disabled && 'pointer-events-none bg-gray-50',
            i === 0 && 'rounded-tl-md rounded-tr-md',
            i === options.length - 1 && 'rounded-bl-md rounded-br-md',
            modelValue === option.value ? 'bg-blue-50 border-blue-200 z-10' : 'border-gray-200'
          ]"
        >
          <div class="flex items-center h-5">
            <input
              type="radio"
              :name="name"
              :disabled="option.disabled"
              :id="`settings-option-${i}`"
              :checked="modelValue === option.value"
              @input="$emit('update:modelValue', option.value)"
              class="w-4 h-4 text-blue-600 border-gray-300 cursor-pointer focus:ring-blue-500"
              :class="option.disabled && 'bg-gray-100'"
            />
          </div>
          <label :for="`settings-option-${i}`" class="w-full ml-3 cursor-pointer">
            <slot :name="option.value" />
          </label>
        </div>
      </template>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type RadioGroupOption = {
  value: string
  disabled: boolean
}

export default defineComponent({
  props: {
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
