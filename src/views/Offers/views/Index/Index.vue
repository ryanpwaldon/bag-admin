<template>
  <BaseLayout>
    <BaseHeading>
      <template #actions>
        <router-link to="/offers/create">
          <BaseButton text="Create" />
        </router-link>
      </template>
    </BaseHeading>
    <BaseFetchOffers :page="page" :limit="limit" v-slot="{ items, total, pages, loading }">
      <BaseTable :props="props" :items="items" :loading="loading">
        <template #name="{ item }">
          <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
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
          <BaseBadge :text="item.active ? 'Active' : 'Inactive'" :theme="item.active ? 'green' : 'gray'" />
        </template>
        <template #created="{ item }">
          <div class="text-sm font-medium leading-5 text-gray-900">
            {{ $dayjs(item.createdAt).format('Do MMM') }}
          </div>
          <div class="text-sm leading-5 text-gray-500">
            {{ $dayjs(item.createdAt).from() }}
          </div>
        </template>
        <template #edit="{ item }">
          <div class="flex justify-end">
            <router-link
              class="text-sm font-medium leading-5 text-right text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
              :to="{ name: 'offer', params: { id: item.id } }"
              >→</router-link
            >
          </div>
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
import BaseHeading from '@/components/BaseHeading/BaseHeading.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import BasePagination from '@/components/BasePagination/BasePagination.vue'
import BaseFetchOffers from '@/components/BaseFetchOffers/BaseFetchOffers.vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseLayout,
    BaseHeading,
    BaseButton,
    BaseTable,
    BaseFetchOffers,
    BasePagination,
    BaseBadge
  },
  data: () => ({
    page: 1,
    limit: 10,
    props: [
      { name: 'Name', id: 'name' },
      { name: 'Status', id: 'status' },
      { name: 'Created', id: 'created' },
      { name: '', id: 'edit' }
    ]
  })
})
</script>
