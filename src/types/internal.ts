export interface TriggerGroup {
  triggers: Array<TriggerGroup | Trigger>
  matchAll: boolean
}

export type Property = 'product' | 'productTag' | 'productType' | 'productVendor' | 'subtotal'

export type Condition = 'includes' | 'doesNotInclude' | 'lessThan' | 'greaterThan'

export interface Trigger {
  property: Property
  condition: Condition
  value?: unknown
}

interface SimplifiedLineItem {
  productId: string
  variantId: string
  productType: string
  productTags: string
  productVendor: string
}

export type TriggerData = {
  subtotal: number
  lineItems: SimplifiedLineItem[]
}
