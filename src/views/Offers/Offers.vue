<template>
  <BaseLayout>
    <BaseHeader>
      <template #actions>
        <router-link to="/offers/create">
          <BaseButton text="Create" />
        </router-link>
      </template>
    </BaseHeader>
    <router-view />
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseLayout,
    BaseHeader,
    BaseButton
  }
})
</script>
