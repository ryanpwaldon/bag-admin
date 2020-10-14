<template>
  <Form @submit="handleSubmit">
    <BaseCard title="Product suggestion" description="Suggest a product based on the items already added to cart">
      <div class="grid grid-cols-12 gap-6">
        <BaseInputHidden name="type" :initial-value="schema.type" />
        <BaseInputText
          name="title"
          rules="required|alpha_spaces"
          label="Title"
          placeholder="Add a pencil"
          description="The title of the offer card."
          class="col-span-12 sm:col-span-6"
          :initial-value="schema.title"
        />
        <BaseInputText
          name="subtitle"
          rules="required"
          label="Subtitle"
          placeholder="Faber Casel 2B"
          description="The subtitle of the offer card."
          class="col-span-12 sm:col-span-6"
          :initial-value="schema.subtitle"
        />
        <BaseInputProducts
          class="col-span-12"
          name="productId"
          label="Product"
          rules="required"
          description="The product you would like to dynamically display to the user."
          :initial-value="schema.productId"
        />
        <BaseInputProducts
          class="col-span-12"
          name="triggers"
          label="Trigger products"
          rules="required"
          description="Trigger products determine whether the product suggestion will be displayed to the user. The product suggestion will only be displayed if at least on of the trigger products are currently in the user's cart."
          :initial-value="schema.triggers"
        />
        <BaseInputToggle
          class="col-span-12 sm:col-span-6"
          name="active"
          label="Active"
          description="Make this offer visible to your customers."
          :initial-value="schema.active"
        />
      </div>
      <template #footer>
        <BaseButton class="ml-auto" :text="createMode ? 'Create' : 'Save'" type="submit" :loading="loading" />
      </template>
    </BaseCard>
  </Form>
</template>

<script lang="ts">
import { Form } from 'vee-validate'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputHidden from '@/components/BaseInputHidden/BaseInputHidden.vue'
import BaseInputProducts from '@/components/BaseInputProducts/BaseInputProducts.vue'
import BaseInputToggle from '@/components/BaseInputToggle/BaseInputToggle.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { Offer, OfferType } from '@/services/api/services/offerService'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Create',
  components: {
    Form,
    BaseCard,
    BaseInputText,
    BaseInputProducts,
    BaseInputHidden,
    BaseInputToggle,
    BaseButton
  },
  props: {
    data: {
      type: Object as PropType<Offer>,
      default: () => ({})
    },
    type: {
      type: Object as PropType<OfferType>,
      required: false
    },
    submit: {
      type: Function as PropType<(data: Partial<Offer>) => void>,
      required: true
    }
  },
  data: () => ({
    loading: false
  }),
  computed: {
    createMode(): boolean {
      return !this.data
    },
    schema(): Partial<Offer> {
      return Object.assign(
        {
          type: this.type,
          active: true,
          discountId: '',
          title: '',
          subtitle: '',
          productId: '',
          triggers: []
        },
        this.data
      )
    }
  },
  methods: {
    async handleSubmit(data: Partial<Offer>) {
      this.loading = true
      await this.submit(data)
      this.loading = false
    }
  }
})
</script>
