<template>
  <div class="overflow-hidden bg-white rounded-lg shadow">
    <div class="px-4 py-5 border-b border-gray-200 sm:p-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        {{ title }}
      </h3>
    </div>
    <dl>
      <div
        v-for="({ name, id }, i) in labels"
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        :class="[isOdd(i + 1) && 'bg-gray-50']"
        :key="id"
      >
        <dt class="text-sm font-medium leading-5 text-gray-500">
          {{ name }}
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <slot :name="id" />
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseList',
  props: {
    title: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: false
    }
  },
  methods: {
    isOdd(n: number) {
      return n % 2 === 1
    }
  }
})
</script>
