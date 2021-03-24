<template>
  <nav>
    <div class="px-4 mx-auto bg-white shadow lg:max-w-4xl sm:px-6 lg:px-8 lg:mt-8 lg:rounded-md">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link class="flex-shrink-0 text-base font-semibold text-gray-900" to="/">
            <Logo class="h-5" />
          </router-link>
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
        <div class="items-center hidden space-x-4 md:flex ml-7">
          <BaseIconButton :icon="Chat" @click="toggleBeacon" />
          <router-link class="flex" :to="{ name: 'account' }" v-slot="{ isActive }">
            <BaseIconButton :active="isActive" :icon="Cog" />
          </router-link>
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
import Logo from '@/icons/Logo.vue'
import Cog from '@/icons/Cog.vue'
import BaseIconButton from '@/components/BaseIconButton/BaseIconButton.vue'
import Chat from '@/icons/Chat.vue'
import useBeacon from '@/composables/useBeacon'
export default defineComponent({
  components: {
    Logo,
    BaseIconButton
  },
  setup() {
    const { toggleBeacon } = useBeacon()
    return { Cog, Chat, toggleBeacon }
  },
  data: () => ({
    mobileNavIsOpen: false
  }),
  watch: {
    $route() {
      this.mobileNavIsOpen = false
    }
  },
  computed: {
    primaryRoutes(): RouteLocationNormalized[] {
      return this.resolveRoutes(['/', '/offers', '/cart'])
    },
    secondaryRoutes(): RouteLocationNormalized[] {
      return this.resolveRoutes(['/account'])
    }
  },
  methods: {
    resolveRoutes(paths: string[]): RouteLocationNormalized[] {
      return paths.map(path => this.$router.resolve({ path }))
    }
  }
})
</script>
