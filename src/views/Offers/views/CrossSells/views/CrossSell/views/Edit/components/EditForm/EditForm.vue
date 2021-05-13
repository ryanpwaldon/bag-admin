<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">Details</h3>
      </template>
      <div class="grid grid-cols-12 gap-6">
        <BaseInputProduct
          label="Product"
          :disabled="true"
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
          placeholder="Need some tape?"
          class="max-w-md col-span-full"
          description="The call to action. Keep it short and simple."
        />
        <BaseInputText
          name="subtitle"
          label="Subtitle"
          v-model="fields.subtitle.value.value"
          :error="fields.subtitle.error.value"
          placeholder="Add for $8.95"
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
        <div class="flex justify-end">
          <BaseButton text="Save" type="submit" :loading="loading" :disabled="!modified" />
        </div>
      </template>
    </BaseGridCard>
  </form>
</template>

<script lang="ts">
import { object } from 'yup'
import useForm from '@/composables/useForm'
import { computed, defineComponent, PropType, ref } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputProduct from '@/components/BaseInputProduct/BaseInputProduct.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import { crossSellSubtitle, crossSellTitle, requiredString, triggerGroup } from '@/validators'
import BaseInputTriggerGroup from '@/components/BaseInputTriggerGroup/BaseInputTriggerGroup.vue'

export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
    BaseInputText,
    BaseInputProduct,
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
        productId: requiredString.default(props.crossSell.productId),
        title: crossSellTitle.default(props.crossSell.title),
        subtitle: crossSellSubtitle.default(props.crossSell.subtitle)
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
