<template>
  <div class="grid gap-2 text-sm">
    <div class="flex w-full overflow-hidden">
      <button
        type="button"
        @click="preview = !preview"
        :disabled="!variantIds.length"
        class="flex justify-between flex-1 px-3 py-2 overflow-hidden text-left border border-gray-300 shadow-sm rounded-l-md focus:outline-none hover:bg-gray-50"
        :class="variantIds.length ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-500 pointer-events-none'"
      >
        <span class="overflow-hidden truncate">{{ variantIds.length }} {{ variantIds.length === 1 ? 'variant' : 'variants' }} selected</span>
        <ChevronDown class="flex-shrink-0 w-5 ml-1 text-gray-400" />
      </button>
      <button
        type="button"
        @click="openVariantPicker"
        class="px-3 py-2 -ml-px font-medium text-gray-700 bg-white border border-gray-300 shadow-sm rounded-r-md focus:outline-none hover:bg-gray-50 whitespace-nowrap"
      >
        Add variants
      </button>
    </div>
    <template v-if="preview">
      <BaseProduct
        :key="i"
        :loading="!variant"
        v-for="(variant, i) in variants"
        :title="variant?.product?.title"
        :options="variant?.selectedOptions"
        :image="variant?.image?.originalSrc || variant?.product?.featuredImage?.originalSrc"
      >
        <template v-if="variant" #button>
          <button
            type="button"
            @click="removeId(variant.id)"
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
import { defineComponent, PropType } from 'vue'
import ChevronDown from '@/icons/ChevronDown.vue'
import { AdminProductVariant } from '@/types/admin/graphql'
import variantService from '@/services/api/services/variantService'
import BaseProduct from '@/components/BaseProduct/BaseProduct.vue'

interface ProductVariantResource {
  id: string
  variants: { id: string }[]
}

export default defineComponent({
  components: { BaseProduct, ChevronDown, Bin },
  props: {
    modelValue: {
      type: Array as PropType<ProductVariantResource[]>,
      required: true
    },
    error: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    preview: false,
    variants: {} as Record<string, AdminProductVariant | null>
  }),
  computed: {
    variantIds() {
      const variantIds: string[] = []
      for (const resource of this.modelValue) variantIds.push(...resource.variants.map(({ id }) => id))
      return variantIds
    }
  },
  watch: {
    modelValue: {
      async handler() {
        const variantIdsToFetch = []
        const fetchedVariantIds = Object.keys(this.variants)
        for (const fetchedVariantId of fetchedVariantIds) {
          if (!this.variantIds.includes(fetchedVariantId)) {
            delete this.variants[fetchedVariantId]
          }
        }
        for (const variantId of this.variantIds) {
          if (!(variantId in this.variants)) {
            this.variants[variantId] = null
            variantIdsToFetch.push(variantId)
          }
        }
        const fetchedVariants = await variantService.findByIds(variantIdsToFetch)
        fetchedVariants.forEach(variant => (this.variants[variant.id] = variant))
      },
      immediate: true
    }
  },
  methods: {
    removeId(idToRemove: string) {
      const modelValue = cloneDeep(this.modelValue)
      for (let i = 0; i < modelValue.length; i++) {
        const product = modelValue[i]
        for (let i = 0; i < product.variants.length; i++) {
          if (product.variants[i].id === idToRemove) product.variants.splice(i, 1)
        }
        if (!product.variants.length) modelValue.splice(i, 1)
      }
      this.$emit('update:modelValue', modelValue)
      if (!modelValue.length) this.preview = false
    },
    async openVariantPicker() {
      const resources = await this.$shopify.openProductPicker({
        showVariants: true,
        selectMultiple: true,
        initialSelectionIds: cloneDeep(this.modelValue)
      })
      this.$emit('update:modelValue', resources)
    }
  }
})
</script>
