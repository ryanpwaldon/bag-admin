<template>
  <span
    class="relative inline-flex rounded-md select-none whitespace-nowrap"
    :class="[containerClasses, (loading || disabled) && 'pointer-events-none']"
  >
    <button :type="type" :class="[buttonClasses]" class="relative w-full transition duration-150 ease-in-out border focus:outline-none">
      <BaseSpinner
        v-if="loading"
        :primary-color="loaderPrimaryColor"
        :secondary-color="loaderSecondaryColor"
        class="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
      />
      <span :class="loading && 'opacity-0'">{{ text }}</span>
    </button>
  </span>
</template>

<script lang="ts">
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
import { defineComponent, PropType } from 'vue'

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Themes = 'white' | 'black' | 'blue' | 'red' | 'lightBlue'
type Classes<T extends string> = { [K in T]: string }

export default defineComponent({
  components: {
    BaseSpinner
  },
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String as PropType<Sizes>,
      default: 'sm'
    },
    theme: {
      type: String as PropType<Themes>,
      default: 'blue'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    loaderPrimaryColor(): string {
      return {
        blue: 'text-white opacity-50',
        lightBlue: 'text-white',
        white: 'text-white',
        black: 'text-gray-600',
        red: 'text-white'
      }[this.theme]
    },
    loaderSecondaryColor(): string {
      return {
        blue: 'text-white',
        lightBlue: 'text-white',
        white: 'text-white',
        black: 'text-white',
        red: 'text-white'
      }[this.theme]
    },
    // prettier-ignore
    containerClasses(): string {
      const sizeClasses: Classes<Sizes> = { xs: '', sm: '', md: '', lg: '', xl: '' }
      const themeClasses: Classes<Themes> = { 
        blue: 'shadow-sm',
        lightBlue: 'shadow-sm',
        white: 'shadow',
        black: 'shadow-sm',
        red: 'shadow-sm',
       }
      return `${sizeClasses[this.size]} ${themeClasses[this.theme]}`
    },
    // prettier-ignore
    buttonClasses(): string {
      const sizeClasses: Classes<Sizes> = {
        xs: 'rounded px-2.5 py-1.5 text-xs font-medium leading-4',
        sm: 'rounded-md px-3 py-2 text-sm font-medium leading-4',
        md: 'rounded-md px-4 py-2 text-sm font-medium leading-5',
        lg: 'rounded-md px-4 py-2 text-base font-medium leading-6',
        xl: 'rounded-md px-6 py-3 text-base font-medium leading-6'
      }
      const themeBaseClasses: Classes<Themes> = {
        blue: 'text-white border-transparent',
        lightBlue: 'text-blue-700 border-blue-200 ',
        white: 'text-gray-800 border-transparent',
        black: 'text-white border-transparent',
        red: 'text-white border-transparent'
      }
      const themeDefaultClasses: Classes<Themes> = {
        blue: 'bg-blue-600 hover:bg-blue-500 focus-visible:ring-2 ring-offset-2 ring-offset ring-blue-500',
        lightBlue: 'bg-blue-50 hover:bg-blue-100 focus-visible:ring-2 ring-offset-2 ring-offset ring-blue-500',
        white: 'bg-white active:text-gray-800 active:bg-gray-50 hover:bg-gray-50 focus-visible:ring-2 ring-offset-2 ring-offset ring-blue-500',
        black: 'bg-gray-800 hover:bg-gray-700',
        red: 'bg-red-600 hover:bg-red-500 focus-visible:border-red-700 focus-visible:shadow-outline-red'
      }
      const themeDisabledClasses: Classes<Themes> = {
        blue: 'bg-blue-300',
        lightBlue: 'bg-blue-50',
        white: 'opacity-50',
        black: 'bg-gray-700',
        red: 'bg-red-500'
      }
      return `${sizeClasses[this.size]} ${themeBaseClasses[this.theme]} ${this.loading || this.disabled ? themeDisabledClasses[this.theme] : themeDefaultClasses[this.theme]}`
    }
  }
})
</script>
