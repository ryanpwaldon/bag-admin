<template>
  <div class="flex flex-col items-center w-full text-center">
    <form class="flex flex-col w-full p-6 mt-8 bg-white rounded-md shadow" @submit="handleSubmit" autocomplete="off">
      <Ticket class="w-6 m-auto transform -rotate-3" />
      <p class="mt-2 text-lg font-medium text-gray-800">Have a code?</p>
      <p class="mt-2 text-sm text-gray-500">Enter it below</p>
      <BaseInputText
        :mono="true"
        class="mt-6"
        :center="true"
        placeholder="Your code"
        v-model="fields.code.value.value"
        :error="fields.code.error.value"
      />
      <BaseButton class="w-full mt-3" size="md" theme="black" text="Submit" type="submit" :loading="loading" />
      <p class="mt-3 text-sm text-red-500" v-if="error">{{ error }}</p>
    </form>
    <router-link class="mt-5 text-sm text-gray-500 focus:outline-none" :to="{ name: 'subscribe' }">Go back</router-link>
  </div>
</template>

<script lang="ts">
import { object } from 'yup'
import { useRouter } from 'vue-router'
import Ticket from '@/icons/Ticket.vue'
import useForm from '@/composables/useForm'
import { requiredString } from '@/validators'
import { computed, defineComponent, ref } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import couponService from '@/services/api/services/couponService'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import useCreateSubscription from '@/composables/useCreateSubscription'
export default defineComponent({
  components: { BaseButton, BaseInputText, Ticket },
  setup() {
    const router = useRouter()
    const loading = ref(false)
    const error = ref(null as null | string)
    const createSubscription = useCreateSubscription()
    const schema = computed(() =>
      object({
        code: requiredString
      }).defined()
    )
    const { fields, getValues, handleSubmit } = useForm(schema)
    const onSubmit = async () => {
      error.value = null
      loading.value = true
      const { code } = getValues()
      try {
        await couponService.redeem(code)
        await createSubscription('Free (v1)', true)
        router.push({ name: 'home' })
      } catch (err) {
        error.value = 'Code is not valid'
      }
      loading.value = false
    }
    return {
      error,
      fields,
      loading,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
})
</script>
