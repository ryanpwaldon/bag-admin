<template>
  <slot :item="item" />
</template>

<script lang="ts">
import productService from '@/services/api/services/productService'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseFetchProduct',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    console.log(props.id)
    const data = await productService.findOne(props.id)
    const item = { title: data.title, image: data.featuredImage.originalSrc }
    console.log(item)
    return { item }
  }
})
</script>
