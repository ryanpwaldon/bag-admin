<template>
  <div>
    <label :for="name" class="block text-base font-medium leading-6 text-gray-700">{{ label }}</label>
    <p class="max-w-xl text-sm" :class="[errorMessage ? 'text-red-600' : 'text-gray-500']" v-if="errorMessage || description">
      {{ errorMessage || description }}
    </p>
    <span
      @click="handleChange(!value)"
      role="checkbox"
      tabindex="0"
      :aria-checked="value"
      class="relative inline-flex flex-shrink-0 h-6 mt-3 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
      :class="[value ? 'bg-blue-600' : 'bg-gray-200']"
    >
      <span
        aria-hidden="true"
        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow"
        :class="[value ? 'translate-x-5' : 'translate-x-0']"
      ></span>
    </span>
  </div>
</template>

<script lang="ts">
import { useField } from 'vee-validate'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseInputToggle',
  props: {
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
      required: true
    },
    initialValue: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const { value, errorMessage, handleChange } = (useField as Function)(props.name, props.rules as string, { initialValue: props.initialValue })
    return { value, errorMessage, handleChange }
  }
})
</script>
