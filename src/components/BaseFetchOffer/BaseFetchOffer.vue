<template>
  <slot v-if="item" :item="item" />
</template>

<script lang="ts">
import offerService from '@/services/api/services/offerService'
import { defineComponent, Ref, ref, watchEffect } from 'vue'
export default defineComponent({
  name: 'BaseFetchOffer',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const item: Ref<object | null> = ref(null)
    const fetchData = async () => {
      item.value = null
      item.value = await offerService.findOneById(props.id)
    }
    watchEffect(fetchData)
    return { item }
  }
})
</script>
