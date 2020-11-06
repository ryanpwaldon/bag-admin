<template>
  <BaseLayout>
    <BaseHeader />
    <form @submit="handleSubmit" class="grid gap-4">
      <BaseCard>
        <div class="grid grid-cols-12 gap-6">
          <BaseInputProducts
            label="Product"
            description="The product you would like to cross-sell."
            name="productId"
            v-model="fields.productId.value.value"
            :error="fields.productId.error.value"
            class="col-span-full"
          />
          <div class="h-px -mx-6 bg-gray-300 col-span-full" />
          <div class="col-span-full">
            <p class="text-base font-medium leading-6 text-gray-700">Copy</p>
            <p class="max-w-xl text-sm text-gray-500">Use persuasive language to entice the user into to purchasing your product.</p>
          </div>
          <BaseInputText
            name="title"
            label="Title"
            v-model="fields.title.value.value"
            :error="fields.title.error.value"
            placeholder="Add a pencil"
            class="col-span-full sm:col-span-6"
          />
          <BaseInputText
            name="subtitle"
            label="Subtitle"
            v-model="fields.subtitle.value.value"
            :error="fields.subtitle.error.value"
            placeholder="Faber Casel 2B"
            class="col-span-full sm:col-span-6"
          />
          <div class="h-px -mx-6 bg-gray-300 col-span-full" />
          <BaseInputProducts
            name="triggerProductIds"
            label="Trigger products"
            description="This offer will only be visible to the customer if they have added at least one trigger product to their cart."
            v-model="fields.triggerProductIds.value.value"
            :error="fields.triggerProductIds.error.value"
            class="col-span-full"
          />
        </div>
        <template #footer>
          <BaseButton class="ml-auto" text="Create" type="submit" />
        </template>
      </BaseCard>
    </form>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputProducts from '@/components/BaseInputProducts/BaseInputProducts.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import crossSellService from '@/services/api/services/crossSellService'
import useForm from '@/composables/useForm'
import { array, object, string } from 'yup'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

const schema = object({
  productId: string()
    .typeError('Product is required.')
    .required('Product is required.')
    .default(''),
  title: string()
    .typeError('Title is required.')
    .required('Title is required.'),
  subtitle: string()
    .typeError('Subtitle is required.')
    .required('Subtitle is required.'),
  triggerProductIds: array()
    .min(1, 'At least 1 trigger product is required.')
    .required('At least 1 trigger product is required.')
    .default([])
}).defined()

export default defineComponent({
  components: {
    BaseLayout,
    BaseHeader,
    BaseCard,
    BaseInputText,
    BaseInputProducts,
    BaseButton
  },
  setup() {
    const router = useRouter()
    const { fields, getValues, handleSubmit } = useForm(schema)
    const onSubmit = async () => {
      const values = getValues()
      const { id } = await crossSellService.create(values)
      router.push({ name: 'cross-sell', params: { id } })
    }
    return {
      fields,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
})
</script>
