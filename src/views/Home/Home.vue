<template>
  <BaseHeader />
  <div class="grid gap-6">
    <div class="flex overflow-hidden rounded-lg shadow bg-gradient-to-tr from-blue-700 to-blue-400">
      <div class="grid w-full p-10 text-center md:gap-2 md:p-14 lg:p-16 sm:w-auto sm:text-left">
        <h1 class="text-2xl font-semibold leading-8 text-white md:text-3xl">Let's grow your sales</h1>
        <p class="text-base leading-6 text-blue-100 md:text-lg">Complete the following tasks to get started</p>
      </div>
      <div
        class="flex-1 bg-bottom bg-no-repeat bg-size"
        :style="`background-image: url('${require('@/assets/img/cart-mockup.svg')}'); background-size: auto 80%`"
      />
    </div>
    <TurnOnCartPrompt />
    <CreateCrossSellPrompt />
    <CreateProgressBarPrompt />
    <BaseTask
      title="Share your experience"
      description="Please consider leaving a review to share your experience. We appreciate any feedback you have to share!"
    >
      <a href="https://apps.shopify.com/bag#modal-show=ReviewListingModal" target="_blank">
        <BaseButton text="Leave a review →" />
      </a>
    </BaseTask>
    <BaseTask title="Need help?" description="Get in touch via the messenger.">
      <BaseButton text="Get help →" @click="toggleBeacon" />
    </BaseTask>
  </div>
</template>

<script lang="ts">
import store from '@/store/store'
import router from '@/router/router'
import { defineComponent } from 'vue'
import useBeacon from '@/composables/useBeacon'
import BaseTask from '@/components/BaseTask/BaseTask.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import TurnOnCartPrompt from '@/views/Home/components/TurnOnCartPrompt/TurnOnCartPrompt.vue'
import CreateCrossSellPrompt from '@/views/Home/components/CreateCrossSellPrompt/CreateCrossSellPrompt.vue'
import CreateProgressBarPrompt from '@/views/Home/components/CreateProgressBarPrompt/CreateProgressBarPrompt.vue'
export default defineComponent({
  components: {
    BaseHeader,
    BaseTask,
    BaseButton,
    TurnOnCartPrompt,
    CreateCrossSellPrompt,
    CreateProgressBarPrompt
  },
  beforeRouteEnter() {
    const user = store.state.user
    if (user && user.daysOld >= 20 && user.appOpens >= 10 && !user.seenReviewPrompt) router.push({ name: 'review' })
  },
  setup() {
    const { toggleBeacon } = useBeacon()
    return { toggleBeacon }
  }
})
</script>
