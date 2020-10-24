<template>
  <BaseLayout>
    <BaseHeader>
      <template #actions>
        <router-link to="/offers/create">
          <BaseButton text="Create" />
        </router-link>
      </template>
    </BaseHeader>
    <BaseFetchOffers :page="page" :limit="limit" v-slot="{ items, total, pages, loading }">
      <BaseTable :props="props" :items="items" :loading="loading" :link="item => ({ name: 'offer', params: { id: item.id } })">
        <template #name="{ item }">
          <div class="flex items-center">
            <div class="relative flex-shrink-0 w-10 h-10">
              <BaseFetchProduct :id="item.productId">
                <template #default="{ item: product }">
                  <div class="flex-shrink-0 w-full h-full bg-center bg-cover rounded-md" :style="{ backgroundImage: `url(${product.image})` }" />
                </template>
              </BaseFetchProduct>
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium leading-5 text-gray-900">
                {{ item.title }}
              </div>
              <div class="text-sm leading-5 text-gray-500">
                {{ item.subtitle }}
              </div>
            </div>
          </div>
        </template>
        <template #status="{ item }">
          <BaseBadge :text="item.active ? 'Live' : 'Paused'" :theme="item.active ? 'green' : 'yellow'" />
        </template>
        <template #created="{ item }">
          <div class="text-sm font-medium leading-5 text-gray-900">
            {{ $dayjs(item.createdAt).format('Do MMM') }}
          </div>
          <div class="text-sm leading-5 text-gray-500">
            {{ $dayjs(item.createdAt).from() }}
          </div>
        </template>
        <template #arrow>
          <div class="self-end text-sm font-medium leading-5 text-blue-600">→</div>
        </template>
        <template #pagination>
          <BasePagination :total="total" v-model:page="page" :pages="pages" :limit="limit" />
        </template>
      </BaseTable>
    </BaseFetchOffers>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import BasePagination from '@/components/BasePagination/BasePagination.vue'
import BaseFetchOffers from '@/components/BaseFetchOffers/BaseFetchOffers.vue'
import BaseFetchProduct from '@/components/BaseFetchProduct/BaseFetchProduct.vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseLayout,
    BaseHeader,
    BaseButton,
    BaseTable,
    BaseFetchOffers,
    BaseFetchProduct,
    BasePagination,
    BaseBadge
  },
  data: () => ({
    page: 1,
    limit: 10,
    props: [
      { name: 'Name', id: 'name' },
      { name: 'Created', id: 'created' },
      { name: 'Status', id: 'status' },
      { name: '', id: 'arrow' }
    ]
  })
})
</script>
