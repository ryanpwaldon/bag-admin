<template>
  <div class="flex flex-col items-center w-full text-center">
    <Logo class="h-7" />
    <div class="flex flex-col w-full p-6 mt-8 bg-white rounded-md shadow">
      <p class="text-lg font-medium text-gray-800">Error</p>
      <p class="mt-2 text-sm text-gray-500">{{ message }}</p>
    </div>
    <button class="mt-8 text-sm text-gray-500 focus:outline-none" @click="openBeacon">
      Need help?
    </button>
  </div>
</template>

<script lang="ts">
import useBeacon from '@/composables/useBeacon'
import Logo from '@/icons/Logo.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Logo },
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup() {
    const { openBeacon } = useBeacon()
    return { openBeacon }
  }
})
</script>
