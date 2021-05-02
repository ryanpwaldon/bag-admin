<template>
  <div class="grid gap-2 text-sm">
    <div class="flex w-full overflow-hidden">
      <button
        type="button"
        @click="preview = !preview"
        :disabled="!modelValue.length"
        class="flex justify-between flex-1 px-3 py-2 overflow-hidden text-left border border-gray-300 shadow-sm rounded-l-md focus:outline-none hover:bg-gray-50"
        :class="modelValue.length ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-500 pointer-events-none'"
      >
        <span class="overflow-hidden truncate">{{ modelValue.length }} {{ modelValue.length === 1 ? 'product' : 'products' }} selected</span>
        <ChevronDown class="flex-shrink-0 w-5 ml-1 text-gray-400" />
      </button>
      <button
        type="button"
        @click="openProductPicker"
        class="px-3 py-2 -ml-px font-medium text-gray-800 bg-white border border-gray-300 shadow-sm rounded-r-md focus:outline-none hover:bg-gray-50 whitespace-nowrap"
      >
        Add products
      </button>
    </div>
    <template v-if="preview">
      <BaseProduct
        :key="i"
        :loading="!product"
        :title="product?.title"
        :image="product?.featuredImage?.originalSrc"
        v-for="(product, i) in modelValue.map(({ id }) => products[id])"
      >
        <template v-if="product" #button>
          <button
            type="button"
            @click="removeId(product.id)"
            class="flex items-center justify-center w-8 h-8 transition rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <Bin class="text-gray-400" />
          </button>
        </template>
      </BaseProduct>
    </template>
  </div>
</template>

<script lang="ts">
import Bin from '@/icons/Bin.vue'
import cloneDeep from 'lodash/cloneDeep'
import ChevronDown from '@/icons/ChevronDown.vue'
import { ProductResource } from '@/types/internal'
import { AdminProduct } from '@/types/admin/graphql'
import { defineComponent, PropType, ref, watch } from 'vue'
import productService from '@/services/api/services/productService'
import BaseProduct from '@/components/BaseProduct/BaseProduct.vue'
export default defineComponent({
  components: { BaseProduct, ChevronDown, Bin },
  props: {
    modelValue: {
      type: Array as PropType<ProductResource[]>,
      required: true
    },
    error: {
      type: Boolean,
      required: false
    }
  },
  setup(props) {
    const preview = ref(false)
    const products = ref({} as Record<string, AdminProduct | null>)
    const diff = (a: string[], b: string[]) => a.filter(i => b.indexOf(i) < 0)
    const updateProducts = async (allProductResources: ProductResource[]) => {
      const fetchedIds = Object.keys(products.value)
      const allIds = allProductResources.map(({ id }) => id)
      const productsToFetchAsIds = diff(allIds, fetchedIds)
      productsToFetchAsIds.forEach(id => (products.value[id] = null))
      const fetchedProducts = await productService.findByIds(productsToFetchAsIds)
      fetchedProducts.forEach(product => (products.value[product.id] = product))
    }
    watch(() => props.modelValue, updateProducts, { immediate: true })
    return { preview, products }
  },
  methods: {
    removeId(idToRemove: string) {
      const modelValue = this.modelValue.filter(({ id }) => id !== idToRemove)
      this.$emit('update:modelValue', modelValue)
      if (!modelValue.length) this.preview = false
    },
    async openProductPicker() {
      const productResources = await this.$shopify.openProductPicker({ selectMultiple: true, initialSelectionIds: cloneDeep(this.modelValue) })
      this.$emit('update:modelValue', productResources)
    }
  }
})
</script>
