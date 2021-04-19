<template>
  <div class="flex flex-col items-start space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
    <div class="flex-shrink-0 w-full md:w-20">
      <div v-if="index === 0" class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" style="height: 38px" />
      <BaseInputSelect v-else v-model="wrappedMatchAll" :options="matchAllOptions" :disabled="index !== 1" />
    </div>
    <BaseInputSelect class="flex-shrink-0 w-full md:w-19/100" v-model="selectedProperty" :options="propertyOptions" />
    <BaseInputSelect class="flex-shrink-0 w-full md:w-18/100" v-model="selectedCondition" :options="conditionOptions" />
    <div class="w-full md:flex-1">
      <BaseInputProducts v-if="selectedProperty === 'product'" v-model="value" />
      <BaseInputText v-if="selectedProperty === 'productTag'" :placeholder="selectedSchema.placeholder" v-model="value" />
      <BaseInputText v-if="selectedProperty === 'productType'" :placeholder="selectedSchema.placeholder" v-model="value" />
      <BaseInputText v-if="selectedProperty === 'productVendor'" :placeholder="selectedSchema.placeholder" v-model="value" />
      <BaseInputText v-if="selectedProperty === 'subtotal'" :placeholder="selectedSchema.placeholder" v-model="value" />
    </div>
    <BaseButton text="Delete trigger" theme="white" size="sm" class="w-full md:hidden" @click="deleteTrigger" />
    <button
      type="button"
      @click="deleteTrigger"
      style="margin-top: 3px; margin-bottom: 3px;"
      class="items-center justify-center hidden w-8 h-8 text-gray-400 transition rounded-md hover:bg-gray-100 focus:outline-none md:flex"
    >
      <Bin class="flex-shrink-0 w-5" />
    </button>
  </div>
</template>

<script lang="ts">
import Bin from '@/icons/Bin.vue'
import { computed, defineComponent, PropType } from 'vue'
import { TriggerCondition, TriggerProperty, Trigger } from '@/types/internal'
import BaseInputText from '@/components/BaseInputText/BaseInputText.vue'
import BaseInputSelect from '@/components/BaseInputSelect/BaseInputSelect.vue'
import BaseInputProducts from '@/components/BaseInputProducts/BaseInputProducts.vue'
import useModelWrapper from '@/composables/useModelWrapper'
import BaseButton from '@/components/BaseButton/BaseButton.vue'

type PropertyOption = { label: string; value: TriggerProperty; description: string }
type ConditionOption = { label: string; value: TriggerCondition }
interface TriggerSchema {
  defaultValue: unknown
  placeholder: string | null
  property: PropertyOption
  conditions: ConditionOption[]
}

const matchAllOptions = [
  { label: 'And', value: true },
  { label: 'Or', value: false }
]

const triggerSchemas: Record<TriggerProperty, TriggerSchema> = {
  product: {
    defaultValue: [],
    placeholder: null,
    property: { label: 'Products', value: TriggerProperty.Product, description: 'Products added to cart' },
    conditions: [
      { value: TriggerCondition.Includes, label: 'Include' },
      { value: TriggerCondition.DoesNotInclude, label: 'Do not include' }
    ]
  },
  productTag: {
    defaultValue: '',
    placeholder: 'Value',
    property: { label: 'Product tags', value: TriggerProperty.ProductTag, description: 'Tags of products added to cart' },
    conditions: [
      { value: TriggerCondition.Includes, label: 'Include' },
      { value: TriggerCondition.DoesNotInclude, label: 'Do not include' }
    ]
  },
  productType: {
    defaultValue: '',
    placeholder: 'Value',
    property: { label: 'Product types', value: TriggerProperty.ProductType, description: 'Types of products added to cart' },
    conditions: [
      { value: TriggerCondition.Includes, label: 'Include' },
      { value: TriggerCondition.DoesNotInclude, label: 'Do not include' }
    ]
  },
  productVendor: {
    defaultValue: '',
    placeholder: 'Value',
    property: { label: 'Product vendors', value: TriggerProperty.ProductVendor, description: 'Vendors of products added to cart' },
    conditions: [
      { value: TriggerCondition.Includes, label: 'Include' },
      { value: TriggerCondition.DoesNotInclude, label: 'Do not include' }
    ]
  },
  subtotal: {
    defaultValue: null,
    placeholder: 'Value',
    property: { label: 'Subtotal', value: TriggerProperty.Subtotal, description: 'The current cart subtotal' },
    conditions: [
      { value: TriggerCondition.GreaterThan, label: 'Greater than' },
      { value: TriggerCondition.LessThan, label: 'Less than' }
    ]
  }
}

export default defineComponent({
  components: { BaseInputSelect, BaseInputProducts, BaseInputText, Bin, BaseButton },
  props: {
    trigger: {
      type: Object as PropType<Trigger>,
      required: true
    },
    matchAll: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props, { emit }) {
    const deleteTrigger = () => emit('delete')
    const updateTrigger = (trigger: Trigger) => emit('update:trigger', trigger)
    const resetTrigger = (property: TriggerProperty) => {
      updateTrigger({
        property,
        condition: triggerSchemas[property].conditions[0].value,
        value: triggerSchemas[property].defaultValue
      })
    }
    const selectedSchema = computed(() => triggerSchemas[props.trigger.property])
    const propertyOptions = Object.values(triggerSchemas).map(item => item.property)
    const conditionOptions = computed(() => selectedSchema.value.conditions)
    const selectedProperty = computed({
      get: () => selectedSchema.value.property.value,
      set: (property: TriggerProperty) => resetTrigger(property)
    })
    const selectedCondition = computed({
      get: () => props.trigger.condition,
      set: (condition: TriggerCondition) => updateTrigger({ ...props.trigger, condition })
    })
    const value = computed({
      get: () => props.trigger.value,
      set: (value: unknown) => updateTrigger({ ...props.trigger, value })
    })
    return {
      value,
      deleteTrigger,
      selectedSchema,
      propertyOptions,
      matchAllOptions,
      conditionOptions,
      selectedProperty,
      selectedCondition,
      wrappedMatchAll: useModelWrapper(props, emit, 'matchAll')
    }
  }
})
</script>
