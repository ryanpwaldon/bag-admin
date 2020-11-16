<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <BaseInputToggleHorizontal
        label="Status"
        description="If set to off, our cart will not be available to your customers."
        v-model="fields.active.value.value"
        class="w-full"
      />
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Save" type="submit" :loading="loading" />
        </div>
      </template>
    </BaseGridCard>
  </form>
</template>

<script lang="ts">
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'
import cartService, { Cart } from '@/services/api/services/cartService'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import useForm from '@/composables/useForm'
import { boolean, object } from 'yup'
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  components: {
    BaseButton,
    BaseGridCard,
    BaseInputToggleHorizontal
  },
  props: {
    modelValue: {
      type: Object as PropType<Cart>,
      required: true
    }
  },
  setup(props, { emit }) {
    const loading = ref(false)
    const schema = object({ active: boolean().default(props.modelValue.active) }).defined()
    const { fields, getValues, handleSubmit } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const cart = await cartService.updateOne(getValues())
      emit('update:modelValue', cart)
      loading.value = false
    }
    return { fields, handleSubmit: handleSubmit(onSubmit), loading }
  }
})
</script>
