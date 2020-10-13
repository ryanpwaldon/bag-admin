<template>
  <BaseLayout>
    <BaseHeader />
    <Form @submit="submit">
      <BaseCard title="Product suggestion" description="Suggest a product based on the items already added to cart">
        <div class="grid grid-cols-12 gap-6">
          <BaseInputHidden name="type" initial-value="productAddOn" />
          <BaseInputText
            name="title"
            rules="required|alpha_spaces"
            label="Title"
            placeholder="Add a pencil"
            description="The title of the offer card."
            class="col-span-12 sm:col-span-6"
          />
          <BaseInputText
            name="subtitle"
            rules="required"
            label="Subtitle"
            placeholder="Faber Casel 2B"
            description="The subtitle of the offer card."
            class="col-span-12 sm:col-span-6"
          />
          <BaseInputProducts
            class="col-span-12"
            name="productId"
            label="Product"
            rules="required|array_single"
            description="The product you would like to dynamically display to the user."
          />
          <BaseInputProducts
            class="col-span-12"
            name="triggers"
            label="Trigger products"
            rules="required"
            description="Trigger products determine whether the product suggestion will be displayed to the user. The product suggestion will only be displayed if at least on of the trigger products are currently in the user's cart."
            :multi="true"
          />
          <BaseInputToggle
            class="col-span-12 sm:col-span-6"
            name="active"
            label="Active"
            description="Make this offer visible to your customers."
            :initial-value="true"
            :multi="true"
          />
        </div>
        <template #footer>
          <div class="grid grid-flow-col gap-4 ml-auto">
            <router-link to="/offers">
              <BaseButton text="Cancel" theme="white" />
            </router-link>
            <BaseButton text="Create" type="submit" :loading="loading" />
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
import BaseInputHidden from '@/components/BaseInputHidden/BaseInputHidden.vue'
import BaseInputProducts from '@/components/BaseInputProducts/BaseInputProducts.vue'
import BaseInputToggle from '@/components/BaseInputToggle/BaseInputToggle.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import offerService from '@/services/api/services/offerService'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Create',
  components: {
    Form,
    BaseLayout,
    BaseCard,
    BaseHeader,
    BaseInputText,
    BaseInputProducts,
    BaseInputHidden,
    BaseInputToggle,
    BaseButton
  },
  data: () => ({
    loading: false
  }),
  methods: {
    /* eslint-disable-next-line */
    async submit(data: any) {
      console.log(data)
      data.productId = data.productId[0]
      this.loading = true
      const offer = await offerService.create(data).catch(() => null)
      if (offer) return this.$router.push({ name: 'offer', params: { id: offer.id } })
      // notify error
      this.loading = false
    }
  }
})
</script>
