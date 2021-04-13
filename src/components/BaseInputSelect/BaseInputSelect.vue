<template>
  <Listbox as="div" class="relative" v-model="selectedOption" :disabled="disabled" v-slot="{ disabled }">
    <ListboxButton
      class="flex justify-between w-full px-3 py-2 space-x-1 text-sm text-left border border-gray-300 rounded-md shadow-sm focus:outline-none hover:bg-gray-50"
      :class="disabled && 'text-gray-400 bg-gray-50 cursor-default'"
    >
      <span class="overflow-hidden truncate">{{ selectedOption.label }}</span>
      <ChevronDown class="flex-shrink-0 text-gray-400" />
    </ListboxButton>
    <ListboxOptions class="absolute left-0 z-10 min-w-full mt-1 w-80 focus:outline-none top-full">
      <div class="w-full py-1 bg-white border border-gray-200 rounded-md shadow-lg">
        <ListboxOption
          :key="i"
          :value="option"
          v-for="(option, i) in options"
          class="px-3 py-2 text-sm cursor-pointer focus:outline-none hover:bg-gray-100"
          v-slot="{ selected }"
        >
          <p :class="selected && 'font-medium'">{{ option.label }}</p>
          <p v-if="option.description" class="w-full mt-1 text-xs text-gray-500">{{ option.description }}</p>
        </ListboxOption>
      </div>
      <div class="w-full h-6" />
    </ListboxOptions>
  </Listbox>
</template>

<script lang="ts">
import { computed, PropType } from 'vue'
import { defineComponent } from 'vue'
import ChevronDown from '@/icons/ChevronDown.vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

interface InputSelectOption {
  value: string | boolean
  label: string
  description?: string
}

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Boolean],
      required: true
    },
    options: {
      type: Array as PropType<InputSelectOption[]>,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    ChevronDown
  },
  setup(props, { emit }) {
    const selectedOption = computed({
      get: () => props.options.find(option => option.value === props.modelValue) || props.options[0],
      set: (option: InputSelectOption) => emit('update:modelValue', option.value)
    })
    return { selectedOption }
  }
})
</script>
