<template>
  <div>
    <label :for="name" class="block text-base font-medium leading-6 text-gray-700">{{ label }}</label>
    <p class="max-w-xl text-sm" :class="[errorMessage ? 'text-red-600' : 'text-gray-500']" v-if="errorMessage || description">
      {{ errorMessage || description }}
    </p>
    <div class="grid grid-cols-1 row-gap-4 col-gap-6 mt-4 sm:grid-cols-2">
      <Suspense v-if="id">
        <BaseFetchProduct :id="id" v-slot="{ item }">
          <BaseProduct :title="item.title" subtitle="Product" :image="item.image">
            <template #footer>
              <BaseDotsButton
                class="flex-shrink-0 mr-2"
                :links="[
                  { title: 'Change', action: handleSelection },
                  { title: 'Remove', action: handleRemove }
                ]"
              />
            </template>
          </BaseProduct>
        </BaseFetchProduct>
      </Suspense>
      <BaseButton @click="handleSelection()" class="h-20" text="Add" theme="white" v-else>
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
    rules: {
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
      type: String,
      required: false
    }
  },
  setup(props) {
    const { value, errorMessage, handleChange } = useField(props.name, props.rules, { initialValue: props.initialValue })
    return { value, errorMessage, handleChange }
  },
  methods: {
    async handleRemove() {
      this.handleChange(undefined)
    },
    async handleSelection() {
      this.$shopify.productPicker.update({ selectMultiple: false })
      const [selection] = await this.$shopify.productPicker.open()
      if (!selection) return
      this.handleChange(selection.id)
    }
  }
})
</script>
