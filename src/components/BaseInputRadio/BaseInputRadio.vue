<template>
  <fieldset>
    <div class="grid gap-4">
      <div class="grid" v-if="title || description">
        <legend class="text-base font-medium leading-6 text-gray-900" v-if="title">{{ title }}</legend>
        <p class="max-w-xl text-sm leading-5 text-gray-500" v-if="description">{{ description }}</p>
      </div>
      <div class="grid gap-4">
        <div class="flex items-center" v-for="(field, i) in fields" :key="i">
          <input
            class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
            :name="name"
            :id="field.value"
            :value="field.value"
            type="radio"
            :checked="value === field.value"
            @input="handleChange"
          />
          <label :for="field.value" class="ml-3">
            <span class="block text-sm font-medium leading-5 text-gray-700">{{ field.label }}</span>
          </label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { useField } from 'vee-validate'
import { defineComponent, PropType } from 'vue'

interface Field {
  label: string
  value: string
}

export default defineComponent({
  props: {
    initialValue: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    fields: {
      type: Array as PropType<Field[]>,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { value, errorMessage, handleChange } = (useField as Function)(props.name, undefined, { initialValue: props.initialValue })
    return { value, errorMessage, handleChange }
  }
})
</script>
