<template>
  <BaseLayout>
    <BaseHeader />
    <BaseFetchOffer :id="id">
      <template #loader><BaseLoader /></template>
      <template #default="{ item }">
        <BaseFetchProduct :id="item.productId">
          <template #loader><BaseLoader /></template>
          <template #default="{ item: product }">
            <div class="grid grid-flow-row gap-8">
              <BaseHeaderCard :title="item.title" :subtitle="item.subtitle" :image="product.image" />
              <BaseFormOffer :data="item" :submit="handleSubmit" />
              <BaseFormDelete :submit="handleDelete" />
            </div>
          </template>
        </BaseFetchProduct>
      </template>
    </BaseFetchOffer>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import BaseHeaderCard from '@/components/BaseHeaderCard/BaseHeaderCard.vue'
import BaseFormOffer from '@/components/BaseFormOffer/BaseFormOffer.vue'
import BaseFetchOffer from '@/components/BaseFetchOffer/BaseFetchOffer.vue'
import BaseFetchProduct from '@/components/BaseFetchProduct/BaseFetchProduct.vue'
import BaseFormDelete from '@/components/BaseFormDelete/BaseFormDelete.vue'
import offerService, { Offer } from '@/services/api/services/offerService'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseLayout,
    BaseHeader,
    BaseLoader,
    BaseHeaderCard,
    BaseFormOffer,
    BaseFetchOffer,
    BaseFetchProduct,
    BaseFormDelete
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    async handleSubmit(data: Partial<Offer>) {
      const offer = await offerService.updateOneById(this.id, data).catch(() => null)
      console.log(offer)
      // if (offer) notify success
      // else notify error
    },
    async handleDelete() {
      const offer = await offerService.deleteOneById(this.id).catch(() => null)
      if (offer) this.$router.push({ name: 'offers' })
      console.log(offer)
      // if (offer) notify success
      // else notify error
    }
  }
})
</script>
