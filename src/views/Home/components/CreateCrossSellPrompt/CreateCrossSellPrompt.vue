<template>
  <BaseTask
    :loading="loading"
    :complete="total >= 1"
    title="Create a cross sell"
    description="Start earning more money by creating in-cart cross sells."
  >
    <router-link :to="{ name: 'create-cross-sell' }">
      <BaseButton text="Create →" />
    </router-link>
  </BaseTask>
</template>

<script lang="ts">
import BaseTask from '@/components/BaseTask/BaseTask.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import crossSellService from '@/services/api/services/crossSellService'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: { BaseTask, BaseButton },
  setup() {
    const loading = ref(true)
    const total = ref(0 as number)
    const fetchCart = async () => {
      loading.value = true
      total.value = (await crossSellService.findAll({ page: 1, limit: 1 })).total
      loading.value = false
    }
    fetchCart()
    return { total, loading }
  }
})
</script>
