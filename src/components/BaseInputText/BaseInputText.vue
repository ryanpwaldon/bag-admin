<template>
  <div>
    <label :for="name" class="block text-sm font-medium leading-5 text-gray-700">{{ label }}</label>
    <div class="relative mt-1 rounded-md shadow-sm">
      <input
        :id="name"
        :type="type"
        class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
        :class="[errorMessage && 'pr-10 text-red-900 placeholder-red-300 border-red-300 focus:border-red-300 focus:shadow-outline-red']"
        :placeholder="placeholder"
        :value="value"
        @input="handleChange"
      />
      <div v-if="errorMessage" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p class="mt-2 text-sm" :class="[errorMessage ? 'text-red-600' : 'text-gray-500']" v-if="errorMessage || description">
      {{ errorMessage || description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useField } from 'vee-validate'
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    initialValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    rules: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { value, errorMessage, handleChange } = (useField as Function)(props.name, props.rules as string, { initialValue: props.initialValue })
    return { value, errorMessage, handleChange }
  }
})
</script>
