<template>
  <BaseTerminateCard
    title="Delete"
    button-text="Delete"
    button-confirmation-text="Confirm deletion"
    description="Once you delete this offer, you will lose all data associated with it."
    @terminate="handleDelete"
  />
</template>

<script lang="ts">
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import BaseTerminateCard from '@/components/BaseTerminateCard/BaseTerminateCard.vue'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {
    BaseTerminateCard
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
