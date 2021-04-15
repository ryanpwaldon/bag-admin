<template>
  <BaseGridCard>
    <h3 class="mb-5 text-lg font-medium text-gray-700">Plan</h3>
    <BaseInputRadioGroup name="plan" :options="options" v-model="fields.subscription.value.value">
      <template v-for="(option, i) in options" v-slot:[option.value] :key="i">
        <div class="flex justify-between text-sm">
          <div class="flex space-x-3">
            <p class="font-medium">{{ option.subscription.title }}</p>
            <BaseBadge v-if="option.subscription.legacy" text="Legacy" theme="grayOutline" />
            <BaseBadge
              theme="blue"
              :text="`Try it free for ${option.subscription.trialDays} days`"
              v-if="!option.subscription.subscribed && option.subscription.trialAvailable"
            />
          </div>
          <p class="flex">
            <span class="font-medium">${{ option.subscription.price }}</span>
            <span class="text-gray-500">&nbsp;/&nbsp;{{ option.subscription.displayInterval }}</span>
          </p>
        </div>
      </template>
    </BaseInputRadioGroup>
    <template #footer>
      <div class="flex items-center justify-between">
        <router-link :to="{ name: 'pricing' }" class="font-medium text-blue-600">View plans</router-link>
        <BaseButton text="Save" type="submit" :loading="submitting" :disabled="!modified" @click="handleSubmit" />
      </div>
    </template>
  </BaseGridCard>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { object, string } from 'yup'
import useForm from '@/composables/useForm'
import { computed, defineComponent, PropType, ref } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import useCreateSubscription from '@/composables/useCreateSubscription'
import { SubscriptionExtended } from '@/services/api/services/subscriptionService'
import BaseInputRadioGroup from '@/components/BaseInputRadioGroup/BaseInputRadioGroup.vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'

export default defineComponent({
  components: {
    BaseGridCard,
    BaseInputRadioGroup,
    BaseButton,
    BaseBadge
  },
  props: {
    subscriptions: {
      type: Array as PropType<SubscriptionExtended[]>,
      required: true
    }
  },
  setup(props) {
    const { state } = useStore()
    const submitting = ref(false)
    const createSubscription = useCreateSubscription()
    const options = computed(() =>
      props.subscriptions.map(subscription => ({
        value: subscription.name,
        disabled: false,
        subscription
      }))
    )
    const subscription = computed(() => state.user.subscription)
    const schema = computed(() => object({ subscription: string().default(subscription.value) }).defined())
    const { fields, getValues, handleSubmit, modified } = useForm(schema)
    const onSubmit = async () => {
      submitting.value = true
      const values = getValues()
      const subscription = props.subscriptions.find(item => item.name === values.subscription) as SubscriptionExtended
      await createSubscription(subscription)
    }
    return { options, fields, submitting, modified, handleSubmit: handleSubmit(onSubmit) }
  }
})
</script>
