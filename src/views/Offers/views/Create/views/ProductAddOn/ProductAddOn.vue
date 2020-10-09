<template>
  <BaseLayout>
    <BaseHeading />
    <Form @submit="submit">
      <BaseCard title="Product suggestion" description="Suggest a product based on the items already added to cart">
        <div class="grid grid-cols-12 gap-6">
          <BaseInputText
            name="title"
            rules="required|alpha"
            label="Title"
            placeholder="Add a pencil"
            description="The title of the offer card."
            class="col-span-12 sm:col-span-6"
          />
          <BaseInputText
            name="subtitle"
            rules="required|alpha"
            label="Subtitle"
            placeholder="Faber Casel 2B"
            description="The subtitle of the offer card."
            class="col-span-12 sm:col-span-6"
          />
          <BaseInputProducts
            class="col-span-12"
            name="product"
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
import BaseHeading from '@/components/BaseHeading/BaseHeading.vue'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputProducts from '@/components/BaseInputProducts/BaseInputProducts.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Create',
  components: {
    Form,
    BaseLayout,
    BaseCard,
    BaseHeading,
    BaseInputText,
    BaseInputProducts,
    BaseButton
  },
  methods: {
    submit(data: object) {
      console.log(data)
    }
  }
})
</script>
