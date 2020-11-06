<template>
  <div v-if="breadcrumbs.length > 1">
    <nav class="sm:hidden">
      <router-link
        :to="breadcrumbs[breadcrumbs.length - 2].path"
        class="flex items-center text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700"
      >
        <svg class="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        Back
      </router-link>
    </nav>
    <nav class="items-center hidden text-sm font-medium leading-5 sm:flex">
      <template v-for="(route, i) in breadcrumbs" :key="i">
        <router-link :to="{ name: route.name }" class="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">
          {{ route.meta.title }}
        </router-link>
        <svg v-if="i !== breadcrumbs.length - 1" class="flex-shrink-0 w-5 h-5 mx-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </template>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouteLocation, useRoute, useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const breadcrumbs = ref([] as RouteLocation[])
    breadcrumbs.value = route.meta.breadcrumbs?.map((breadcrumb: string) => router.resolve({ name: breadcrumb })) || []
    breadcrumbs.value.push(route)
    return { breadcrumbs }
  }
})
</script>
