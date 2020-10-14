<template>
  <BaseLayout>
    <BaseHeader />
    <BaseFetchOffer :id="id" v-slot="{ item }">
      <Suspense v-if="item">
        <BaseFetchProduct :id="item.productId" v-slot="{ item: product }">
          <div class="grid grid-flow-row gap-8">
            <BaseHeaderCard :image="product.image" :title="item.title" :subtitle="item.subtitle" />
            <BaseFormOffer :data="item" :submit="handleSubmit" />
            <BaseFormDelete :submit="handleDelete" />
          </div>
        </BaseFetchProduct>
      </Suspense>
    </BaseFetchOffer>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseHeaderCard from '@/components/BaseHeaderCard/BaseHeaderCard.vue'
import BaseFormOffer from '@/components/BaseFormOffer/BaseFormOffer.vue'
import BaseFetchOffer from '@/components/BaseFetchOffer/BaseFetchOffer.vue'
import BaseFetchProduct from '@/components/BaseFetchProduct/BaseFetchProduct.vue'
import BaseFormDelete from '@/components/BaseFormDelete/BaseFormDelete.vue'
import offerService, { Offer } from '@/services/api/services/offerService'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Edit',
  components: {
    BaseLayout,
    BaseHeader,
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
