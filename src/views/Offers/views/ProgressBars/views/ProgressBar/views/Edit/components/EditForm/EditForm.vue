<template>
  <form @submit="handleSubmit" class="grid gap-4" autocomplete="off">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-700">Settings</h3>
      </template>
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
import { defineComponent, PropType, ref } from 'vue'
import useForm from '@/composables/useForm'
import { boolean, number, object, string } from 'yup'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputImage from '@/components/BaseInputImage/BaseInputImage.vue'
import progressBarService, { ProgressBar } from '@/services/api/services/progressBarService'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'

export default defineComponent({
  components: {
    BaseGridCard,
    BaseInputText,
    BaseButton,
    BaseInputImage,
    BaseInputToggleHorizontal
  },
  props: {
    progressBar: {
      type: Object as PropType<ProgressBar>,
      required: true
    }
  },
  setup(props, { emit }) {
    const loading = ref(false)
    const schema = object({
      title: string()
        .required('Title is required.')
        .default(props.progressBar.title),
      goal: number()
        .typeError('Please enter a valid number.')
        .required('Goal is required.')
        .default(props.progressBar.goal),
      image: string()
        .required('Please select an image, or upload your own.')
        .default(props.progressBar.image),
      completionMessage: string().default(props.progressBar.completionMessage),
      active: boolean().default(props.progressBar.active)
    }).defined()
    const { fields, getValues, handleSubmit } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const progressBar = await progressBarService.updateOneById(props.progressBar.id, getValues())
      emit('update:progressBar', progressBar)
      loading.value = false
    }
    return {
      loading,
      fields,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
})
</script>
