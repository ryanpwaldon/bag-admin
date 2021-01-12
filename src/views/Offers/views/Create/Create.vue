<template>
  <BaseHeader />
  <div class="grid gap-4">
    <BaseGridCard>
      <h3 class="mb-6 text-lg font-medium text-gray-700">Offer type</h3>
      <BaseInputRadioGroup name="offerType" :options="options" v-model="selected">
        <template v-for="(option, i) in options" v-slot:[option.value] :key="i">
          <div class="flex items-center justify-between">
            <div class="flex flex-col text-sm">
              <p class="font-medium">{{ option.title }}</p>
              <p class="text-gray-500">{{ option.description }}</p>
            </div>
            <BaseBadge v-if="option.disabled" text="Coming soon" theme="grayOutline" />
          </div>
        </template>
      </BaseInputRadioGroup>
      <template #footer>
        <div class="flex justify-end">
          <BaseButton text="Next" @click="handleNext" />
        </div>
      </template>
    </BaseGridCard>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseInputRadioGroup from '@/components/BaseInputRadioGroup/BaseInputRadioGroup.vue'

enum RouteNames {
  CrossSell = 'create-cross-sell',
  UpSell = 'create-up-sell',
  Discount = 'create-discount'
}

const options = [
  {
    value: RouteNames.CrossSell,
    disabled: false,
    title: 'Cross sell',
    description: 'Recommend a related product based on an item already added to cart.'
  },
  {
    value: RouteNames.UpSell,
    disabled: true,
    title: 'Up sell',
    description: 'Suggest a product upgrade for an item already added to cart.'
  },
  {
    value: RouteNames.Discount,
    disabled: true,
    title: 'Discount',
    description: 'Encourage customers to spend more by offering a discount in return.'
  }
]

export default defineComponent({
  components: {
    BaseGridCard,
    BaseHeader,
    BaseInputRadioGroup,
    BaseButton,
    BaseBadge
  },
  setup() {
    const router = useRouter()
    const selected = ref(RouteNames.CrossSell)
    const handleNext = () => router.push({ name: selected.value })
    return { options, selected, handleNext }
  }
})
</script>
