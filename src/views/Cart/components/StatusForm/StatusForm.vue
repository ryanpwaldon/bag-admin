<template>
  <form @submit="handleSubmit">
    <BaseGridCard>
      <template #header>
        <h3 class="text-lg font-medium text-gray-800">Settings</h3>
      </template>
      <BaseInputToggleHorizontal label="Status" description="Turn the cart drawer on or off." v-model="fields.active.value.value" class="w-full" />
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Save" type="submit" :loading="loading" :disabled="!modified" />
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
import { computed, defineComponent, PropType, ref } from 'vue'

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
    const schema = computed(() => object({ active: boolean().default(props.modelValue.active) }).defined())
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      const cart = await cartService.updateOne(getValues())
      emit('update:modelValue', cart)
      loading.value = false
    }
    return { fields, modified, handleSubmit: handleSubmit(onSubmit), loading }
  }
})
</script>
