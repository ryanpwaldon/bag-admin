<template>
  <BaseGridCard>
    <template #header>
      <h3 class="text-lg font-medium text-gray-800">Plan</h3>
    </template>
    <p class="text-sm font-medium text-gray-500">Your current plan</p>
    <p class="mt-1 text-sm text-gray-800">{{ title }}, ${{ price }} / {{ convertShopifyInterval(interval) }}</p>
    <!-- <router-link :to="{ name: 'plans' }" class="inline-block mt-5 text-sm font-medium text-blue-600">View all plans →</router-link> -->
    <router-link :to="{ name: 'subscribe' }" class="inline-block mt-5 text-sm font-medium text-blue-600">Upgrade to premium →</router-link>
  </BaseGridCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import convertShopifyInterval from '@/utils/convertShopifyInterval'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import { Interval } from '@/services/api/services/subscriptionService'

export default defineComponent({
  components: {
    BaseGridCard
  },
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: [Number, String],
      required: true
    },
    interval: {
      type: String as PropType<Interval>,
      required: true
    }
  },
  setup() {
    return { convertShopifyInterval }
  }
})
</script>
