<template>
  <div>
    <label :for="name" class="block text-base font-medium leading-6 text-gray-700">{{ label }}</label>
    <p class="max-w-xl text-sm" :class="[errorMessage ? 'text-red-600' : 'text-gray-500']" v-if="errorMessage || description">
      {{ errorMessage || description }}
    </p>
    <div class="grid grid-cols-1 row-gap-4 col-gap-6 mt-4 sm:grid-cols-2">
      <BaseFetchProduct v-for="id in ids" :key="id" :id="id" v-slot="{ item }">
        <BaseProduct :title="item.title" :image="item.image" type="Product">
          <template #footer>
            <BaseDotsButton
              class="flex-shrink-0 mr-2"
              :links="[
                { title: 'Change', action: () => handleSelection({ mode: 'change', id }) },
                { title: 'Remove', action: () => handleRemove(id) }
              ]"
            />
          </template>
        </BaseProduct>
      </BaseFetchProduct>
      <BaseButton @click="handleSelection({ mode: 'add' })" class="h-20" text="Add" theme="white" v-if="!value || multi">
        <template #icon>
          <svg class="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { useField } from 'vee-validate'
import { defineComponent } from 'vue'
import BaseProduct from '@/components/BaseProduct/BaseProduct.vue'
import BaseFetchProduct from '@/components/BaseFetchProduct/BaseFetchProduct.vue'
import BaseButton from '../BaseButton/BaseButton.vue'
import BaseDotsButton from '../BaseDotsButton/BaseDotsButton.vue'
export default defineComponent({
  name: 'BaseInputProducts',
  components: {
    BaseProduct,
    BaseFetchProduct,
    BaseButton,
    BaseDotsButton
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    initialValue: {
      type: [String, Array],
      required: true
    },
    rules: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const multi = Array.isArray(props.initialValue)
    const { value, errorMessage, handleChange } = useField(props.name, props.rules, { initialValue: props.initialValue })
    return { value, errorMessage, handleChange, multi }
  },
  computed: {
    ids(): string[] {
      if (!this.value) return []
      return this.multi ? this.value : [this.value]
    }
  },
  methods: {
    async handleRemove(id: string) {
      if (!this.multi) return this.handleChange(undefined)
      const ids = [...this.value]
      ids.splice(ids.indexOf(id), 1)
      this.handleChange(ids)
    },
    async handleSelection({ id, mode }: { id?: string; mode: 'add' | 'change' }) {
      const selectMultiple = this.multi && mode === 'add'
      this.$shopify.productPicker.update({ selectMultiple })
      const selection = await this.$shopify.productPicker.open()
      if (!selection.length) return
      if (!this.multi) return this.handleChange(selection[0].id)
      const ids = [...this.value]
      const insertIndex = mode === 'add' ? ids.length : ids.indexOf(id)
      const deleteCount = mode === 'add' ? 0 : 1
      const newIds = selection.map(({ id }: { id: string }) => id)
      ids.splice(insertIndex, deleteCount, ...newIds)
      const idsWithRemovedDuplicates = [...new Set(ids)]
      this.handleChange(idsWithRemovedDuplicates)
    }
  }
})
</script>
