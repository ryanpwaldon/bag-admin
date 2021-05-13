<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">Settings</h3>
      </template>
      <BaseInputToggleHorizontal label="Status" description="Turn this offer on or off." v-model="fields.active.value.value" class="w-full" />
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Save" type="submit" :loading="loading" :disabled="!modified" />
        </div>
      </template>
    </BaseGridCard>
  </form>
</template>

<script lang="ts">
import { boolean, object } from 'yup'
import useForm from '@/composables/useForm'
import { computed, defineComponent, PropType, ref } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import progressBarService, { ProgressBar } from '@/services/api/services/progressBarService'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'

export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
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
    const schema = computed(() => object({ active: boolean().default(props.progressBar.active) }).defined())
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const progressBar = await progressBarService.updateOneById(props.progressBar.id, getValues())
      emit('update:progressBar', progressBar)
      loading.value = false
    }
    return { fields, modified, handleSubmit: handleSubmit(onSubmit), loading }
  }
})
</script>
