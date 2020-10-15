<template>
  <BaseLayout>
    <BaseHeader />
    <BaseFormOffer :submit="handleSubmit" :type="type" />
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseFormOffer from '@/components/BaseFormOffer/BaseFormOffer.vue'
import offerService, { Offer, OfferType } from '@/services/api/services/offerService'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  components: {
    BaseFormOffer,
    BaseHeader,
    BaseLayout
  },
  props: {
    type: {
      type: String as PropType<OfferType>,
      required: true
    }
  },
  methods: {
    async handleSubmit(data: Partial<Offer>) {
      const offer = await offerService.create(data).catch(() => null)
      console.log(offer)
      // if (offer) notify success
      // else notify error
    }
  }
})
</script>
