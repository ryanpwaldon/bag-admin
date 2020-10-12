<template>
  <BaseLayout>
    <BaseHeading>
      <template #actions>
        <router-link :to="{ name: 'offer-edit' }">
          <BaseButton text="Edit" />
        </router-link>
      </template>
    </BaseHeading>
    <div class="border-4 border-gray-200 border-dashed rounded-lg h-96" />
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeading from '@/components/BaseHeading/BaseHeading.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Offer',
  components: {
    BaseLayout,
    BaseHeading,
    BaseButton
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log(this.id)
  }
})
</script>
