<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-700">Settings</h3>
      </template>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-full">
          <p class="text-base font-medium leading-6 text-gray-700">Product</p>
          <p class="max-w-xl text-sm text-gray-500">
            The product being cross-sold. This product will be suggested to the customer if they have added any of the following trigger products to
            their cart.
          </p>
        </div>
        <BaseProduct :title="crossSell.product.title" :image="crossSell.product.featuredImage?.originalSrc" type="Product" class="col-span-6" />
        <div class="h-2 -mx-6 border-b border-gray-200 col-span-full" />
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
        <div class="h-2 -mx-6 border-b border-gray-200 col-span-full" />
        <div class="col-span-full">
          <p class="text-base font-medium leading-6 text-gray-700">Trigger products</p>
          <p class="max-w-xl text-sm text-gray-500">
            This offer will only be visible to the customer if they have added at least one trigger product to their cart.
          </p>
        </div>
        <BaseInputProducts
          name="triggerProductIds"
          v-model="fields.triggerProductIds.value.value"
          :error="fields.triggerProductIds.error.value"
          class="col-span-full"
        />
        <div class="h-2 -mx-6 border-b border-gray-200 col-span-full" />
        <div class="col-span-full">
          <BaseInputToggleHorizontal
            label="Status"
            description="If paused, your customers will not be able to see this offer."
            v-model="fields.active.value.value"
            :error="fields.active.error.value"
            class="w-full"
          />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Save" type="submit" :loading="loading" />
        </div>
      </template>
    </BaseGridCard>
  </form>
</template>

<script lang="ts">
import useForm from '@/composables/useForm'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseProduct from '@/components/BaseProduct/BaseProduct.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputProducts from '@/components/BaseInputProducts/BaseInputProducts.vue'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import { defineComponent, PropType, ref } from 'vue'
import { array, boolean, object, string } from 'yup'

export default defineComponent({
  components: {
    BaseGridCard,
    BaseInputText,
    BaseButton,
    BaseProduct,
    BaseInputProducts,
    BaseInputToggleHorizontal
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props, { emit }) {
    const loading = ref(false)
    const schema = object({
      active: boolean().default(props.crossSell.active),
      title: string()
        .required('This field is required.')
        .default(props.crossSell.title),
      subtitle: string()
        .required('This field is required.')
        .default(props.crossSell.subtitle),
      triggerProductIds: array()
        .min(1, 'At least 1 trigger product is required.')
        .required('At least 1 trigger product is required.')
        .default(props.crossSell.triggerProductIds)
    }).defined()
    const { fields, getValues, handleSubmit } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const crossSell = await crossSellService.updateOneById(props.crossSell.id, getValues())
      emit('update:crossSell', crossSell)
      loading.value = false
    }
    return { fields, handleSubmit: handleSubmit(onSubmit), loading }
  }
})
</script>
