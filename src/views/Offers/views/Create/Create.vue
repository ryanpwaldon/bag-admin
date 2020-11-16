<template>
  <BaseHeader />
  <div class="grid gap-4">
    <BaseGridCard>
      <BaseInputRadioGroup label="Offer type" name="offerType" v-model="selected" :options="options" />
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Next" @click="handleNext" />
        </div>
      </template>
    </BaseGridCard>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseInputRadioGroup, { RadioGroupOption } from '@/components/BaseInputRadioGroup/BaseInputRadioGroup.vue'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

enum RouteNames {
  CrossSell = 'create-cross-sell',
  UpSell = 'create-up-sell',
  Discount = 'create-discount'
}

const options: RadioGroupOption[] = [
  { value: RouteNames.CrossSell, label: 'Cross sell', meta3: 'Recommend a related product based on an item already added to cart.' },
  { value: RouteNames.UpSell, label: 'Up sell', meta3: 'Suggest a product upgrade for an item already added to cart.', disabled: true },
  { value: RouteNames.Discount, label: 'Discount', meta3: 'Encourage customers to spend more by offering a discount in return.', disabled: true }
]

export default defineComponent({
  components: {
    BaseGridCard,
    BaseHeader,
    BaseInputRadioGroup,
    BaseButton
  },
  setup() {
    const selected = ref(RouteNames.CrossSell)
    const router = useRouter()
    const handleNext = () => router.push({ name: selected.value })
    return { options, selected, handleNext }
  }
})
</script>
