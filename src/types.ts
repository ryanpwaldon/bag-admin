declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $shopify: any
  }
}

export enum Role {
  Guest = 'guest',
  Installed = 'installed',
  Unsubscribed = 'unsubscribed',
  Starter = 'starter',
  Premium = 'premium'
}

export enum OfferType {
  MinimumSpend = 'minimumSpend',
  ProductAddOn = 'productAddOn',
  ProductUpgrade = 'productUpgrade'
}

export interface User {
  shopOrigin: string
  super: boolean
  roles: Role[]
}
