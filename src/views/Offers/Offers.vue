<template>
  <BaseHeader>
    <template #actions>
      <router-link to="/offers/create">
        <BaseButton text="Create" />
      </router-link>
    </template>
  </BaseHeader>
  <BaseTabs :links="links" class="mb-8" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseTabs, { Link } from '@/components/BaseTabs/BaseTabs.vue'

const links: Link[] = [
  { title: 'Cross sells', name: 'cross-sells' },
  { title: 'Progress bars', name: 'progress-bars' },
  { title: 'Up sells', name: 'up-sells' },
  { title: 'Discounts', name: 'discounts' }
]

export default defineComponent({
  name: 'Offers',
  components: {
    BaseHeader,
    BaseButton,
    BaseTabs
  },
  setup() {
    return { links }
  }
})
</script>
