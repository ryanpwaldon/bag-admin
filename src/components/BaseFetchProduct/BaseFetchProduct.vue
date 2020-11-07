<template>
  <slot :item="item" v-if="item" />
  <slot name="loader" v-else />
</template>

<script lang="ts">
import adminProductService from '@/services/api/services/adminProductService'
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
      item.value = await adminProductService.findOne(props.id)
    }
    watchEffect(fetchData)
    return { item }
  }
})
</script>
