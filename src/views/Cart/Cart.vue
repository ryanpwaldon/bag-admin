<template>
  <BaseHeader>
    <template #actions>
      <router-link to="/offers/create">
        <BaseButton text="Preview" />
      </router-link>
    </template>
  </BaseHeader>
  <BaseCard>
    <BaseInputToggleHorizontal
      label="Status"
      description="Turn this on to enable the cart on your storefront."
      v-model="fields.active.value.value"
      :error="fields.active.error.value"
      :class="loading && 'pointer-events-none'"
      class="w-full"
    />
  </BaseCard>
</template>

<script lang="ts">
import BaseCard from '@/components/BaseCard/BaseCard.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseInputToggleHorizontal from '@/components/BaseInputToggleHorizontal/BaseInputToggleHorizontal.vue'
import { defineComponent, ref, watch } from 'vue'
import useForm from '@/composables/useForm'
import { boolean, object } from 'yup'
export default defineComponent({
  components: {
    BaseCard,
    BaseHeader,
    BaseButton,
    BaseInputToggleHorizontal
  },
  setup() {
    const loading = ref(false)
    const schema = object({ active: boolean().default(false) }).defined()
    const { fields, getValues } = useForm(schema)
    watch(fields.active.value, async () => {
      loading.value = true
      console.log(getValues())
      loading.value = false
    })
    return { fields, loading }
  }
})
</script>
