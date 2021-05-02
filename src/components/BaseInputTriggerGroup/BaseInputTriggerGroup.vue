<template>
  <div>
    <label v-if="label" :for="name" class="block text-base font-medium leading-6 text-gray-800">{{ label }}</label>
    <p class="text-sm text-gray-500">
      Use triggers to display the offer only when certain conditions are met.
    </p>
    <p class="mt-4 text-sm text-gray-500" v-if="!triggers.length">
      For example, display the offer when:<br />
      A specific product is in the cart.<br />
      A product with a specific tag is in the cart.<br />
      The cart subtotal is less than $100.<br />
    </p>
    <div class="grid gap-4 mt-4 md:gap-2" v-if="triggers.length">
      <p class="text-sm text-gray-500">Display the offer when:</p>
      <BaseInputTrigger
        :key="i"
        :index="i"
        @delete="deleteTrigger(i)"
        v-model:matchAll="matchAll"
        v-model:trigger="triggers[i]"
        v-for="(trigger, i) in triggers"
      />
    </div>
    <button type="button" class="mt-4 font-medium text-blue-600 focus:outline-none" @click="addTrigger">Add trigger →</button>
    <p v-if="error" class="mt-4 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { Trigger, TriggerCondition, TriggerGroup, TriggerProperty } from '@/types/internal'
import { computed, defineComponent, PropType } from 'vue'
import BaseInputTrigger from '@/components/BaseInputTriggerGroup/components/BaseInputTrigger/BaseInputTrigger.vue'

const generateDefaultTrigger = (): Trigger => ({
  property: TriggerProperty.Product,
  condition: TriggerCondition.Includes,
  value: []
})

export default defineComponent({
  components: { BaseInputTrigger },
  props: {
    label: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: Object as PropType<TriggerGroup>,
      required: true
    },
    error: {
      type: String,
      required: false
    }
  },
  setup(props, { emit }) {
    const updateTriggerGroup = (triggerGroup: TriggerGroup) => emit('update:modelValue', triggerGroup)
    const matchAll = computed({
      get: () => props.modelValue.matchAll,
      set: matchAll => updateTriggerGroup({ ...props.modelValue, matchAll })
    })
    const triggers = computed({
      get: () => props.modelValue.triggers,
      set: triggers => updateTriggerGroup({ ...props.modelValue, triggers })
    })
    const deleteTrigger = (i: number) => (triggers.value = [...triggers.value.filter((_, n) => n !== i)])
    const addTrigger = () => (triggers.value = [...triggers.value, generateDefaultTrigger()])
    return { triggers, matchAll, addTrigger, deleteTrigger }
  }
})
</script>
