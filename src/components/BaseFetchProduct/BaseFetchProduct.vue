<template>
  <slot v-if="item" :item="item" />
</template>

<script lang="ts">
import productService from '@/services/api/services/productService'
import { defineComponent, Ref, ref, watchEffect } from 'vue'
export default defineComponent({
  name: 'BaseFetchProduct',
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
      const data = await productService.findOne(props.id)
      item.value = { title: data.title, image: data.featuredImage.originalSrc }
    }
    watchEffect(fetchData)
    return { item }
  }
})
</script>
