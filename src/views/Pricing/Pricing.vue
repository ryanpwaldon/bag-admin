<template>
  <div class="max-w-4xl px-4 m-auto mt-8 sm:px-6 lg:px-8">
    <router-link :to="{ name: 'account' }" class="text-gray-500">← Back</router-link>
    <div class="flex flex-col px-6 py-8 mt-8 overflow-hidden rounded-lg shadow bg-gradient-to-tr from-blue-700 to-blue-400">
      <h1 class="text-2xl font-semibold leading-8 text-white md:text-3xl">Pricing</h1>
    </div>
    <div class="mt-8">
      <BaseSubscriptions />
    </div>
    <button class="mt-8 text-sm text-gray-500 rounded focus:outline-none focus:ring-2 ring-blue-600" @click="openBeacon">
      Have any questions?
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBeacon from '@/composables/useBeacon'
import BaseSubscriptions from '@/components/BaseSubscriptions/BaseSubscriptions.vue'
export default defineComponent({
  components: {
    BaseSubscriptions
  },
  setup() {
    const { openBeacon } = useBeacon()
    return { openBeacon }
  }
})
</script>
