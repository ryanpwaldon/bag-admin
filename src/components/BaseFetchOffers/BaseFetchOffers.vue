<template>
  <slot :items="items" :total="total" :first="first" :last="last" :pages="pages" :page="page" />
</template>

<script lang="ts">
import offerService from '@/services/api/services/offerService'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseFetchProduct',
  props: {
    filters: {
      type: Object,
      required: false
    },
    pageInput: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 2
    }
  },
  async setup(props) {
    const { items, total, first, last, pages, page } = await offerService.findAll(props.pageInput, props.itemsPerPage, props.filters)
    return { items, total: parseInt(total), first: parseInt(first), last: parseInt(last), pages: parseInt(pages), page: parseInt(page) }
  }
})
</script>
