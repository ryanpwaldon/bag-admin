<template>
  <nav>
    <div class="px-4 mx-auto bg-white shadow lg:max-w-4xl sm:px-6 lg:px-8 lg:mt-8 lg:rounded-md">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 text-base font-semibold text-gray-900">
            <Logo v-if="true" class="h-5" />
          </div>
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-4 ml-7">
              <router-link v-for="(route, i) in primaryRoutes" :key="i" :to="route.path" v-slot="{ isActive }" class="block">
                <span
                  :class="[isActive ? 'text-gray-900 bg-gray-100' : 'text-gray-500 hover:bg-gray-100 ']"
                  class="px-3 py-2 text-sm font-medium transition duration-150 ease-in-out rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >{{ route.meta.title }}</span
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center ml-4 md:ml-6">
            <div class="relative ml-3">
              <div>
                <button
                  class="flex items-center max-w-xs text-sm text-gray-900 rounded-full focus:outline-none"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  @click.stop="dropdownIsOpen = !dropdownIsOpen"
                >
                  <div class="w-8 h-8 bg-gray-100 rounded-full shadow-inner" />
                </button>
              </div>
              <BaseDropdown v-model:open="dropdownIsOpen" :links="secondaryRoutes.map(route => ({ title: route.meta.title, path: route.path }))" />
            </div>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <button
            class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            @click="mobileNavIsOpen = !mobileNavIsOpen"
          >
            <svg :class="[mobileNavIsOpen ? 'hidden' : 'block']" class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg :class="[mobileNavIsOpen ? 'block' : 'hidden']" class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="[mobileNavIsOpen ? 'block' : 'hidden']" class="bg-white border-b border-gray-200 md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link v-for="(route, i) in primaryRoutes" :key="i" :to="route.path" v-slot="{ isActive }" class="block">
          <span
            :class="[isActive ? 'text-gray-900 bg-gray-100' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100']"
            class="block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md focus:outline-none focus:text-gray-900 focus:bg-gray-100"
            >{{ route.meta.title }}</span
          >
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="px-2 space-y-1">
          <router-link
            v-for="(route, i) in secondaryRoutes"
            :key="i"
            :to="route.path"
            class="block px-3 py-2 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
          >
            {{ route.meta.title }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationNormalized } from 'vue-router'
import BaseDropdown from '../BaseDropdown/BaseDropdown.vue'
import Logo from '@/icons/Logo.vue'
export default defineComponent({
  components: {
    Logo,
    BaseDropdown
  },
  data: () => ({
    mobileNavIsOpen: false,
    dropdownIsOpen: false
  }),
  computed: {
    primaryRoutes(): RouteLocationNormalized[] {
      return this.resolveRoutes(['/', '/offers', '/cart'])
    },
    secondaryRoutes(): RouteLocationNormalized[] {
      return this.resolveRoutes(['/account', '/help'])
    }
  },
  methods: {
    resolveRoutes(paths: string[]): RouteLocationNormalized[] {
      return paths.map(path => this.$router.resolve({ path }))
    }
  }
})
</script>
