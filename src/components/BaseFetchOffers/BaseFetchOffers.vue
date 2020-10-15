<template>
  <slot :items="docs" :total="total" :pages="pages" :loading="loading" />
</template>

<script lang="ts">
import offerService from '@/services/api/services/offerService'
import { defineComponent, watchEffect } from 'vue'
export default defineComponent({
  props: {
    filters: {
      type: Object,
      default: () => ({})
    },
    sort: {
      type: String,
      default: '-createdAt'
    },
    page: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  created() {
    watchEffect(this.fetchData)
  },
  data: () => ({
    loading: false,
    docs: [],
    total: 0,
    pages: 0
  }),
  methods: {
    async fetchData() {
      this.loading = true
      const { docs, total, pages } = await offerService.findAll(this.filters, this.sort, this.page, this.limit)
      this.docs = docs
      this.total = total
      this.pages = pages
      this.loading = false
    }
  }
})
</script>
