<template>
  <div class="flex flex-col justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="w-auto h-12 mx-auto" src="@/assets/img/logo.svg" alt="Logo" />
      <h2 class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
        Sign in to your account
      </h2>
      <BaseCard class="mt-8">
        <Form @submit="handleSubmit">
          <BaseInputText label="Shop origin" name="shopOrigin" placeholder="your-shop.myshopify.com" />
          <BaseButton text="Sign in" type="submit" :full="true" class="mt-6" />
        </Form>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import installationService from '@/services/api/services/installationService'
export default {
  components: {
    Form,
    BaseCard,
    BaseButton,
    BaseInputText
  },
  data: () => ({
    loading: false
  }),
  methods: {
    handleSubmit({ shopOrigin }) {
      this.loading = true
      installationService.install(shopOrigin)
    }
  }
}
</script>
