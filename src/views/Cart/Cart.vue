<template>
  <BaseHeader>
    <template #actions>
      <router-link to="/offers/create">
        <BaseButton text="Preview" />
      </router-link>
    </template>
  </BaseHeader>
  <form>
    <BaseTask title="Status" description="Turn this on to use the cart on your storefront.">
      Hello
    </BaseTask>
  </form>
</template>

<script lang="ts">
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseTask from '@/components/BaseTask/BaseTask.vue'
// import useForm from '@/composables/useForm'
// import { boolean, object } from 'yup'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseHeader,
    BaseButton,
    BaseTask
  }
  // setup() {
  //   const { values, updateValue, errors, handleSubmit } = useForm(
  //     object({
  //       quantity: boolean()
  //         .typeError('Quantity must be a number.')
  //         .required('Quantity is required.')
  //     }).defined()
  //   )
  //   const onSubmit = () => {
  //     console.log(values.value)
  //   }
  //   return {
  //     values,
  //     errors,
  //     updateValue,
  //     handleSubmit: handleSubmit(onSubmit)
  //   }
  // }
})
</script>
