<template>
  <BaseLayout>
    <BaseHeader />
    <div class="grid gap-4">
      <BaseCard title="Offer type" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.">
        <BaseInputRadio name="offer type" v-model="selected" :options="radioOptions" />
        <template #footer>
          <BaseButton text="Next" @click="handleNext" />
        </template>
      </BaseCard>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseInputRadio from '@/components/BaseInputRadio/BaseInputRadio.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
import { OfferType } from '@/types/offer-type'

export default defineComponent({
  components: {
    BaseLayout,
    BaseCard,
    BaseHeader,
    BaseInputRadio,
    BaseButton
  },
  data: () => ({
    selected: OfferType.CrossSell,
    radioOptions: [
      { label: 'Cross sell', value: OfferType.CrossSell },
      { label: 'Up sell', value: OfferType.UpSell },
      { label: 'Discount', value: OfferType.Discount }
    ]
  }),
  methods: {
    handleNext() {
      if (this.selected === OfferType.CrossSell) this.$router.push({ name: 'create-cross-sell' })
      if (this.selected === OfferType.UpSell) this.$router.push({ name: 'create-up-sell' })
      if (this.selected === OfferType.Discount) this.$router.push({ name: 'create-discount' })
    }
  }
})
</script>
