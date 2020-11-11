<template>
  <slot :item="item" v-if="item" />
  <slot name="loader" v-else />
</template>

<script lang="ts">
import productService from '@/services/api/services/productService'
import { defineComponent, Ref, ref, watchEffect } from 'vue'
export default defineComponent({
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
      item.value = await productService.findOne(props.id)
    }
    watchEffect(fetchData)
    return { item }
  }
})
</script>
