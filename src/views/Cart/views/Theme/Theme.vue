<template>
  <div class="w-full space-y-6">
    <GeneralForm />
    <ColorsForm />
    <AdvancedForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import ColorsForm from '@/views/Cart/views/Theme/components/ColorsForm/ColorsForm.vue'
import GeneralForm from '@/views/Cart/views/Theme/components/GeneralForm/GeneralForm.vue'
import AdvancedForm from '@/views/Cart/views/Theme/components/AdvancedForm/AdvancedForm.vue'
export default defineComponent({
  components: {
    GeneralForm,
    ColorsForm,
    AdvancedForm
  }
})
</script>
