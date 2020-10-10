<template>
  <BaseLayout>
    <BaseHeading>
      <template #actions>
        <router-link to="/offers/create">
          <BaseButton text="Create" />
        </router-link>
      </template>
    </BaseHeading>
    <Suspense>
      <BaseFetchOffers :page-input="pageInput" v-slot="{ items, total, first, last, pages, page }">
        <BaseTable :props="props" :items="items">
          <template #name="{ item }">
            <div>{{ item.title }}</div>
          </template>
          <template #status="{ item }">
            <div>{{ item.active }}</div>
          </template>
          <template #pagination>
            <BasePagination :page="page" :first="first" :last="last" :total="total" :pages="pages" @paginate="pageInput = $event" />
          </template>
        </BaseTable>
      </BaseFetchOffers>
    </Suspense>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeading from '@/components/BaseHeading/BaseHeading.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import BaseFetchOffers from '@/components/BaseFetchOffers/BaseFetchOffers.vue'
import BasePagination from '@/components/BasePagination/BasePagination.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseLayout,
    BaseHeading,
    BaseButton,
    BaseTable,
    BaseFetchOffers,
    BasePagination
  },
  data: () => ({
    pageInput: 1,
    props: [
      { name: 'Name', id: 'name' },
      { name: 'Status', id: 'status' }
    ]
  })
})
</script>
