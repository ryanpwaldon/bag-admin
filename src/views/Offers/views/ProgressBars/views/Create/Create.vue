<template>
  <BaseHeader />
  <form @submit="handleSubmit" class="grid gap-4" autocomplete="off">
    <BaseCard>
      <div class="grid grid-cols-12 gap-6">
        <BaseInputText
          name="title"
          label="Title"
          v-model="fields.title.value.value"
          :error="fields.title.error.value"
          placeholder="Get a free gift"
          description="Describe the reward the customer will receive."
          class="col-span-full sm:col-span-7"
        />
        <BaseInputText
          name="goal"
          label="Goal"
          v-model="fields.goal.value.value"
          :error="fields.goal.error.value"
          placeholder="50.00"
          description="The amount the customer must spend to receive their reward."
          class="col-span-full sm:col-span-7"
        />
        <BaseInputText
          name="completion message"
          label="Completion message"
          v-model="fields.completionMessage.value.value"
          :error="fields.completionMessage.error.value"
          placeholder="Your free gift will be included in delivery"
          description="A message to be displayed once the goal is reached (optional)."
          class="col-span-full sm:col-span-7"
        />
        <BaseInputImage
          label="Image"
          :default-image-urls="[
            'https://ucarecdn.com/be2bc202-2905-47ff-bd09-5a4fd6f87758/gift.svg',
            'https://ucarecdn.com/83862ae6-f8d8-40f6-b28e-6169d665d32a/truck.svg',
            'https://ucarecdn.com/91568390-06c2-430e-a34e-555b9f4f1b9f/coupon.svg'
          ]"
          v-model="fields.image.value.value"
          :error="fields.image.error.value"
          description="The image to be displayed along side the progress bar. Select one of our defaults, or upload your own."
          class="col-span-full sm:col-span-full"
        />
      </div>
      <template #footer>
        <BaseButton class="ml-auto" text="Create" type="submit" :loading="loading" />
      </template>
    </BaseCard>
  </form>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import useForm from '@/composables/useForm'
import { number, object, string } from 'yup'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputImage from '@/components/BaseInputImage/BaseInputImage.vue'
import progressBarService from '@/services/api/services/progressBarService'

const schema = object({
  title: string().required('Title is required.'),
  goal: number()
    .typeError('Please enter a valid number.')
    .required('Goal is required.'),
  image: string().required('Please select an image, or upload your own.'),
  completionMessage: string()
}).defined()

export default defineComponent({
  components: {
    BaseHeader,
    BaseCard,
    BaseInputText,
    BaseButton,
    BaseInputImage
  },
  setup() {
    const loading = ref(false)
    const router = useRouter()
    const { fields, getValues, handleSubmit } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const values = getValues()
      const { id } = await progressBarService.create(values)
      router.push({ name: 'progress-bars', params: { id } })
    }
    return {
      loading,
      fields,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
})
</script>
