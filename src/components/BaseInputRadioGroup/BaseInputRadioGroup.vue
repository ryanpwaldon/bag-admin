<template>
  <fieldset>
    <legend class="sr-only">
      {{ label }}
    </legend>
    <ul class="relative -space-y-px bg-white rounded-md">
      <li v-for="({ value, label, meta1, meta2, meta3, disabled }, i) in options" :key="i">
        <div
          :class="[
            i === 0 && 'rounded-tl-md rounded-tr-md',
            i === options.length - 1 && 'rounded-bl-md rounded-br-md',
            modelValue === value ? 'bg-blue-50 border-blue-200 z-10' : 'border-gray-200',
            disabled && 'pointer-events-none'
          ]"
          class="relative flex flex-col p-4 border cursor-default select-none md:pl-4 md:pr-6 md:grid md:grid-cols-3"
          @click="$emit('update:modelValue', value)"
        >
          <label class="flex items-center space-x-3 text-sm leading-5">
            <input
              :name="name"
              type="radio"
              :checked="modelValue === value"
              @input="$emit('update:modelValue', value)"
              class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
              :disabled="disabled"
            />
            <span :class="disabled ? 'text-gray-500' : 'text-gray-900'" class="font-medium">
              {{ label }}
              <BaseBadge v-if="disabled" text="Coming soon" class="ml-1" theme="lightGray" />
            </span>
          </label>
          <p class="pl-1 ml-6 text-sm leading-5 md:ml-0 md:pl-0 md:text-center" v-if="meta1 || meta2">
            <span :class="disabled ? 'text-gray-400' : modelValue === value ? 'text-blue-900' : 'text-gray-900'" class="font-medium" v-if="meta1">
              {{ meta1 }}
            </span>
            <span :class="disabled ? 'text-gray-400' : modelValue === value ? 'text-blue-700' : 'text-gray-500'" v-if="meta2">
              {{ meta2 }}
            </span>
          </p>
          <p
            v-if="meta3"
            class="pl-1 ml-6 text-sm leading-5 md:ml-0 md:pl-0 md:text-right"
            :class="[disabled ? 'text-gray-400' : modelValue === value ? 'text-blue-700' : 'text-gray-500', meta1 || meta2 ? '' : 'col-span-2']"
          >
            {{ meta3 }}
          </p>
        </div>
      </li>
    </ul>
  </fieldset>
</template>

<script lang="ts">
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
import { defineComponent, PropType } from 'vue'

export type RadioGroupOption = {
  value: string
  label: string
  meta1?: string
  meta2?: string
  meta3?: string
  disabled?: boolean
}

export default defineComponent({
  components: { BaseBadge },
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
