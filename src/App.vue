<template>
  <router-view v-slot="{ Component, route }">
    <transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
      appear
    >
      <component :is="route.meta.layout || 'div'" :key="route.name">
        <component :is="Component" />
      </component>
    </transition>
  </router-view>
</template>
