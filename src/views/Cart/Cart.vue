<template>
  <BaseLayout>
    <BaseHeader>
      <template #actions>
        <router-link to="/offers/create">
          <BaseButton text="Preview" />
        </router-link>
      </template>
    </BaseHeader>
    <div class="border-4 border-gray-200 border-dashed rounded-lg h-96" />
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Cart',
  components: {
    BaseLayout,
    BaseHeader,
    BaseButton
  }
})
</script>
