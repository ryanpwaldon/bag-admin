<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                  v-for="{ name, id } in props"
                  :key="id"
                >
                  {{ name }}
                </th>
              </tr>
            </thead>
            <tbody v-if="loading" class="bg-white divide-y divide-gray-200">
              <tr v-for="n in 3" :key="n">
                <td v-for="i in props.length" :key="i" class="px-6 py-4 whitespace-no-wrap">
                  <div class="w-full h-4 bg-gray-100 rounded-full animate-pulse" />
                </td>
              </tr>
            </tbody>
            <tbody v-else class="bg-white divide-y divide-gray-200">
              <tr
                :key="i"
                v-for="(item, i) in items"
                :class="[handleSelection && 'cursor-pointer', 'hover:bg-gray-50']"
                @click="handleSelection && handleSelection(item)"
              >
                <td v-for="{ id } in props" :key="id" class="px-6 py-4 whitespace-no-wrap">
                  <slot :name="id" :item="item" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <slot name="pagination" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Prop {
  id: string
  name: string
}

export default defineComponent({
  props: {
    props: {
      type: Array as PropType<Prop[]>,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    },
    handleSelection: {
      type: Function,
      required: false
    },
    loading: {
      type: Boolean,
      required: false
    }
  }
})
</script>
