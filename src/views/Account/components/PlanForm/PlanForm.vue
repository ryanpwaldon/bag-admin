<template>
  <BaseGridCard>
    <template #header>
      <h3 class="text-lg font-medium text-gray-700">Plan</h3>
    </template>
    <BaseInputRadioGroup :label="plan" :options="plans" v-model="plan" name="plan" />
    <template #footer>
      <div class="flex justify-end">
        <BaseButton text="Save" type="submit" :loading="loading" />
      </div>
    </template>
  </BaseGridCard>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseInputRadioGroup, { RadioGroupOption } from '@/components/BaseInputRadioGroup/BaseInputRadioGroup.vue'
import { defineComponent, ref } from 'vue'

const plans: RadioGroupOption[] = [
  { value: 'free', label: 'Free', meta1: '$0 / month', meta3: 'Basic features' },
  { value: 'premium', label: 'Premium', meta1: '$48 / month', meta3: 'Premium features' }
]

export default defineComponent({
  components: {
    BaseGridCard,
    BaseInputRadioGroup,
    BaseButton
  },
  setup() {
    const plan = ref('free')
    return { plans, plan }
  }
})
</script>
