<template>
  <div class="flex flex-col items-center w-full text-center">
    <div class="flex flex-col w-full p-6 mt-8 bg-white rounded-md shadow">
      <Sparkles class="m-auto" />
      <p class="mt-3 text-lg font-medium text-gray-800">Are you enjoying Bag?</p>
      <p class="mt-2 text-sm text-gray-500">
        Please consider leaving a review to share your experience – we appreciate any feedback you have to share!
      </p>
    </div>
    <a class="w-full mt-6" href="https://apps.shopify.com/bag#modal-show=ReviewListingModal" target="_blank">
      <BaseButton class="w-full" size="md" theme="black" text="Leave a review →" />
    </a>
    <router-link to="/home" class="w-full mt-3">
      <BaseButton size="md" theme="white" class="w-full" text="Skip" />
    </router-link>
  </div>
</template>

<script lang="ts">
import store from '@/store/store'
import router from '@/router/router'
import { defineComponent } from 'vue'
import Sparkles from '@/icons/Sparkles.vue'
import useBeacon from '@/composables/useBeacon'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import userService from '@/services/api/services/userService'
export default defineComponent({
  components: { Sparkles, BaseButton },
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
