<template>
  <BaseHeader />
  <BaseLoader v-if="loading" />
  <StatusForm v-model="cart" v-else />
</template>

<script lang="ts">
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import cartService from '@/services/api/services/cartService'
import StatusForm from '@/views/Cart/components/StatusForm/StatusForm.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import { Cart } from '@shopify/app-bridge/actions/Cart'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    BaseHeader,
    StatusForm,
    BaseLoader
  },
  setup() {
    const loading = ref(true)
    const cart = ref(null as Cart | null)
    const fetchItem = async () => {
      loading.value = true
      cart.value = await cartService.findOne()
      loading.value = false
    }
    fetchItem()
    return { cart, loading }
  }
})
</script>
