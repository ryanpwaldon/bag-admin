<template>
  <BaseLayout>
    <BaseHeader />
    <Form @submit="handleSubmit" class="grid gap-4">
      <BaseCard title="Offer type" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.">
        <BaseInputRadio
          name="type"
          initial-value="1"
          :fields="[
            { label: 'Minimum spend', value: '1' },
            { label: 'Product add-on', value: '2' },
            { label: 'Product upgrade', value: '3' }
          ]"
        />
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
export default defineComponent({
  name: 'Create',
  components: {
    Form,
    BaseLayout,
    BaseCard,
    BaseHeader,
    BaseInputRadio,
    BaseButton
  },
  methods: {
    handleSubmit({ type }: { type: string }) {
      if (type === '1') this.$router.push('/offers/create/minimum-spend')
      if (type === '2') this.$router.push('/offers/create/product-add-on')
      if (type === '3') this.$router.push('/offers/create/product-upgrade')
    }
  }
})
</script>
