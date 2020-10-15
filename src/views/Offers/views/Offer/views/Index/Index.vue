<template>
  <BaseLayout>
    <BaseHeader>
      <template #actions>
        <router-link :to="{ name: 'offer-edit' }">
          <BaseButton text="Edit" />
        </router-link>
      </template>
    </BaseHeader>
    <BaseFetchOffer :id="id">
      <template #loader><BaseLoader /></template>
      <template #default="{ item }">
        <BaseFetchProduct :id="item.productId">
          <template #loader><BaseLoader /></template>
          <template #default="{ item: product }">
            <BaseHeaderCard :image="product.image" :title="item.title" :subtitle="item.subtitle" />
            <BaseList class="mt-6" title="Details" :labels="listLabels">
              <template #status>
                <BaseBadge :text="item.active ? 'Active' : 'Paused'" :theme="item.active ? 'green' : 'yellow'" />
              </template>
              <template #type>
                {{ getOfferTypeDisplayText(item.type) }}
              </template>
              <template #created>
                {{ $dayjs(item.createdAt).format('Do MMMM YYYY') }}
              </template>
              <template #product>
                <BaseProduct :image="product.image" :title="product.title" type="Product" />
              </template>
              <template #triggers>
                <div class="space-y-4">
                  <BaseFetchProduct v-for="(id, i) in item.triggers" :key="i" :id="id">
                    <template #default="{ item: product }"><BaseProduct :image="product.image" :title="product.title" type="Product"/></template>
                    <template #loader><BaseProduct :loading="true"/></template>
                  </BaseFetchProduct>
                </div>
              </template>
            </BaseList>
          </template>
        </BaseFetchProduct>
      </template>
    </BaseFetchOffer>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseHeaderCard from '@/components/BaseHeaderCard/BaseHeaderCard.vue'
import BaseList from '@/components/BaseList/BaseList.vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
import BaseProduct from '@/components/BaseProduct/BaseProduct.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import BaseFetchOffer from '@/components/BaseFetchOffer/BaseFetchOffer.vue'
import BaseFetchProduct from '@/components/BaseFetchProduct/BaseFetchProduct.vue'
import { OfferType } from '@/services/api/services/offerService'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Offer',
  components: {
    BaseLayout,
    BaseHeader,
    BaseButton,
    BaseHeaderCard,
    BaseFetchOffer,
    BaseFetchProduct,
    BaseLoader,
    BaseList,
    BaseBadge,
    BaseProduct
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    listLabels: [
      { name: 'Type', id: 'type' },
      { name: 'Status', id: 'status' },
      { name: 'Product', id: 'product' },
      { name: 'Triggers', id: 'triggers' },
      { name: 'Created', id: 'created' }
    ]
  }),
  methods: {
    getOfferTypeDisplayText(type: OfferType) {
      if (type === OfferType.ProductAddOn) return 'Product Recommendation'
      if (type === OfferType.MinimumSpend) return 'Minimum Spend'
      if (type === OfferType.ProductUpgrade) return 'Product Upgrade'
    }
  }
})
</script>
