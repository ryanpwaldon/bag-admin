<template>
  <BaseHeader />
  <form @submit="handleSubmit" class="grid gap-4" autocomplete="off">
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
          placeholder="Need some tape?"
          class="col-span-full sm:col-span-6"
        />
        <BaseInputText
          name="subtitle"
          label="Subtitle"
          v-model="fields.subtitle.value.value"
          :error="fields.subtitle.error.value"
          placeholder="Add for $8.95"
          class="col-span-full sm:col-span-6"
        />
        <div class="h-px -mx-6 bg-gray-300 col-span-full" />
        <BaseInputTriggerGroup
          name="triggerGroup"
          label="Triggers"
          v-model="fields.triggerGroup.value.value"
          :error="fields.triggerGroup.error.value"
          class="col-span-full"
        />
      </div>
      <template #footer>
        <BaseButton class="ml-auto" text="Create" type="submit" :loading="loading" />
      </template>
    </BaseCard>
  </form>
</template>

<script lang="ts">
import { object } from 'yup'
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import useForm from '@/composables/useForm'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import { triggerGroup, requiredString } from '@/validators'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import crossSellService from '@/services/api/services/crossSellService'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputProducts from '@/components/BaseInputProducts/BaseInputProducts.vue'
import BaseInputTriggerGroup from '@/components/BaseInputTriggerGroup/BaseInputTriggerGroup.vue'

const schema = object({
  triggerGroup,
  title: requiredString,
  subtitle: requiredString,
  productId: requiredString
}).defined()

export default defineComponent({
  components: {
    BaseHeader,
    BaseCard,
    BaseInputText,
    BaseInputProducts,
    BaseButton,
    BaseInputTriggerGroup
  },
  setup() {
    const loading = ref(false)
    const router = useRouter()
    const { fields, getValues, handleSubmit } = useForm(schema)
    const onSubmit = async () => {
      const values = getValues()
      loading.value = true
      const { id } = await crossSellService.create(values)
      router.push({ name: 'cross-sells', params: { id } })
    }
    return {
      loading,
      fields,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
})
</script>
