<template>
  <slot :item="item" :loading="loading" />
</template>

<script lang="ts">
import offerService from '@/services/api/services/offerService'
import { defineComponent, ref, watchEffect } from 'vue'
export default defineComponent({
  name: 'BaseFetchOffer',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    const item = ref(null)
    const fetchData = async () => {
      loading.value = true
      item.value = await offerService.findOneById(props.id)
      loading.value = false
    }
    watchEffect(fetchData)
    return { item, loading }
  }
})
</script>
