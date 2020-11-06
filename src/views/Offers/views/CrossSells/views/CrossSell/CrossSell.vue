<template>
  <BaseHeader />
  <div v-if="item">
    {{ item.product.title }}
  </div>
</template>

<script lang="ts">
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import crossSellService from '@/services/api/services/crossSellService'
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  components: {
    BaseHeader
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    const item = ref(null as CrossSell | null)
    const fetchItem = async () => {
      loading.value = true
      item.value = await crossSellService.findOneById(props.id)
      loading.value = false
    }
    watchEffect(fetchItem)
    return { item, loading }
  }
})
</script>
