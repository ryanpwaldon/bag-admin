<template>
  <slot :product="product" />
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
    const data = await productService.findOne(props.id)
    const product = {
      title: data.title,
      image: data.featuredImage.originalSrc
    }
    return { product }
  }
})
</script>
