<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-700">Details</h3>
      </template>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-full">
          <p class="text-base font-medium leading-6 text-gray-700">Product</p>
          <p class="max-w-xl text-sm text-gray-500">
            The product being cross-sold.
          </p>
        </div>
        <BaseProduct :title="crossSell.product?.title" :image="crossSell.product?.featuredImage?.originalSrc" class="sm:col-span-6 col-span-full" />
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
        <div class="h-2 -mx-6 border-b border-gray-200 col-span-full" />
        <BaseInputTriggerGroup
          name="triggerGroup"
          label="Triggers"
          v-model="fields.triggerGroup.value.value"
          :error="fields.triggerGroup.error.value"
          class="col-span-full"
        />
      </div>
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Save" type="submit" :loading="loading" :disabled="!modified" />
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
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import BaseInputTriggerGroup from '@/components/BaseInputTriggerGroup/BaseInputTriggerGroup.vue'
import { computed, defineComponent, PropType, ref } from 'vue'
import { requiredString, triggerGroup } from '@/validators'
import { object } from 'yup'

export default defineComponent({
  components: {
    BaseGridCard,
    BaseInputText,
    BaseButton,
    BaseProduct,
    BaseInputTriggerGroup
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props, { emit }) {
    const loading = ref(false)
    const schema = computed(() =>
      object({
        triggerGroup: triggerGroup.default(props.crossSell.triggerGroup),
        title: requiredString.default(props.crossSell.title),
        subtitle: requiredString.default(props.crossSell.subtitle)
      }).defined()
    )
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const crossSell = await crossSellService.updateOneById(props.crossSell.id, getValues())
      emit('update:crossSell', crossSell)
      loading.value = false
    }
    return { fields, modified, handleSubmit: handleSubmit(onSubmit), loading }
  }
})
</script>
