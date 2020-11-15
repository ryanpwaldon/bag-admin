<template>
  <BaseDeleteCard title="Delete" description="Once you delete this offer, you will lose all data associated with it." @delete="handleDelete" />
</template>

<script lang="ts">
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import BaseDeleteCard from '@/components/BaseDeleteCard/BaseDeleteCard.vue'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {
    BaseDeleteCard
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  methods: {
    async handleDelete() {
      await crossSellService.deleteOneById(this.crossSell.id)
      this.$router.push({ name: 'offers' })
    }
  }
})
</script>
