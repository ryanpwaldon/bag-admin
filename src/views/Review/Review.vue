<template>
  <div class="flex flex-col items-center w-full text-center">
    <Logo class="h-7" />
    <div class="flex flex-col w-full p-6 mt-8 bg-white rounded-md shadow">
      <Sparkles class="m-auto" />
      <p class="mt-3 text-lg font-medium text-gray-800">Extend your free trial</p>
      <p class="mt-2 text-sm text-gray-500">If you enjoy using the app, please consider leaving a review! We’ll extend your trial by 30 more days.</p>
    </div>
    <router-link to="/home" class="w-full mt-6">
      <BaseButton size="md" theme="black" class="w-full" text="Continue to app →" />
    </router-link>
  </div>
</template>

<script lang="ts">
import store from '@/store/store'
import Logo from '@/icons/Logo.vue'
import { defineComponent } from 'vue'
import Sparkles from '@/icons/Sparkles.vue'
import useBeacon from '@/composables/useBeacon'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import userService from '@/services/api/services/userService'
import router from '@/router/router'
export default defineComponent({
  components: { Logo, Sparkles, BaseButton },
  props: {
    message: {
      type: String,
      required: true
    }
  },
  beforeRouteEnter() {
    if (store.state.user?.seenReviewPrompt) router.push({ name: 'home' })
  },
  setup() {
    const { openBeacon } = useBeacon()
    userService.updateMe({ seenReviewPrompt: true })
    return { openBeacon }
  }
})
</script>
