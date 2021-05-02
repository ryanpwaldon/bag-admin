<template>
  <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6 sm:flex sm:space-x-6 sm:items-center sm:justify-between">
    <div>
      <h3 class="text-lg font-medium leading-6 text-gray-800">
        {{ title }}
      </h3>
      <p class="max-w-xl mt-1 text-sm leading-5 text-gray-500">
        {{ description }}
      </p>
    </div>
    <div class="mt-4 sm:flex-shrink-0 sm:mt-0">
      <BaseButton :text="buttonConfirmationText" theme="red" :loading="loading" @click="handleClickConfirm" v-if="initiated || loading" />
      <BaseButton :text="buttonText" @click.stop="handleClick" theme="white" v-else />
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonConfirmationText: {
      type: String,
      required: true
    }
  },
  data: () => ({
    initiated: false,
    loading: false
  }),
  methods: {
    handleClick() {
      this.initiated = true
      window.addEventListener('click', () => (this.initiated = false), { once: true })
    },
    handleClickConfirm() {
      this.$emit('terminate')
      this.loading = true
    }
  }
})
</script>
