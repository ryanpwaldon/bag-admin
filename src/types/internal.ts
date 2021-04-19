import { BaseResource } from '@shopify/app-bridge/actions/ResourcePicker'

export type ProductResource = BaseResource

export enum TriggerProperty {
  Product = 'product',
  Variant = 'variant',
  ProductTag = 'productTag',
  ProductType = 'productType',
  ProductVendor = 'productVendor',
  Subtotal = 'subtotal'
}

export enum TriggerCondition {
  Includes = 'includes',
  DoesNotInclude = 'doesNotInclude',
  GreaterThan = 'greaterThan',
  LessThan = 'lessThan'
}

export interface Trigger {
  property: TriggerProperty
  condition: TriggerCondition
  value: unknown
}

export interface TriggerGroup {
  matchAll: boolean
  triggers: Array<TriggerGroup | Trigger>
}
