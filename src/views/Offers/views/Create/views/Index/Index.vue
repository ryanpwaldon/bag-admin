<template>
  <BaseLayout>
    <BaseHeader />
    <Form @submit="handleSubmit" class="grid gap-4">
      <BaseCard title="Offer type" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.">
        <BaseInputRadio name="type" :fields="fields" />
        <template #footer>
          <div class="grid grid-flow-col gap-4 ml-auto">
            <router-link to="/offers">
              <BaseButton text="Cancel" theme="white" />
            </router-link>
            <BaseButton text="Next →" type="submit" />
          </div>
        </template>
      </BaseCard>
    </Form>
  </BaseLayout>
</template>

<script lang="ts">
import { Form } from 'vee-validate'
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseInputRadio from '@/components/BaseInputRadio/BaseInputRadio.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
import { OfferType } from '@/services/api/services/offerService'
export default defineComponent({
  components: {
    Form,
    BaseLayout,
    BaseCard,
    BaseHeader,
    BaseInputRadio,
    BaseButton
  },
  data: () => ({
    fields: [
      { label: 'Product recommendation', value: OfferType.ProductAddOn },
      { label: 'Product upgrade', value: OfferType.ProductUpgrade },
      { label: 'Minimum spend', value: OfferType.MinimumSpend }
    ]
  }),
  methods: {
    handleSubmit({ type }: { type: OfferType }) {
      this.$router.push({ name: 'create-offer-type', params: { type } })
    }
  }
})
</script>
