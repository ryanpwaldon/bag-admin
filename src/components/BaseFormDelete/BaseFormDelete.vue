<template>
  <Form @submit="handleSubmit">
    <BaseCard title="Delete" description="Once you delete this offer, you will lose all data associated with it.">
      <template #footer>
        <BaseButton text="Delete" theme="red" type="submit" :loading="loading" class="ml-auto" />
      </template>
    </BaseCard>
  </Form>
</template>

<script lang="ts">
import { Form } from 'vee-validate'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { Offer } from '@/services/api/services/offerService'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseFormDelete',
  components: {
    Form,
    BaseCard,
    BaseButton
  },
  props: {
    submit: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    loading: false
  }),
  methods: {
    async handleSubmit(data: Partial<Offer>) {
      this.loading = true
      await this.submit(data)
      this.loading = false
    }
  }
})
</script>
