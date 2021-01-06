<template>
  <BaseGridCard>
    <h3 class="mb-6 text-lg font-medium text-gray-700">Plan</h3>
    <BaseInputRadioGroup label="Plan" name="plan" :options="radioGroupOptions" v-model="fields.subscription.value.value" />
    <template #footer>
      <div class="flex justify-end">
        <BaseButton text="Save" type="submit" :loading="submitting" :disabled="!modified" @click="handleSubmit" />
      </div>
    </template>
  </BaseGridCard>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { object, string } from 'yup'
import { useRouter } from 'vue-router'
import useForm from '@/composables/useForm'
import { defineComponent, PropType, ref } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import convertShopifyInterval from '@/utils/convertShopifyInterval'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import useCreateSubscription from '@/composables/useCreateSubscription'
import { Subscription } from '@/services/api/services/subscriptionService'
import BaseInputRadioGroup, { RadioGroupOption } from '@/components/BaseInputRadioGroup/BaseInputRadioGroup.vue'

export default defineComponent({
  components: {
    BaseGridCard,
    BaseInputRadioGroup,
    BaseButton
  },
  props: {
    subscriptions: {
      type: Array as PropType<Subscription[]>,
      required: true
    }
  },
  computed: {
    radioGroupOptions(): RadioGroupOption[] {
      return this.subscriptions.map(item => ({
        value: item.name,
        label: item.title,
        meta3: `$${item.price} / ${convertShopifyInterval(item.interval)}`
      }))
    }
  },
  setup(props) {
    const router = useRouter()
    const { state } = useStore()
    const submitting = ref(false)
    const { createFreeSubscription, createPaidSubscription } = useCreateSubscription()
    const schema = object({ subscription: string().default(state.user.subscription) }).defined()
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      submitting.value = true
      const values = getValues()
      const subscription = props.subscriptions.find(item => item.name === values.subscription) as Subscription
      if (subscription.price !== 0) return createPaidSubscription(subscription.name)
      await createFreeSubscription(subscription.name)
      router.push({ name: 'home' })
    }
    return { fields, submitting, modified, handleSubmit: handleSubmit(onSubmit) }
  }
})
</script>
