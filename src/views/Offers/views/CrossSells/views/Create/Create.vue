<template>
  <BaseHeader />
  <form @submit="handleSubmit" class="grid gap-4" autocomplete="off">
    <BaseCard>
      <div class="grid grid-cols-12 gap-y-6 gap-x-4">
        <BaseInputProduct
          label="Product"
          description="The product you are cross selling."
          name="productId"
          v-model="fields.productId.value.value"
          :error="fields.productId.error.value"
          class="max-w-md col-span-full"
        />
        <BaseInputText
          name="title"
          label="Title"
          v-model="fields.title.value.value"
          :error="fields.title.error.value"
          placeholder="Add some tape"
          class="max-w-md col-span-full"
          description="The call to action. Keep it short and simple."
        />
        <BaseInputText
          name="subtitle"
          label="Subtitle"
          v-model="fields.subtitle.value.value"
          :error="fields.subtitle.error.value"
          placeholder="For only $8.95"
          class="max-w-md col-span-full"
          description="Add some additional information."
        />
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
import useForm from '@/composables/useForm'
import { computed, defineComponent, ref } from 'vue'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import crossSellService from '@/services/api/services/crossSellService'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputProduct from '@/components/BaseInputProduct/BaseInputProduct.vue'
import { triggerGroup, requiredString, crossSellTitle, crossSellSubtitle } from '@/validators'
import BaseInputTriggerGroup from '@/components/BaseInputTriggerGroup/BaseInputTriggerGroup.vue'

export default defineComponent({
  components: {
    BaseCard,
    BaseHeader,
    BaseButton,
    BaseInputText,
    BaseInputProduct,
    BaseInputTriggerGroup
  },
  setup() {
    const loading = ref(false)
    const router = useRouter()
    const schema = computed(() =>
      object({
        triggerGroup,
        title: crossSellTitle,
        subtitle: crossSellSubtitle,
        productId: requiredString
      }).defined()
    )
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
