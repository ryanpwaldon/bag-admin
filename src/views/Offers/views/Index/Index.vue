<template>
  <BaseHeading>
    <template #actions>
      <router-link to="/offers/create">
        <BaseButton text="Create" />
      </router-link>
    </template>
  </BaseHeading>
  <div class="border-4 border-gray-200 border-dashed rounded-lg h-96" />
</template>

<script lang="ts">
import BaseHeading from '@/components/BaseHeading/BaseHeading.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseHeading,
    BaseButton
  }
})
</script>
