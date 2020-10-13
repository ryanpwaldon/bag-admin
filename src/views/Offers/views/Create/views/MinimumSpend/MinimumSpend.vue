<template>
  <BaseLayout>
    <BaseHeader />
    <Form @submit="submit">
      <BaseCard title="Minimum spend" description="Push customers to spend a minimum amount before checking out">
        <div class="grid grid-cols-12 gap-6">
          <BaseInputText
            class="col-span-12 sm:col-span-8"
            type="number"
            name="price target"
            rules="required|numeric"
            label="Set a price target"
            placeholder="$50.00"
            description="Customers must spend at least this amount to recieve their discount"
          />
          <BaseInputRadio
            class="col-span-12 sm:col-span-8"
            title="Select a discount type"
            name="discount type"
            initial-value="percentage"
            :fields="[
              { label: 'Percentage', value: 'percentage' },
              { label: 'Fixed amount', value: 'fixedAmount' },
              { label: 'Free shipping', value: 'freeShipping' }
            ]"
          />
          <BaseInputText
            class="col-span-12 sm:col-span-8"
            type="number"
            name="discount"
            rules="required|numeric|min_value:1|max_value:99"
            label="Discount (percentage off total order)"
            placeholder="5%"
            description="The discount the customer will receive in return for reaching the price target"
          />
        </div>
        <template #footer>
          <div class="grid grid-flow-col gap-4 ml-auto">
            <router-link to="/offers">
              <BaseButton text="Cancel" theme="white" />
            </router-link>
            <BaseButton text="Create" type="submit" />
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
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputRadio from '@/components/BaseInputRadio/BaseInputRadio.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Create',
  components: {
    Form,
    BaseLayout,
    BaseCard,
    BaseHeader,
    BaseInputText,
    BaseInputRadio,
    BaseButton
  },
  methods: {
    submit(data: object) {
      console.log(data)
    }
  }
})
</script>
