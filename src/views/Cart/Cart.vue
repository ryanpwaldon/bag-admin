<template>
  <BaseHeader />
  <BaseLoader v-if="loading" />
  <div class="grid gap-6" v-else>
    <AppearanceForm v-model="cart" />
    <StatusForm v-model="cart" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import cartService, { Cart } from '@/services/api/services/cartService'
import StatusForm from '@/views/Cart/components/StatusForm/StatusForm.vue'
import AppearanceForm from './components/AppearanceForm/AppearanceForm.vue'

export default defineComponent({
  components: {
    BaseHeader,
    StatusForm,
    BaseLoader,
    AppearanceForm
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
