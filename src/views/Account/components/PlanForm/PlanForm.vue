<template>
  <BaseGridCard>
    <h3 class="mb-6 text-lg font-medium text-gray-700">Plan</h3>
    <BaseInputRadioGroup :label="plan" :options="plans" v-model="plan" name="plan" />
    <template #footer>
      <div class="flex justify-end">
        <BaseButton text="Save" type="submit" />
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
  { value: 'starter', label: 'Starter', meta1: '$0 / month', meta3: 'Cart only' },
  { value: 'premium', label: 'Growth', meta1: '$98 / month', meta3: 'Cart & offers' }
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
