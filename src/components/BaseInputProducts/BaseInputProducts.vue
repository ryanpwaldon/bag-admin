<template>
  <div>
    <label v-if="label" :for="name" class="block text-base font-medium leading-6 text-gray-700">{{ label }}</label>
    <p class="max-w-xl mb-4 text-sm" :class="[error ? 'text-red-600' : 'text-gray-500']" v-if="error || description">
      {{ error || description }}
    </p>
    <div class="grid grid-cols-1 row-gap-4 col-gap-6 sm:grid-cols-2">
      <BaseProduct
        v-for="id in ids"
        :title="products[id]?.title"
        :image="products[id]?.featuredImage?.originalSrc"
        :loading="!products[id]"
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
          <svg class="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </BaseInputButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseProduct from '@/components/BaseProduct/BaseProduct.vue'
import BaseMenuButton from '../BaseMenuButton/BaseMenuButton.vue'
import BaseInputButton from '../BaseInputButton/BaseInputButton.vue'
import productService from '@/services/api/services/productService'
import { AdminProduct } from '@/types/admin/types'
export default defineComponent({
  components: {
    BaseProduct,
    BaseInputButton,
    BaseMenuButton
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
    products: {} as Record<string, AdminProduct>
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
        for (const id of this.ids) if (!(id in this.products)) productsToFetchById.push(id)
        const products = await productService.findByIds(productsToFetchById)
        for (const product of products) this.products[product.id] = product
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
      this.$shopify.productPicker.update({ selectMultiple })
      const selection = await this.$shopify.productPicker.open()
      if (!selection.length) return
      if (!this.multi) return this.updateValue(selection[0].id)
      const ids = [...this.modelValue]
      const insertIndex = mode === 'add' ? ids.length : ids.indexOf(id)
      const deleteCount = mode === 'add' ? 0 : 1
      const newIds = selection.map(({ id }: { id: string }) => id)
      ids.splice(insertIndex, deleteCount, ...newIds)
      const idsWithRemovedDuplicates = [...new Set(ids)]
      this.updateValue(idsWithRemovedDuplicates as string[])
    }
  }
})
</script>
