<template>
  <slot :title="title" :image="image" />
</template>

<script lang="ts">
import productService from '@/services/api/services/productService'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseEntityPopulator',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    const data = await productService.findOne(props.id)
    return { title: data.title, image: data.featuredImage.originalSrc }
  }
})
</script>
