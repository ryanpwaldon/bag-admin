<template>
  <div class="w-full space-y-6">
    <EnableCartForm />
    <AutoCloseForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AutoCloseForm from './components/AutoCloseForm/AutoCloseForm.vue'
import EnableCartForm from './components/EnableCartForm/EnableCartForm.vue'

export default defineComponent({
  components: {
    AutoCloseForm,
    EnableCartForm
  }
})
</script>
