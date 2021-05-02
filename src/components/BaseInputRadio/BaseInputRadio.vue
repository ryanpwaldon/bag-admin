<template>
  <fieldset>
    <div class="grid gap-4">
      <div class="grid" v-if="title || description">
        <legend class="text-base font-medium leading-6 text-gray-900" v-if="title">{{ title }}</legend>
        <p class="max-w-xl text-sm leading-5 text-gray-500" v-if="description">{{ description }}</p>
      </div>
      <div class="grid gap-4">
        <div class="flex items-center" v-for="(option, i) in options" :key="i">
          <input
            class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
            type="radio"
            :name="name"
            :id="option.value"
            :value="option.value"
            :checked="modelValue === option.value"
            @input="$emit('update:modelValue', $event.target.value)"
          />
          <label :for="option.value" class="ml-3">
            <span class="block text-sm font-medium leading-5 text-gray-800">{{ option.label }}</span>
          </label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface RadioOption {
  label: string
  value: string
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    modelValue: {
      type: String,
      required: false
    },
    options: {
      type: Array as PropType<RadioOption[]>,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
})
</script>
