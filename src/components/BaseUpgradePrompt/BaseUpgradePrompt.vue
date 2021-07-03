<template>
  <div class="flex items-center justify-between px-6 py-4 space-x-6 overflow-hidden rounded-lg shadow bg-gradient-to-tr from-blue-700 to-blue-400">
    <p class="font-medium text-white">Upgrade to create unlimited offers</p>
    <router-link :to="{ name: 'subscribe' }">
      <BaseButton text="Upgrade" theme="blue" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '../BaseButton/BaseButton.vue'
export default defineComponent({
  components: {
    BaseButton
  }
})
</script>
