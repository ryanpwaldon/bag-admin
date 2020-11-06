<template>
  <BaseHeader>
    <template #actions>
      <router-link to="/offers/create">
        <BaseButton text="Create" />
      </router-link>
    </template>
  </BaseHeader>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseHeader,
    BaseButton
  }
})
</script>
