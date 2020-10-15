<template>
  <div v-if="routes.length > 1">
    <nav class="sm:hidden">
      <router-link
        :to="routes[routes.length - 2].path"
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
      <template v-for="(route, i) in routes" :key="i">
        <router-link :to="{ name: route.name }" class="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">
          {{ evaluateBreadcrumb(route, route.meta.breadcrumb) }}
        </router-link>
        <svg v-if="i !== routes.length - 1" class="flex-shrink-0 w-5 h-5 mx-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
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
import { Breadcrumb } from '@/router'
import { defineComponent } from 'vue'
import { RouteLocation, RouteLocationNormalizedLoaded } from 'vue-router'
export default defineComponent({
  computed: {
    routes() {
      const routes = this.$route.matched.reduce((routes: (RouteLocation & { href: string })[], route, i) => {
        if (i === 0 || route.path !== routes[routes.length - 1].path) routes.push(this.$router.resolve(route))
        return routes
      }, [])
      return routes
    }
  },
  methods: {
    evaluateBreadcrumb(route: RouteLocationNormalizedLoaded, breadcrumb: Breadcrumb) {
      if (typeof breadcrumb === 'function') return breadcrumb(route)
      return breadcrumb
    }
  }
})
</script>
