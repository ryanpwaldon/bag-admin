<template>
  <form @submit="handleSubmit">
    <BaseCard>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-full">
          <p class="text-base font-medium leading-6 text-gray-700">Copy</p>
          <p class="text-sm text-gray-500">Use persuasive language to entice the user into to purchasing your product.</p>
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
      </div>
      <template #footer>
        <BaseButton class="ml-auto" text="Save" type="submit" :loading="loading" />
      </template>
    </BaseCard>
  </form>
</template>

<script lang="ts">
import useForm from '@/composables/useForm'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import { defineComponent, PropType, ref } from 'vue'
import { object, string } from 'yup'

export default defineComponent({
  components: {
    BaseCard,
    BaseInputText,
    BaseButton
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
      title: string()
        .required('This field is required.')
        .default(props.crossSell.title),
      subtitle: string()
        .required('This field is required.')
        .default(props.crossSell.subtitle)
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
