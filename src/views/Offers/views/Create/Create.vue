<template>
  <BaseHeader />
  <BaseLoader v-if="loading" />
  <div class="grid gap-6" v-else>
    <BaseUpgradePrompt v-if="displayUpgradePrompt" />
    <BaseGridCard>
      <h3 class="mb-6 text-lg font-medium text-gray-800">Select offer type</h3>
      <BaseInputRadioGroup name="offerType" :options="options" v-model="selected">
        <template v-for="(option, i) in options" v-slot:[option.value] :key="i">
          <div class="flex items-center justify-between">
            <div class="flex flex-col text-sm">
              <p class="font-medium">{{ option.title }}</p>
              <p class="text-gray-500">{{ option.description }}</p>
            </div>
            <BaseBadge v-if="option.disabled" text="Free limit reached" theme="grayOutline" />
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
import BaseUpgradePrompt from '@/components/BaseUpgradePrompt/BaseUpgradePrompt.vue'
import crossSellService from '@/services/api/services/crossSellService'
import progressBarService from '@/services/api/services/progressBarService'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import { useStore } from 'vuex'

enum RouteNames {
  CrossSell = 'create-cross-sell',
  ProgressBar = 'create-progress-bar'
}

const options = [
  {
    value: RouteNames.CrossSell,
    disabled: false,
    title: 'Cross sell',
    description: 'Display a related product based on an item already added to cart.'
  },
  {
    value: RouteNames.ProgressBar,
    disabled: false,
    title: 'Progress bar',
    description: 'Display a visual incentive to encourage customers to spend more.'
  }
]

export default defineComponent({
  components: {
    BaseGridCard,
    BaseHeader,
    BaseInputRadioGroup,
    BaseButton,
    BaseBadge,
    BaseUpgradePrompt,
    BaseLoader
  },
  setup() {
    const selected = ref()
    const store = useStore()
    const loading = ref(true)
    const router = useRouter()
    const displayUpgradePrompt = ref(false)
    const userIsOnFreePlan = store.state.user?.subscription === 'Free (v1)'
    const handleNext = () => router.push({ name: selected.value })
    const totalCrossSells = ref(0 as number)
    const totalProgressBars = ref(0 as number)
    const fetchTotals = async () => {
      totalCrossSells.value = (await crossSellService.findAll({ page: 1, limit: 1 })).total
      if (totalCrossSells.value >= 1 && userIsOnFreePlan) {
        options[0].disabled = true
        displayUpgradePrompt.value = true
      }
      totalProgressBars.value = (await progressBarService.findAll({ page: 1, limit: 1 })).total
      if (totalProgressBars.value >= 1 && userIsOnFreePlan) {
        options[1].disabled = true
        displayUpgradePrompt.value = true
      }
      loading.value = false
    }
    fetchTotals()
    return { displayUpgradePrompt, loading, options, selected, handleNext }
  }
})
</script>
