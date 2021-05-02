<template>
  <form @submit="handleSubmit" class="grid gap-4" autocomplete="off">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">Details</h3>
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
            'https://ucarecdn.com/dde5bd6a-2594-4081-8e47-342390c05639/gift.svg',
            'https://ucarecdn.com/3a77539f-c7da-460a-81f8-5954fc6cef44/truck.svg',
            'https://ucarecdn.com/8b1f1f20-b43a-4b96-be36-bb16e437fb35/coupon.svg',
            'https://ucarecdn.com/f9edb77e-70e8-4510-8ccc-ba3648a4d10b/mysterybox.png',
            'https://ucarecdn.com/e3f9d57b-3dd1-4145-ae50-9478e93f6634/pixelatedpresent.gif',
            'https://ucarecdn.com/83d06128-e7cf-4eee-8106-b038aca2b02f/freeshipping.gif'
          ]"
          v-model="fields.image.value.value"
          :error="fields.image.error.value"
          description="The image to be displayed along side the progress bar. Select one of our defaults, or upload your own."
          class="col-span-full sm:col-span-full"
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
import { computed, defineComponent, PropType, ref } from 'vue'
import useForm from '@/composables/useForm'
import { object, string } from 'yup'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputImage from '@/components/BaseInputImage/BaseInputImage.vue'
import progressBarService, { ProgressBar } from '@/services/api/services/progressBarService'
import BaseInputTriggerGroup from '@/components/BaseInputTriggerGroup/BaseInputTriggerGroup.vue'
import { requiredNumber, requiredString, triggerGroup } from '@/validators'

export default defineComponent({
  components: {
    BaseGridCard,
    BaseInputText,
    BaseButton,
    BaseInputImage,
    BaseInputTriggerGroup
  },
  props: {
    progressBar: {
      type: Object as PropType<ProgressBar>,
      required: true
    }
  },
  setup(props, { emit }) {
    const loading = ref(false)
    const schema = computed(() =>
      object({
        title: requiredString.default(props.progressBar.title),
        goal: requiredNumber.default(props.progressBar.goal),
        image: string()
          .required('Please select an image, or upload your own.')
          .default(props.progressBar.image),
        completionMessage: string().default(props.progressBar.completionMessage),
        triggerGroup: triggerGroup.default(props.progressBar.triggerGroup)
      }).defined()
    )
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const progressBar = await progressBarService.updateOneById(props.progressBar.id, getValues())
      emit('update:progressBar', progressBar)
      loading.value = false
    }
    return {
      loading,
      fields,
      modified,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
})
</script>
