<template>
  <BaseTask
    :loading="loading"
    title="Turn on cart 💡"
    description="Make our cart available to your customers on your online store."
    :complete="cart?.active"
  >
    <BaseButton text="Turn on" @click="activateCart" :loading="submitting" />
  </BaseTask>
</template>

<script lang="ts">
import BaseTask from '@/components/BaseTask/BaseTask.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import cartService, { Cart } from '@/services/api/services/cartService'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: { BaseTask, BaseButton },
  setup() {
    const loading = ref(true)
    const submitting = ref(false)
    const cart = ref(null as Cart | null)
    const activateCart = async () => {
      submitting.value = true
      cart.value = await cartService.updateOne({ active: true })
      submitting.value = false
    }
    const fetchCart = async () => {
      loading.value = true
      cart.value = await cartService.findOne()
      loading.value = false
    }
    fetchCart()
    return { cart, loading, activateCart, submitting }
  }
})
</script>
