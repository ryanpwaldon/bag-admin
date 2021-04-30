<template>
  <div class="flex flex-col items-center w-full text-center">
    <Logo class="h-7" />
    <div class="flex flex-col w-full p-6 mt-8 bg-white rounded-md shadow">
      <BaseSpinner class="w-6 h-6 m-auto" />
      <p class="mt-4 text-lg font-medium text-gray-800">Getting things ready</p>
      <p class="mt-2 text-sm text-gray-500">Please wait, this may take<br />a couple of minues.</p>
    </div>
    <button class="mt-8 text-sm text-gray-500 focus:outline-none" @click="openBeacon">
      Need help?
    </button>
  </div>
</template>

<script lang="ts">
import Logo from '@/icons/Logo.vue'
import { defineComponent } from 'vue'
import useBeacon from '@/composables/useBeacon'
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
import installationService from '@/services/api/services/installationService'
export default defineComponent({
  components: {
    Logo,
    BaseSpinner
  },
  setup() {
    const { openBeacon } = useBeacon()
    return { openBeacon }
  },
  async created() {
    const user = await installationService.setup()
    this.$store.commit('setUser', user)
    this.$router.push({ name: 'subscribe' })
  }
})
</script>
