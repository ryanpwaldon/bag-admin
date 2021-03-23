<template>
  <BaseTask
    :loading="loading"
    :complete="total >= 1"
    title="Create a progress bar"
    description="Encourage customers to spend more with your first progress bar."
  >
    <router-link :to="{ name: 'create-progress-bar' }">
      <BaseButton text="Create →" />
    </router-link>
  </BaseTask>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseTask from '@/components/BaseTask/BaseTask.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import progressBarService from '@/services/api/services/progressBarService'
export default defineComponent({
  components: { BaseTask, BaseButton },
  setup() {
    const loading = ref(true)
    const total = ref(0 as number)
    const fetchCart = async () => {
      loading.value = true
      total.value = (await progressBarService.findAll({ page: 1, limit: 1 })).total
      loading.value = false
    }
    fetchCart()
    return { total, loading }
  }
})
</script>
