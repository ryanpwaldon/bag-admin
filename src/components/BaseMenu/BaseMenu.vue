<template>
  <Menu as="div" class="relative z-10 inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded shadow hover:bg-gray-50 focus:outline-none whitespace-nowrap"
      >
        {{ labelOverride || selectedOption?.label }}
        <ChevronDownIcon class="w-5 h-5 ml-2 -mr-1 text-gray-700" />
      </MenuButton>
    </div>
    <TransitionRoot
      enter="transform transition duration-100 ease-out"
      enter-from="scale-95 opacity-0"
      enter-to="scale-100 opacity-100"
      leave="transform transition duration-75 ease-in"
      leave-from="scale-100 opacity-100"
      leave-to="scale-95 opacity-0"
    >
      <MenuItems
        class="absolute w-56 mt-2 text-gray-800 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        :class="align === 'left' ? 'origin-top-left -left-1' : 'origin-top-right -right-1'"
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }" v-for="(option, i) of options" :key="i" type="button">
            <button
              type="button"
              @click="updateModelValue(option.value)"
              class="block w-full px-4 py-2 text-sm text-left focus:outline-none"
              :class="[modelValue === option.value && 'font-medium', active && 'bg-gray-100']"
            >
              {{ option.label }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </TransitionRoot>
  </Menu>
</template>

<script lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { computed, defineComponent, PropType } from '@vue/runtime-core'
import { Menu, MenuButton, MenuItem, MenuItems, TransitionRoot } from '@headlessui/vue'

export interface MenuOption {
  label: string
  value: string
}

export default defineComponent({
  components: {
    Menu,
    MenuItem,
    MenuItems,
    MenuButton,
    TransitionRoot,
    ChevronDownIcon
  },
  props: {
    align: {
      type: String as PropType<'left' | 'right'>,
      default: 'left'
    },
    labelOverride: {
      type: String,
      required: false
    },
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array as PropType<MenuOption[]>,
      required: true
    }
  },
  setup(props, { emit }) {
    const updateModelValue = (value: string) => {
      if (props.modelValue === value) emit('onActiveOptionClick')
      else emit('update:modelValue', value)
    }
    const selectedOption = computed(() => props.options.find(option => option.value === props.modelValue))
    return { selectedOption, updateModelValue }
  }
})
</script>
