<template>
  <div>
    <label v-if="label" :for="name" class="block text-sm font-medium text-gray-800">{{ label }}</label>
    <BaseProduct v-if="product || loading" :title="product?.title" :image="product?.featuredImage?.originalSrc" :loading="loading" class="mt-1">
      <template #button v-if="!disabled">
        <BaseMenuButton
          class="flex-shrink-0 mr-2"
          :links="[
            { title: 'Change', action: openProductPicker },
            { title: 'Remove', action: remove }
          ]"
        />
      </template>
    </BaseProduct>
    <BaseInputButton @click="openProductPicker" class="h-20" text="Select a product" theme="white" v-if="!modelValue">
      <template #icon>
        <ChevronRight class="w-5 h-5 ml-3 -mr-1 text-gray-400" />
      </template>
    </BaseInputButton>
    <p class="mt-2 text-sm" :class="[error ? 'text-red-600' : 'text-gray-500']" v-if="error || description">
      {{ error || description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseProduct from '@/components/BaseProduct/BaseProduct.vue'
import BaseMenuButton from '../BaseMenuButton/BaseMenuButton.vue'
import BaseInputButton from '../BaseInputButton/BaseInputButton.vue'
import productService from '@/services/api/services/productService'
import { AdminProduct } from '@/types/admin/graphql'
import ChevronRight from '@/icons/ChevronRight.vue'
export default defineComponent({
  components: {
    BaseProduct,
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
    disabled: {
      type: Boolean,
      default: false
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
    modelValue: {
      async handler() {
        this.product = null
        if (!this.modelValue) return
        this.loading = true
        const [product] = await productService.findByIds([this.modelValue])
        this.product = product
        this.loading = false
      },
      immediate: true
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
