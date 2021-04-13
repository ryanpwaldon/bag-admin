<template>
  <div>
    <label v-if="label" :for="name" class="block text-base font-medium text-gray-700">{{ label }}</label>
    <p v-if="description" class="max-w-xl mb-4 text-sm text-gray-500">{{ description }}</p>
    <div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
      <BaseProduct
        v-for="id in ids"
        :title="products[id]?.title"
        :image="products[id]?.featuredImage?.originalSrc"
        :loading="productsLoading[id]"
        type="Product"
        :key="id"
      >
        <template #footer>
          <BaseMenuButton
            class="flex-shrink-0 mr-2"
            :links="[
              { title: 'Change', action: () => handleSelection({ mode: 'change', id }) },
              { title: 'Remove', action: () => handleRemove(id) }
            ]"
          />
        </template>
      </BaseProduct>
      <BaseInputButton @click="handleSelection({ mode: 'add' })" class="h-20" text="Select a product" theme="white" v-if="!modelValue || multi">
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
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Array],
      required: true
    },
    error: {
      type: String,
      required: false
    }
  },
  data: () => ({
    products: {} as Record<string, AdminProduct | undefined>,
    productsLoading: {} as Record<string, boolean>
  }),
  computed: {
    multi(): boolean {
      return Array.isArray(this.modelValue)
    },
    ids(): string[] {
      if (!this.modelValue) return []
      return this.multi ? (this.modelValue as string[]) : [this.modelValue as string]
    }
  },
  watch: {
    ids: {
      immediate: true,
      async handler() {
        const productsToFetchById = []
        for (const id of this.ids) {
          if (!(id in this.products)) {
            productsToFetchById.push(id)
            this.productsLoading[id] = true
          }
        }
        const products = await productService.findByIds(productsToFetchById)
        for (const id of productsToFetchById) {
          this.products[id] = products.find(product => id === product?.id)
          this.productsLoading[id] = false
        }
      }
    }
  },
  methods: {
    async updateValue(value: string | string[] | undefined) {
      this.$emit('update:modelValue', value)
    },
    async handleRemove(id: string) {
      if (!this.multi) return this.updateValue(undefined)
      const ids = [...(this.modelValue as string[])]
      ids.splice(ids.indexOf(id), 1)
      this.updateValue(ids)
    },
    async handleSelection({ id, mode }: { id?: string; mode: 'add' | 'change' }) {
      const selectMultiple = this.multi && mode === 'add'
      const selection = await this.$shopify.openProductPicker({ selectMultiple })
      if (!selection.length) return
      if (!this.multi) return this.updateValue(selection[0])
      const ids = [...this.modelValue]
      const insertIndex = mode === 'add' ? ids.length : ids.indexOf(id)
      const deleteCount = mode === 'add' ? 0 : 1
      ids.splice(insertIndex, deleteCount, ...selection)
      const idsWithRemovedDuplicates = [...new Set(ids)]
      this.updateValue(idsWithRemovedDuplicates as string[])
    }
  }
})
</script>
