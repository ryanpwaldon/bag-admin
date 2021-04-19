<template>
  <div>
    <label v-if="label" :for="name" class="block text-base font-medium text-gray-700">{{ label }}</label>
    <p v-if="description" class="max-w-xl mb-4 text-sm text-gray-500">{{ description }}</p>
    <div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
      <BaseProductV2 v-if="product || loading" :title="product?.title" :image="product?.featuredImage?.originalSrc" :loading="loading">
        <template #button>
          <BaseMenuButton
            class="flex-shrink-0 mr-2"
            :links="[
              { title: 'Change', action: openProductPicker },
              { title: 'Remove', action: remove }
            ]"
          />
        </template>
      </BaseProductV2>
      <BaseInputButton @click="openProductPicker" class="h-20" text="Select a product" theme="white" v-if="!modelValue">
        <template #icon>
          <ChevronRight class="w-5 h-5 ml-3 -mr-1 text-gray-400" />
        </template>
      </BaseInputButton>
    </div>
    <p v-if="error" class="mt-2 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseProductV2 from '@/components/BaseProductV2/BaseProductV2.vue'
import BaseMenuButton from '../BaseMenuButton/BaseMenuButton.vue'
import BaseInputButton from '../BaseInputButton/BaseInputButton.vue'
import productService from '@/services/api/services/productService'
import { AdminProduct } from '@/types/admin/graphql'
import ChevronRight from '@/icons/ChevronRight.vue'
export default defineComponent({
  components: {
    BaseProductV2,
    BaseInputButton,
    BaseMenuButton,
    ChevronRight
  },
  props: {
    label: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    }
  },
  data: () => ({
    product: null as AdminProduct | null,
    loading: false
  }),
  watch: {
    async modelValue() {
      this.product = null
      if (!this.modelValue) return
      this.loading = true
      const [product] = await productService.findByIds([this.modelValue])
      this.product = product
      this.loading = false
    }
  },
  methods: {
    async updateModelValue(value: string | undefined) {
      this.$emit('update:modelValue', value)
    },
    async remove() {
      return this.updateModelValue(undefined)
    },
    async openProductPicker() {
      const [{ id }] = await this.$shopify.openProductPicker()
      this.updateModelValue(id)
    }
  }
})
</script>
