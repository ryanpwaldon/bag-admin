export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * An [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) encoded UTC date string. Example value: `"2019-07-16"`.
   *
   */
  Date: any
  /** An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`. */
  DateTime: any
  /** A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`. */
  Decimal: any
  /**
   * A string containing a strict subset of HTML code. Non-allowed tags will be stripped out.
   * Allowed tags:
   * * `a` (allowed attributes: `href`)
   * * `b`
   * * `br`
   * * `em`
   * * `i`
   * * `strong`
   * * `u`
   *
   * Example value: `"Your current domain is <strong>johns-apparel.myshopify.com</strong>."`
   *
   */
  FormattedString: any
  /** A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`. */
  HTML: any
  /** A JSON Object. Example value: `{ "key1": "Value 1", "key2": "Value 2", "key3": 3 }` */
  JSON: any
  /** A monetary value string. Example value: `"100.57"`. */
  Money: any
  /**
   * Represents a unique identifier in the Storefront API. A `StorefrontID` value can be used wherever an ID is expected in the Storefront API.
   *
   * Example value: `"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMDc5Nzg1MTAw"`.
   *
   */
  StorefrontID: any
  /**
   * An RFC 3986 and RFC 3987 compliant URI string.
   *
   * Example value: `"https://johns-apparel.myshopify.com"`.
   *
   */
  URL: any
  /**
   * An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64 - 1 encoded as a string of base-10 digits.
   *
   * Example value: `"50"`.
   *
   */
  UnsignedInt64: any
  /**
   * Time between UTC time and a location's observed time, in the format `"+HH:MM"` or `"-HH:MM"`.
   *
   * Example value: `"-07:00"`.
   *
   */
  UtcOffset: any
}

/** Represents the access scope permission that is applicable to a merchant's shop, such as `read_orders`. */
export type AdminAccessScope = {
  __typename?: 'AccessScope'
  /** Description of the access scopes enabled on an api permission. */
  description: Scalars['String']
  /** A human-friendly string for an access scope. */
  handle: Scalars['String']
}

/** Whether all items in the cart are entitled to the discount. */
export type AdminAllDiscountItems = {
  __typename?: 'AllDiscountItems'
  /** Whether all items are selected. The value is hardcoded to `true`. */
  allItems: Scalars['Boolean']
}

/** A version of the API. */
export type AdminApiVersion = {
  __typename?: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']
  /** Whether the version is supported by Shopify. */
  supported: Scalars['Boolean']
}

/** A Shopify application. */
export type AdminApp = AdminNode & {
  __typename?: 'App'
  /** A unique application API identifier. */
  apiKey: Scalars['String']
  /** App store page URL of the app. */
  appStoreAppUrl?: Maybe<Scalars['URL']>
  /** App store page URL of the developer who created the app. */
  appStoreDeveloperUrl?: Maybe<Scalars['URL']>
  /** Banner image for the app. */
  banner: AdminImage
  /** Description of the app. */
  description?: Maybe<Scalars['String']>
  /** App's developer name. */
  developerName?: Maybe<Scalars['String']>
  /**
   * Website of the developer who created the app.
   * @deprecated Use `appStoreDeveloperUrl` instead
   */
  developerUrl: Scalars['URL']
  /** Whether the app uses the Embedded App SDK. */
  embedded: Scalars['Boolean']
  /** Requirements that must be met before the app can be installed. */
  failedRequirements: Array<AdminFailedRequirement>
  /** List of app features. */
  features: Array<Scalars['String']>
  /** Feedback from this app about the store. */
  feedback?: Maybe<AdminAppFeedback>
  /** Handle of the app. */
  handle?: Maybe<Scalars['String']>
  /** Icon that represents the app. */
  icon: AdminImage
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Webpage where you can install the app. */
  installUrl?: Maybe<Scalars['URL']>
  /**
   * Corresponding AppInstallation for this shop and App.
   * Returns null if the App is not installed.
   */
  installation?: Maybe<AdminAppInstallation>
  /**
   * Webpage that the app starts in.
   * @deprecated Use AppInstallation.launchUrl instead
   */
  launchUrl: Scalars['URL']
  /**
   * Menu items for the app, which also appear as submenu items in left navigation sidebar in the Shopify admin.
   * @deprecated Use AppInstallation.navigationItems instead
   */
  navigationItems: Array<AdminNavigationItem>
  /** Detailed information about the app pricing. */
  pricingDetails?: Maybe<Scalars['String']>
  /** Summary of the app pricing details. */
  pricingDetailsSummary: Scalars['String']
  /** Link to app privacy policy. */
  privacyPolicyUrl?: Maybe<Scalars['URL']>
  /** Whether the app is published. */
  published: Scalars['Boolean']
  /** Screenshots of the app. */
  screenshots: Array<AdminImage>
  /** Whether the app was developed by Shopify. */
  shopifyDeveloped: Scalars['Boolean']
  /** Name of the app. */
  title: Scalars['String']
  /**
   * Message that appears when the app is uninstalled. For example:
   * By removing this app, you will no longer be able to publish products to MySocialSite or view this app in your Shopify admin. You can re-enable this channel at any time.
   */
  uninstallMessage: Scalars['String']
  /**
   * Webpage where you can uninstall the app.
   * @deprecated Use AppInstallation.uninstallUrl instead
   */
  uninstallUrl?: Maybe<Scalars['URL']>
}

export type AdminAppConnection = {
  __typename?: 'AppConnection'
  /** A list of edges. */
  edges: Array<AdminAppEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** App credits can be applied by the merchant towards future app purchases, subscriptions, or usage records in Shopify. */
export type AdminAppCredit = AdminNode & {
  __typename?: 'AppCredit'
  /** The amount that can be used towards future app purchases in Shopify. */
  amount: AdminMoneyV2
  /** The date and time when the app credit was created. */
  createdAt: Scalars['DateTime']
  /** The description of the app credit. */
  description: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Whether the app credit is a test transaction. */
  test: Scalars['Boolean']
}

export type AdminAppCreditConnection = {
  __typename?: 'AppCreditConnection'
  /** A list of edges. */
  edges: Array<AdminAppCreditEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `appCreditCreate` mutation. */
export type AdminAppCreditCreatePayload = {
  __typename?: 'AppCreditCreatePayload'
  /** The newly created app credit. */
  appCredit?: Maybe<AdminAppCredit>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminAppCreditEdge = {
  __typename?: 'AppCreditEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of AppCreditEdge. */
  node: AdminAppCredit
}

export type AdminAppEdge = {
  __typename?: 'AppEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of AppEdge. */
  node: AdminApp
}

/**
 * Reports the status of shops and their resources and displays this information
 * within Shopify admin. AppFeedback is used to notify merchants about steps they need to take
 * to set up an app on their store.
 */
export type AdminAppFeedback = {
  __typename?: 'AppFeedback'
  /** The application associated to the feedback. */
  app: AdminApp
  /** A link to where merchants can resolve errors. */
  link?: Maybe<AdminLink>
  /** The feedback message presented to the merchant. */
  messages: Array<AdminUserError>
}

/** Represents an installed application on a shop. */
export type AdminAppInstallation = AdminNode & {
  __typename?: 'AppInstallation'
  /** Access scopes granted to an app by a merchant during installation. */
  accessScopes: Array<AdminAccessScope>
  /** Active subscriptions charged to a shop on a recurring basis. */
  activeSubscriptions: Array<AdminAppSubscription>
  /** All subscriptions created for a shop. */
  allSubscriptions: AdminAppSubscriptionConnection
  /** Application which is installed. */
  app: AdminApp
  /**
   * Channel associated with the installed application.
   * @deprecated Use `publication` instead
   */
  channel?: Maybe<AdminChannel>
  /** Credits that can be used towards future app purchases. */
  credits: AdminAppCreditConnection
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Url used to launch the app. */
  launchUrl: Scalars['URL']
  /** One-time purchases to a shop. */
  oneTimePurchases: AdminAppPurchaseOneTimeConnection
  /** Publication associated with the installed application. */
  publication?: Maybe<AdminPublication>
  /**
   * Subscriptions charge to a shop on a recurring basis.
   * @deprecated Use `activeSubscriptions` instead
   */
  subscriptions: Array<AdminAppSubscription>
  /** Webpage where you can uninstall the app. */
  uninstallUrl?: Maybe<Scalars['URL']>
}

/** Represents an installed application on a shop. */
export type AdminAppInstallationAllSubscriptionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminAppSubscriptionSortKeys>
}

/** Represents an installed application on a shop. */
export type AdminAppInstallationCreditsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminAppTransactionSortKeys>
}

/** Represents an installed application on a shop. */
export type AdminAppInstallationOneTimePurchasesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminAppTransactionSortKeys>
}

/** Possible categories of an app installation. */
export enum AdminAppInstallationCategory {
  /** Sales channel apps. */
  Channel = 'CHANNEL',
  /** Apps that can be used in the POS mobile client. */
  PosEmbedded = 'POS_EMBEDDED'
}

export type AdminAppInstallationConnection = {
  __typename?: 'AppInstallationConnection'
  /** A list of edges. */
  edges: Array<AdminAppInstallationEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminAppInstallationEdge = {
  __typename?: 'AppInstallationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of AppInstallationEdge. */
  node: AdminAppInstallation
}

/** Possible privacy types of an app installation. */
export enum AdminAppInstallationPrivacy {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

/** The set of valid sort keys for the AppInstallation query. */
export enum AdminAppInstallationSortKeys {
  /** Sort by the `installed_at` value. */
  InstalledAt = 'INSTALLED_AT',
  /** Sort by the `app_title` value. */
  AppTitle = 'APP_TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Defines the pricing model for the app subscription. */
export type AdminAppPlanInput = {
  /** Usage based billing pricing details. */
  appUsagePricingDetails?: Maybe<AdminAppUsagePricingInput>
  /** Recurring based billing pricing details. */
  appRecurringPricingDetails?: Maybe<AdminAppRecurringPricingInput>
}

/** Defines the app plan the merchant is subscribed to. */
export type AdminAppPlanV2 = {
  __typename?: 'AppPlanV2'
  /** Defines the pricing model for the app subscription. */
  pricingDetails: AdminAppPricingDetails
}

/** Information about the price charged to a shop every plan period. */
export type AdminAppPricingDetails = AdminAppRecurringPricing | AdminAppUsagePricing

/** Interval for which pricing details are applied. */
export enum AdminAppPricingInterval {
  /** App plan pricing details are applied every 30 days. */
  Every_30Days = 'EVERY_30_DAYS'
}

/** Services and features purchased once by the store. */
export type AdminAppPurchase = {
  /** The date and time when the app purchase was created. */
  createdAt: Scalars['DateTime']
  /** The name of the app purchase. */
  name: Scalars['String']
  /** The amount to be charged to the store for the app purchase. */
  price: AdminMoneyV2
  /** The status of the app purchase. Possible values include pending, active, declined and cancelled. */
  status: AdminAppPurchaseStatus
  /** Whether the app purchase is a test transaction. */
  test: Scalars['Boolean']
}

/** Services and features purchased once by a store. */
export type AdminAppPurchaseOneTime = AdminAppPurchase &
  AdminNode & {
    __typename?: 'AppPurchaseOneTime'
    /** The date and time when the app purchase was created. */
    createdAt: Scalars['DateTime']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The name of the app purchase. */
    name: Scalars['String']
    /** The amount to be charged to the store for the app purchase. */
    price: AdminMoneyV2
    /** The status of the app purchase. Possible values include pending, active, declined and cancelled. */
    status: AdminAppPurchaseStatus
    /** Whether the app purchase is a test transaction. */
    test: Scalars['Boolean']
  }

export type AdminAppPurchaseOneTimeConnection = {
  __typename?: 'AppPurchaseOneTimeConnection'
  /** A list of edges. */
  edges: Array<AdminAppPurchaseOneTimeEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `appPurchaseOneTimeCreate` mutation. */
export type AdminAppPurchaseOneTimeCreatePayload = {
  __typename?: 'AppPurchaseOneTimeCreatePayload'
  /** The newly created app one-time purchase. */
  appPurchaseOneTime?: Maybe<AdminAppPurchaseOneTime>
  /** The URL where the merchant can approve or decline the app one-time purchase. */
  confirmationUrl?: Maybe<Scalars['URL']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminAppPurchaseOneTimeEdge = {
  __typename?: 'AppPurchaseOneTimeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of AppPurchaseOneTimeEdge. */
  node: AdminAppPurchaseOneTime
}

/** The status of the purchase. */
export enum AdminAppPurchaseStatus {
  /** The app purchase has been approved by the merchant and is ready to be activated by the app. App purchases created through the GraphQL Admin API are activated upon approval. */
  Accepted = 'ACCEPTED',
  /** The app purchase has been activated by the app. Active app purchases are charged to the store and partners receive payouts for active app purchase. */
  Active = 'ACTIVE',
  /** The app purchase was declined by the merchant. */
  Declined = 'DECLINED',
  /** The app purchase was not accepted within 2 days of being created. */
  Expired = 'EXPIRED',
  /** The app purchase is pending approval by the merchant. */
  Pending = 'PENDING'
}

/** Price charged every interval. */
export type AdminAppRecurringPricing = {
  __typename?: 'AppRecurringPricing'
  /** Specifies the number of days in a billing cycle of the app subscription. */
  interval: AdminAppPricingInterval
  /** The amount to be charged to the store every billing interval. */
  price: AdminMoneyV2
}

/** Allows an app to charge per billing interval. */
export type AdminAppRecurringPricingInput = {
  /** The amount to be charged to the store every billing interval. The only permitted currency code is USD. */
  price: AdminMoneyInput
}

/** Provides users access to services and/or features for a duration of time. */
export type AdminAppSubscription = AdminNode & {
  __typename?: 'AppSubscription'
  /** The date and time when the app subscription was created. */
  createdAt: Scalars['DateTime']
  /** The date and time when the current app subscription period ends. */
  currentPeriodEnd?: Maybe<Scalars['DateTime']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Attaches a plan to an app subscription. */
  lineItems: Array<AdminAppSubscriptionLineItem>
  /** The name of the app subscription. */
  name: Scalars['String']
  /** The URL where the merchant is redirected after approving the app subscription. */
  returnUrl: Scalars['URL']
  /**
   * The status of the app subscription. Possible values include pending, active, declined,
   *          expired, frozen, and cancelled.
   */
  status: AdminAppSubscriptionStatus
  /** Specifies whether the app subscription is a test transaction. */
  test: Scalars['Boolean']
  /** The number of days of the free trial. */
  trialDays: Scalars['Int']
}

/** Return type for `appSubscriptionCancel` mutation. */
export type AdminAppSubscriptionCancelPayload = {
  __typename?: 'AppSubscriptionCancelPayload'
  /** The cancelled app subscription. */
  appSubscription?: Maybe<AdminAppSubscription>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminAppSubscriptionConnection = {
  __typename?: 'AppSubscriptionConnection'
  /** A list of edges. */
  edges: Array<AdminAppSubscriptionEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `appSubscriptionCreate` mutation. */
export type AdminAppSubscriptionCreatePayload = {
  __typename?: 'AppSubscriptionCreatePayload'
  /** The newly created app subscription. */
  appSubscription?: Maybe<AdminAppSubscription>
  /** The URL where the merchant approves or declines an app subscription. */
  confirmationUrl?: Maybe<Scalars['URL']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminAppSubscriptionEdge = {
  __typename?: 'AppSubscriptionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of AppSubscriptionEdge. */
  node: AdminAppSubscription
}

/** Attaches a plan to an app subscription. */
export type AdminAppSubscriptionLineItem = {
  __typename?: 'AppSubscriptionLineItem'
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Defines the pricing model for the app subscription. */
  plan: AdminAppPlanV2
  /** Lists the store's usage for a usage pricing plan. */
  usageRecords: AdminAppUsageRecordConnection
}

/** Attaches a plan to an app subscription. */
export type AdminAppSubscriptionLineItemUsageRecordsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminAppUsageRecordSortKeys>
}

/** Allows an app to add more than one plan to an app subscription. */
export type AdminAppSubscriptionLineItemInput = {
  /** Defines the pricing model for the app subscription. */
  plan: AdminAppPlanInput
}

/** Return type for `appSubscriptionLineItemUpdate` mutation. */
export type AdminAppSubscriptionLineItemUpdatePayload = {
  __typename?: 'AppSubscriptionLineItemUpdatePayload'
  /** The updated app subscription. */
  appSubscription?: Maybe<AdminAppSubscription>
  /** The URL where the merchant approves or declines the updated app subscription line item. */
  confirmationUrl?: Maybe<Scalars['URL']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The set of valid sort keys for the AppSubscription query. */
export enum AdminAppSubscriptionSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The status of the app subscription. */
export enum AdminAppSubscriptionStatus {
  /** The app subscription is pending approval by the merchant. */
  Pending = 'PENDING',
  /** The app subscription has been approved by the merchant and is ready to be activated by the app. App subscriptions created through the GraphQL Admin API are activated upon approval. */
  Accepted = 'ACCEPTED',
  /** The app subscription has been activated by the app. Active app subscriptions are charged to the store and partners recieve payouts for active app subscriptions. */
  Active = 'ACTIVE',
  /** The app subscription was declined by the merchant. */
  Declined = 'DECLINED',
  /** The app subscription was not accepted within 2 days of being created. */
  Expired = 'EXPIRED',
  /** The app subscription is on hold due to a store subscription non-payment. The charge will re-activate once subscription payments resume. */
  Frozen = 'FROZEN',
  /** The app subscription was cancelled by the app. */
  Cancelled = 'CANCELLED'
}

/** The set of valid sort keys for the AppTransaction query. */
export enum AdminAppTransactionSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Defines the usage pricing model for the app subscription. */
export type AdminAppUsagePricing = {
  __typename?: 'AppUsagePricing'
  /** The total usage records for interval. */
  balanceUsed: AdminMoneyV2
  /** The limit a store can be charged for usage based pricing. */
  cappedAmount: AdminMoneyV2
  /** Specifies the interval which usage records are applied. */
  interval: AdminAppPricingInterval
  /** The terms and conditions for app usage pricing. */
  terms: Scalars['String']
}

/** Allows an app to charge a store for usage. */
export type AdminAppUsagePricingInput = {
  /** The limit a customer can be charged for usage based pricing. */
  cappedAmount: AdminMoneyInput
  /** The terms and conditions for app usage. */
  terms: Scalars['String']
}

/** Store usage for app subscriptions with usage pricing. */
export type AdminAppUsageRecord = AdminNode & {
  __typename?: 'AppUsageRecord'
  /** The date and time when the usage record was created. */
  createdAt: Scalars['DateTime']
  /** The description of the app usage record. */
  description: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The price of the usage record. The only permitted currency code is USD. */
  price: AdminMoneyV2
  /** Defines the usage pricing plan the merchant is subscribed to. */
  subscriptionLineItem: AdminAppSubscriptionLineItem
}

export type AdminAppUsageRecordConnection = {
  __typename?: 'AppUsageRecordConnection'
  /** A list of edges. */
  edges: Array<AdminAppUsageRecordEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `appUsageRecordCreate` mutation. */
export type AdminAppUsageRecordCreatePayload = {
  __typename?: 'AppUsageRecordCreatePayload'
  /** The newly created app usage record. */
  appUsageRecord?: Maybe<AdminAppUsageRecord>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminAppUsageRecordEdge = {
  __typename?: 'AppUsageRecordEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of AppUsageRecordEdge. */
  node: AdminAppUsageRecord
}

/** The set of valid sort keys for the AppUsageRecord query. */
export enum AdminAppUsageRecordSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Represents a generic custom attribute. */
export type AdminAttribute = {
  __typename?: 'Attribute'
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>
}

/** Specifies the input fields required for an attribute. */
export type AdminAttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value: Scalars['String']
}

/** Automatic discount applications capture the intentions of a discount that was automatically applied. */
export type AdminAutomaticDiscountApplication = AdminDiscountApplication & {
  __typename?: 'AutomaticDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: AdminDiscountApplicationAllocationMethod
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int']
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: AdminDiscountApplicationTargetSelection
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: AdminDiscountApplicationTargetType
  /** The title of the discount application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: AdminPricingValue
}

/** The set of valid sort keys for the AutomaticDiscount query. */
export enum AdminAutomaticDiscountSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/**
 * Basic events chronicle resource activities such as the creation of an article, the fulfillment of an order, or
 * the addition of a product.
 */
export type AdminBasicEvent = AdminNode &
  AdminEvent & {
    __typename?: 'BasicEvent'
    /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
    appTitle?: Maybe<Scalars['String']>
    /** Whether the event was created by an app. */
    attributeToApp: Scalars['Boolean']
    /** Whether the event was caused by an admin user. */
    attributeToUser: Scalars['Boolean']
    /** The date and time when the event was created. */
    createdAt: Scalars['DateTime']
    /** Whether the event is critical. */
    criticalAlert: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** Human readable text that describes the event. */
    message: Scalars['FormattedString']
  }

/**
 * An asynchronous long-running operation to fetch data in bulk.
 *
 * Bulk operations are created using the `bulkOperationRunQuery` mutation. After they are created,
 * clients should poll the `status` field for updates. When `COMPLETED`, the `url` field contains
 * a link to the data in [JSONL](http://jsonlines.org/) format.
 *
 * See the [bulk operations guide](https://help.shopify.com/api/guides/bulk-operations) for more details.
 */
export type AdminBulkOperation = AdminNode & {
  __typename?: 'BulkOperation'
  /** When the bulk operation was successfully completed. */
  completedAt?: Maybe<Scalars['DateTime']>
  /** When the bulk operation was created. */
  createdAt: Scalars['DateTime']
  /** Error code for failed operations. */
  errorCode?: Maybe<AdminBulkOperationErrorCode>
  /** File size in bytes of the file in the `url` field. */
  fileSize?: Maybe<Scalars['UnsignedInt64']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /**
   * The running count of all objects processed.
   * For example, when fetching all products and their variants, this field counts both products and variants.
   * This field can be used to track operation progress.
   */
  objectCount: Scalars['UnsignedInt64']
  /**
   * URL to partial/incomplete response data (in [JSONL](http://jsonlines.org/) format) returned by a failed operation.
   * Expires **one week** after the operation fails. Returns `null` when there's no data available.
   */
  partialDataUrl?: Maybe<Scalars['URL']>
  /** GraphQL query document specified in `bulkOperationRunQuery`. */
  query: Scalars['String']
  /** Status of the bulk operation. */
  status: AdminBulkOperationStatus
  /**
   * URL to the response data in [JSONL](http://jsonlines.org/) format.
   * Expires **one week** after the operation completes.
   */
  url?: Maybe<Scalars['URL']>
}

/** Return type for `bulkOperationCancel` mutation. */
export type AdminBulkOperationCancelPayload = {
  __typename?: 'BulkOperationCancelPayload'
  /** The bulk operation to be canceled. */
  bulkOperation?: Maybe<AdminBulkOperation>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Error codes for failed bulk operations. */
export enum AdminBulkOperationErrorCode {
  /**
   * The provided operation `query` returned access denied due to missing
   * [access scopes](https://help.shopify.com/api/getting-started/authentication/oauth/scopes).
   * Review the requested object permissions and execute the query as a normal non-bulk GraphQL request to see more details.
   */
  AccessDenied = 'ACCESS_DENIED',
  /** Operation resulted in partial or incomplete data due to internal server errors during execution. */
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  /**
   * Operation resulted in partial or incomplete data due to query timeouts during execution.
   * In some cases, timeouts can be avoided by modifying your `query` to select fewer fields.
   */
  Timeout = 'TIMEOUT'
}

/** Return type for `bulkOperationRunQuery` mutation. */
export type AdminBulkOperationRunQueryPayload = {
  __typename?: 'BulkOperationRunQueryPayload'
  /** The newly created bulk operation. */
  bulkOperation?: Maybe<AdminBulkOperation>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Statuses of a bulk operation. */
export enum AdminBulkOperationStatus {
  /** Operation created. */
  Created = 'CREATED',
  /** Operation running. */
  Running = 'RUNNING',
  /** Operation completed. */
  Completed = 'COMPLETED',
  /** Operation canceling. */
  Canceling = 'CANCELING',
  /** Operation canceled. */
  Canceled = 'CANCELED',
  /** Operation failed. */
  Failed = 'FAILED',
  /** Operation URL has expired. */
  Expired = 'EXPIRED'
}

/** The computed properties for a draft order. */
export type AdminCalculatedDraftOrder = {
  __typename?: 'CalculatedDraftOrder'
  /** Order-level discount applied to the draft order. */
  appliedDiscount?: Maybe<AdminDraftOrderAppliedDiscount>
  /** The available shipping rates for the draft order. Requires a customer with a valid shipping address and at least one line item. */
  availableShippingRates: Array<AdminShippingRate>
  /** Customer who will be sent an invoice for the draft order, if there is one. */
  customer?: Maybe<AdminCustomer>
  /** Line items in the draft order with their computed properties. */
  lineItems: Array<AdminCalculatedDraftOrderLineItem>
  /** Line item that contains the shipping costs. */
  shippingLine?: Maybe<AdminShippingLine>
  /** Subtotal of the line items and their discounts (does not contain shipping charges or shipping discounts, or taxes). */
  subtotalPrice: Scalars['Money']
  /** Total amount of taxes charged for each line item and shipping line. */
  taxLines: Array<AdminTaxLine>
  /** Total amount of the draft order (includes taxes, shipping charges, and discounts). */
  totalPrice: Scalars['Money']
  /** Total shipping charge for the draft order. */
  totalShippingPrice: Scalars['Money']
  /** Total amount of taxes for the draft order. */
  totalTax: Scalars['Money']
}

/** The computed line items for a draft order. */
export type AdminCalculatedDraftOrderLineItem = {
  __typename?: 'CalculatedDraftOrderLineItem'
  /** Discount applied to the line item. */
  appliedDiscount?: Maybe<AdminDraftOrderAppliedDiscount>
  /** Indicates if this is a product variant line item, or a custom line item. */
  custom: Scalars['Boolean']
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<AdminAttribute>
  /** Total price with discounts applied. */
  discountedTotal: AdminMoneyV2
  /** Unit price with discounts applied. */
  discountedUnitPrice: AdminMoneyV2
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   */
  fulfillmentService: AdminFulfillmentService
  /** Image associated with the draft order line item. */
  image?: Maybe<AdminImage>
  /** Indicates whether the line item represents the puchase of a gift card. */
  isGiftCard: Scalars['Boolean']
  /** Name of the product. */
  name: Scalars['String']
  /** Total price (without discounts) of the line item, based on the original unit price of the variant x quantity. */
  originalTotal: AdminMoneyV2
  /** Variant price without any discounts applied. */
  originalUnitPrice: AdminMoneyV2
  /** Product associated with the draft order line item. */
  product?: Maybe<AdminProduct>
  /** Number of variant items requested in the draft order. */
  quantity: Scalars['Int']
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String']
  /** Total value of the discount. */
  totalDiscount: AdminMoneyV2
  /** Variant associated with the draft order line item. */
  variant?: Maybe<AdminProductVariant>
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>
  /** Weight unit and value for a draft order line item. */
  weight?: Maybe<AdminWeight>
}

/** A line item involved in order editing that may be newly added or have new changes applied. */
export type AdminCalculatedLineItem = {
  __typename?: 'CalculatedLineItem'
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<AdminAttribute>
  /**
   * The discounts that have been allocated onto the line item by discount applications.
   * @deprecated Use `calculatedDiscountAllocations` instead
   */
  discountAllocations: Array<AdminDiscountAllocation>
  /** The total line price after discounts are applied in shop and presentment currencies. */
  discountedUnitPriceSet: AdminMoneyBag
  /** The total number of items that can be edited. */
  editableQuantity: Scalars['Int']
  /** The editable quantity prior to any changes made in the current edit. */
  editableQuantityBeforeChanges: Scalars['Int']
  /** The total price of editable lines in shop and presentment currencies. */
  editableSubtotalSet: AdminMoneyBag
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The Image object associated to the line item's variant. */
  image?: Maybe<AdminImage>
  /** Variant price without any discounts applied in shop and presentment currencies. */
  originalUnitPriceSet: AdminMoneyBag
  /** The total number of items. */
  quantity: Scalars['Int']
  /** Whether the line item can be restocked or not. */
  restockable: Scalars['Boolean']
  /** Whether the changes on the line item will result in a restock. */
  restocking: Scalars['Boolean']
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>
  /** A list of changes that affect this line item. */
  stagedChanges: Array<AdminOrderStagedChange>
  /** Title of the product or variant. */
  title: Scalars['String']
  /** The total price of uneditable lines in shop and presentment currencies. */
  uneditableSubtotalSet: AdminMoneyBag
  /**
   * The product variant associated with this line item. Will be null for custom line items and items whose
   * variant has been deleted.
   */
  variant?: Maybe<AdminProductVariant>
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>
}

export type AdminCalculatedLineItemConnection = {
  __typename?: 'CalculatedLineItemConnection'
  /** A list of edges. */
  edges: Array<AdminCalculatedLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminCalculatedLineItemEdge = {
  __typename?: 'CalculatedLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CalculatedLineItemEdge. */
  node: AdminCalculatedLineItem
}

/** An order with edits applied but not saved. */
export type AdminCalculatedOrder = AdminNode & {
  __typename?: 'CalculatedOrder'
  /** Returns only the new line items being added to the order. */
  addedLineItems: AdminCalculatedLineItemConnection
  /** Amount of the order-level discount (does not contain any line item discounts) in shop and presentment currencies. */
  cartDiscountAmountSet?: Maybe<AdminMoneyBag>
  /** Will be true when the changes have been applied to the order. */
  committed: Scalars['Boolean']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /**
   * Returns all items on the order that existed before starting the edit.
   * will include any changes that have been made.
   */
  lineItems: AdminCalculatedLineItemConnection
  /** The HTML of the customer notification for the order edit. */
  notificationPreviewHtml?: Maybe<Scalars['HTML']>
  /** The customer notification title. */
  notificationPreviewTitle: Scalars['String']
  /**
   * The order with changes applied.
   * @deprecated Use `originalOrder` instead
   */
  order: AdminOrder
  /** The order without any changes applied. */
  originalOrder: AdminOrder
  /** List of changes made on the order. */
  stagedChanges: AdminOrderStagedChangeConnection
  /** The sum of the quantities for the line items that contribute to the order's subtotal. */
  subtotalLineItemsQuantity: Scalars['Int']
  /** Subtotal of the line items and their discounts (does not contain shipping costs, shipping discounts) in shop and presentment currencies. */
  subtotalPriceSet?: Maybe<AdminMoneyBag>
  /** Taxes charged for the line item. */
  taxLines: Array<AdminTaxLine>
  /** Total price of the order less the total amount received from the customer in shop and presentment currencies. */
  totalOutstandingSet: AdminMoneyBag
  /** Total amount of the order (includes taxes and discounts) in shop and presentment currencies. */
  totalPriceSet: AdminMoneyBag
}

/** An order with edits applied but not saved. */
export type AdminCalculatedOrderAddedLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order with edits applied but not saved. */
export type AdminCalculatedOrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
}

/** An order with edits applied but not saved. */
export type AdminCalculatedOrderStagedChangesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type AdminChannel = AdminNode & {
  __typename?: 'Channel'
  /** Underlying app used by the channel. */
  app: AdminApp
  /** The collection publications for the list of collections published to the channel. */
  collectionPublicationsV3: AdminResourcePublicationConnection
  /** The list of collections published to the channel. */
  collections: AdminCollectionConnection
  /**
   * Unique identifier for the channel.
   * @deprecated Use `id` instead
   */
  handle: Scalars['String']
  /** Whether the collection is available to the channel. */
  hasCollection: Scalars['Boolean']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Name of the channel. */
  name: Scalars['String']
  /**
   * Menu items for the channel, which also appear as submenu items in left navigation sidebar in the Shopify admin.
   * @deprecated Use App.navigationItems instead
   */
  navigationItems: Array<AdminNavigationItem>
  /**
   * Home page for the channel.
   * @deprecated Use App.launchUrl instead
   */
  overviewPath?: Maybe<Scalars['URL']>
  /**
   * The product publications for the products published to the channel.
   * @deprecated Use `productPublicationsV3` instead
   */
  productPublications: AdminProductPublicationConnection
  /** The product publications for the list of products published to the channel. */
  productPublicationsV3: AdminResourcePublicationConnection
  /** The list of products published to the channel. */
  products: AdminProductConnection
  /** Whether or not this channel supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean']
}

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type AdminChannelCollectionPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type AdminChannelCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type AdminChannelHasCollectionArgs = {
  id: Scalars['ID']
}

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type AdminChannelProductPublicationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type AdminChannelProductPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 */
export type AdminChannelProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

export type AdminChannelConnection = {
  __typename?: 'ChannelConnection'
  /** A list of edges. */
  edges: Array<AdminChannelEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminChannelEdge = {
  __typename?: 'ChannelEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ChannelEdge. */
  node: AdminChannel
}

/** The set of valid sort keys for the CodeDiscount query. */
export enum AdminCodeDiscountSortKeys {
  /** Sort by the `starts_at` value. */
  StartsAt = 'STARTS_AT',
  /** Sort by the `ends_at` value. */
  EndsAt = 'ENDS_AT',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Represents a collection of products. */
export type AdminCollection = AdminHasMetafields &
  AdminNode &
  AdminPublishable &
  AdminHasPublishedTranslations & {
    __typename?: 'Collection'
    /** The number of publications a resource is published to without feedback errors. */
    availablePublicationCount: Scalars['Int']
    /** The stripped description of the collection, in a single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the collection, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /** Information about the collection that's provided through resource feedback. */
    feedback?: Maybe<AdminResourceFeedback>
    /** A unique human-friendly string for the collection. Automatically generated from the collection's title. */
    handle: Scalars['String']
    /** Whether the collection includes a product. */
    hasProduct: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The image associated with the collection. */
    image?: Maybe<AdminImage>
    /** The metafield associated with the resource. */
    metafield?: Maybe<AdminMetafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: AdminMetafieldConnection
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<AdminPrivateMetafield>
    /** List of private metafields. */
    privateMetafields: AdminPrivateMetafieldConnection
    /** The products that are included in the collection. */
    products: AdminProductConnection
    /** The number of products included in the collection. */
    productsCount: Scalars['Int']
    /** The number of publications a resource is published on. */
    publicationCount: Scalars['Int']
    /**
     * The channels where the collection is published.
     * @deprecated Use `resourcePublications` instead
     */
    publications: AdminCollectionPublicationConnection
    /**
     * Check to see whether the resource is published to a given channel.
     * @deprecated Use `publishedOnPublication` instead
     */
    publishedOnChannel: Scalars['Boolean']
    /**
     * Check to see whether the resource is published to the calling app's channel.
     * @deprecated Use `publishedOnCurrentPublication` instead
     */
    publishedOnCurrentChannel: Scalars['Boolean']
    /** Check to see whether the resource is published to the calling app's publication. */
    publishedOnCurrentPublication: Scalars['Boolean']
    /** Check to see whether the resource is published to a given publication. */
    publishedOnPublication: Scalars['Boolean']
    /** The list of resources that are published to a publication. */
    resourcePublications: AdminResourcePublicationConnection
    /** The rules used to assign products to the collection. This applies only to smart collections. */
    ruleSet?: Maybe<AdminCollectionRuleSet>
    /** SEO information for the collection. */
    seo: AdminSeo
    /** The order in which the collection's products are sorted. */
    sortOrder: AdminCollectionSortOrder
    /** The storefront ID of the collection. */
    storefrontId: Scalars['StorefrontID']
    /** The theme template used when viewing this collection in a store. */
    templateSuffix?: Maybe<Scalars['String']>
    /** The title of the collection. */
    title: Scalars['String']
    /** The translations associated with the resource. */
    translations: Array<AdminPublishedTranslation>
    /**
     * The list of channels that the resource is not published to.
     * @deprecated Use `unpublishedPublications` instead
     */
    unpublishedChannels: AdminChannelConnection
    /** The list of publications that the resource is not published to. */
    unpublishedPublications: AdminPublicationConnection
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified. */
    updatedAt: Scalars['DateTime']
  }

/** Represents a collection of products. */
export type AdminCollectionDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>
}

/** Represents a collection of products. */
export type AdminCollectionHasProductArgs = {
  id: Scalars['ID']
}

/** Represents a collection of products. */
export type AdminCollectionImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Represents a collection of products. */
export type AdminCollectionMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents a collection of products. */
export type AdminCollectionMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a collection of products. */
export type AdminCollectionPrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents a collection of products. */
export type AdminCollectionPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a collection of products. */
export type AdminCollectionProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductCollectionSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents a collection of products. */
export type AdminCollectionPublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
}

/** Represents a collection of products. */
export type AdminCollectionPublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a collection of products. */
export type AdminCollectionPublishedOnChannelArgs = {
  channelId: Scalars['ID']
}

/** Represents a collection of products. */
export type AdminCollectionPublishedOnPublicationArgs = {
  publicationId: Scalars['ID']
}

/** Represents a collection of products. */
export type AdminCollectionResourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a collection of products. */
export type AdminCollectionTranslationsArgs = {
  locale: Scalars['String']
}

/** Represents a collection of products. */
export type AdminCollectionUnpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a collection of products. */
export type AdminCollectionUnpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Return type for `collectionAddProducts` mutation. */
export type AdminCollectionAddProductsPayload = {
  __typename?: 'CollectionAddProductsPayload'
  /** The updated collection. */
  collection?: Maybe<AdminCollection>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminCollectionConnection = {
  __typename?: 'CollectionConnection'
  /** A list of edges. */
  edges: Array<AdminCollectionEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `collectionCreate` mutation. */
export type AdminCollectionCreatePayload = {
  __typename?: 'CollectionCreatePayload'
  /** The collection that has been created. */
  collection?: Maybe<AdminCollection>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the collection to delete. */
export type AdminCollectionDeleteInput = {
  /** The ID of the collection to be deleted. */
  id: Scalars['ID']
}

/** Return type for `collectionDelete` mutation. */
export type AdminCollectionDeletePayload = {
  __typename?: 'CollectionDeletePayload'
  /** The ID of the collection that was deleted. */
  deletedCollectionId?: Maybe<Scalars['ID']>
  /** The shop associated with the collection. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminCollectionEdge = {
  __typename?: 'CollectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CollectionEdge. */
  node: AdminCollection
}

/** Specifies the input fields required to create a collection. */
export type AdminCollectionInput = {
  /** The description of the collection, in HTML format. */
  descriptionHtml?: Maybe<Scalars['String']>
  /** A unique human-friendly string for the collection. Automatically generated from the collection's title. */
  handle?: Maybe<Scalars['String']>
  /** Specifies the collection to update or create a new collection if absent. */
  id?: Maybe<Scalars['ID']>
  /** The image associated with the collection. */
  image?: Maybe<AdminImageInput>
  /** Initial list of collection products. Only valid with `productCreate` and without rules. */
  products?: Maybe<Array<Scalars['ID']>>
  /** Initial list of collection publications. Only valid with `productCreate`. This argument is deprecated: Use PublishablePublish instead. */
  publications?: Maybe<Array<AdminCollectionPublicationInput>>
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<AdminPrivateMetafieldInput>>
  /** The rules used to assign products to the collection. */
  ruleSet?: Maybe<AdminCollectionRuleSetInput>
  /** The theme template used when viewing the collection in a store. */
  templateSuffix?: Maybe<Scalars['String']>
  /** The order in which the collection's products are sorted. */
  sortOrder?: Maybe<AdminCollectionSortOrder>
  /** Required for creating a new collection. */
  title?: Maybe<Scalars['String']>
  /** The metafields to associate with this collection. */
  metafields?: Maybe<Array<AdminMetafieldInput>>
  /** SEO information for the collection. */
  seo?: Maybe<AdminSeoInput>
  /**
   * Indicates whether a redirect is required after a new handle has been provided.
   * If true, then the old handle is redirected to the new one automatically.
   */
  redirectNewHandle?: Maybe<Scalars['Boolean']>
}

/** Represents the publications where a collection is published. */
export type AdminCollectionPublication = {
  __typename?: 'CollectionPublication'
  /**
   * The channel where the collection will be published.
   * @deprecated Use `publication` instead
   */
  channel: AdminChannel
  /** The collection to be published on the publication. */
  collection: AdminCollection
  /** Whether the publication is published or not. */
  isPublished: Scalars['Boolean']
  /** The publication where the collection will be published. */
  publication: AdminPublication
  /** The date that the publication was or is going to be published. */
  publishDate: Scalars['DateTime']
}

export type AdminCollectionPublicationConnection = {
  __typename?: 'CollectionPublicationConnection'
  /** A list of edges. */
  edges: Array<AdminCollectionPublicationEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminCollectionPublicationEdge = {
  __typename?: 'CollectionPublicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CollectionPublicationEdge. */
  node: AdminCollectionPublication
}

/** Specifies the publications to which a collection will be published. */
export type AdminCollectionPublicationInput = {
  /** The ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>
  /** The ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>
  /** This argument is deprecated: Use publicationId instead. */
  channelHandle?: Maybe<Scalars['String']>
}

/** Specifies a collection to publish and the sales channels to publish it to. */
export type AdminCollectionPublishInput = {
  /** The collection to create or update publications for. */
  id: Scalars['ID']
  /** The channels where the collection will be published. */
  collectionPublications: Array<AdminCollectionPublicationInput>
}

/** Return type for `collectionPublish` mutation. */
export type AdminCollectionPublishPayload = {
  __typename?: 'CollectionPublishPayload'
  /** The published collection. */
  collection?: Maybe<AdminCollection>
  /** The channels where the collection has been published. */
  collectionPublications?: Maybe<Array<AdminCollectionPublication>>
  /** The shop associated with the collection. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `collectionRemoveProducts` mutation. */
export type AdminCollectionRemoveProductsPayload = {
  __typename?: 'CollectionRemoveProductsPayload'
  /** The asynchronous job removing the products. */
  job?: Maybe<AdminJob>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `collectionReorderProducts` mutation. */
export type AdminCollectionReorderProductsPayload = {
  __typename?: 'CollectionReorderProductsPayload'
  /** The asynchronous job reordering the products. */
  job?: Maybe<AdminJob>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Represents at rule that's used to assign products to a collection. */
export type AdminCollectionRule = {
  __typename?: 'CollectionRule'
  /** The attribute that the rule focuses on (for example, `title` or `product_type`). */
  column: AdminCollectionRuleColumn
  /** The value that the operator is applied to (for example, `Hats`). */
  condition: Scalars['String']
  /** The type of operator that the rule is based on (for example, `equals`, `contains`, or `not_equals`). */
  relation: AdminCollectionRuleRelation
}

/** Specifies the property of a product being used to populate the smart collection. */
export enum AdminCollectionRuleColumn {
  /** The `tag` attribute. */
  Tag = 'TAG',
  /** The `title` attribute. */
  Title = 'TITLE',
  /** The `type` attribute. */
  Type = 'TYPE',
  /** The `vendor` attribute. */
  Vendor = 'VENDOR',
  /** The `variant_price` attribute. */
  VariantPrice = 'VARIANT_PRICE',
  /** The `is_price_reduced` attribute. */
  IsPriceReduced = 'IS_PRICE_REDUCED',
  /** The `variant_compare_at_price` attribute. */
  VariantCompareAtPrice = 'VARIANT_COMPARE_AT_PRICE',
  /** The `variant_weight` attribute. */
  VariantWeight = 'VARIANT_WEIGHT',
  /** The `variant_inventory` attribute. */
  VariantInventory = 'VARIANT_INVENTORY',
  /** The `variant_title` attribute. */
  VariantTitle = 'VARIANT_TITLE'
}

/** Collections may use rules to automatically include the matching products. This defines restrictions for a type of rule. */
export type AdminCollectionRuleConditions = {
  __typename?: 'CollectionRuleConditions'
  /** Allowed relations of the rule. */
  allowedRelations: Array<AdminCollectionRuleRelation>
  /** Most commonly used relation for this rule. */
  defaultRelation: AdminCollectionRuleRelation
  /** Type of the rule. */
  ruleType: AdminCollectionRuleColumn
}

/** Specifies a rule to associate with a collection. */
export type AdminCollectionRuleInput = {
  /** The attribute that the rule focuses on (for example, `title` or `product_type`). */
  column: AdminCollectionRuleColumn
  /** The type of operator that the rule is based on (for example, `equals`, `contains`, or `not_equals`). */
  relation: AdminCollectionRuleRelation
  /** The value that the operator is applied to (for example, `Hats`). */
  condition: Scalars['String']
}

/** Specifies the relationship between the `column` and the condition. */
export enum AdminCollectionRuleRelation {
  /** The attribute contains the condition. */
  Contains = 'CONTAINS',
  /** The attribute ends with the condition. */
  EndsWith = 'ENDS_WITH',
  /** The attribute is equal to the condition. */
  Equals = 'EQUALS',
  /** The attribute is greater than the condition. */
  GreaterThan = 'GREATER_THAN',
  /** The attribute is not set. */
  IsNotSet = 'IS_NOT_SET',
  /** The attribute is set. */
  IsSet = 'IS_SET',
  /** The attribute is less than the condition. */
  LessThan = 'LESS_THAN',
  /** The attribute does not contain the condition. */
  NotContains = 'NOT_CONTAINS',
  /** The attribute does not equal the condition. */
  NotEquals = 'NOT_EQUALS',
  /** The attribute starts with the condition. */
  StartsWith = 'STARTS_WITH'
}

/** The set of rules that are used to determine which products are included in the collection. */
export type AdminCollectionRuleSet = {
  __typename?: 'CollectionRuleSet'
  /**
   * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match one or more of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
   */
  appliedDisjunctively: Scalars['Boolean']
  /** The rules used to assign products to the collection. */
  rules: Array<AdminCollectionRule>
}

/** Specifies a rule set for the collection. */
export type AdminCollectionRuleSetInput = {
  /**
   * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match one or more of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
   */
  appliedDisjunctively: Scalars['Boolean']
  /** The rules used to assign products to the collection. */
  rules?: Maybe<Array<AdminCollectionRuleInput>>
}

/** The set of valid sort keys for the Collection query. */
export enum AdminCollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Specifies the sort order for the products in the collection. */
export enum AdminCollectionSortOrder {
  /** Alphabetically, in ascending order (A - Z). */
  AlphaAsc = 'ALPHA_ASC',
  /** Alphabetically, in descending order (Z - A). */
  AlphaDesc = 'ALPHA_DESC',
  /** By best-selling products. */
  BestSelling = 'BEST_SELLING',
  /** By date created, in ascending order (oldest - newest). */
  Created = 'CREATED',
  /** By date created, in descending order (newest - oldest). */
  CreatedDesc = 'CREATED_DESC',
  /** In the order set manually by the merchant. */
  Manual = 'MANUAL',
  /** By price, in ascending order (lowest - highest). */
  PriceAsc = 'PRICE_ASC',
  /** By price, in descending order (highest - lowest). */
  PriceDesc = 'PRICE_DESC'
}

/** Specifies the collection to unpublish and the sales channels to remove it from. */
export type AdminCollectionUnpublishInput = {
  /** The collection to create or update publications for. */
  id: Scalars['ID']
  /** The channels where the collection is published. */
  collectionPublications: Array<AdminCollectionPublicationInput>
}

/** Return type for `collectionUnpublish` mutation. */
export type AdminCollectionUnpublishPayload = {
  __typename?: 'CollectionUnpublishPayload'
  /** The collection that has been unpublished. */
  collection?: Maybe<AdminCollection>
  /** The shop associated with the collection. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `collectionUpdate` mutation. */
export type AdminCollectionUpdatePayload = {
  __typename?: 'CollectionUpdatePayload'
  /** The updated collection. */
  collection?: Maybe<AdminCollection>
  /** The asynchronous job updating the products based on the new rule set. */
  job?: Maybe<AdminJob>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/**
 * Comment events are generated by staff members of a shop.
 * They are created when a staff member adds a comment to the timeline of an order, draft order, customer, or transfer.
 */
export type AdminCommentEvent = AdminNode &
  AdminEvent & {
    __typename?: 'CommentEvent'
    /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
    appTitle?: Maybe<Scalars['String']>
    /** The attachments associated with the comment event. */
    attachments: Array<AdminCommentEventAttachment>
    /** Whether the event was created by an app. */
    attributeToApp: Scalars['Boolean']
    /** Whether the event was caused by an admin user. */
    attributeToUser: Scalars['Boolean']
    /** Whether the comment event can be deleted. If true, then the comment event can be deleted. */
    canDelete: Scalars['Boolean']
    /** Whether the comment event can be edited. If true, then the comment event can be edited. */
    canEdit: Scalars['Boolean']
    /** The date and time when the event was created. */
    createdAt: Scalars['DateTime']
    /** Whether the event is critical. */
    criticalAlert: Scalars['Boolean']
    /** Whether the comment event has been edited. If true, then the comment event has been edited. */
    edited: Scalars['Boolean']
    /** The references associated with the comment event. */
    embed?: Maybe<AdminCommentEventEmbed>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** Human readable text that describes the event. */
    message: Scalars['FormattedString']
    /** The raw body of the comment event. */
    rawMessage: Scalars['String']
    /** The subject of the comment event. */
    subject: AdminCommentEventSubject
  }

/** A file attachment associated to a comment event. */
export type AdminCommentEventAttachment = {
  __typename?: 'CommentEventAttachment'
  /** The file extension of the comment event attachment, indicating the file format. */
  fileExtension?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The image attached to the comment event. */
  image?: Maybe<AdminImage>
  /** The filename of the comment event attachment. */
  name: Scalars['String']
  /** The size of the attachment. */
  size: Scalars['Int']
  /** The URL of the attachment. */
  url: Scalars['URL']
}

/** A file attachment associated to a comment event. */
export type AdminCommentEventAttachmentImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** The main embed of a comment event. */
export type AdminCommentEventEmbed = AdminCustomer | AdminDraftOrder | AdminOrder | AdminProduct | AdminProductVariant

/** The subject line of a comment event. */
export type AdminCommentEventSubject = {
  /** Whether the timeline subject has a timeline comment. If true, then a timeline comment exists. */
  hasTimelineComment: Scalars['Boolean']
  /** Globally unique identifier. */
  id: Scalars['ID']
}

/** Countries that have been defined in shipping zones for the shop. */
export type AdminCountriesInShippingZones = {
  __typename?: 'CountriesInShippingZones'
  /** Countries that have been defined in shipping zones. */
  countryCodes: Array<AdminCountryCode>
  /** Whether 'Rest of World' has been defined in any shipping zones. */
  includeRestOfWorld: Scalars['Boolean']
}

/** ISO 3166-1 alpha-2 country codes with some differences. */
export enum AdminCountryCode {
  /** Afghanistan. */
  Af = 'AF',
  /** Åland Islands. */
  Ax = 'AX',
  /** Albania. */
  Al = 'AL',
  /** Algeria. */
  Dz = 'DZ',
  /** Andorra. */
  Ad = 'AD',
  /** Angola. */
  Ao = 'AO',
  /** Anguilla. */
  Ai = 'AI',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Argentina. */
  Ar = 'AR',
  /** Armenia. */
  Am = 'AM',
  /** Aruba. */
  Aw = 'AW',
  /** Australia. */
  Au = 'AU',
  /** Austria. */
  At = 'AT',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bahamas. */
  Bs = 'BS',
  /** Bahrain. */
  Bh = 'BH',
  /** Bangladesh. */
  Bd = 'BD',
  /** Barbados. */
  Bb = 'BB',
  /** Belarus. */
  By = 'BY',
  /** Belgium. */
  Be = 'BE',
  /** Belize. */
  Bz = 'BZ',
  /** Benin. */
  Bj = 'BJ',
  /** Bermuda. */
  Bm = 'BM',
  /** Bhutan. */
  Bt = 'BT',
  /** Bolivia. */
  Bo = 'BO',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Botswana. */
  Bw = 'BW',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Brazil. */
  Br = 'BR',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Brunei. */
  Bn = 'BN',
  /** Bulgaria. */
  Bg = 'BG',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Burundi. */
  Bi = 'BI',
  /** Cambodia. */
  Kh = 'KH',
  /** Canada. */
  Ca = 'CA',
  /** Cape Verde. */
  Cv = 'CV',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Central African Republic. */
  Cf = 'CF',
  /** Chad. */
  Td = 'TD',
  /** Chile. */
  Cl = 'CL',
  /** China. */
  Cn = 'CN',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Colombia. */
  Co = 'CO',
  /** Comoros. */
  Km = 'KM',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Cook Islands. */
  Ck = 'CK',
  /** Costa Rica. */
  Cr = 'CR',
  /** Croatia. */
  Hr = 'HR',
  /** Cuba. */
  Cu = 'CU',
  /** Curaçao. */
  Cw = 'CW',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Denmark. */
  Dk = 'DK',
  /** Djibouti. */
  Dj = 'DJ',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Ecuador. */
  Ec = 'EC',
  /** Egypt. */
  Eg = 'EG',
  /** El Salvador. */
  Sv = 'SV',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Eritrea. */
  Er = 'ER',
  /** Estonia. */
  Ee = 'EE',
  /** Eswatini. */
  Sz = 'SZ',
  /** Ethiopia. */
  Et = 'ET',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** Fiji. */
  Fj = 'FJ',
  /** Finland. */
  Fi = 'FI',
  /** France. */
  Fr = 'FR',
  /** French Guiana. */
  Gf = 'GF',
  /** French Polynesia. */
  Pf = 'PF',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Gabon. */
  Ga = 'GA',
  /** Gambia. */
  Gm = 'GM',
  /** Georgia. */
  Ge = 'GE',
  /** Germany. */
  De = 'DE',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greece. */
  Gr = 'GR',
  /** Greenland. */
  Gl = 'GL',
  /** Grenada. */
  Gd = 'GD',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Guatemala. */
  Gt = 'GT',
  /** Guernsey. */
  Gg = 'GG',
  /** Guinea. */
  Gn = 'GN',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Haiti. */
  Ht = 'HT',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Vatican City. */
  Va = 'VA',
  /** Honduras. */
  Hn = 'HN',
  /** Hong Kong SAR China. */
  Hk = 'HK',
  /** Hungary. */
  Hu = 'HU',
  /** Iceland. */
  Is = 'IS',
  /** India. */
  In = 'IN',
  /** Indonesia. */
  Id = 'ID',
  /** Iran. */
  Ir = 'IR',
  /** Iraq. */
  Iq = 'IQ',
  /** Ireland. */
  Ie = 'IE',
  /** Isle of Man. */
  Im = 'IM',
  /** Israel. */
  Il = 'IL',
  /** Italy. */
  It = 'IT',
  /** Jamaica. */
  Jm = 'JM',
  /** Japan. */
  Jp = 'JP',
  /** Jersey. */
  Je = 'JE',
  /** Jordan. */
  Jo = 'JO',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Kenya. */
  Ke = 'KE',
  /** Kiribati. */
  Ki = 'KI',
  /** North Korea. */
  Kp = 'KP',
  /** Kosovo. */
  Xk = 'XK',
  /** Kuwait. */
  Kw = 'KW',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Laos. */
  La = 'LA',
  /** Latvia. */
  Lv = 'LV',
  /** Lebanon. */
  Lb = 'LB',
  /** Lesotho. */
  Ls = 'LS',
  /** Liberia. */
  Lr = 'LR',
  /** Libya. */
  Ly = 'LY',
  /** Liechtenstein. */
  Li = 'LI',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Macao SAR China. */
  Mo = 'MO',
  /** Madagascar. */
  Mg = 'MG',
  /** Malawi. */
  Mw = 'MW',
  /** Malaysia. */
  My = 'MY',
  /** Maldives. */
  Mv = 'MV',
  /** Mali. */
  Ml = 'ML',
  /** Malta. */
  Mt = 'MT',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Mauritius. */
  Mu = 'MU',
  /** Mayotte. */
  Yt = 'YT',
  /** Mexico. */
  Mx = 'MX',
  /** Moldova. */
  Md = 'MD',
  /** Monaco. */
  Mc = 'MC',
  /** Mongolia. */
  Mn = 'MN',
  /** Montenegro. */
  Me = 'ME',
  /** Montserrat. */
  Ms = 'MS',
  /** Morocco. */
  Ma = 'MA',
  /** Mozambique. */
  Mz = 'MZ',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Namibia. */
  Na = 'NA',
  /** Nauru. */
  Nr = 'NR',
  /** Nepal. */
  Np = 'NP',
  /** Netherlands. */
  Nl = 'NL',
  /** Netherlands Antilles. */
  An = 'AN',
  /** New Caledonia. */
  Nc = 'NC',
  /** New Zealand. */
  Nz = 'NZ',
  /** Nicaragua. */
  Ni = 'NI',
  /** Niger. */
  Ne = 'NE',
  /** Nigeria. */
  Ng = 'NG',
  /** Niue. */
  Nu = 'NU',
  /** Norfolk Island. */
  Nf = 'NF',
  /** North Macedonia. */
  Mk = 'MK',
  /** Norway. */
  No = 'NO',
  /** Oman. */
  Om = 'OM',
  /** Pakistan. */
  Pk = 'PK',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Panama. */
  Pa = 'PA',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Paraguay. */
  Py = 'PY',
  /** Peru. */
  Pe = 'PE',
  /** Philippines. */
  Ph = 'PH',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Poland. */
  Pl = 'PL',
  /** Portugal. */
  Pt = 'PT',
  /** Qatar. */
  Qa = 'QA',
  /** Cameroon. */
  Cm = 'CM',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** St. Helena. */
  Sh = 'SH',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** St. Lucia. */
  Lc = 'LC',
  /** St. Martin. */
  Mf = 'MF',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Samoa. */
  Ws = 'WS',
  /** San Marino. */
  Sm = 'SM',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Senegal. */
  Sn = 'SN',
  /** Serbia. */
  Rs = 'RS',
  /** Seychelles. */
  Sc = 'SC',
  /** Sierra Leone. */
  Sl = 'SL',
  /** Singapore. */
  Sg = 'SG',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Slovakia. */
  Sk = 'SK',
  /** Slovenia. */
  Si = 'SI',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Somalia. */
  So = 'SO',
  /** South Africa. */
  Za = 'ZA',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** South Korea. */
  Kr = 'KR',
  /** South Sudan. */
  Ss = 'SS',
  /** Spain. */
  Es = 'ES',
  /** Sri Lanka. */
  Lk = 'LK',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Sudan. */
  Sd = 'SD',
  /** Suriname. */
  Sr = 'SR',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Sweden. */
  Se = 'SE',
  /** Switzerland. */
  Ch = 'CH',
  /** Syria. */
  Sy = 'SY',
  /** Taiwan. */
  Tw = 'TW',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tanzania. */
  Tz = 'TZ',
  /** Thailand. */
  Th = 'TH',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Togo. */
  Tg = 'TG',
  /** Tokelau. */
  Tk = 'TK',
  /** Tonga. */
  To = 'TO',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tunisia. */
  Tn = 'TN',
  /** Turkey. */
  Tr = 'TR',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Tuvalu. */
  Tv = 'TV',
  /** Uganda. */
  Ug = 'UG',
  /** Ukraine. */
  Ua = 'UA',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** United Kingdom. */
  Gb = 'GB',
  /** United States. */
  Us = 'US',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vanuatu. */
  Vu = 'VU',
  /** Venezuela. */
  Ve = 'VE',
  /** Vietnam. */
  Vn = 'VN',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Western Sahara. */
  Eh = 'EH',
  /** Yemen. */
  Ye = 'YE',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW'
}

/** Holds the country specific harmonized system code and the country ISO code. */
export type AdminCountryHarmonizedSystemCode = {
  __typename?: 'CountryHarmonizedSystemCode'
  /** Country ISO code. */
  countryCode: AdminCountryCode
  /** Country specific harmonized system code. */
  harmonizedSystemCode: Scalars['String']
}

export type AdminCountryHarmonizedSystemCodeConnection = {
  __typename?: 'CountryHarmonizedSystemCodeConnection'
  /** A list of edges. */
  edges: Array<AdminCountryHarmonizedSystemCodeEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminCountryHarmonizedSystemCodeEdge = {
  __typename?: 'CountryHarmonizedSystemCodeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CountryHarmonizedSystemCodeEdge. */
  node: AdminCountryHarmonizedSystemCode
}

/** Holds the country specific harmonized system code and the country ISO code. */
export type AdminCountryHarmonizedSystemCodeInput = {
  /** Country specific harmonized system code. */
  harmonizedSystemCode: Scalars['String']
  /** Country ISO code. */
  countryCode: AdminCountryCode
}

/** Specifies the input fields required to create a media object. */
export type AdminCreateMediaInput = {
  /** The original source of the media object. May be an external URL or signed upload URL. */
  originalSource: Scalars['String']
  /** The alt text associated to the media. */
  alt?: Maybe<Scalars['String']>
  /** The media content type. */
  mediaContentType: AdminMediaContentType
}

/** The part of the image that should remain after cropping. */
export enum AdminCropRegion {
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the top of the image. */
  Top = 'TOP',
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT'
}

/** Currency codes. */
export enum AdminCurrencyCode {
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Belarusian Ruble (BYR). */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Sao Tome And Principe Dobra (STD). */
  Std = 'STD',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Venezuelan Bolivares (VEF). */
  Vef = 'VEF',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW'
}

/** Currency formats. */
export type AdminCurrencyFormats = {
  __typename?: 'CurrencyFormats'
  /** HTML without currency. */
  moneyFormat: Scalars['FormattedString']
  /** Email without currency. */
  moneyInEmailsFormat: Scalars['String']
  /** HTML with currency. */
  moneyWithCurrencyFormat: Scalars['FormattedString']
  /** Email with currency. */
  moneyWithCurrencyInEmailsFormat: Scalars['String']
}

/** Represents a currency setting. */
export type AdminCurrencySetting = {
  __typename?: 'CurrencySetting'
  /** The currency's ISO code. */
  currencyCode: AdminCurrencyCode
  /** The full name of the currency. */
  currencyName: Scalars['String']
  /** Flag describing whether the currency is enabled. */
  enabled: Scalars['Boolean']
  /** Date and time when the exchange rate for the currency was last modified. */
  rateUpdatedAt?: Maybe<Scalars['DateTime']>
}

export type AdminCurrencySettingConnection = {
  __typename?: 'CurrencySettingConnection'
  /** A list of edges. */
  edges: Array<AdminCurrencySettingEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminCurrencySettingEdge = {
  __typename?: 'CurrencySettingEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CurrencySettingEdge. */
  node: AdminCurrencySetting
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomer = AdminNode &
  AdminCommentEventSubject &
  AdminHasMetafields &
  AdminLegacyInteroperability &
  AdminHasEvents & {
    __typename?: 'Customer'
    /** Whether the customer has agreed to receive marketing materials. */
    acceptsMarketing: Scalars['Boolean']
    /** The date and time when the customer consented or objected to receiving marketing material by email. */
    acceptsMarketingUpdatedAt: Scalars['DateTime']
    /** A list of addresses associated with the customer. */
    addresses: Array<AdminMailingAddress>
    /**
     * The average amount that the customer spent per order.
     * @deprecated Use `averageOrderAmountV2` instead
     */
    averageOrderAmount?: Maybe<Scalars['Money']>
    /** The average amount that the customer spent per order. */
    averageOrderAmountV2?: Maybe<AdminMoneyV2>
    /**
     * Whether the merchant can delete the customer from their store.
     *
     * A customer can be deleted from a store only if they have not yet made an order. After a customer makes an
     * order, they can't be deleted from a store.
     */
    canDelete: Scalars['Boolean']
    /** The date and time when the customer was added to the store. */
    createdAt: Scalars['DateTime']
    /** The default address associated with the customer. */
    defaultAddress?: Maybe<AdminMailingAddress>
    /**
     * The full name of the customer, based on the values for first_name and last_name. If the first_name and
     * last_name are not available, then this falls back to the customer's email address, and if that is not available, the customer's phone number.
     */
    displayName: Scalars['String']
    /** The customer's email address. */
    email?: Maybe<Scalars['String']>
    /** A list of events associated with the customer. */
    events: AdminEventConnection
    /** The customer's first name. */
    firstName?: Maybe<Scalars['String']>
    /** Whether the customer has a note associated with them. */
    hasNote: Scalars['Boolean']
    /** Whether the merchant has added timeline comments about the customer on the customer's page. */
    hasTimelineComment: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The image associated with the customer. */
    image: AdminImage
    /** The customer's last name. */
    lastName?: Maybe<Scalars['String']>
    /** The customer's last order. */
    lastOrder?: Maybe<AdminOrder>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /**
     * The amount of time since the customer was first added to the store.
     *
     * Example: 'about 12 years'.
     */
    lifetimeDuration: Scalars['String']
    /** The customer's locale. */
    locale: Scalars['String']
    /**
     * The marketing subscription opt-in level (as described by the M3AAWG best practices guideline) that the
     * customer gave when they consented to receive marketing material by email.
     *
     * If the customer does not accept email marketing, then this property will be null.
     */
    marketingOptInLevel?: Maybe<AdminCustomerMarketingOptInLevel>
    /** The metafield associated with the resource. */
    metafield?: Maybe<AdminMetafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: AdminMetafieldConnection
    /** A note about the customer. */
    note?: Maybe<Scalars['String']>
    /** A list of the customer's orders. */
    orders: AdminOrderConnection
    /** The number of orders that the customer has made at the store in their lifetime. */
    ordersCount: Scalars['UnsignedInt64']
    /** The customer's phone number. */
    phone?: Maybe<Scalars['String']>
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<AdminPrivateMetafield>
    /** List of private metafields. */
    privateMetafields: AdminPrivateMetafieldConnection
    /** The state of the customer's account with the shop. */
    state: AdminCustomerState
    /** A comma separated list of tags that have been added to the customer. */
    tags: Array<Scalars['String']>
    /** Whether the customer is exempt from being charged taxes on their orders. */
    taxExempt: Scalars['Boolean']
    /** The list of tax exemptions applied to the customer. */
    taxExemptions: Array<AdminTaxExemption>
    /** The total amount that the customer has spent on orders in their lifetime. */
    totalSpent: Scalars['Money']
    /** The total amount that the customer has spent on orders in their lifetime. */
    totalSpentV2: AdminMoneyV2
    /** The date and time when the customer was last updated. */
    updatedAt: Scalars['DateTime']
    /**
     * Whether the email address is formatted correctly. This does not
     * guarantee that the email address actually exists.
     */
    validEmailAddress: Scalars['Boolean']
    /** Whether the customer has verified their email address. Defaults to `true` if the customer is created through the Shopify admin or API. */
    verifiedEmail: Scalars['Boolean']
  }

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomerAddressesArgs = {
  first?: Maybe<Scalars['Int']>
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomerEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminEventSortKeys>
  query?: Maybe<Scalars['String']>
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomerImageArgs = {
  size?: Maybe<Scalars['Int']>
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomerMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomerMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomerOrdersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminOrderSortKeys>
  query?: Maybe<Scalars['String']>
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomerPrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type AdminCustomerPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Return type for `customerAddTaxExemptions` mutation. */
export type AdminCustomerAddTaxExemptionsPayload = {
  __typename?: 'CustomerAddTaxExemptionsPayload'
  /** The updated customer. */
  customer?: Maybe<AdminCustomer>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminCustomerConnection = {
  __typename?: 'CustomerConnection'
  /** A list of edges. */
  edges: Array<AdminCustomerEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `customerCreate` mutation. */
export type AdminCustomerCreatePayload = {
  __typename?: 'CustomerCreatePayload'
  /** The created customer. */
  customer?: Maybe<AdminCustomer>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the customer to delete. */
export type AdminCustomerDeleteInput = {
  /** The ID of the customer to delete. */
  id: Scalars['ID']
}

/** Return type for `customerDelete` mutation. */
export type AdminCustomerDeletePayload = {
  __typename?: 'CustomerDeletePayload'
  /** ID of the deleted customer. */
  deletedCustomerId?: Maybe<Scalars['ID']>
  /** Shop of the deleted customer. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminCustomerEdge = {
  __typename?: 'CustomerEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CustomerEdge. */
  node: AdminCustomer
}

/** Provides the fields and values to use when creating or updating a customer. */
export type AdminCustomerInput = {
  /** Whether the customer has consented to receive marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>
  /**
   * The date and time when the customer consented or objected to receiving marketing material by email. Set
   * whenever the customer consents or objects to marketing material.
   */
  acceptsMarketingUpdatedAt?: Maybe<Scalars['DateTime']>
  /** An input that specifies addresses for a customer. */
  addresses?: Maybe<Array<AdminMailingAddressInput>>
  /** The unique email address of the customer. */
  email?: Maybe<Scalars['String']>
  /** The customer's first name. */
  firstName?: Maybe<Scalars['String']>
  /** Specifies the customer to update, or creates a new customer if one doesn't exist. */
  id?: Maybe<Scalars['ID']>
  /** The customer's last name. */
  lastName?: Maybe<Scalars['String']>
  /** The customer's locale. */
  locale?: Maybe<Scalars['String']>
  /**
   * The marketing subscription opt-in level (as described by the M3AAWG best practices guideline) that was
   * enabled when the customer consented to receiving marketing material by email.
   */
  marketingOptInLevel?: Maybe<AdminCustomerMarketingOptInLevel>
  /** Attaches additional metadata to the customer. */
  metafields?: Maybe<Array<AdminMetafieldInput>>
  /** A note about the customer. */
  note?: Maybe<Scalars['String']>
  /** The unique phone number for the customer. */
  phone?: Maybe<Scalars['String']>
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<AdminPrivateMetafieldInput>>
  /** A comma separated list of tags that have been added to the customer. */
  tags?: Maybe<Array<Scalars['String']>>
  /** Whether the customer is exempt from paying taxes on their order. */
  taxExempt?: Maybe<Scalars['Boolean']>
  /** The list of tax exemptions to apply to the customer. */
  taxExemptions?: Maybe<Array<AdminTaxExemption>>
}

/** Represents a customer's activity on a shop's online store. */
export type AdminCustomerJourney = {
  __typename?: 'CustomerJourney'
  /** The position of the current order within the customer's order history. */
  customerOrderIndex: Scalars['Int']
  /** The amount of days between first session and order creation date. First session represents first session since the last order, or first session within the 30 day attribution window, if more than 30 days has passed since the last order. */
  daysToConversion: Scalars['Int']
  /** The customer's first session going into the shop. */
  firstVisit: AdminCustomerVisit
  /** The last session before an order is made. */
  lastVisit?: Maybe<AdminCustomerVisit>
  /** Events preceding a customer order, such as shop sessions. */
  moments: Array<AdminCustomerMoment>
}

/**
 * The valid values for the marketing subscription opt-in active at the time the customer consented to email
 * marketing.
 *
 * The levels are defined by [the M3AAWG best practices guideline
 *   document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).
 */
export enum AdminCustomerMarketingOptInLevel {
  /**
   * The customer started receiving marketing email(s) after providing their email address, without any
   * intermediate steps.
   */
  SingleOptIn = 'SINGLE_OPT_IN',
  /**
   * After providing their email address, the customer received a confirmation email which required them to
   * perform a prescribed action before receiving marketing emails.
   */
  ConfirmedOptIn = 'CONFIRMED_OPT_IN',
  /** The customer receives marketing emails, but the original opt-in process is unknown. */
  Unknown = 'UNKNOWN'
}

/** Represents events preceding a customer order, such as shop sessions. */
export type AdminCustomerMoment = {
  /** When the customer moment occurred. */
  occurredAt: Scalars['DateTime']
}

/** Return type for `customerRemoveTaxExemptions` mutation. */
export type AdminCustomerRemoveTaxExemptionsPayload = {
  __typename?: 'CustomerRemoveTaxExemptionsPayload'
  /** The updated customer. */
  customer?: Maybe<AdminCustomer>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `customerReplaceTaxExemptions` mutation. */
export type AdminCustomerReplaceTaxExemptionsPayload = {
  __typename?: 'CustomerReplaceTaxExemptionsPayload'
  /** The updated customer. */
  customer?: Maybe<AdminCustomer>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The set of valid sort keys for the CustomerSavedSearch query. */
export enum AdminCustomerSavedSearchSortKeys {
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The set of valid sort keys for the Customer query. */
export enum AdminCustomerSortKeys {
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `location` value. */
  Location = 'LOCATION',
  /** Sort by the `orders_count` value. */
  OrdersCount = 'ORDERS_COUNT',
  /** Sort by the `last_order_date` value. */
  LastOrderDate = 'LAST_ORDER_DATE',
  /** Sort by the `total_spent` value. */
  TotalSpent = 'TOTAL_SPENT',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The valid values for the state of a customer's account with a shop. */
export enum AdminCustomerState {
  /** The customer declined the email invite to create an account. */
  Declined = 'DECLINED',
  /** The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time. */
  Disabled = 'DISABLED',
  /** The customer has created an account. */
  Enabled = 'ENABLED',
  /** The customer has received an email invite to create an account. */
  Invited = 'INVITED'
}

/** Return type for `customerUpdateDefaultAddress` mutation. */
export type AdminCustomerUpdateDefaultAddressPayload = {
  __typename?: 'CustomerUpdateDefaultAddressPayload'
  /** The customer whose address was updated. */
  customer?: Maybe<AdminCustomer>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `customerUpdate` mutation. */
export type AdminCustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload'
  /** The updated customer. */
  customer?: Maybe<AdminCustomer>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Information about a customer's session on a shop's online store. */
export type AdminCustomerVisit = AdminCustomerMoment &
  AdminNode & {
    __typename?: 'CustomerVisit'
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** URL of the first page the customer landed on for the session. */
    landingPage?: Maybe<Scalars['URL']>
    /** Landing page information with URL linked in HTML. For example, the first page the customer visited was store.myshopify.com/products/1. */
    landingPageHtml?: Maybe<Scalars['HTML']>
    /**
     * Represent actions taken by an app, on behalf of a merchant,
     * to market Shopify resources such as products, collections, and discounts.
     */
    marketingEvent?: Maybe<AdminMarketingEvent>
    /** When the customer moment occurred. */
    occurredAt: Scalars['DateTime']
    /**
     * Marketing referral code from the link that the customer clicked to visit the store.
     * Supports the following URL attributes: _ref_, _source_, or _r_.
     * For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
     */
    referralCode?: Maybe<Scalars['String']>
    /** Referral information with URLs linked in HTML. */
    referralInfoHtml: Scalars['FormattedString']
    /**
     * Webpage where the customer clicked a link that sent them to the online store.
     * For example, _https://randomblog.com/page1_ or _android-app://com.google.android.gm_.
     */
    referrerUrl?: Maybe<Scalars['URL']>
    /**
     * Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct,
     * a website domain, QR code, or unknown.
     */
    source: Scalars['String']
    /** Describes the source explicitly for first or last session. */
    sourceDescription?: Maybe<Scalars['String']>
    /** Type of marketing tactic. */
    sourceType?: Maybe<AdminMarketingTactic>
    /** A set of UTM parameters gathered from the URL parameters of the referrer. */
    utmParameters?: Maybe<AdminUtmParameters>
  }

/** Days of the week from Monday to Sunday. */
export enum AdminDayOfTheWeek {
  /** Monday. */
  Monday = 'MONDAY',
  /** Tuesday. */
  Tuesday = 'TUESDAY',
  /** Wednesday. */
  Wednesday = 'WEDNESDAY',
  /** Thursday. */
  Thursday = 'THURSDAY',
  /** Friday. */
  Friday = 'FRIDAY',
  /** Saturday. */
  Saturday = 'SATURDAY',
  /** Sunday. */
  Sunday = 'SUNDAY'
}

/**
 * Deletion events chronicle the destruction of resources (e.g. products and collections).
 * Once deleted, the deletion event is the only trace of the original's existence,
 * as the resource itself has been removed and can no longer be accessed.
 */
export type AdminDeletionEvent = {
  __typename?: 'DeletionEvent'
  /** The date and time when the deletion event for the related resource was generated. */
  occurredAt: Scalars['DateTime']
  /** The id of the resource that was deleted. */
  subjectId: Scalars['ID']
  /** The type of resource that was deleted. */
  subjectType: AdminDeletionEventSubjectType
}

export type AdminDeletionEventConnection = {
  __typename?: 'DeletionEventConnection'
  /** A list of edges. */
  edges: Array<AdminDeletionEventEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDeletionEventEdge = {
  __typename?: 'DeletionEventEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DeletionEventEdge. */
  node: AdminDeletionEvent
}

/** The set of valid sort keys for the DeletionEvent query. */
export enum AdminDeletionEventSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The supported subject types of deletion events. */
export enum AdminDeletionEventSubjectType {
  Collection = 'COLLECTION',
  Product = 'PRODUCT'
}

/** The service and the countries they are available for. */
export type AdminDeliveryAvailableService = {
  __typename?: 'DeliveryAvailableService'
  /** The countries the service provider ships to. */
  countries: AdminDeliveryCountryCodesOrRestOfWorld
  /** The name of the service. */
  name: Scalars['String']
}

/** Information about a carrier or service provider. */
export type AdminDeliveryCarrierService = AdminNode & {
  __typename?: 'DeliveryCarrierService'
  /** Services offered for given destinations. */
  availableServicesForCountries: Array<AdminDeliveryAvailableService>
  /** The properly formatted name of the service provider, ready to display. */
  formattedName?: Maybe<Scalars['String']>
  /** The logo of the service provider. */
  icon: AdminImage
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The name of the service provider. */
  name?: Maybe<Scalars['String']>
}

/** Information about a carrier or service provider. */
export type AdminDeliveryCarrierServiceAvailableServicesForCountriesArgs = {
  origins?: Maybe<Array<Scalars['ID']>>
  countryCodes?: Maybe<Array<AdminCountryCode>>
  restOfWorld: Scalars['Boolean']
}

/** A carrier services and their set of shop locations that can be used. */
export type AdminDeliveryCarrierServiceAndLocations = {
  __typename?: 'DeliveryCarrierServiceAndLocations'
  /** The carrier service. */
  carrierService: AdminDeliveryCarrierService
  /** The locations that support this carrier service. */
  locations: Array<AdminLocation>
}

/** A condition that must pass for a method definition to be applied to an order. */
export type AdminDeliveryCondition = AdminNode & {
  __typename?: 'DeliveryCondition'
  /** The criteria (weight or price) that the field must meet based on the operator. */
  conditionCriteria: AdminDeliveryConditionCriteria
  /** The field to compare the criteria unit against, using the operator. */
  field: AdminDeliveryConditionField
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The operator to compare the field and criteria. */
  operator: AdminDeliveryConditionOperator
}

/** The criteria (weight or price) that the field must meet based on the operator. */
export type AdminDeliveryConditionCriteria = AdminMoneyV2 | AdminWeight

/** The field type that the condition will be applied to. */
export enum AdminDeliveryConditionField {
  /** Condition will check against the total weight of the order. */
  TotalWeight = 'TOTAL_WEIGHT',
  /** Condition will check against the total price of the order. */
  TotalPrice = 'TOTAL_PRICE'
}

/** The operator to use to determine if the condition passes. */
export enum AdminDeliveryConditionOperator {
  /** The condition will check if the field is greater than or equal to the criteria. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** The condition will check if the field is less than or equal to the criteria. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO'
}

/** A country that is used to define a zone. */
export type AdminDeliveryCountry = AdminNode & {
  __typename?: 'DeliveryCountry'
  /** The ISO 3166-1 alpha-2 country code of this country and a flag indicating Rest Of World. */
  code: AdminDeliveryCountryCodeOrRestOfWorld
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The name of the country. */
  name: Scalars['String']
  /** The regions associated with this country. */
  provinces: Array<AdminDeliveryProvince>
}

/** A country with the name of the zone. */
export type AdminDeliveryCountryAndZone = {
  __typename?: 'DeliveryCountryAndZone'
  /** The country in the delivery zone. */
  country: AdminDeliveryCountry
  /** The name of the delivery zone. */
  zone: Scalars['String']
}

/** The ISO 3166-1 alpha-2 country code and a flag indicating Rest Of World. */
export type AdminDeliveryCountryCodeOrRestOfWorld = {
  __typename?: 'DeliveryCountryCodeOrRestOfWorld'
  /** The country code. */
  countryCode?: Maybe<AdminCountryCode>
  /** Indicates if 'Rest of World' is applied. */
  restOfWorld: Scalars['Boolean']
}

/** A list of ISO 3166-1 alpha-2 country codes or the 'Rest of World'. */
export type AdminDeliveryCountryCodesOrRestOfWorld = {
  __typename?: 'DeliveryCountryCodesOrRestOfWorld'
  /** List of applicable country codes. */
  countryCodes: Array<AdminCountryCode>
  /** Indicates if 'Rest of World' is applied. */
  restOfWorld: Scalars['Boolean']
}

/** Input fields to specify a country. */
export type AdminDeliveryCountryInput = {
  /** The country code of the country. */
  code?: Maybe<AdminCountryCode>
  /** Use Rest of World as the country. */
  restOfWorld?: Maybe<Scalars['Boolean']>
  /** The regions associated with this country. */
  provinces?: Maybe<Array<AdminDeliveryProvinceInput>>
  /** Associate all available provinces with this country. */
  includeAllProvinces?: Maybe<Scalars['Boolean']>
}

/** Whether the shop is blocked from converting to full multi-location delivery profiles mode. If the shop is blocked, then the blocking reasons are also returned. */
export type AdminDeliveryLegacyModeBlocked = {
  __typename?: 'DeliveryLegacyModeBlocked'
  /** Whether the shop can convert to full multi-location delivery profiles mode. */
  blocked: Scalars['Boolean']
  /** The reasons why the shop is blocked from converting to full multi-location delivery profiles mode. */
  reasons?: Maybe<Array<AdminDeliveryLegacyModeBlockedReason>>
}

/** Reasons the shop is blocked from converting to full multi-location delivery profiles mode. */
export enum AdminDeliveryLegacyModeBlockedReason {
  /** Multi-Location is disabled. */
  MultiLocationDisabled = 'MULTI_LOCATION_DISABLED',
  /** No locations that can fulfill online orders. */
  NoLocationsFulfillingOnlineOrders = 'NO_LOCATIONS_FULFILLING_ONLINE_ORDERS'
}

/** A location group is a collection of active locations that share zone and delivery methods across delivery profiles. */
export type AdminDeliveryLocationGroup = AdminNode & {
  __typename?: 'DeliveryLocationGroup'
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** List of active locations that are part of this location group. */
  locations: AdminLocationConnection
}

/** A location group is a collection of active locations that share zone and delivery methods across delivery profiles. */
export type AdminDeliveryLocationGroupLocationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminLocationSortKeys>
  query?: Maybe<Scalars['String']>
  includeLegacy?: Maybe<Scalars['Boolean']>
  includeInactive?: Maybe<Scalars['Boolean']>
}

/** Links a location group and zone with the associated method definitions in a delivery profile. */
export type AdminDeliveryLocationGroupZone = {
  __typename?: 'DeliveryLocationGroupZone'
  /** The method definitions associated to a zone and location group in a delivery profile. */
  methodDefinitions: AdminDeliveryMethodDefinitionConnection
  /** The zone associated to a location group in a delivery profile. */
  zone: AdminDeliveryZone
}

/** Links a location group and zone with the associated method definitions in a delivery profile. */
export type AdminDeliveryLocationGroupZoneMethodDefinitionsArgs = {
  eligible?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminMethodDefinitionSortKeys>
}

export type AdminDeliveryLocationGroupZoneConnection = {
  __typename?: 'DeliveryLocationGroupZoneConnection'
  /** A list of edges. */
  edges: Array<AdminDeliveryLocationGroupZoneEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDeliveryLocationGroupZoneEdge = {
  __typename?: 'DeliveryLocationGroupZoneEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DeliveryLocationGroupZoneEdge. */
  node: AdminDeliveryLocationGroupZone
}

/** Input fields for a delivery zone associated to a location group and profile. */
export type AdminDeliveryLocationGroupZoneInput = {
  /** Globally unique identifier of the Zone. */
  id?: Maybe<Scalars['ID']>
  /** The name of the zone. */
  name?: Maybe<Scalars['String']>
  /** Countries to associate with the zone. */
  countries?: Maybe<Array<AdminDeliveryCountryInput>>
  /** Method definitions to create. */
  methodDefinitionsToCreate?: Maybe<Array<AdminDeliveryMethodDefinitionInput>>
  /** Method definitions to update. */
  methodDefinitionsToUpdate?: Maybe<Array<AdminDeliveryMethodDefinitionInput>>
}

/** A method definition describes the delivery rate and the conditions that must be met for the method to be applied. */
export type AdminDeliveryMethodDefinition = AdminNode & {
  __typename?: 'DeliveryMethodDefinition'
  /** Whether this method definition is active. */
  active: Scalars['Boolean']
  /** The description of the method definition. */
  description?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The method conditions that must pass for this method definition to be applied to an order. */
  methodConditions: Array<AdminDeliveryCondition>
  /** The name of the method definition. */
  name: Scalars['String']
  /** Provided rate for this method definition, from a rate definition or participant. */
  rateProvider: AdminDeliveryRateProvider
}

export type AdminDeliveryMethodDefinitionConnection = {
  __typename?: 'DeliveryMethodDefinitionConnection'
  /** A list of edges. */
  edges: Array<AdminDeliveryMethodDefinitionEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDeliveryMethodDefinitionEdge = {
  __typename?: 'DeliveryMethodDefinitionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DeliveryMethodDefinitionEdge. */
  node: AdminDeliveryMethodDefinition
}

/** Input fields for a method definition. */
export type AdminDeliveryMethodDefinitionInput = {
  /** Globally unique identifier of the method definition. Use only when updating a method definiton. */
  id?: Maybe<Scalars['ID']>
  /** The name of the method definition. */
  name?: Maybe<Scalars['String']>
  /** The description of the method definition. */
  description?: Maybe<Scalars['String']>
  /** Whether or not to use this method definition during rate calculation. */
  active?: Maybe<Scalars['Boolean']>
  /** A rate definition to apply to the method definition. */
  rateDefinition?: Maybe<AdminDeliveryRateDefinitionInput>
  /** A participant to apply to the method definition. */
  participant?: Maybe<AdminDeliveryParticipantInput>
  /** Weight conditions on the method definition. */
  weightConditionsToCreate?: Maybe<Array<AdminDeliveryWeightConditionInput>>
  /** Price conditions on the method definition. */
  priceConditionsToCreate?: Maybe<Array<AdminDeliveryPriceConditionInput>>
  /** Conditions on the method definition to update. */
  conditionsToUpdate?: Maybe<Array<AdminDeliveryUpdateConditionInput>>
}

/** A carrier-defined rate with possible merchant-defined fixed fee or percentage-of-rate fee. */
export type AdminDeliveryParticipant = AdminNode & {
  __typename?: 'DeliveryParticipant'
  /** Flag to indicate if new available services should be included. */
  adaptToNewServicesFlag: Scalars['Boolean']
  /** Use this carrier service for this participant. */
  carrierService: AdminDeliveryCarrierService
  /** The merchant-set fixed fee for this participant. */
  fixedFee?: Maybe<AdminMoneyV2>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Services offered by the participant and their active status. */
  participantServices: Array<AdminDeliveryParticipantService>
  /** The merchant-set percentage-of-rate fee for this participant. */
  percentageOfRateFee: Scalars['Float']
}

/** Input fields for a participant. */
export type AdminDeliveryParticipantInput = {
  /** Globally unique identifier of the participant. */
  id?: Maybe<Scalars['ID']>
  /** Global identifier of the carrier service. */
  carrierServiceId?: Maybe<Scalars['ID']>
  /** The merchant-set fixed fee for this participant. */
  fixedFee?: Maybe<AdminMoneyInput>
  /** The merchant-set percentage-of-rate fee for this participant. */
  percentageOfRateFee?: Maybe<Scalars['Float']>
  /** Services offered by the participant and their active status. */
  participantServices?: Maybe<Array<AdminDeliveryParticipantServiceInput>>
  /** Flag to indicate if new available services should be included. */
  adaptToNewServices?: Maybe<Scalars['Boolean']>
}

/** A service provided by a participant. */
export type AdminDeliveryParticipantService = {
  __typename?: 'DeliveryParticipantService'
  /** If the service is active or not. */
  active: Scalars['Boolean']
  /** Name of the service. */
  name: Scalars['String']
}

/** Input fields for a service provided by a participant. */
export type AdminDeliveryParticipantServiceInput = {
  /** Name of the service. */
  name: Scalars['String']
  /** If the service is active or not. */
  active: Scalars['Boolean']
}

/** Input fields for the price-based conditions of a method definition. */
export type AdminDeliveryPriceConditionInput = {
  /** The criteria for the price. */
  criteria?: Maybe<AdminMoneyInput>
  /** The operator to use for comparison. */
  operator?: Maybe<AdminDeliveryConditionOperator>
}

/** How many product variants are in a profile. This count is capped at 500. */
export type AdminDeliveryProductVariantsCount = {
  __typename?: 'DeliveryProductVariantsCount'
  /** If the count has reached the cap of 500. */
  capped: Scalars['Boolean']
  /** The product variant count. */
  count: Scalars['Int']
}

/** A profile for multi-location, per-product delivery. */
export type AdminDeliveryProfile = AdminNode & {
  __typename?: 'DeliveryProfile'
  /** The number of active shipping rates for the profile. */
  activeMethodDefinitionsCount: Scalars['Int']
  /** Whether this is the default profile. */
  default: Scalars['Boolean']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Whether this shop has enabled legacy compatibility mode for delivery profiles. */
  legacyMode: Scalars['Boolean']
  /** The number of locations without rates defined. */
  locationsWithoutRatesCount: Scalars['Int']
  /** The name of the delivery profile. */
  name: Scalars['String']
  /** The number of active origin locations for the profile. */
  originLocationCount: Scalars['Int']
  /**
   * The number of product variants for this profile. The count for the default profile is not supported and will return -1.
   * @deprecated Use `productVariantsCountV2` instead
   */
  productVariantsCount: Scalars['Int']
  /** How many product variants are in this profile. */
  productVariantsCountV2: AdminDeliveryProductVariantsCount
  /** The products and variants associated with this profile. */
  profileItems: AdminDeliveryProfileItemConnection
  /** The location groups and associated zones using this profile. */
  profileLocationGroups: Array<AdminDeliveryProfileLocationGroup>
  /** List of locations that have not been assigned to a location group for this profile. */
  unassignedLocations: Array<AdminLocation>
  /** The number of countries with active rates to deliver to. */
  zoneCountryCount: Scalars['Int']
}

/** A profile for multi-location, per-product delivery. */
export type AdminDeliveryProfileProfileItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProfileItemSortKeys>
}

export type AdminDeliveryProfileConnection = {
  __typename?: 'DeliveryProfileConnection'
  /** A list of edges. */
  edges: Array<AdminDeliveryProfileEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDeliveryProfileEdge = {
  __typename?: 'DeliveryProfileEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DeliveryProfileEdge. */
  node: AdminDeliveryProfile
}

/** Input fields for a delivery profile. */
export type AdminDeliveryProfileInput = {
  /** The name of the profile. */
  name?: Maybe<Scalars['String']>
  /** The location groups associated with the profile. */
  profileLocationGroups?: Maybe<Array<AdminDeliveryProfileLocationGroupInput>>
  /** The location groups to be created in the profile. */
  locationGroupsToCreate?: Maybe<Array<AdminDeliveryProfileLocationGroupInput>>
  /** The location groups to be updated in the profile. */
  locationGroupsToUpdate?: Maybe<Array<AdminDeliveryProfileLocationGroupInput>>
  /** The location groups to be deleted in the profile. */
  locationGroupsToDelete?: Maybe<Array<Scalars['ID']>>
  /** The product variant ids to be associated with this profile. */
  variantsToAssociate?: Maybe<Array<Scalars['ID']>>
  /** The product variant ids to be dissociated from this profile and returned to the default profile. */
  variantsToDissociate?: Maybe<Array<Scalars['ID']>>
  /** Zones to delete. */
  zonesToDelete?: Maybe<Array<Scalars['ID']>>
  /** Method definitions to delete. */
  methodDefinitionsToDelete?: Maybe<Array<Scalars['ID']>>
  /** Conditions to delete. */
  conditionsToDelete?: Maybe<Array<Scalars['ID']>>
}

/** A product and the subset of associated variants that are part of this delivery profile. */
export type AdminDeliveryProfileItem = {
  __typename?: 'DeliveryProfileItem'
  /** A product associated with this profile. */
  product: AdminProduct
  /** The product variants associated with this delivery profile. */
  variants: AdminProductVariantConnection
}

/** A product and the subset of associated variants that are part of this delivery profile. */
export type AdminDeliveryProfileItemVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductVariantSortKeys>
}

export type AdminDeliveryProfileItemConnection = {
  __typename?: 'DeliveryProfileItemConnection'
  /** A list of edges. */
  edges: Array<AdminDeliveryProfileItemEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDeliveryProfileItemEdge = {
  __typename?: 'DeliveryProfileItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DeliveryProfileItemEdge. */
  node: AdminDeliveryProfileItem
}

/** Links a location group with zones associated to a delivery profile. */
export type AdminDeliveryProfileLocationGroup = {
  __typename?: 'DeliveryProfileLocationGroup'
  /** The countries already selected in any zone for the given location group and profile. */
  countriesInAnyZone: Array<AdminDeliveryCountryAndZone>
  /** The location group associated to a delivery profile. */
  locationGroup: AdminDeliveryLocationGroup
  /** The applicable zones associated to a location group and delivery profile. */
  locationGroupZones: AdminDeliveryLocationGroupZoneConnection
}

/** Links a location group with zones associated to a delivery profile. */
export type AdminDeliveryProfileLocationGroupLocationGroupZonesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Input fields for a delivery location group associated to a profile. */
export type AdminDeliveryProfileLocationGroupInput = {
  /** Globally unique identifier of the LocationGroup. */
  id?: Maybe<Scalars['ID']>
  /** The location ids of the locations to be moved to this location group. */
  locations?: Maybe<Array<Scalars['ID']>>
  /** Zones to create. */
  zonesToCreate?: Maybe<Array<AdminDeliveryLocationGroupZoneInput>>
  /** Zones to update. */
  zonesToUpdate?: Maybe<Array<AdminDeliveryLocationGroupZoneInput>>
}

/** A region that is used to define a zone. */
export type AdminDeliveryProvince = AdminNode & {
  __typename?: 'DeliveryProvince'
  /** The code of this region. */
  code: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The name of the region. */
  name: Scalars['String']
}

/** The input fields to specify a region. */
export type AdminDeliveryProvinceInput = {
  /** The code of the region. */
  code: Scalars['String']
}

/** The merchant-defined rate of the DeliveryMethodDefinition. */
export type AdminDeliveryRateDefinition = AdminNode & {
  __typename?: 'DeliveryRateDefinition'
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The price of this rate. */
  price: AdminMoneyV2
}

/** Input fields for a rate definition. */
export type AdminDeliveryRateDefinitionInput = {
  /** Globally unique identifier of the rate definition. */
  id?: Maybe<Scalars['ID']>
  /** The price of the rate definition. */
  price: AdminMoneyInput
}

/** Rate provided by a rate definition or a participant. */
export type AdminDeliveryRateProvider = AdminDeliveryParticipant | AdminDeliveryRateDefinition

/** Delivery shop-level settings. */
export type AdminDeliverySetting = {
  __typename?: 'DeliverySetting'
  /** Whether the shop is blocked from converting to full multi-location delivery profiles mode. If the shop is blocked, then the blocking reasons are also returned. */
  legacyModeBlocked: AdminDeliveryLegacyModeBlocked
  /** Enables legacy compatability mode for the multi-location delivery profiles feature. */
  legacyModeProfiles: Scalars['Boolean']
}

/** Input fields for shop-level delivery settings. */
export type AdminDeliverySettingInput = {
  /** Enables legacy compatability mode for the multi-location delivery profiles feature. */
  legacyModeProfiles?: Maybe<Scalars['Boolean']>
}

/** Return type for `deliverySettingUpdate` mutation. */
export type AdminDeliverySettingUpdatePayload = {
  __typename?: 'DeliverySettingUpdatePayload'
  /** The updated delivery shop level settings. */
  setting?: Maybe<AdminDeliverySetting>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `deliveryShippingOriginAssign` mutation. */
export type AdminDeliveryShippingOriginAssignPayload = {
  __typename?: 'DeliveryShippingOriginAssignPayload'
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Input fields for updating the conditions of a method definition. */
export type AdminDeliveryUpdateConditionInput = {
  /** Globally unique identifier of the condition. */
  id: Scalars['ID']
  /** The value of the criteria of the condition. */
  criteria?: Maybe<Scalars['Float']>
  /** The unit of the criteria of the condition. */
  criteriaUnit?: Maybe<Scalars['String']>
  /** The field to use, either total_weight or total_price. */
  field?: Maybe<AdminDeliveryConditionField>
  /** The operator to use for comparison. */
  operator?: Maybe<AdminDeliveryConditionOperator>
}

/** Input fields for the weight-based conditions of a method definition. */
export type AdminDeliveryWeightConditionInput = {
  /** The criteria for the weight. */
  criteria?: Maybe<AdminWeightInput>
  /** The operator to use for comparison. */
  operator?: Maybe<AdminDeliveryConditionOperator>
}

/** A zone is a geographical area that contains delivery methods within a delivery profile. */
export type AdminDeliveryZone = AdminNode & {
  __typename?: 'DeliveryZone'
  /** The list of countries within the zone. */
  countries: Array<AdminDeliveryCountry>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The name of the zone. */
  name: Scalars['String']
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum AdminDigitalWallet {
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY'
}

/** An amount discounting the line that has been allocated by an associated discount application. */
export type AdminDiscountAllocation = {
  __typename?: 'DiscountAllocation'
  /**
   * Money amount allocated by the discount application.
   * @deprecated Use `allocatedAmountSet` instead
   */
  allocatedAmount: AdminMoneyV2
  /** Money amount allocated by the discount application in shop and presentment currencies. */
  allocatedAmountSet: AdminMoneyBag
  /** The discount of which this allocated amount originated from. */
  discountApplication: AdminDiscountApplication
}

/** The fixed amount value of a discount. */
export type AdminDiscountAmount = {
  __typename?: 'DiscountAmount'
  /** The value of the discount. */
  amount: AdminMoneyV2
  /** If true, then the discount is applied to each of the entitled items. If false, then the amount is split across all of the entitled items. */
  appliesOnEachItem: Scalars['Boolean']
}

/** Specifies the value of the discount and how it is applied. */
export type AdminDiscountAmountInput = {
  /** The value of the discount. */
  amount?: Maybe<Scalars['Decimal']>
  /** If true, then the discount is applied to each of the entitled items. If false, then the amount is split across all of the entitled items. */
  appliesOnEachItem?: Maybe<Scalars['Boolean']>
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application on an order's line items or shipping lines.
 */
export type AdminDiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: AdminDiscountApplicationAllocationMethod
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int']
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: AdminDiscountApplicationTargetSelection
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: AdminDiscountApplicationTargetType
  /** The value of the discount application. */
  value: AdminPricingValue
}

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum AdminDiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /** The value is specifically applied onto a particular line. */
  One = 'ONE'
}

export type AdminDiscountApplicationConnection = {
  __typename?: 'DiscountApplicationConnection'
  /** A list of edges. */
  edges: Array<AdminDiscountApplicationEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDiscountApplicationEdge = {
  __typename?: 'DiscountApplicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountApplicationEdge. */
  node: AdminDiscountApplication
}

/**
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 */
export enum AdminDiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines it is entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT'
}

/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
export enum AdminDiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE'
}

/** An automatic discount. */
export type AdminDiscountAutomatic = AdminDiscountAutomaticBasic | AdminDiscountAutomaticBxgy

/** Return type for `discountAutomaticActivate` mutation. */
export type AdminDiscountAutomaticActivatePayload = {
  __typename?: 'DiscountAutomaticActivatePayload'
  /** The activated automatic discount. */
  automaticDiscountNode?: Maybe<AdminDiscountAutomaticNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** An automatic basic discount. */
export type AdminDiscountAutomaticBasic = {
  __typename?: 'DiscountAutomaticBasic'
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: AdminDiscountCustomerGets
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement: AdminDiscountMinimumRequirement
  /** A short summary of the discount. */
  shortSummary: Scalars['String']
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime']
  /** The status of the discount. */
  status: AdminDiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars['String']
  /** The title of the discount. */
  title: Scalars['String']
  /**
   * The number of times that the discount has been used.
   * @deprecated Use `asyncUsageCount` instead
   */
  usageCount: Scalars['Int']
}

/** Return type for `discountAutomaticBasicCreate` mutation. */
export type AdminDiscountAutomaticBasicCreatePayload = {
  __typename?: 'DiscountAutomaticBasicCreatePayload'
  /** The created automatic discount. */
  automaticDiscountNode?: Maybe<AdminDiscountAutomaticNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Specifies input field to create or update automatic basic discount. */
export type AdminDiscountAutomaticBasicInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<AdminDiscountMinimumRequirementInput>
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<AdminDiscountCustomerGetsInput>
}

/** Return type for `discountAutomaticBasicUpdate` mutation. */
export type AdminDiscountAutomaticBasicUpdatePayload = {
  __typename?: 'DiscountAutomaticBasicUpdatePayload'
  /** The updated automatic discount. */
  automaticDiscountNode?: Maybe<AdminDiscountAutomaticNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Return type for `discountAutomaticBulkDelete` mutation. */
export type AdminDiscountAutomaticBulkDeletePayload = {
  __typename?: 'DiscountAutomaticBulkDeletePayload'
  /** The asynchronous job removing the automatic discounts. */
  job?: Maybe<AdminJob>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** An automatic BXGY discount. */
export type AdminDiscountAutomaticBxgy = AdminNode &
  AdminHasEvents & {
    __typename?: 'DiscountAutomaticBxgy'
    /** The date and time when the discount was created. */
    createdAt: Scalars['DateTime']
    /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
    customerBuys: AdminDiscountCustomerBuys
    /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
    customerGets: AdminDiscountCustomerGets
    /** The date and time when the discount ends. For open-ended discounts, use `null`. */
    endsAt?: Maybe<Scalars['DateTime']>
    /** The paginated list of events associated with the host subject. */
    events: AdminEventConnection
    /**
     * A legacy unique identifier for the discount.
     * @deprecated Use DiscountAutomaticNode.id instead.
     */
    id: Scalars['ID']
    /** The date and time when the discount starts. */
    startsAt: Scalars['DateTime']
    /** The status of the discount. */
    status: AdminDiscountStatus
    /** A detailed summary of the discount. */
    summary: Scalars['String']
    /** The title of the discount. */
    title: Scalars['String']
    /**
     * The number of times that the discount has been used.
     * @deprecated Use `asyncUsageCount` instead
     */
    usageCount: Scalars['Int']
    /** The maximum number of times that the discount can be applied to an order. */
    usesPerOrderLimit?: Maybe<Scalars['Int']>
  }

/** An automatic BXGY discount. */
export type AdminDiscountAutomaticBxgyEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminEventSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Return type for `discountAutomaticBxgyCreate` mutation. */
export type AdminDiscountAutomaticBxgyCreatePayload = {
  __typename?: 'DiscountAutomaticBxgyCreatePayload'
  /** The created automatic discount. */
  automaticDiscountNode?: Maybe<AdminDiscountAutomaticNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Specifies input field to create or update automatic bogo discount. */
export type AdminDiscountAutomaticBxgyInput = {
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['UnsignedInt64']>
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys?: Maybe<AdminDiscountCustomerBuysInput>
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<AdminDiscountCustomerGetsInput>
}

/** Return type for `discountAutomaticBxgyUpdate` mutation. */
export type AdminDiscountAutomaticBxgyUpdatePayload = {
  __typename?: 'DiscountAutomaticBxgyUpdatePayload'
  /** The updated automatic discount. */
  automaticDiscountNode?: Maybe<AdminDiscountAutomaticNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

export type AdminDiscountAutomaticConnection = {
  __typename?: 'DiscountAutomaticConnection'
  /** A list of edges. */
  edges: Array<AdminDiscountAutomaticEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `discountAutomaticDeactivate` mutation. */
export type AdminDiscountAutomaticDeactivatePayload = {
  __typename?: 'DiscountAutomaticDeactivatePayload'
  /** The deactivated automatic discount. */
  automaticDiscountNode?: Maybe<AdminDiscountAutomaticNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Return type for `discountAutomaticDelete` mutation. */
export type AdminDiscountAutomaticDeletePayload = {
  __typename?: 'DiscountAutomaticDeletePayload'
  /** The deleted automatic discount ID. */
  deletedAutomaticDiscountId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

export type AdminDiscountAutomaticEdge = {
  __typename?: 'DiscountAutomaticEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountAutomaticEdge. */
  node: AdminDiscountAutomatic
}

/** An automatic discount wrapper node. */
export type AdminDiscountAutomaticNode = AdminNode &
  AdminHasEvents & {
    __typename?: 'DiscountAutomaticNode'
    /** An automatic discount. */
    automaticDiscount: AdminDiscountAutomatic
    /** The paginated list of events associated with the host subject. */
    events: AdminEventConnection
    /** Globally unique identifier. */
    id: Scalars['ID']
  }

/** An automatic discount wrapper node. */
export type AdminDiscountAutomaticNodeEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminEventSortKeys>
  query?: Maybe<Scalars['String']>
}

export type AdminDiscountAutomaticNodeConnection = {
  __typename?: 'DiscountAutomaticNodeConnection'
  /** A list of edges. */
  edges: Array<AdminDiscountAutomaticNodeEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDiscountAutomaticNodeEdge = {
  __typename?: 'DiscountAutomaticNodeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountAutomaticNodeEdge. */
  node: AdminDiscountAutomaticNode
}

/** A code discount. */
export type AdminDiscountCode = AdminDiscountCodeBasic | AdminDiscountCodeBxgy | AdminDiscountCodeFreeShipping

/** Return type for `discountCodeActivate` mutation. */
export type AdminDiscountCodeActivatePayload = {
  __typename?: 'DiscountCodeActivatePayload'
  /** The activated code discount. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied onto an order.
 */
export type AdminDiscountCodeApplication = AdminDiscountApplication & {
  __typename?: 'DiscountCodeApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: AdminDiscountApplicationAllocationMethod
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String']
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int']
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: AdminDiscountApplicationTargetSelection
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: AdminDiscountApplicationTargetType
  /** The value of the discount application. */
  value: AdminPricingValue
}

/** A basic code discount. */
export type AdminDiscountCodeBasic = {
  __typename?: 'DiscountCodeBasic'
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean']
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int']
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int']
  /** A list of redeem codes for the discount. */
  codes: AdminDiscountRedeemCodeConnection
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: AdminDiscountCustomerGets
  /** The customers that can use the discount. */
  customerSelection: AdminDiscountCustomerSelection
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<AdminDiscountMinimumRequirement>
  /** A short summary of the discount. */
  shortSummary: Scalars['String']
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime']
  /** The status of the discount. */
  status: AdminDiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars['String']
  /** The title of the discount. */
  title: Scalars['String']
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>
}

/** A basic code discount. */
export type AdminDiscountCodeBasicCodesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Return type for `discountCodeBasicCreate` mutation. */
export type AdminDiscountCodeBasicCreatePayload = {
  __typename?: 'DiscountCodeBasicCreatePayload'
  /** The created code discount. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Specifies input field to create or update code basic discount. */
export type AdminDiscountCodeBasicInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The maximum number of times that the discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<AdminDiscountMinimumRequirementInput>
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<AdminDiscountCustomerGetsInput>
  /** The customers that can use the discount. */
  customerSelection?: Maybe<AdminDiscountCustomerSelectionInput>
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>
}

/** Return type for `discountCodeBasicUpdate` mutation. */
export type AdminDiscountCodeBasicUpdatePayload = {
  __typename?: 'DiscountCodeBasicUpdatePayload'
  /** The updated code discount. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** A BXGY code discount. */
export type AdminDiscountCodeBxgy = {
  __typename?: 'DiscountCodeBxgy'
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean']
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int']
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int']
  /** A list of redeem codes for the discount. */
  codes: AdminDiscountRedeemCodeConnection
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys: AdminDiscountCustomerBuys
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: AdminDiscountCustomerGets
  /** The customers that can use the discount. */
  customerSelection: AdminDiscountCustomerSelection
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime']
  /** The status of the discount. */
  status: AdminDiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars['String']
  /** The title of the discount. */
  title: Scalars['String']
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']>
}

/** A BXGY code discount. */
export type AdminDiscountCodeBxgyCodesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Return type for `discountCodeBxgyCreate` mutation. */
export type AdminDiscountCodeBxgyCreatePayload = {
  __typename?: 'DiscountCodeBxgyCreatePayload'
  /** The created code discount. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Specifies input field to create or update a BXGY code discount. */
export type AdminDiscountCodeBxgyInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys?: Maybe<AdminDiscountCustomerBuysInput>
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<AdminDiscountCustomerGetsInput>
  /** The customers that can use the discount. */
  customerSelection?: Maybe<AdminDiscountCustomerSelectionInput>
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>
  /** The maximum number of times that the discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']>
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>
}

/** Return type for `discountCodeBxgyUpdate` mutation. */
export type AdminDiscountCodeBxgyUpdatePayload = {
  __typename?: 'DiscountCodeBxgyUpdatePayload'
  /** The updated code discount. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Return type for `discountCodeDeactivate` mutation. */
export type AdminDiscountCodeDeactivatePayload = {
  __typename?: 'DiscountCodeDeactivatePayload'
  /** The deactivated code discount. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Return type for `discountCodeDelete` mutation. */
export type AdminDiscountCodeDeletePayload = {
  __typename?: 'DiscountCodeDeletePayload'
  /** The deleted code discount ID. */
  deletedCodeDiscountId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** A free shipping code discount. */
export type AdminDiscountCodeFreeShipping = {
  __typename?: 'DiscountCodeFreeShipping'
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean']
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int']
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int']
  /** A list of redeem codes for the discount. */
  codes: AdminDiscountRedeemCodeConnection
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime']
  /** The customers that can use the discount. */
  customerSelection: AdminDiscountCustomerSelection
  /** A shipping destination that qualifies for the discount. */
  destinationSelection: AdminDiscountShippingDestinationSelection
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<AdminDiscountMinimumRequirement>
  /** A short summary of the discount. */
  shortSummary: Scalars['String']
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime']
  /** The status of the discount. */
  status: AdminDiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars['String']
  /** The title of the discount. */
  title: Scalars['String']
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>
}

/** A free shipping code discount. */
export type AdminDiscountCodeFreeShippingCodesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Return type for `discountCodeFreeShippingCreate` mutation. */
export type AdminDiscountCodeFreeShippingCreatePayload = {
  __typename?: 'DiscountCodeFreeShippingCreatePayload'
  /** The created code discount. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** Specifies input field to create or update free shipping code discount. */
export type AdminDiscountCodeFreeShippingInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>
  /** The maximum number of times that the discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<AdminDiscountMinimumRequirementInput>
  /** The customers that can use the discount. */
  customerSelection?: Maybe<AdminDiscountCustomerSelectionInput>
  /** A list of destinations where the discount will apply. */
  destination?: Maybe<AdminDiscountShippingDestinationSelectionInput>
}

/** Return type for `discountCodeFreeShippingUpdate` mutation. */
export type AdminDiscountCodeFreeShippingUpdatePayload = {
  __typename?: 'DiscountCodeFreeShippingUpdatePayload'
  /** The updated code discount. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminDiscountUserError>
}

/** A code discount wrapper node. */
export type AdminDiscountCodeNode = AdminNode &
  AdminHasEvents & {
    __typename?: 'DiscountCodeNode'
    /** A code discount. */
    codeDiscount: AdminDiscountCode
    /** The paginated list of events associated with the host subject. */
    events: AdminEventConnection
    /** Globally unique identifier. */
    id: Scalars['ID']
  }

/** A code discount wrapper node. */
export type AdminDiscountCodeNodeEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminEventSortKeys>
  query?: Maybe<Scalars['String']>
}

export type AdminDiscountCodeNodeConnection = {
  __typename?: 'DiscountCodeNodeConnection'
  /** A list of edges. */
  edges: Array<AdminDiscountCodeNodeEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDiscountCodeNodeEdge = {
  __typename?: 'DiscountCodeNodeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountCodeNodeEdge. */
  node: AdminDiscountCodeNode
}

/** The set of valid sort keys for the DiscountCode query. */
export enum AdminDiscountCodeSortKeys {
  /** Sort by the `code` value. */
  Code = 'CODE',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** A list of collections that the discount can have as a prerequisite or entitlement. */
export type AdminDiscountCollections = {
  __typename?: 'DiscountCollections'
  /** A list of collections that the discount can have as a prerequisite or entitlement. */
  collections: AdminCollectionConnection
}

/** A list of collections that the discount can have as a prerequisite or entitlement. */
export type AdminDiscountCollectionsCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Specifies the collections attached to a discount. */
export type AdminDiscountCollectionsInput = {
  /** Specifies list of collection ids to add. */
  add?: Maybe<Array<Scalars['ID']>>
  /** Specifies list of collection ids to remove. */
  remove?: Maybe<Array<Scalars['ID']>>
}

/** The shipping destination where the discount applies. */
export type AdminDiscountCountries = {
  __typename?: 'DiscountCountries'
  /** The codes for the countries where the discount can be used. */
  countries: Array<AdminCountryCode>
  /** Whether the discount is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars['Boolean']
}

/** Specifies a list of countries to add or remove from the free shipping discount. */
export type AdminDiscountCountriesInput = {
  /** The country codes to add to the list of countries where the discount applies. */
  add?: Maybe<Array<AdminCountryCode>>
  /** The country codes to remove from the list of countries where the discount applies. */
  remove?: Maybe<Array<AdminCountryCode>>
  /** Whether the discount code is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld?: Maybe<Scalars['Boolean']>
}

/** Whether the discount applies to all countries. */
export type AdminDiscountCountryAll = {
  __typename?: 'DiscountCountryAll'
  /** Always true when resolved to this type. */
  allCountries: Scalars['Boolean']
}

/** Whether the discount applies to all customers. */
export type AdminDiscountCustomerAll = {
  __typename?: 'DiscountCustomerAll'
  /** Always true when resolved to this type. */
  allCustomers: Scalars['Boolean']
}

/** The prerequisite items and prerequisite value. */
export type AdminDiscountCustomerBuys = {
  __typename?: 'DiscountCustomerBuys'
  /** The items required for the discount to be applicable. */
  items: AdminDiscountItems
  /** The prerequisite value. */
  value: AdminDiscountCustomerBuysValue
}

/** Specifies the prerequisite items and prerequisite quantity. */
export type AdminDiscountCustomerBuysInput = {
  /** The quantity of prerequisite items. */
  value?: Maybe<AdminDiscountCustomerBuysValueInput>
  /** The IDs of items that the customer buys. The items can be either collections or products. */
  items?: Maybe<AdminDiscountItemsInput>
}

/** The prerequisite quantity required for the discount to be applicable. */
export type AdminDiscountCustomerBuysValue = AdminDiscountPurchaseAmount | AdminDiscountQuantity

/** Specifies the prerequisite quantity for the discount. */
export type AdminDiscountCustomerBuysValueInput = {
  /** The quantity of prerequisite items. */
  quantity?: Maybe<Scalars['UnsignedInt64']>
  /** The prerequisite purchase amount required for the discount to be applicable. */
  amount?: Maybe<Scalars['Decimal']>
}

/** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
export type AdminDiscountCustomerGets = {
  __typename?: 'DiscountCustomerGets'
  /** The items to which the discount applies. */
  items: AdminDiscountItems
  /** Entitled quantity and the discount value. */
  value: AdminDiscountCustomerGetsValue
}

/** Specifies the items that will be discounted, the quantity of items that will be discounted, and the value of discount. */
export type AdminDiscountCustomerGetsInput = {
  /** The quantity of items discounted and the discount value. */
  value?: Maybe<AdminDiscountCustomerGetsValueInput>
  /** The IDs of the items that the customer gets. The items can be either collections or products. */
  items?: Maybe<AdminDiscountItemsInput>
}

/** The value of the discount and how it will be applied. */
export type AdminDiscountCustomerGetsValue = AdminDiscountAmount | AdminDiscountOnQuantity | AdminDiscountPercentage

/** Specifies the quantity of items discounted and the discount value. */
export type AdminDiscountCustomerGetsValueInput = {
  /** The quantity of the items that are discounted and the discount value. */
  discountOnQuantity?: Maybe<AdminDiscountOnQuantityInput>
  /** The percentage value of the discount. Value must be between 0.00 - 1.00. */
  percentage?: Maybe<Scalars['Float']>
  /** The value of the discount. */
  discountAmount?: Maybe<AdminDiscountAmountInput>
}

/** A list of customer saved searches that contain the customers to whom the discount applies. */
export type AdminDiscountCustomerSavedSearches = {
  __typename?: 'DiscountCustomerSavedSearches'
  /** A list of customer saved searches that contain the customers who can use the discount. */
  savedSearches: Array<AdminSavedSearch>
}

/** Specifies which customer saved searches to add to or remove from the discount. */
export type AdminDiscountCustomerSavedSearchesInput = {
  /** A list of customer saved searches to add to the current list of customer saved searches. */
  add?: Maybe<Array<Scalars['ID']>>
  /** A list of customer saved searches to remove from the current list of customer saved searches. */
  remove?: Maybe<Array<Scalars['ID']>>
}

/** The selection of customers who can use this discount. */
export type AdminDiscountCustomerSelection = AdminDiscountCustomerAll | AdminDiscountCustomerSavedSearches | AdminDiscountCustomers

/** Specifies the customers who can use this discount. */
export type AdminDiscountCustomerSelectionInput = {
  /** Whether all customers can use this discount. */
  all?: Maybe<Scalars['Boolean']>
  /** The list of customer IDs to add or remove from the list of customers. */
  customers?: Maybe<AdminDiscountCustomersInput>
  /** The list of customer saved search IDs to add or remove from the list of customer saved searches. */
  customerSavedSearches?: Maybe<AdminDiscountCustomerSavedSearchesInput>
}

/** A list of customers to whom the discount applies. */
export type AdminDiscountCustomers = {
  __typename?: 'DiscountCustomers'
  /** A list of the customers that can use the discount. */
  customers: Array<AdminCustomer>
}

/** Specifies which customers to add to or remove from the discount. */
export type AdminDiscountCustomersInput = {
  /** A list of customers to add to the current list of customers who can use the discount. */
  add?: Maybe<Array<Scalars['ID']>>
  /** A list of customers to remove from the current list of customers who can use the discount. */
  remove?: Maybe<Array<Scalars['ID']>>
}

/** The type of discount that will be applied. Currently, only percentage off is supported. */
export type AdminDiscountEffect = AdminDiscountPercentage

/** Specifies how the discount will be applied. Currently, only percentage off is supported. */
export type AdminDiscountEffectInput = {
  /** The percentage value of the discount. Value must be between 0.00 - 1.00. */
  percentage?: Maybe<Scalars['Float']>
}

/** Possible error codes that could be returned by DiscountUserError. */
export enum AdminDiscountErrorCode {
  /** Input value is blank. */
  Blank = 'BLANK',
  /** Input value is not present. */
  Present = 'PRESENT',
  /** Input value should be equal to allowed value. */
  EqualTo = 'EQUAL_TO',
  /** Input value should be greater than minimum allowed value. */
  GreaterThan = 'GREATER_THAN',
  /** Input value should be greater than or equal to minimum allowed value. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Input value should be less or equal to maximum allowed value. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Input value should be less than maximum allowed value. */
  LessThan = 'LESS_THAN',
  /** Input value is already taken. */
  Taken = 'TAKEN',
  /** Input value is too long. */
  TooLong = 'TOO_LONG',
  /** Input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unexpected internal error happened. */
  InternalError = 'INTERNAL_ERROR',
  /** Too many arguments provided. */
  TooManyArguments = 'TOO_MANY_ARGUMENTS',
  /** Missing a required argument. */
  MissingArgument = 'MISSING_ARGUMENT',
  /** Value is outside allowed range. */
  ValueOutsideRange = 'VALUE_OUTSIDE_RANGE',
  /** Exceeded maximum allowed value. */
  ExceededMax = 'EXCEEDED_MAX',
  /** Cannot have both minimum subtotal and quantity present. */
  MinimumSubtotalAndQuantityRangeBothPresent = 'MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT',
  /** Active period overlaps with other automatic discounts. At any given time, only one automatic discount can be active. */
  ActivePeriodOverlap = 'ACTIVE_PERIOD_OVERLAP',
  /** Attribute selection contains conflicting settings. */
  Conflict = 'CONFLICT',
  /** Value is already present through another selection. */
  ImplicitDuplicate = 'IMPLICIT_DUPLICATE',
  /** Input value is already present. */
  Duplicate = 'DUPLICATE'
}

/** Entitled or prerequisite items on a discount. An item could be either collection or product or product_variant. */
export type AdminDiscountItems = AdminAllDiscountItems | AdminDiscountCollections | AdminDiscountProducts

/** Specifies the items attached to a discount. */
export type AdminDiscountItemsInput = {
  /** The products and product variants that are attached to a discount. */
  products?: Maybe<AdminDiscountProductsInput>
  /** The collections that are attached to a discount. */
  collections?: Maybe<AdminDiscountCollectionsInput>
  /** Whether all items should be selected. */
  all?: Maybe<Scalars['Boolean']>
}

/** The minimum quantity of items required for the discount to apply. */
export type AdminDiscountMinimumQuantity = {
  __typename?: 'DiscountMinimumQuantity'
  /** The minimum quantity of items that's required for the discount to be applied. */
  greaterThanOrEqualToQuantity: Scalars['UnsignedInt64']
}

/** Specifies the quantity minimum requirements for a discount. */
export type AdminDiscountMinimumQuantityInput = {
  /** The minimum quantity of items that's required for the discount to be applied. */
  greaterThanOrEqualToQuantity?: Maybe<Scalars['UnsignedInt64']>
}

/** The minimum subtotal or quantity requirements for the discount. */
export type AdminDiscountMinimumRequirement = AdminDiscountMinimumQuantity | AdminDiscountMinimumSubtotal

/** Specifies the quantity or subtotal minimum requirements for a discount. */
export type AdminDiscountMinimumRequirementInput = {
  /** The minimum required quantity. */
  quantity?: Maybe<AdminDiscountMinimumQuantityInput>
  /** The minimum required subtotal. */
  subtotal?: Maybe<AdminDiscountMinimumSubtotalInput>
}

/** The minimum subtotal required for the discount to apply. */
export type AdminDiscountMinimumSubtotal = {
  __typename?: 'DiscountMinimumSubtotal'
  /** The minimum subtotal that's required for the discount to be applied. */
  greaterThanOrEqualToSubtotal: AdminMoneyV2
}

/** Specifies the subtotal minimum requirements for a discount. */
export type AdminDiscountMinimumSubtotalInput = {
  /** The minimum subtotal that's required for the discount to be applied. */
  greaterThanOrEqualToSubtotal?: Maybe<Scalars['Decimal']>
}

/** The quantity of items discounted, the discount value, and how the discount will be applied. */
export type AdminDiscountOnQuantity = {
  __typename?: 'DiscountOnQuantity'
  /** The discount's effect on qualifying items. */
  effect: AdminDiscountEffect
  /** The number of items being discounted. */
  quantity: AdminDiscountQuantity
}

/** Specifies the quantity of items discounted and the discount value. */
export type AdminDiscountOnQuantityInput = {
  /** The quantity of items that are discounted. */
  quantity?: Maybe<Scalars['UnsignedInt64']>
  /** The percentage value of the discount. */
  effect?: Maybe<AdminDiscountEffectInput>
}

/** The percentage value of the discount. */
export type AdminDiscountPercentage = {
  __typename?: 'DiscountPercentage'
  /** The percentage value of the discount. */
  percentage: Scalars['Float']
}

/** The entitled or prerequisite products and product variants for a discount. */
export type AdminDiscountProducts = {
  __typename?: 'DiscountProducts'
  /** A list of product variants that the discount can have as a prerequisite or entitlement. */
  productVariants: AdminProductVariantConnection
  /** A list of products that the discount can have as a prerequisite or entitlement. */
  products: AdminProductConnection
}

/** The entitled or prerequisite products and product variants for a discount. */
export type AdminDiscountProductsProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The entitled or prerequisite products and product variants for a discount. */
export type AdminDiscountProductsProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Specifies the products and product variants attached to a discount. */
export type AdminDiscountProductsInput = {
  /** Specifies list of product ids to add. */
  productsToAdd?: Maybe<Array<Scalars['ID']>>
  /** Specifies list of product ids to remove. */
  productsToRemove?: Maybe<Array<Scalars['ID']>>
  /** Specifies list of product variant ids to add. */
  productVariantsToAdd?: Maybe<Array<Scalars['ID']>>
  /** Specifies list of product variant ids to remove. */
  productVariantsToRemove?: Maybe<Array<Scalars['ID']>>
}

/** The prerequisite purchase amount required for the discount to be applicable. */
export type AdminDiscountPurchaseAmount = {
  __typename?: 'DiscountPurchaseAmount'
  /** Decimal money amount. */
  amount: Scalars['Decimal']
}

/** The quantity of items in discount. */
export type AdminDiscountQuantity = {
  __typename?: 'DiscountQuantity'
  /** The quantity of items. */
  quantity: Scalars['UnsignedInt64']
}

/** A redeem code for a code discount. */
export type AdminDiscountRedeemCode = {
  __typename?: 'DiscountRedeemCode'
  /** The code of a discount. */
  code: Scalars['String']
}

export type AdminDiscountRedeemCodeConnection = {
  __typename?: 'DiscountRedeemCodeConnection'
  /** A list of edges. */
  edges: Array<AdminDiscountRedeemCodeEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDiscountRedeemCodeEdge = {
  __typename?: 'DiscountRedeemCodeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountRedeemCodeEdge. */
  node: AdminDiscountRedeemCode
}

/** The selection of shipping countries to which this discount applies. */
export type AdminDiscountShippingDestinationSelection = AdminDiscountCountries | AdminDiscountCountryAll

/** Specifies the destinations where the free shipping discount will be applied. */
export type AdminDiscountShippingDestinationSelectionInput = {
  /** Whether the discount code applies to all countries. */
  all?: Maybe<Scalars['Boolean']>
  /** A list of countries where the discount code will apply. */
  countries?: Maybe<AdminDiscountCountriesInput>
}

/** The status of the discount. */
export enum AdminDiscountStatus {
  /** The discount is active. */
  Active = 'ACTIVE',
  /** The discount is expired. */
  Expired = 'EXPIRED',
  /** The discount is scheduled. */
  Scheduled = 'SCHEDULED'
}

/** An error that occurs during the execution of a discount mutation. */
export type AdminDiscountUserError = AdminDisplayableError & {
  __typename?: 'DiscountUserError'
  /** Error code to uniquely identify the error. */
  code?: Maybe<AdminDiscountErrorCode>
  /** Extra information about this error. */
  extraInfo?: Maybe<Scalars['String']>
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Represents an error in the input of a mutation. */
export type AdminDisplayableError = {
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** The possible statuses of a dispute. */
export enum AdminDisputeStatus {
  NeedsResponse = 'NEEDS_RESPONSE',
  UnderReview = 'UNDER_REVIEW',
  ChargeRefunded = 'CHARGE_REFUNDED',
  Accepted = 'ACCEPTED',
  Won = 'WON',
  Lost = 'LOST'
}

/** The possible types for a dispute. */
export enum AdminDisputeType {
  /** The dispute has turned into a chargeback. */
  Chargeback = 'CHARGEBACK',
  /** The dispute is in the inquiry phase. */
  Inquiry = 'INQUIRY'
}

/** A unique string that represents the address of a Shopify store on the Internet. */
export type AdminDomain = AdminNode & {
  __typename?: 'Domain'
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean']
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL']
}

/** Returns unfulfilled line items grouped by their fulfillment service. Each draft fulfillment contains additional information, such as whether the fulfillment requires shipping and whether a shipping label can be printed for it. */
export type AdminDraftFulfillment = {
  __typename?: 'DraftFulfillment'
  /** Whether a label can be purchased. */
  allowLabelPurchase: Scalars['Boolean']
  /** The line items (which might correspond to a variant) that are part of this draft fulfillment. */
  lineItems: Array<AdminLineItem>
  /** Whether a fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean']
  /** The service responsible for fulfilling the fulfillment. */
  service: AdminFulfillmentService
}

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type AdminDraftOrder = AdminNode &
  AdminHasMetafields &
  AdminCommentEventSubject &
  AdminLegacyInteroperability &
  AdminHasEvents & {
    __typename?: 'DraftOrder'
    /** Order-level discount applied to the draft order. */
    appliedDiscount?: Maybe<AdminDraftOrderAppliedDiscount>
    /** Billing address of the customer. */
    billingAddress?: Maybe<AdminMailingAddress>
    /**
     * Date and time when the draft order converted to a new order,
     * and the draft order's status changed to **Completed**.
     */
    completedAt?: Maybe<Scalars['DateTime']>
    /** Date and time when the draft order was created in Shopify. */
    createdAt: Scalars['DateTime']
    /** Three letter code for the currency of the store at the time that the invoice is sent. */
    currencyCode: AdminCurrencyCode
    /** Custom information added to the draft order on behalf of your customer. */
    customAttributes: Array<AdminAttribute>
    /** Customer who will be sent an invoice for the draft order, if there is one. */
    customer?: Maybe<AdminCustomer>
    /** Email address of the customer, which is used to send notifications to. */
    email?: Maybe<Scalars['String']>
    /** List of events associated with the draft order. */
    events: AdminEventConnection
    /** Whether the merchant has added timeline comments to the draft order. */
    hasTimelineComment: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** Date and time when the invoice was last emailed to the customer. */
    invoiceSentAt?: Maybe<Scalars['DateTime']>
    /** Link to the checkout, which is sent to your customer in the invoice email. */
    invoiceUrl?: Maybe<Scalars['URL']>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** List of the line items in the draft order. */
    lineItems: AdminDraftOrderLineItemConnection
    /** The metafield associated with the resource. */
    metafield?: Maybe<AdminMetafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: AdminMetafieldConnection
    /** Unique identifier for the draft order, which is unique within the store. For example, _#D1223_. */
    name: Scalars['String']
    /** Text from an optional note attached to the draft order. */
    note2?: Maybe<Scalars['String']>
    /** Order that was created from this draft order. */
    order?: Maybe<AdminOrder>
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<AdminPrivateMetafield>
    /** List of private metafields. */
    privateMetafields: AdminPrivateMetafieldConnection
    /** Shipping mailing address of the customer. */
    shippingAddress?: Maybe<AdminMailingAddress>
    /** Line item that contains the shipping costs. */
    shippingLine?: Maybe<AdminShippingLine>
    /** Status of the draft order. */
    status: AdminDraftOrderStatus
    /** Subtotal of the line items and their discounts (does not contain shipping charges or shipping discounts, or taxes). */
    subtotalPrice: Scalars['Money']
    /** A comma separated list of tags that have been added to the draft order. */
    tags: Array<Scalars['String']>
    /** Whether the draft order is tax exempt. */
    taxExempt: Scalars['Boolean']
    /** Total amount of taxes charged for each line item and shipping line. */
    taxLines: Array<AdminTaxLine>
    /** Whether the line item prices include taxes. */
    taxesIncluded: Scalars['Boolean']
    /** Total amount of the draft order (includes taxes, shipping charges, and discounts). */
    totalPrice: Scalars['Money']
    /** Total shipping charge for the draft order. */
    totalShippingPrice: Scalars['Money']
    /** Total amount of taxes for the draft order. */
    totalTax: Scalars['Money']
    /** Total weight (grams) of the draft order. */
    totalWeight: Scalars['UnsignedInt64']
    /**
     * Date and time when the draft order was last changed.
     * The format is YYYY-MM-DD HH:mm:ss (for example, 2016-02-05 17:04:01).
     */
    updatedAt: Scalars['DateTime']
  }

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type AdminDraftOrderEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminEventSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type AdminDraftOrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type AdminDraftOrderMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type AdminDraftOrderMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type AdminDraftOrderPrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type AdminDraftOrderPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The order-level discount applied to a draft order. */
export type AdminDraftOrderAppliedDiscount = {
  __typename?: 'DraftOrderAppliedDiscount'
  /**
   * Amount of the order-level discount that is applied to the draft order.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money']
  /** Amount of money discounted. */
  amountV2: AdminMoneyV2
  /** Description of the order-level discount. */
  description: Scalars['String']
  /** Name of the order-level discount. */
  title?: Maybe<Scalars['String']>
  /**
   * Amount of the order level discount (when value_type is percentage,
   * the value in this field is the percentage discount).
   */
  value: Scalars['Float']
  /** Type of the order-level discount. */
  valueType: AdminDraftOrderAppliedDiscountType
}

/** The input fields for applying an order-level discount to a draft order. */
export type AdminDraftOrderAppliedDiscountInput = {
  /** The applied amount of the discount. */
  amount?: Maybe<Scalars['Money']>
  /** Reason for the discount. */
  description?: Maybe<Scalars['String']>
  /** Title of the discount. */
  title?: Maybe<Scalars['String']>
  /**
   * The value of the discount.
   * If the type of the discount is fixed amount, then this is a fixed dollar amount.
   * If the type is percentage, then this is the percentage.
   */
  value: Scalars['Float']
  /** The type of discount. */
  valueType: AdminDraftOrderAppliedDiscountType
}

/** The valid discount types that can be applied to a draft order. */
export enum AdminDraftOrderAppliedDiscountType {
  /** A fixed amount in the store's currency. */
  FixedAmount = 'FIXED_AMOUNT',
  /** A percentage of the order subtotal. */
  Percentage = 'PERCENTAGE'
}

/** Return type for `draftOrderCalculate` mutation. */
export type AdminDraftOrderCalculatePayload = {
  __typename?: 'DraftOrderCalculatePayload'
  /** The calculated properties for a draft order. */
  calculatedDraftOrder?: Maybe<AdminCalculatedDraftOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `draftOrderComplete` mutation. */
export type AdminDraftOrderCompletePayload = {
  __typename?: 'DraftOrderCompletePayload'
  /** The completed draft order. */
  draftOrder?: Maybe<AdminDraftOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminDraftOrderConnection = {
  __typename?: 'DraftOrderConnection'
  /** A list of edges. */
  edges: Array<AdminDraftOrderEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `draftOrderCreate` mutation. */
export type AdminDraftOrderCreatePayload = {
  __typename?: 'DraftOrderCreatePayload'
  /** The created draft order. */
  draftOrder?: Maybe<AdminDraftOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the draft order to delete by its ID. */
export type AdminDraftOrderDeleteInput = {
  /** The ID of the draft order to delete. */
  id: Scalars['ID']
}

/** Return type for `draftOrderDelete` mutation. */
export type AdminDraftOrderDeletePayload = {
  __typename?: 'DraftOrderDeletePayload'
  /** The ID of the deleted draft order. */
  deletedId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminDraftOrderEdge = {
  __typename?: 'DraftOrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DraftOrderEdge. */
  node: AdminDraftOrder
}

/** The input fields used to create or update a draft order. */
export type AdminDraftOrderInput = {
  /**
   * The discount that will be applied to the draft order.
   * A draft order line item can have one discount. A draft order can also have one order-level discount.
   */
  appliedDiscount?: Maybe<AdminDraftOrderAppliedDiscountInput>
  /** The mailing address associated with the payment method. */
  billingAddress?: Maybe<AdminMailingAddressInput>
  /** Customer associated with the draft order. */
  customerId?: Maybe<Scalars['ID']>
  /** Extra information added to the customer. */
  customAttributes?: Maybe<Array<AdminAttributeInput>>
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>
  /**
   * Product variant line item or custom line item associated to the draft order.
   * Each draft order must include at least one line item.
   */
  lineItems?: Maybe<Array<AdminDraftOrderLineItemInput>>
  /** Metafields attached to the draft order. */
  metafields?: Maybe<Array<AdminMetafieldInput>>
  /** The private metafields attached to the draft order. */
  privateMetafields?: Maybe<Array<AdminPrivateMetafieldInput>>
  /** The text of an optional note that a shop owner can attach to the draft order. */
  note?: Maybe<Scalars['String']>
  /** The mailing address to where the order will be shipped. */
  shippingAddress?: Maybe<AdminMailingAddressInput>
  /** A shipping line object, which details the shipping method used. */
  shippingLine?: Maybe<AdminShippingLineInput>
  /** A comma separated list of tags that have been added to the draft order. */
  tags?: Maybe<Array<Scalars['String']>>
  /**
   * Whether or not taxes are exempt for the draft order.
   * If false, then Shopify will refer to the taxable field for each line item.
   * If a customer is applied to the draft order, then Shopify will use the customer's tax exempt field instead.
   */
  taxExempt?: Maybe<Scalars['Boolean']>
  /** Sent as part of a draft order object to load customer shipping information. */
  useCustomerDefaultAddress?: Maybe<Scalars['Boolean']>
}

/** Return type for `draftOrderInvoicePreview` mutation. */
export type AdminDraftOrderInvoicePreviewPayload = {
  __typename?: 'DraftOrderInvoicePreviewPayload'
  /** HTML to preview the draft order invoice email. */
  previewHtml?: Maybe<Scalars['HTML']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `draftOrderInvoiceSend` mutation. */
export type AdminDraftOrderInvoiceSendPayload = {
  __typename?: 'DraftOrderInvoiceSendPayload'
  /** The draft order an invoice email is sent for. */
  draftOrder?: Maybe<AdminDraftOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Represents a line item included in a draft order. */
export type AdminDraftOrderLineItem = AdminNode & {
  __typename?: 'DraftOrderLineItem'
  /** Discount which will be applied to the line item or the overall order. */
  appliedDiscount?: Maybe<AdminDraftOrderAppliedDiscount>
  /**
   * Whether this is a product variant line item, or a custom line item.
   * If set to true indicates a custom line item. If set to false indicates a product variant line item.
   */
  custom: Scalars['Boolean']
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<AdminAttribute>
  /** Line item price after discounts are applied. */
  discountedTotal: Scalars['Money']
  /** The `discountedTotal` divided by `quantity`, resulting in the value of the discount per unit. */
  discountedUnitPrice: Scalars['Money']
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   */
  fulfillmentService: AdminFulfillmentService
  /**
   * Weight in grams. Can only be specified if this is a custom line item.
   * @deprecated Use `weight` instead
   */
  grams?: Maybe<Scalars['Int']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Image associated with the draft order line item. */
  image?: Maybe<AdminImage>
  /** Whether the line item represents the puchase of a gift card. */
  isGiftCard: Scalars['Boolean']
  /** Name of the product. */
  name: Scalars['String']
  /** Total price (without discounts) of the line item, based on the original unit price of the variant x quantity. */
  originalTotal: Scalars['Money']
  /** Variant price without any discounts applied. */
  originalUnitPrice: Scalars['Money']
  /** The product corresponding to the line item’s product variant. */
  product?: Maybe<AdminProduct>
  /** Number of variant items requested in the draft order. */
  quantity: Scalars['Int']
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>
  /** A list of tax line objects, each of which details the total taxes applicable to the order. */
  taxLines: Array<AdminTaxLine>
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String']
  /** Total value of the discount applied to the line item. */
  totalDiscount: Scalars['Money']
  /** Associated variant for the line item. */
  variant?: Maybe<AdminProductVariant>
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>
  /** Weight unit and value for a draft order line item. */
  weight?: Maybe<AdminWeight>
}

/** Represents a line item included in a draft order. */
export type AdminDraftOrderLineItemImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

export type AdminDraftOrderLineItemConnection = {
  __typename?: 'DraftOrderLineItemConnection'
  /** A list of edges. */
  edges: Array<AdminDraftOrderLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminDraftOrderLineItemEdge = {
  __typename?: 'DraftOrderLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DraftOrderLineItemEdge. */
  node: AdminDraftOrderLineItem
}

/** The input fields used to create a line item for a draft order. */
export type AdminDraftOrderLineItemInput = {
  /** Discount which will be applied to the line item. */
  appliedDiscount?: Maybe<AdminDraftOrderAppliedDiscountInput>
  /** Represents a generic custom attribute using a key value pair. */
  customAttributes?: Maybe<Array<AdminAttributeInput>>
  /** Ignored when variant ID is provided. This argument is deprecated: Use `weight` instead. */
  grams?: Maybe<Scalars['Int']>
  /** Ignored when variant ID is provided. */
  originalUnitPrice?: Maybe<Scalars['Money']>
  /** The number of products that were purchased. */
  quantity: Scalars['Int']
  /** Ignored when variant ID is provided. */
  requiresShipping?: Maybe<Scalars['Boolean']>
  /** Ignored when variant ID is provided. */
  sku?: Maybe<Scalars['String']>
  /** Ignored when variant ID is provided. */
  taxable?: Maybe<Scalars['Boolean']>
  /** Ignored when variant ID is provided. */
  title?: Maybe<Scalars['String']>
  /**
   * The ID of the product variant corresponding to the line item.
   * Null if custom line item. Required if product variant line item.
   */
  variantId?: Maybe<Scalars['ID']>
  /**
   * Specifies the weight unit and value inputs.
   * Ignored when variant ID is provided.
   */
  weight?: Maybe<AdminWeightInput>
}

/** The set of valid sort keys for the DraftOrder query. */
export enum AdminDraftOrderSortKeys {
  /** Sort by the `number` value. */
  Number = 'NUMBER',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `status` value. */
  Status = 'STATUS',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
  /** Sort by the `customer_name` value. */
  CustomerName = 'CUSTOMER_NAME',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The valid statuses for a draft order. */
export enum AdminDraftOrderStatus {
  /** The draft order has been paid. */
  Completed = 'COMPLETED',
  /** An invoice for the draft order has been sent to the customer. */
  InvoiceSent = 'INVOICE_SENT',
  /** The draft order is open. It has not been paid, and an invoice hasn't been sent. */
  Open = 'OPEN'
}

/** Return type for `draftOrderUpdate` mutation. */
export type AdminDraftOrderUpdatePayload = {
  __typename?: 'DraftOrderUpdatePayload'
  /** The updated draft order. */
  draftOrder?: Maybe<AdminDraftOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The attribute editable information. */
export type AdminEditableProperty = {
  __typename?: 'EditableProperty'
  /** Whether the attribute is locked for editing. */
  locked: Scalars['Boolean']
  /** The reason the attribute is locked for editing. */
  reason?: Maybe<Scalars['FormattedString']>
}

/** Specifies the fields for an email. */
export type AdminEmailInput = {
  /** Specifies the email subject. */
  subject?: Maybe<Scalars['String']>
  /** Specifies the email recipient. */
  to?: Maybe<Scalars['String']>
  /** Specifies the email sender. */
  from?: Maybe<Scalars['String']>
  /** Specifies the email body. */
  body?: Maybe<Scalars['String']>
  /** Specifies any bcc recipients for the email. */
  bcc?: Maybe<Array<Scalars['String']>>
  /** Specifies a custom message to include in the email. */
  customMessage?: Maybe<Scalars['String']>
}

/**
 * Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the
 * addition of a product.
 */
export type AdminEvent = {
  /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
  appTitle?: Maybe<Scalars['String']>
  /** Whether the event was created by an app. */
  attributeToApp: Scalars['Boolean']
  /** Whether the event was caused by an admin user. */
  attributeToUser: Scalars['Boolean']
  /** The date and time when the event was created. */
  createdAt: Scalars['DateTime']
  /** Whether the event is critical. */
  criticalAlert: Scalars['Boolean']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Human readable text that describes the event. */
  message: Scalars['FormattedString']
}

export type AdminEventConnection = {
  __typename?: 'EventConnection'
  /** A list of edges. */
  edges: Array<AdminEventEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminEventEdge = {
  __typename?: 'EventEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of EventEdge. */
  node: AdminEvent
}

/** The set of valid sort keys for the Event query. */
export enum AdminEventSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Represents a video hosted outside of Shopify. */
export type AdminExternalVideo = AdminNode &
  AdminMedia & {
    __typename?: 'ExternalVideo'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** The URL. */
    embeddedUrl: Scalars['URL']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: AdminMediaContentType
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<AdminMediaError>
    /** The preview image for the media. */
    preview?: Maybe<AdminMediaPreviewImage>
    /** Current status of the media. */
    status: AdminMediaStatus
  }

/** Requirements that must be met before an app can be installed. */
export type AdminFailedRequirement = {
  __typename?: 'FailedRequirement'
  /** Action to be taken to resolve a failed requirement, including URL link. */
  action?: Maybe<AdminNavigationItem>
  /**
   * A concise set of copy strings to be displayed to merchants, to guide them in resolving problems your app
   * encounters when trying to make use of their Shop and its resources.
   */
  message: Scalars['String']
}

/** A filter option is one possible value in a search filter. */
export type AdminFilterOption = {
  __typename?: 'FilterOption'
  /** The filter option's label for display purposes. */
  label: Scalars['String']
  /** The filter option's value. */
  value: Scalars['String']
}

/** Return type for `flowTriggerReceive` mutation. */
export type AdminFlowTriggerReceivePayload = {
  __typename?: 'FlowTriggerReceivePayload'
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type AdminFulfillment = AdminLegacyInteroperability &
  AdminNode & {
    __typename?: 'Fulfillment'
    /** The date and time when the fulfillment was created. */
    createdAt: Scalars['DateTime']
    /** The date that this fulfillment was delivered. */
    deliveredAt?: Maybe<Scalars['DateTime']>
    /** Human readable display status for this fulfillment. */
    displayStatus?: Maybe<AdminFulfillmentDisplayStatus>
    /** The estimated date that this fulfillment will arrive. */
    estimatedDeliveryAt?: Maybe<Scalars['DateTime']>
    /** The history of events associated with this fulfillment. */
    events: AdminFulfillmentEventConnection
    /** List of the fulfillment's line items. */
    fulfillmentLineItems: AdminFulfillmentLineItemConnection
    /** A list of fulfillment orders for the fulfillment. */
    fulfillmentOrders: AdminFulfillmentOrderConnection
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The date and time when the fulfillment went into transit. */
    inTransitAt?: Maybe<Scalars['DateTime']>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The location that the fulfillment was processed at. */
    location?: Maybe<AdminLocation>
    /** Human readable reference identifier for this fulfillment. */
    name: Scalars['String']
    /** The order for which the fulfillment was created. */
    order: AdminOrder
    /** Whether any of the line items in the fulfillment require shipping. */
    requiresShipping: Scalars['Boolean']
    /** Fulfillment service associated with the fulfillment. */
    service?: Maybe<AdminFulfillmentService>
    /** The status of the fulfillment. */
    status: AdminFulfillmentStatus
    /** Sum of all line item quantities for the fulfillment. */
    totalQuantity: Scalars['Int']
    /**
     * Tracking information associated with the fulfillment,
     * such as the tracking company, tracking number, and tracking URL.
     */
    trackingInfo: Array<AdminFulfillmentTrackingInfo>
    /** The date and time when the fulfillment was last modified. */
    updatedAt: Scalars['DateTime']
  }

/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type AdminFulfillmentEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminFulfillmentEventSortKeys>
}

/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type AdminFulfillmentFulfillmentLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type AdminFulfillmentFulfillmentOrdersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order. */
export type AdminFulfillmentTrackingInfoArgs = {
  first?: Maybe<Scalars['Int']>
}

/** Return type for `fulfillmentCancel` mutation. */
export type AdminFulfillmentCancelPayload = {
  __typename?: 'FulfillmentCancelPayload'
  /** The canceled fulfillment. */
  fulfillment?: Maybe<AdminFulfillment>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminFulfillmentConnection = {
  __typename?: 'FulfillmentConnection'
  /** A list of edges. */
  edges: Array<AdminFulfillmentEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `fulfillmentCreate` mutation. */
export type AdminFulfillmentCreatePayload = {
  __typename?: 'FulfillmentCreatePayload'
  /** The created fulfillment. */
  fulfillment?: Maybe<AdminFulfillment>
  /** The order for which the fulfillment is created. */
  order?: Maybe<AdminOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `fulfillmentCreateV2` mutation. */
export type AdminFulfillmentCreateV2Payload = {
  __typename?: 'FulfillmentCreateV2Payload'
  /** The created fulfillment. */
  fulfillment?: Maybe<AdminFulfillment>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The display status of a fulfillment. */
export enum AdminFulfillmentDisplayStatus {
  /** Displayed as **Attempted delivery**. */
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  /** Displayed as **Canceled**. */
  Canceled = 'CANCELED',
  /** Displayed as **Confirmed**. */
  Confirmed = 'CONFIRMED',
  /** Displayed as **Delivered**. */
  Delivered = 'DELIVERED',
  /** Displayed as **Failure**. */
  Failure = 'FAILURE',
  /** Displayed as **Fulfilled**. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In transit**. */
  InTransit = 'IN_TRANSIT',
  /** Displayed as **Label printed**. */
  LabelPrinted = 'LABEL_PRINTED',
  /** Displayed as **Label purchased**. */
  LabelPurchased = 'LABEL_PURCHASED',
  /** Displayed as **Label voided**. */
  LabelVoided = 'LABEL_VOIDED',
  /** Displayed as **Marked as fulfilled**. */
  MarkedAsFulfilled = 'MARKED_AS_FULFILLED',
  /** Displayed as **Not delivered**. */
  NotDelivered = 'NOT_DELIVERED',
  /** Displayed as **Out for delivery**. */
  OutForDelivery = 'OUT_FOR_DELIVERY',
  /** Displayed as **Ready for pickup**. */
  ReadyForPickup = 'READY_FOR_PICKUP',
  /** Displayed as **Submitted**. */
  Submitted = 'SUBMITTED'
}

export type AdminFulfillmentEdge = {
  __typename?: 'FulfillmentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentEdge. */
  node: AdminFulfillment
}

/** An event that describes a fulfillment at a time. */
export type AdminFulfillmentEvent = AdminNode & {
  __typename?: 'FulfillmentEvent'
  /** The time at which this fulfillment event happened. */
  happenedAt: Scalars['DateTime']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The status of this fulfillment event. */
  status: AdminFulfillmentEventStatus
}

export type AdminFulfillmentEventConnection = {
  __typename?: 'FulfillmentEventConnection'
  /** A list of edges. */
  edges: Array<AdminFulfillmentEventEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminFulfillmentEventEdge = {
  __typename?: 'FulfillmentEventEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentEventEdge. */
  node: AdminFulfillmentEvent
}

/** The set of valid sort keys for the FulfillmentEvent query. */
export enum AdminFulfillmentEventSortKeys {
  /** Sort by the `happened_at` value. */
  HappenedAt = 'HAPPENED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Event status' describe the status of a fulfillment. */
export enum AdminFulfillmentEventStatus {
  /** A shipping label has been purchased. */
  LabelPurchased = 'LABEL_PURCHASED',
  /** A purchased shipping label has been printed. */
  LabelPrinted = 'LABEL_PRINTED',
  /** The fulfillment is ready to be picked up. */
  ReadyForPickup = 'READY_FOR_PICKUP',
  /** The fulfillment is confirmed. */
  Confirmed = 'CONFIRMED',
  /** The fulfillment is in transit. */
  InTransit = 'IN_TRANSIT',
  /** The fulfillment is out for delivery. */
  OutForDelivery = 'OUT_FOR_DELIVERY',
  /** A delivery was attempted. */
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  /** The fulfillment was successfully delivered. */
  Delivered = 'DELIVERED',
  /** The fulfillment request failed. */
  Failure = 'FAILURE'
}

/** The input fields used to create a fulfillment. */
export type AdminFulfillmentInput = {
  /** The ID of the order to be fulfilled. */
  orderId: Scalars['ID']
  /** The line items to be fulfilled. */
  lineItems?: Maybe<Array<AdminFulfillmentLineItemInput>>
  /** Tracking numbers associated with the fulfillment. */
  trackingNumbers?: Maybe<Array<Scalars['String']>>
  /** The URLs to track the fulfillment. */
  trackingUrls?: Maybe<Array<Scalars['String']>>
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>
  /**
   * Whether the customer is notified.
   * If set to true, a notification is sent when the fulfillment is created.
   */
  notifyCustomer?: Maybe<Scalars['Boolean']>
  /** A reference to the shipping method, such as `Free Shipping`. */
  shippingMethod?: Maybe<Scalars['String']>
  /** The ID of the location from which the items will be fulfilled. */
  locationId: Scalars['ID']
}

/** Represents a line item from an order that's included in a fulfillment. */
export type AdminFulfillmentLineItem = AdminNode & {
  __typename?: 'FulfillmentLineItem'
  /**
   * The total price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money']
  /** The total price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: AdminMoneyBag
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The associated order's line item. */
  lineItem: AdminLineItem
  /**
   * The total price before discounts are applied.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money']
  /** The total price before discounts are applied in shop and presentment currencies. */
  originalTotalSet: AdminMoneyBag
  /** Number of line items in the fulfillment. */
  quantity?: Maybe<Scalars['Int']>
}

export type AdminFulfillmentLineItemConnection = {
  __typename?: 'FulfillmentLineItemConnection'
  /** A list of edges. */
  edges: Array<AdminFulfillmentLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminFulfillmentLineItemEdge = {
  __typename?: 'FulfillmentLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentLineItemEdge. */
  node: AdminFulfillmentLineItem
}

/** The input fields used to include a line item from an order in a fulfillment. */
export type AdminFulfillmentLineItemInput = {
  /** The ID of the line item. */
  id: Scalars['ID']
  /** The quantity of the line item to be fulfilled. */
  quantity?: Maybe<Scalars['Int']>
}

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type AdminFulfillmentOrder = AdminNode & {
  __typename?: 'FulfillmentOrder'
  /** The fulfillment order's assigned location. This is the location expected to perform fulfillment. */
  assignedLocation: AdminFulfillmentOrderAssignedLocation
  /** The destination where the items should be sent. */
  destination?: Maybe<AdminFulfillmentOrderDestination>
  /** A list of fulfillments for the fulfillment order. */
  fulfillments: AdminFulfillmentConnection
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** A list of the fulfillment order's line items. */
  lineItems: AdminFulfillmentOrderLineItemConnection
  /** A list of locations that the fulfillment order can potentially move to. */
  locationsForMove: AdminFulfillmentOrderLocationForMoveConnection
  /** A list of requests sent by the merchant to the fulfillment service for this fulfillment order. */
  merchantRequests: AdminFulfillmentOrderMerchantRequestConnection
  /** The order that's associated with the fulfillment order. */
  order: AdminOrder
  /** The request status of the fulfillment order. */
  requestStatus: AdminFulfillmentOrderRequestStatus
  /** The status of the fulfillment order. */
  status: AdminFulfillmentOrderStatus
  /** The actions that can be performed on this fulfillment order. */
  supportedActions: Array<AdminFulfillmentOrderSupportedAction>
}

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type AdminFulfillmentOrderFulfillmentsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type AdminFulfillmentOrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type AdminFulfillmentOrderLocationsForMoveArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type AdminFulfillmentOrderMerchantRequestsArgs = {
  kind?: Maybe<AdminFulfillmentOrderMerchantRequestKind>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Return type for `fulfillmentOrderAcceptCancellationRequest` mutation. */
export type AdminFulfillmentOrderAcceptCancellationRequestPayload = {
  __typename?: 'FulfillmentOrderAcceptCancellationRequestPayload'
  /** The fulfillment order whose cancellation request was accepted. */
  fulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `fulfillmentOrderAcceptFulfillmentRequest` mutation. */
export type AdminFulfillmentOrderAcceptFulfillmentRequestPayload = {
  __typename?: 'FulfillmentOrderAcceptFulfillmentRequestPayload'
  /** The fulfillment order whose fulfillment request was accepted. */
  fulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The actions that can be taken on a fulfillment order. */
export enum AdminFulfillmentOrderAction {
  /** Create a fulfillment for selected line items in the fulfillment order. The corresponding mutation for this action is FulfillmentCreateV2. */
  CreateFulfillment = 'CREATE_FULFILLMENT',
  /** Send a request for fulfilling selected line items in a fulfillment order to a fulfillment service. The corresponding mutation for this action is FulfillmentOrderSubmitFulfillmentRequest. */
  RequestFulfillment = 'REQUEST_FULFILLMENT',
  /** Cancel a fulfillment order. The corresponding mutation for this action is FulfillmentOrderCancel. */
  CancelFulfillmentOrder = 'CANCEL_FULFILLMENT_ORDER',
  /** Move a fulfillment order. The corresponding mutation for this action is FulfillmentOrderMove. */
  Move = 'MOVE',
  /** Send a cancellation request to the fulfillment service of a fulfillment order. The corresponding mutation for this action is FulfillmentOrderSubmitCancellationRequest. */
  RequestCancellation = 'REQUEST_CANCELLATION',
  /** Open an external URL to initiate the fulfillment process outside Shopify. */
  External = 'EXTERNAL'
}

/**
 * Represents the assigned location of a fulfillment order, which is a snapshot of the location
 * at which the fulfillment order was created. The assigned location is expected to perform fulfillment.
 */
export type AdminFulfillmentOrderAssignedLocation = {
  __typename?: 'FulfillmentOrderAssignedLocation'
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>
  /** The city of the location. */
  city?: Maybe<Scalars['String']>
  /** The two-letter country code of the location. */
  countryCode: AdminCountryCode
  /**
   * The location where the fulfillment order was created. This can differ from the
   * `FulfillmentOrderAssignedLocation` if the location was updated since the fulfillment order
   * was closed.
   */
  location?: Maybe<AdminLocation>
  /** The name of the location. */
  name: Scalars['String']
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>
  /** The province of the location. */
  province?: Maybe<Scalars['String']>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>
}

/** The assigment status to be used to filter fulfillment orders. */
export enum AdminFulfillmentOrderAssignmentStatus {
  /**
   * Fulfillment orders for which the merchant has requested cancellation of
   * the previously accepted fulfillment request.
   */
  CancellationRequested = 'CANCELLATION_REQUESTED',
  /** Fulfillment orders for which the merchant has requested fulfillment. */
  FulfillmentRequested = 'FULFILLMENT_REQUESTED',
  /**
   * Fulfillment orders for which the merchant's fulfillment request has been accepted.
   * Any number of fulfillments can be created on these fulfillment orders
   * to completely fulfill the requested items.
   */
  FulfillmentAccepted = 'FULFILLMENT_ACCEPTED'
}

/** Return type for `fulfillmentOrderCancel` mutation. */
export type AdminFulfillmentOrderCancelPayload = {
  __typename?: 'FulfillmentOrderCancelPayload'
  /** The fulfillment order that was marked as canceled. */
  fulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** The fulfillment order that was created to replace the canceled fulfillment order. */
  replacementFulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `fulfillmentOrderClose` mutation. */
export type AdminFulfillmentOrderClosePayload = {
  __typename?: 'FulfillmentOrderClosePayload'
  /** The fulfillment order that was marked as incomplete. */
  fulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminFulfillmentOrderConnection = {
  __typename?: 'FulfillmentOrderConnection'
  /** A list of edges. */
  edges: Array<AdminFulfillmentOrderEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Represents the destination where the items should be sent upon fulfillment. */
export type AdminFulfillmentOrderDestination = AdminNode & {
  __typename?: 'FulfillmentOrderDestination'
  /** The first line of the address of the destination. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address of the destination. */
  address2?: Maybe<Scalars['String']>
  /** The city of the destination. */
  city?: Maybe<Scalars['String']>
  /** The company of the destination. */
  company?: Maybe<Scalars['String']>
  /** The two-letter country code of the destination. */
  countryCode?: Maybe<AdminCountryCode>
  /** The email of the customer at the destination. */
  email?: Maybe<Scalars['String']>
  /** The first name of the customer at the destination. */
  firstName?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The last name of the customer at the destination. */
  lastName?: Maybe<Scalars['String']>
  /** The phone number of the customer at the destination. */
  phone?: Maybe<Scalars['String']>
  /** The province of the destination. */
  province?: Maybe<Scalars['String']>
  /** The ZIP code of the destination. */
  zip?: Maybe<Scalars['String']>
}

export type AdminFulfillmentOrderEdge = {
  __typename?: 'FulfillmentOrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentOrderEdge. */
  node: AdminFulfillmentOrder
}

/** Represents a line item belonging to a fulfillment order. */
export type AdminFulfillmentOrderLineItem = AdminNode & {
  __typename?: 'FulfillmentOrderLineItem'
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The associated order line item. */
  lineItem: AdminLineItem
  /** The number of units remaining to be fulfilled. */
  remainingQuantity: Scalars['Int']
  /** The total number of units to be fulfilled. */
  totalQuantity: Scalars['Int']
}

export type AdminFulfillmentOrderLineItemConnection = {
  __typename?: 'FulfillmentOrderLineItemConnection'
  /** A list of edges. */
  edges: Array<AdminFulfillmentOrderLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminFulfillmentOrderLineItemEdge = {
  __typename?: 'FulfillmentOrderLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentOrderLineItemEdge. */
  node: AdminFulfillmentOrderLineItem
}

/** The input fields used to include a line item from a fulfillment order. */
export type AdminFulfillmentOrderLineItemInput = {
  /** The ID of the fulfillment order line item. */
  id: Scalars['ID']
  /** The quantity of the fulfillment order line item. */
  quantity: Scalars['Int']
}

/** The input fields used to include the line items of a specified fulfillment order that should be fulfilled. */
export type AdminFulfillmentOrderLineItemsInput = {
  /** The ID of the fulfillment order. */
  fulfillmentOrderId: Scalars['ID']
  /**
   * The fulfillment order line items to be fulfilled.
   * If left blank, all line items of the fulfillment order will be fulfilled.
   */
  fulfillmentOrderLineItems?: Maybe<Array<AdminFulfillmentOrderLineItemInput>>
}

/** A location that a fulfillment order can potentially move to. */
export type AdminFulfillmentOrderLocationForMove = {
  __typename?: 'FulfillmentOrderLocationForMove'
  /** The location being considered as the fulfillment order's new assigned location. */
  location: AdminLocation
  /**
   * A human-readable string with the reason why the fulfillment order, or some of its line items, can't be
   * moved to the location.
   */
  message?: Maybe<Scalars['String']>
  /** Whether the fulfillment order can be moved to the location. */
  movable: Scalars['Boolean']
}

export type AdminFulfillmentOrderLocationForMoveConnection = {
  __typename?: 'FulfillmentOrderLocationForMoveConnection'
  /** A list of edges. */
  edges: Array<AdminFulfillmentOrderLocationForMoveEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminFulfillmentOrderLocationForMoveEdge = {
  __typename?: 'FulfillmentOrderLocationForMoveEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentOrderLocationForMoveEdge. */
  node: AdminFulfillmentOrderLocationForMove
}

/** Represents a request made by the merchant to a fulfillment service for a fulfillment order. */
export type AdminFulfillmentOrderMerchantRequest = AdminNode & {
  __typename?: 'FulfillmentOrderMerchantRequest'
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The kind of request made. */
  kind: AdminFulfillmentOrderMerchantRequestKind
  /** The optional message that the merchant included in the request. */
  message?: Maybe<Scalars['String']>
  /**
   * Additional options requested by the merchant. These depend on the `kind` of the request.
   * For example, for a `FULFILLMENT_REQUEST`, one option is `notify_customer`, which indicates whether the
   * merchant intends to notify the customer upon fulfillment. The fulfillment service can then set
   * `notifyCustomer` when making calls to `FulfillmentCreateV2`.
   */
  requestOptions?: Maybe<Scalars['JSON']>
  /** The response from the fulfillment service. */
  responseData?: Maybe<Scalars['JSON']>
  /** The timestamp when the request was made. */
  sentAt: Scalars['DateTime']
}

export type AdminFulfillmentOrderMerchantRequestConnection = {
  __typename?: 'FulfillmentOrderMerchantRequestConnection'
  /** A list of edges. */
  edges: Array<AdminFulfillmentOrderMerchantRequestEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminFulfillmentOrderMerchantRequestEdge = {
  __typename?: 'FulfillmentOrderMerchantRequestEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentOrderMerchantRequestEdge. */
  node: AdminFulfillmentOrderMerchantRequest
}

/** The kinds of request merchants can make to a fulfillment service. */
export enum AdminFulfillmentOrderMerchantRequestKind {
  /** The merchant requested fulfillment for a fulfillment order. */
  FulfillmentRequest = 'FULFILLMENT_REQUEST',
  /** The merchant requested cancellation of an accepted or in-progress fulfillment order. */
  CancellationRequest = 'CANCELLATION_REQUEST'
}

/** Return type for `fulfillmentOrderMove` mutation. */
export type AdminFulfillmentOrderMovePayload = {
  __typename?: 'FulfillmentOrderMovePayload'
  /** A new fulfillment order representing all items that were able to be moved to the new location. */
  movedFulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** The fulfillment order that was moved. On success, this fulfillment order will be closed. */
  originalFulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /**
   * A new fulfillment order representing any items still assigned to the original location.
   * This is created if all line items on the original fulfillment order could not be moved to the new location
   * due to not being stocked there.
   */
  remainingFulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `fulfillmentOrderRejectCancellationRequest` mutation. */
export type AdminFulfillmentOrderRejectCancellationRequestPayload = {
  __typename?: 'FulfillmentOrderRejectCancellationRequestPayload'
  /** The fulfillment order whose cancellation request was rejected. */
  fulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `fulfillmentOrderRejectFulfillmentRequest` mutation. */
export type AdminFulfillmentOrderRejectFulfillmentRequestPayload = {
  __typename?: 'FulfillmentOrderRejectFulfillmentRequestPayload'
  /** The fulfillment order whose fulfillment request was rejected. */
  fulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The request status of a fulfillment order. */
export enum AdminFulfillmentOrderRequestStatus {
  /**
   * The initial request status for the newly created fulfillment orders. This is the only valid
   * request status for fulfillment orders that aren't assigned to a fulfillment service.
   */
  Unsubmitted = 'UNSUBMITTED',
  /** The merchant requested fulfillment for this fulfillment order. */
  Submitted = 'SUBMITTED',
  /** The fulfillment service accepted the merchant's fulfillment request. */
  Accepted = 'ACCEPTED',
  /** The fulfillment service rejected the merchant's fulfillment request. */
  Rejected = 'REJECTED',
  /** The merchant requested a cancellation of the fulfillment request for this fulfillment order. */
  CancellationRequested = 'CANCELLATION_REQUESTED',
  /** The fulfillment service accepted the merchant's fulfillment cancellation request. */
  CancellationAccepted = 'CANCELLATION_ACCEPTED',
  /** The fulfillment service rejected the merchant's fulfillment cancellation request. */
  CancellationRejected = 'CANCELLATION_REJECTED',
  /** The fulfillment service closed the fulfillment order without completing it. */
  Closed = 'CLOSED'
}

/** The set of valid sort keys for the FulfillmentOrder query. */
export enum AdminFulfillmentOrderSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The status of a fulfillment order. */
export enum AdminFulfillmentOrderStatus {
  /** The fulfillment order has been opened. */
  Open = 'OPEN',
  /** The fulfillment order is being processed. */
  InProgress = 'IN_PROGRESS',
  /** The fulfillment order has been cancelled by the merchant. */
  Cancelled = 'CANCELLED',
  /** The fulfillment order cannot be completed as requested. */
  Incomplete = 'INCOMPLETE',
  /** The fulfillment order has been completed and closed. */
  Closed = 'CLOSED'
}

/** Return type for `fulfillmentOrderSubmitCancellationRequest` mutation. */
export type AdminFulfillmentOrderSubmitCancellationRequestPayload = {
  __typename?: 'FulfillmentOrderSubmitCancellationRequestPayload'
  /** The fulfillment order whose cancellation was requested. */
  fulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `fulfillmentOrderSubmitFulfillmentRequest` mutation. */
export type AdminFulfillmentOrderSubmitFulfillmentRequestPayload = {
  __typename?: 'FulfillmentOrderSubmitFulfillmentRequestPayload'
  /** The original fulfillment order intended to request fulfillment for. */
  originalFulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /**
   * The fulfillment order that was submitted to the fulfillment service. This will be the same as
   * the original fulfillment order field. The exception to this is partial fulfillment requests or
   * fulfillment request for cancelled or incomplete fulfillment orders.
   */
  submittedFulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /**
   * This field will only be present for partial fulfillment requests. This will represent the new
   * fulfillment order with the remaining line items not submitted to the fulfillment service.
   */
  unsubmittedFulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Represents one of the methods that the fulfillment order supports. */
export type AdminFulfillmentOrderSupportedAction = {
  __typename?: 'FulfillmentOrderSupportedAction'
  /** The action value. */
  action: AdminFulfillmentOrderAction
  /** The external URL to be used to initiate the fulfillment process outside Shopify. */
  externalUrl?: Maybe<Scalars['URL']>
}

/** Represents a fulfillment service. A fulfillment service is a third-party service that prepares and ships orders on behalf of the store owner. */
export type AdminFulfillmentService = {
  __typename?: 'FulfillmentService'
  /** The callback URL the fulfillment service has registered for requests. */
  callbackUrl?: Maybe<Scalars['URL']>
  /** Whether the fulfillment service has opted into fulfillment order based requests. */
  fulfillmentOrdersOptIn: Scalars['Boolean']
  /** Human-readable unique identifier for this fulfillment service. */
  handle: Scalars['String']
  /** The ID of the fulfillment service. */
  id: Scalars['ID']
  /** Whether the fulfillment service tracks product inventory and provides updates to Shopify. */
  inventoryManagement: Scalars['Boolean']
  /** Location associated with the fulfillment service. */
  location?: Maybe<AdminLocation>
  /** Whether the fulfillment service supports local deliveries. */
  productBased: Scalars['Boolean']
  /** The name of the fulfillment service as seen by merchants. */
  serviceName: Scalars['String']
  /** Shipping methods associated with the fulfillment service provider. */
  shippingMethods: Array<AdminShippingMethod>
  /** Type associated with the fulfillment service. */
  type: AdminFulfillmentServiceType
}

/** Return type for `fulfillmentServiceCreate` mutation. */
export type AdminFulfillmentServiceCreatePayload = {
  __typename?: 'FulfillmentServiceCreatePayload'
  /** The created fulfillment service. */
  fulfillmentService?: Maybe<AdminFulfillmentService>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `fulfillmentServiceDelete` mutation. */
export type AdminFulfillmentServiceDeletePayload = {
  __typename?: 'FulfillmentServiceDeletePayload'
  /** The ID of the deleted fulfillment service. */
  deletedId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The type of a fulfillment service. */
export enum AdminFulfillmentServiceType {
  /** Fulfillment by gift card. */
  GiftCard = 'GIFT_CARD',
  /** Manual fulfillment by the merchant. */
  Manual = 'MANUAL',
  /** Fullfillment by a third-party fulfillment service. */
  ThirdParty = 'THIRD_PARTY'
}

/** Return type for `fulfillmentServiceUpdate` mutation. */
export type AdminFulfillmentServiceUpdatePayload = {
  __typename?: 'FulfillmentServiceUpdatePayload'
  /** The updated fulfillment service. */
  fulfillmentService?: Maybe<AdminFulfillmentService>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The status of a fulfillment. */
export enum AdminFulfillmentStatus {
  /** Shopify has created the fulfillment and is waiting for the third-party fulfillment service to transition it to `open` or `success`. */
  Pending = 'PENDING',
  /** The third-party fulfillment service has acknowledged the fulfilment and is processing it. */
  Open = 'OPEN',
  /** The fulfillment was completed successfully. */
  Success = 'SUCCESS',
  /** The fulfillment was canceled. */
  Cancelled = 'CANCELLED',
  /** There was an error with the fulfillment request. */
  Error = 'ERROR',
  /** The fulfillment request failed. */
  Failure = 'FAILURE'
}

/** Represents the tracking information for a fulfillment. */
export type AdminFulfillmentTrackingInfo = {
  __typename?: 'FulfillmentTrackingInfo'
  /** The name of the tracking company. */
  company?: Maybe<Scalars['String']>
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>
  /** The URLs to track the fulfillment. */
  url?: Maybe<Scalars['URL']>
}

/** Return type for `fulfillmentTrackingInfoUpdate` mutation. */
export type AdminFulfillmentTrackingInfoUpdatePayload = {
  __typename?: 'FulfillmentTrackingInfoUpdatePayload'
  /** The updated fulfillment with tracking information. */
  fulfillment?: Maybe<AdminFulfillment>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `fulfillmentTrackingInfoUpdateV2` mutation. */
export type AdminFulfillmentTrackingInfoUpdateV2Payload = {
  __typename?: 'FulfillmentTrackingInfoUpdateV2Payload'
  /** The updated fulfillment with tracking information. */
  fulfillment?: Maybe<AdminFulfillment>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The input fields used to specify all possible fields for tracking information. */
export type AdminFulfillmentTrackingInput = {
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>
  /** The name of the tracking company. */
  company?: Maybe<Scalars['String']>
}

/** The input fields used to create a fulfillment from fulfillment orders. */
export type AdminFulfillmentV2Input = {
  /**
   * The fulfillment's tracking information, including a tracking URL, a tracking number,
   * and the company associated with the fulfillment.
   */
  trackingInfo?: Maybe<AdminFulfillmentTrackingInput>
  /**
   * Whether the customer is notified.
   * If set to true, a notification is sent when the fulfillment is created.
   */
  notifyCustomer?: Maybe<Scalars['Boolean']>
  /**
   * Pairs of `fulfillment_order_id` and `fulfillment_order_line_items` that represent the fulfillment
   * order line items that have to be fulfilled for each fulfillment order.  For any given pair, if the
   * fulfillment order line items are left blank then all the fulfillment order line items of the
   * associated fulfillment order ID will be fulfilled.
   */
  lineItemsByFulfillmentOrder: Array<AdminFulfillmentOrderLineItemsInput>
}

/** Connector to event records on a compatible host. */
export type AdminHasEvents = {
  /** The paginated list of events associated with the host subject. */
  events: AdminEventConnection
}

/** Connector to event records on a compatible host. */
export type AdminHasEventsEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminEventSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents information about the metafields associated to the specified resource. */
export type AdminHasMetafields = {
  /** The metafield associated with the resource. */
  metafield?: Maybe<AdminMetafield>
  /** A paginated list of metafields associated with the resource. */
  metafields: AdminMetafieldConnection
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<AdminPrivateMetafield>
  /** List of private metafields. */
  privateMetafields: AdminPrivateMetafieldConnection
}

/** Represents information about the metafields associated to the specified resource. */
export type AdminHasMetafieldsMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents information about the metafields associated to the specified resource. */
export type AdminHasMetafieldsMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents information about the metafields associated to the specified resource. */
export type AdminHasMetafieldsPrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents information about the metafields associated to the specified resource. */
export type AdminHasMetafieldsPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Published translations associated with the resource. */
export type AdminHasPublishedTranslations = {
  /** The translations associated with the resource. */
  translations: Array<AdminPublishedTranslation>
}

/** Published translations associated with the resource. */
export type AdminHasPublishedTranslationsTranslationsArgs = {
  locale: Scalars['String']
}

/** Represents an image resource. */
export type AdminImage = AdminHasMetafields & {
  __typename?: 'Image'
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>
  /** The metafield associated with the resource. */
  metafield?: Maybe<AdminMetafield>
  /** A paginated list of metafields associated with the resource. */
  metafields: AdminMetafieldConnection
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: Scalars['URL']
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<AdminPrivateMetafield>
  /** List of private metafields. */
  privateMetafields: AdminPrivateMetafieldConnection
  /**
   * The location of the image as a URL.
   * @deprecated Previously an image had a single `src` field. This could either return the original image
   * location or a URL that contained transformations such as sizing or scale.
   *
   * These transformations were specified by arguments on the parent field.
   *
   * Now an image has two distinct URL fields: `originalSrc` and `transformedSrc`.
   *
   * * `originalSrc` - the original unmodified image URL
   * * `transformedSrc` - the image URL with the specified transformations included
   *
   * To migrate to the new fields, image transformations should be moved from the parent field to `transformedSrc`.
   *
   * Before:
   * ```graphql
   * {
   *   shop {
   *     productImages(maxWidth: 200, scale: 2) {
   *       edges {
   *         node {
   *           src
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   * After:
   * ```graphql
   * {
   *   shop {
   *     productImages {
   *       edges {
   *         node {
   *           transformedSrc(maxWidth: 200, scale: 2)
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   */
  src: Scalars['URL']
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: Scalars['URL']
}

/** Represents an image resource. */
export type AdminImageMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents an image resource. */
export type AdminImageMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents an image resource. */
export type AdminImagePrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents an image resource. */
export type AdminImagePrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents an image resource. */
export type AdminImageTransformedSrcArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
  preferredContentType?: Maybe<AdminImageContentType>
}

export type AdminImageConnection = {
  __typename?: 'ImageConnection'
  /** A list of edges. */
  edges: Array<AdminImageEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** List of supported image content types. */
export enum AdminImageContentType {
  /** A PNG image. */
  Png = 'PNG',
  /** A JPG image. */
  Jpg = 'JPG',
  /** A WEBP image. */
  Webp = 'WEBP'
}

export type AdminImageEdge = {
  __typename?: 'ImageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ImageEdge. */
  node: AdminImage
}

/** Specifies the input fields for an image. */
export type AdminImageInput = {
  /** Globally unique identifier. */
  id?: Maybe<Scalars['ID']>
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>
  /** The URL of the image. May be a signed upload URL. */
  src?: Maybe<Scalars['String']>
}

/** Upload parameter of an image. */
export type AdminImageUploadParameter = {
  __typename?: 'ImageUploadParameter'
  /** Parameter name. */
  name: Scalars['String']
  /** Parameter value. */
  value: Scalars['String']
}

/** Return type for `inventoryActivate` mutation. */
export type AdminInventoryActivatePayload = {
  __typename?: 'InventoryActivatePayload'
  /** The newly activated inventory level. */
  inventoryLevel?: Maybe<AdminInventoryLevel>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the items and their adjustments. */
export type AdminInventoryAdjustItemInput = {
  /** ID of the inventory item to adjust. */
  inventoryItemId: Scalars['ID']
  /** Count by which to adjust the available quantity. */
  availableDelta: Scalars['Int']
}

/** Specifies the fields required to adjust the inventory quantity. */
export type AdminInventoryAdjustQuantityInput = {
  /** ID of the inventory level to adjust. */
  inventoryLevelId: Scalars['ID']
  /** Count by which to adjust the available quantity. */
  availableDelta: Scalars['Int']
}

/** Return type for `inventoryAdjustQuantity` mutation. */
export type AdminInventoryAdjustQuantityPayload = {
  __typename?: 'InventoryAdjustQuantityPayload'
  /** Represents the updated inventory quantity of an inventory item at a specific location. */
  inventoryLevel?: Maybe<AdminInventoryLevel>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `inventoryBulkAdjustQuantityAtLocation` mutation. */
export type AdminInventoryBulkAdjustQuantityAtLocationPayload = {
  __typename?: 'InventoryBulkAdjustQuantityAtLocationPayload'
  /** The updated inventory quantities. */
  inventoryLevels?: Maybe<Array<AdminInventoryLevel>>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `inventoryDeactivate` mutation. */
export type AdminInventoryDeactivatePayload = {
  __typename?: 'InventoryDeactivatePayload'
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type AdminInventoryItem = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'InventoryItem'
    /** The ISO code of the country of origin. */
    countryCodeOfOrigin?: Maybe<AdminCountryCode>
    /** List of country specific harmonized system codes. */
    countryHarmonizedSystemCodes: AdminCountryHarmonizedSystemCodeConnection
    /** The date and time when the inventory item was created. */
    createdAt: Scalars['DateTime']
    /** The number of inventory items that share the same SKU with this item. */
    duplicateSkuCount: Scalars['Int']
    /** The harmonized system code of the item. */
    harmonizedSystemCode?: Maybe<Scalars['String']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** URL for inventory history web page. */
    inventoryHistoryUrl?: Maybe<Scalars['URL']>
    /** Get the inventory level at a specific location. */
    inventoryLevel?: Maybe<AdminInventoryLevel>
    /** Paginated list of inventory levels for each location that the inventory item is stocked at. */
    inventoryLevels: AdminInventoryLevelConnection
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The number of locations where this inventory item is stocked. */
    locationsCount: Scalars['Int']
    /** The ISO code of the province of origin. */
    provinceCodeOfOrigin?: Maybe<Scalars['String']>
    /** Whether the item requires shipping or not. */
    requiresShipping: Scalars['Boolean']
    /** Inventory item SKU. */
    sku?: Maybe<Scalars['String']>
    /** Whether the inventory quantities of inventory levels for the item are tracked or not. */
    tracked: Scalars['Boolean']
    /** Whether changes to the inventory item tracked attribute are allowed. */
    trackedEditable: AdminEditableProperty
    /** Unit cost associated with the inventory item. */
    unitCost?: Maybe<AdminMoneyV2>
    /** The date and time when the inventory item was updated. */
    updatedAt: Scalars['DateTime']
    /** The variant that owns this inventory item. */
    variant: AdminProductVariant
  }

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type AdminInventoryItemCountryHarmonizedSystemCodesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type AdminInventoryItemInventoryLevelArgs = {
  locationId: Scalars['ID']
}

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type AdminInventoryItemInventoryLevelsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
}

export type AdminInventoryItemConnection = {
  __typename?: 'InventoryItemConnection'
  /** A list of edges. */
  edges: Array<AdminInventoryItemEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminInventoryItemEdge = {
  __typename?: 'InventoryItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of InventoryItemEdge. */
  node: AdminInventoryItem
}

/** Inventory items. */
export type AdminInventoryItemInput = {
  /** Unit cost associated with the inventory item, the currency is the shop's default currency. */
  cost?: Maybe<Scalars['Decimal']>
  /** Whether the inventory item is tracked. */
  tracked?: Maybe<Scalars['Boolean']>
}

/** Inventory items. */
export type AdminInventoryItemUpdateInput = {
  /** Unit cost associated with the inventory item, the currency is the shop's default currency. */
  cost?: Maybe<Scalars['Decimal']>
  /** Whether the inventory item is tracked. */
  tracked?: Maybe<Scalars['Boolean']>
  /** The ISO code of the country of origin. */
  countryCodeOfOrigin?: Maybe<AdminCountryCode>
  /** The ISO code of the province of origin. */
  provinceCodeOfOrigin?: Maybe<Scalars['String']>
  /** The harmonized system code of the inventory item. */
  harmonizedSystemCode?: Maybe<Scalars['String']>
  /** List of country-specific harmonized system codes. */
  countryHarmonizedSystemCodes?: Maybe<Array<AdminCountryHarmonizedSystemCodeInput>>
}

/** Return type for `inventoryItemUpdate` mutation. */
export type AdminInventoryItemUpdatePayload = {
  __typename?: 'InventoryItemUpdatePayload'
  /** The updated inventory item. */
  inventoryItem?: Maybe<AdminInventoryItem>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Represents the inventory quantity of an inventory item at a specific location. */
export type AdminInventoryLevel = AdminNode & {
  __typename?: 'InventoryLevel'
  /** Quantity of items available at the location. */
  available: Scalars['Int']
  /** Whether inventoryDeactivate is allowed for this inventory level. */
  canDeactivate: Scalars['Boolean']
  /** The date and time when the inventory level was created. */
  createdAt: Scalars['DateTime']
  /** Reason why canDeactivate is false, or impact of deactivating the inventory level. */
  deactivationAlert?: Maybe<Scalars['String']>
  /** Reason why canDeactivate is false with URLs linked in HTML, or impact of deactivating the inventory level. */
  deactivationAlertHtml?: Maybe<Scalars['FormattedString']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Quantity of items incoming to the location. */
  incoming: Scalars['Int']
  /** Inventory item associated with the inventory level. */
  item: AdminInventoryItem
  /** Location associated with the inventory level. */
  location: AdminLocation
  /** The date and time when the inventory level was updated. */
  updatedAt: Scalars['DateTime']
}

export type AdminInventoryLevelConnection = {
  __typename?: 'InventoryLevelConnection'
  /** A list of edges. */
  edges: Array<AdminInventoryLevelEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminInventoryLevelEdge = {
  __typename?: 'InventoryLevelEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of InventoryLevelEdge. */
  node: AdminInventoryLevel
}

/** Inventory quantity at a specific location. */
export type AdminInventoryLevelInput = {
  /** Sets the quantity available at the location. */
  availableQuantity: Scalars['Int']
  /** ID of the location. */
  locationId: Scalars['ID']
}

/** A job corresponds to some long running task that the client should poll for status. */
export type AdminJob = {
  __typename?: 'Job'
  /** This indicates if the job is still queued or has been run. */
  done: Scalars['Boolean']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** This field will only resolve once the job is done. Can be used to ask for object(s) that have been changed by the job. */
  query?: Maybe<AdminQueryRoot>
}

/** The locale language allowed for Kit Skill. */
export enum AdminKitSkillLocale {
  /** English language. */
  En = 'EN'
}

/** Return type for `kitSkillTriggerRequest` mutation. */
export type AdminKitSkillTriggerRequestPayload = {
  __typename?: 'KitSkillTriggerRequestPayload'
  /** Conversation unique identifier sent to Conversation API and returned to app developer. */
  conversationUid?: Maybe<Scalars['String']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/**
 * Interoperability metadata for types that directly correspond to a REST Admin API resource.
 * For example, on the Product type, LegacyInteroperability returns metadata for the corresponding [Product object](https://help.shopify.com/api/reference/products/product) in the REST Admin API.
 */
export type AdminLegacyInteroperability = {
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64']
}

/**
 * The total number of pending orders on a shop if less then a maximum, or that maximum.
 * The atMax field indicates when this maximum has been reached.
 */
export type AdminLimitedPendingOrderCount = {
  __typename?: 'LimitedPendingOrderCount'
  /** This is set when the number of pending orders has reached the maximum. */
  atMax: Scalars['Boolean']
  /**
   * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
   */
  count: Scalars['Int']
}

/** Represents a single line in a shopping cart. */
export type AdminLineItem = AdminNode & {
  __typename?: 'LineItem'
  /**
   * Whether the line item's variant has an ID and inventory is managed by Shopify.
   * @deprecated Use `restockable` instead
   */
  canRestock: Scalars['Boolean']
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<AdminAttribute>
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<AdminDiscountAllocation>
  /**
   * The total line price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money']
  /** The total line price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: AdminMoneyBag
  /**
   * The price of a single variant unit after line item discounts are applied.
   * @deprecated Use `discountedUnitPriceSet` instead
   */
  discountedUnitPrice: Scalars['Money']
  /** The price of a single variant unit after line item discounts are applied in shop and presentment currencies. */
  discountedUnitPriceSet: AdminMoneyBag
  /** The total number of units to fulfill. */
  fulfillableQuantity: Scalars['Int']
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   */
  fulfillmentService: AdminFulfillmentService
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   */
  fulfillmentStatus: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The Image object associated to the line item's variant. */
  image?: Maybe<AdminImage>
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars['Boolean']
  /** Name of the product. */
  name: Scalars['String']
  /** A count of the number of line items that cannot be fulfilled. */
  nonFulfillableQuantity: Scalars['Int']
  /**
   * Total price (without discounts) of the line item, based on the original unit price of the variant x quantity.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money']
  /** Total price (without discounts) of the line item, based on the original unit price of the  variant x quantity in shop and presentment currencies. */
  originalTotalSet: AdminMoneyBag
  /**
   * Variant price without any discounts applied.
   * @deprecated Use `originalUnitPriceSet` instead
   */
  originalUnitPrice: Scalars['Money']
  /** Variant price without any discounts applied in shop and presentment currencies. */
  originalUnitPriceSet: AdminMoneyBag
  /** The Product object associated with this line item's variant. */
  product?: Maybe<AdminProduct>
  /** Number of variant items ordered. */
  quantity: Scalars['Int']
  /** The line item's quantity minus its refundedQuantity. */
  refundableQuantity: Scalars['Int']
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']
  /** Whether the line item's variant has an ID and inventory is managed by Shopify. */
  restockable: Scalars['Boolean']
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>
  /** The TaxLine object connected to this line item. */
  taxLines: Array<AdminTaxLine>
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String']
  /**
   * The sum of all AppliedDiscounts on this line item.
   * @deprecated Use `totalDiscountSet` instead
   */
  totalDiscount: Scalars['Money']
  /** The sum of all AppliedDiscounts on this line item in shop and presentment currencies. */
  totalDiscountSet: AdminMoneyBag
  /**
   * The total discounted value of unfulfilled units.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead
   */
  unfulfilledDiscountedTotal: Scalars['Money']
  /** The total discounted value of unfulfilled units in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: AdminMoneyBag
  /**
   * The total value before discount of all unfulfilled units.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead
   */
  unfulfilledOriginalTotal: Scalars['Money']
  /** The total value before discount of all unfulfilled units in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: AdminMoneyBag
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars['Int']
  /** The Variant object associated with this line item. */
  variant?: Maybe<AdminProductVariant>
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>
}

/** Represents a single line in a shopping cart. */
export type AdminLineItemImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Represents a single line in a shopping cart. */
export type AdminLineItemTaxLinesArgs = {
  first?: Maybe<Scalars['Int']>
}

export type AdminLineItemConnection = {
  __typename?: 'LineItemConnection'
  /** A list of edges. */
  edges: Array<AdminLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminLineItemEdge = {
  __typename?: 'LineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of LineItemEdge. */
  node: AdminLineItem
}

/** Represents a single line in a shopping cart. */
export type AdminLineItemMutable = AdminNode & {
  __typename?: 'LineItemMutable'
  /**
   * Whether the line item's variant has an ID and inventory is managed by Shopify.
   * @deprecated Use `restockable` instead
   */
  canRestock: Scalars['Boolean']
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<AdminAttribute>
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<AdminDiscountAllocation>
  /**
   * The total line price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money']
  /** The total line price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: AdminMoneyBag
  /**
   * The price of a single variant unit after line item discounts are applied.
   * @deprecated Use `discountedUnitPriceSet` instead
   */
  discountedUnitPrice: Scalars['Money']
  /** The price of a single variant unit after line item discounts are applied in shop and presentment currencies. */
  discountedUnitPriceSet: AdminMoneyBag
  /** The total number of units to fulfill. */
  fulfillableQuantity: Scalars['Int']
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   */
  fulfillmentService: AdminFulfillmentService
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   */
  fulfillmentStatus: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The Image object associated to the line item's variant. */
  image?: Maybe<AdminImage>
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars['Boolean']
  /** Name of the product. */
  name: Scalars['String']
  /** A count of the number of line items that cannot be fulfilled. */
  nonFulfillableQuantity: Scalars['Int']
  /**
   * Total price (without discounts) of the line item, based on the original unit price of the variant x quantity.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money']
  /** Total price (without discounts) of the line item, based on the original unit price of the  variant x quantity in shop and presentment currencies. */
  originalTotalSet: AdminMoneyBag
  /**
   * Variant price without any discounts applied.
   * @deprecated Use `originalUnitPriceSet` instead
   */
  originalUnitPrice: Scalars['Money']
  /** Variant price without any discounts applied in shop and presentment currencies. */
  originalUnitPriceSet: AdminMoneyBag
  /** The Product object associated with this line item's variant. */
  product?: Maybe<AdminProduct>
  /** Number of variant items ordered. */
  quantity: Scalars['Int']
  /** The line item's quantity minus its refundedQuantity. */
  refundableQuantity: Scalars['Int']
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean']
  /** Whether the line item's variant has an ID and inventory is managed by Shopify. */
  restockable: Scalars['Boolean']
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>
  /** The TaxLine object connected to this line item. */
  taxLines: Array<AdminTaxLine>
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean']
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String']
  /**
   * The sum of all AppliedDiscounts on this line item.
   * @deprecated Use `totalDiscountSet` instead
   */
  totalDiscount: Scalars['Money']
  /** The sum of all AppliedDiscounts on this line item in shop and presentment currencies. */
  totalDiscountSet: AdminMoneyBag
  /**
   * The total discounted value of unfulfilled units.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead
   */
  unfulfilledDiscountedTotal: Scalars['Money']
  /** The total discounted value of unfulfilled units in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: AdminMoneyBag
  /**
   * The total value before discount of all unfulfilled units.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead
   */
  unfulfilledOriginalTotal: Scalars['Money']
  /** The total value before discount of all unfulfilled units in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: AdminMoneyBag
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars['Int']
  /** The Variant object associated with this line item. */
  variant?: Maybe<AdminProductVariant>
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>
}

/** Represents a single line in a shopping cart. */
export type AdminLineItemMutableImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Represents a single line in a shopping cart. */
export type AdminLineItemMutableTaxLinesArgs = {
  first?: Maybe<Scalars['Int']>
}

export type AdminLineItemMutableConnection = {
  __typename?: 'LineItemMutableConnection'
  /** A list of edges. */
  edges: Array<AdminLineItemMutableEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminLineItemMutableEdge = {
  __typename?: 'LineItemMutableEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of LineItemMutableEdge. */
  node: AdminLineItemMutable
}

/** A link to direct users to. */
export type AdminLink = AdminHasPublishedTranslations & {
  __typename?: 'Link'
  /** A context-sensitive label for the link. */
  label: Scalars['String']
  /** The translations associated with the resource. */
  translations: Array<AdminPublishedTranslation>
  /** The URL that the link visits. */
  url: Scalars['URL']
}

/** A link to direct users to. */
export type AdminLinkTranslationsArgs = {
  locale: Scalars['String']
}

/** A locale. */
export type AdminLocale = {
  __typename?: 'Locale'
  /** Locale ISO code. */
  isoCode: Scalars['String']
  /** Locale name. */
  name: Scalars['String']
}

/** Represents the location where the physical good resides. */
export type AdminLocation = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'Location'
    /** Whether this location can be reactivated. */
    activatable: Scalars['Boolean']
    /** The LocationAddress object for location. */
    address: AdminLocationAddress
    /** Whether the location address has been verified. */
    addressVerified: Scalars['Boolean']
    /** Whether this location can be deactivated. */
    deactivatable: Scalars['Boolean']
    /** Date and time the location was deactivated (null if location is still active). Following UTC ISO8601 format, e.g.: "2019-04-24T13:42:24Z". */
    deactivatedAt?: Maybe<Scalars['String']>
    /** Whether this location can be deleted. */
    deletable: Scalars['Boolean']
    /** Name of the service provider that fulfills from this location. */
    fulfillmentService?: Maybe<AdminFulfillmentService>
    /** Indicates whether this location can fulfill online orders. */
    fulfillsOnlineOrders: Scalars['Boolean']
    /** Indicates whether or not this location has active inventory. */
    hasActiveInventory: Scalars['Boolean']
    /** Indicates whether or not this location has unfulfilled orders. */
    hasUnfulfilledOrders: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** A single inventory level for the given inventory item. */
    inventoryLevel?: Maybe<AdminInventoryLevel>
    /** Paginated list of inventory levels for inventory items stocked at the location. */
    inventoryLevels: AdminInventoryLevelConnection
    /** Whether the location is active. */
    isActive: Scalars['Boolean']
    /**
     * Whether the location is your primary location for shipping inventory.
     * @deprecated The concept of a primary location is deprecated, shipsInventory can be used to get a fallback location
     */
    isPrimary: Scalars['Boolean']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The name of the location. */
    name: Scalars['String']
    /** Indicates whether or not this location is used for calculating shipping rates. */
    shipsInventory: Scalars['Boolean']
    /** List of suggested addresses for this location (empty if none). */
    suggestedAddresses: Array<AdminLocationSuggestedAddress>
  }

/** Represents the location where the physical good resides. */
export type AdminLocationInventoryLevelArgs = {
  inventoryItemId: Scalars['ID']
}

/** Represents the location where the physical good resides. */
export type AdminLocationInventoryLevelsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
}

/** Represents the address of the location. */
export type AdminLocationAddress = {
  __typename?: 'LocationAddress'
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>
  /** The city of the location. */
  city?: Maybe<Scalars['String']>
  /** The country of the location. */
  country?: Maybe<Scalars['String']>
  /** The two-letter country code of the location. */
  countryCode?: Maybe<Scalars['String']>
  /** A formatted version of the location address. */
  formatted: Array<Scalars['String']>
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>
  /** The province of the location. */
  province?: Maybe<Scalars['String']>
  /**
   * The code for the region of the address, such as the province, state, or district.
   * For example QC for Quebec, Canada.
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>
}

export type AdminLocationConnection = {
  __typename?: 'LocationConnection'
  /** A list of edges. */
  edges: Array<AdminLocationEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminLocationEdge = {
  __typename?: 'LocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of LocationEdge. */
  node: AdminLocation
}

/** The set of valid sort keys for the Location query. */
export enum AdminLocationSortKeys {
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Represents a suggested address for a location. */
export type AdminLocationSuggestedAddress = {
  __typename?: 'LocationSuggestedAddress'
  /** The first line of the suggested address. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the suggested address. */
  address2?: Maybe<Scalars['String']>
  /** The city of the suggested address. */
  city?: Maybe<Scalars['String']>
  /** The country of the suggested address. */
  country?: Maybe<Scalars['String']>
  /** The country code of the suggested address. */
  countryCode?: Maybe<AdminCountryCode>
  /** A formatted version of the suggested address. */
  formatted: Array<Scalars['String']>
  /** The province of the suggested address. */
  province?: Maybe<Scalars['String']>
  /** The province code of the suggested address. */
  provinceCode?: Maybe<Scalars['String']>
  /** The ZIP code of the suggested address. */
  zip?: Maybe<Scalars['String']>
}

/**
 * Represents a customer mailing address.
 *
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 */
export type AdminMailingAddress = AdminNode & {
  __typename?: 'MailingAddress'
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>
  /** The name of the country. */
  country?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<AdminCountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/**
 * Represents a customer mailing address.
 *
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 */
export type AdminMailingAddressFormattedArgs = {
  withName?: Maybe<Scalars['Boolean']>
  withCompany?: Maybe<Scalars['Boolean']>
}

/** The fields used to create or update a mailing address. */
export type AdminMailingAddressInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>
  /** The name of the country. This argument is deprecated: Use `countryCode` instead. */
  country?: Maybe<Scalars['String']>
  /** The two-letter code for the country of the address. */
  countryCode?: Maybe<AdminCountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** This argument is deprecated: Not needed for 90% of mutations, and provided separately where it is needed. */
  id?: Maybe<Scalars['ID']>
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. This argument is deprecated: Use `provinceCode` instead. */
  province?: Maybe<Scalars['String']>
  /**
   * The code for the region of the address, such as the province, state, or district.
   * For example QC for Quebec, Canada.
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/** Manual discount applications capture the intentions of a discount that was manually created for an order. */
export type AdminManualDiscountApplication = AdminDiscountApplication & {
  __typename?: 'ManualDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: AdminDiscountApplicationAllocationMethod
  /** The description of the discount application. */
  description?: Maybe<Scalars['String']>
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int']
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: AdminDiscountApplicationTargetSelection
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: AdminDiscountApplicationTargetType
  /** The title of the discount application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: AdminPricingValue
}

/** A marketing activity represents marketing created by an app on behalf of the merchant. */
export type AdminMarketingActivity = AdminNode & {
  __typename?: 'MarketingActivity'
  /** The url of the activity listing page of this marketing activity in the marketing section. */
  activityListUrl?: Maybe<Scalars['URL']>
  /** Amount spent on this marketing activity. */
  adSpend?: Maybe<AdminMoneyV2>
  /** The app which created this marketing activity. */
  app: AdminApp
  /** Errors generated when app was trying to complete this activity. */
  appErrors?: Maybe<AdminMarketingActivityExtensionAppErrors>
  /** The budget for this marketing activity. */
  budget?: Maybe<AdminMarketingBudget>
  /** The date and time when the marketing activity was created. */
  createdAt: Scalars['DateTime']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The broad category of marketing, used for reporting aggregation. */
  marketingChannel: AdminMarketingChannel
  /** Associated marketing event of this marketing activity. */
  marketingEvent?: Maybe<AdminMarketingEvent>
  /** A contextual description of the marketing activity based on the platform and tactic used. */
  sourceAndMedium: Scalars['String']
  /** Status helps to identify if this marketing activity has been completed, queued, failed etc. */
  status: AdminMarketingActivityStatus
  /**
   * The [date and time](
   *           https://help.shopify.com/https://en.wikipedia.org/wiki/ISO_8601
   *           ) when the activity's status last changed.
   */
  statusTransitionedAt?: Maybe<Scalars['DateTime']>
  /** The method of marketing used for this marketing activity. */
  tactic: AdminMarketingTactic
  /** Expected status set by app in prior to an asynchronous operation. */
  targetStatus?: Maybe<AdminMarketingActivityStatus>
  /** Title of this marketing activity. */
  title: Scalars['String']
  /** The date and time when the marketing activity was updated. */
  updatedAt: Scalars['DateTime']
  /** The set of UTM parameters being tracked for this marketing activity. */
  utmParameters?: Maybe<AdminUtmParameters>
}

/** This type combines budget amount and its marketing budget type. */
export type AdminMarketingActivityBudgetInput = {
  /** Budget type for marketing activity. */
  budgetType?: Maybe<AdminMarketingBudgetBudgetType>
  /** Amount of budget for the marketing activity. */
  total?: Maybe<AdminMoneyInput>
}

export type AdminMarketingActivityConnection = {
  __typename?: 'MarketingActivityConnection'
  /** A list of edges. */
  edges: Array<AdminMarketingActivityEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminMarketingActivityEdge = {
  __typename?: 'MarketingActivityEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MarketingActivityEdge. */
  node: AdminMarketingActivity
}

/** The error code resulted from the marketing activity extension integration. */
export enum AdminMarketingActivityExtensionAppErrorCode {
  /** The shop/user must be onboarded to use the app. */
  NotOnboardedError = 'NOT_ONBOARDED_ERROR',
  /** The app has returned validation errors. */
  ValidationError = 'VALIDATION_ERROR',
  /** The app is not responding or returning unexpected data. */
  ApiError = 'API_ERROR',
  /** The app has returned an error when invoking the platform. */
  PlatformError = 'PLATFORM_ERROR',
  /** The app needs to be installed. */
  InstallRequiredError = 'INSTALL_REQUIRED_ERROR'
}

/** Represents errors returned from apps when using the marketing activity extension. */
export type AdminMarketingActivityExtensionAppErrors = {
  __typename?: 'MarketingActivityExtensionAppErrors'
  /** The app error type. */
  code: AdminMarketingActivityExtensionAppErrorCode
  /** The list of errors returned by the app. */
  userErrors: Array<AdminUserError>
}

/** The set of valid sort keys for the MarketingActivity query. */
export enum AdminMarketingActivitySortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Status helps to identify if this marketing activity has been completed, queued, failed etc. */
export enum AdminMarketingActivityStatus {
  /** This marketing activity is currently running. */
  Active = 'ACTIVE',
  /** This marketing activity is permanently unavailable. */
  Deleted = 'DELETED',
  /** This marketing activity was deleted and it was triggered from outside of Shopify. */
  DeletedExternally = 'DELETED_EXTERNALLY',
  /** This marketing activity is disconnected and no longer editable. */
  Disconnected = 'DISCONNECTED',
  /** This marketing activity is unable to run. */
  Failed = 'FAILED',
  /** This marketing activity has completed running. */
  Inactive = 'INACTIVE',
  /** This marketing activity is currently not running. */
  Paused = 'PAUSED',
  /** This marketing activity is pending creation on the app's platform. */
  Pending = 'PENDING',
  /** This marketing activity is scheduled to run. */
  Scheduled = 'SCHEDULED',
  /** There is no defined status for external marketing activities. */
  Undefined = 'UNDEFINED'
}

/** Specifies the input fields required to update a marketing activity. */
export type AdminMarketingActivityUpdateInput = {
  /** The id for this marketing activity. */
  id: Scalars['ID']
  /** The ID of the recommendation this marketing activity was created from, if one exists. */
  marketingRecommendationId?: Maybe<Scalars['ID']>
  /** The title of this marketing activity. */
  title?: Maybe<Scalars['String']>
  /** The budget for this marketing activity. */
  budget?: Maybe<AdminMarketingActivityBudgetInput>
  /** The cumulative amount spent on this marketing activity. This argument is deprecated: Use `MarketingEngagementCreate.MarketingEngagementInput.adSpend` GraphQL to send the ad spend. */
  adSpend?: Maybe<AdminMoneyInput>
  /** The current state of the marketing activity. */
  status?: Maybe<AdminMarketingActivityStatus>
  /**
   * Specifies the
   * [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters)
   * that are associated with a related marketing campaign. UTMInput is required for all Marketing
   * tactics except Storefront App. This utm param can be only set once and never modified.
   */
  utm?: Maybe<AdminUtmInput>
  /**
   * A list of the items that were marketed in this marketing activity. Valid types for these items are:
   * * `Product`
   * * `Shop` (Must be your current shop).
   */
  marketedResources?: Maybe<Array<Scalars['ID']>>
  /** Encoded context provided by Shopify during the update marketing activity callback. This argument is deprecated: This context is no longer needed by Shopify in the callback. */
  context?: Maybe<Scalars['String']>
  /** Error messages generated when app was trying to complete this activity. */
  errors?: Maybe<Scalars['JSON']>
}

/** Return type for `marketingActivityUpdate` mutation. */
export type AdminMarketingActivityUpdatePayload = {
  __typename?: 'MarketingActivityUpdatePayload'
  /** The updated marketing activity. */
  marketingActivity?: Maybe<AdminMarketingActivity>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** This type combines budget amount and its marketing budget type. */
export type AdminMarketingBudget = {
  __typename?: 'MarketingBudget'
  /** The budget type for a marketing activity. */
  budgetType: AdminMarketingBudgetBudgetType
  /** The amount of budget for marketing activity. */
  total: AdminMoneyV2
}

/** The budget type for a marketing activity. */
export enum AdminMarketingBudgetBudgetType {
  /** A daily budget. */
  Daily = 'DAILY',
  /** A budget for the lifetime of a marketing activity. */
  Lifetime = 'LIFETIME'
}

/** The available marketing channels for a marketing activity or event. A marketing channel is broad category of marketing, used for reporting aggregation. */
export enum AdminMarketingChannel {
  /** Paid search. */
  Search = 'SEARCH',
  /** Displayed ads. */
  Display = 'DISPLAY',
  /** Social media. */
  Social = 'SOCIAL',
  /** Email. */
  Email = 'EMAIL',
  /** Referral links. */
  Referral = 'REFERRAL'
}

/** Marketing engagement represents customer activity taken on a marketing event. */
export type AdminMarketingEngagement = {
  __typename?: 'MarketingEngagement'
  /** The total ad spend for the day, if the marketing event is a paid ad with a daily spend. */
  adSpend?: Maybe<AdminMoneyV2>
  /** The total number of clicks on the marketing event for the day. */
  clicksCount?: Maybe<Scalars['Int']>
  /** The total number of comments for the day. */
  commentsCount?: Maybe<Scalars['Int']>
  /** The total number of complaints for the day. */
  complaintsCount?: Maybe<Scalars['Int']>
  /** The total number of fails for the day. */
  failsCount?: Maybe<Scalars['Int']>
  /** The total number of favorites for the day. */
  favoritesCount?: Maybe<Scalars['Int']>
  /** The date time at which the data was fetched. */
  fetchedAt?: Maybe<Scalars['DateTime']>
  /** The total number of impressions for the day. */
  impressionsCount?: Maybe<Scalars['Int']>
  /** Whether the engagements are reported as lifetime values rather than daily totals. */
  isCumulative?: Maybe<Scalars['Boolean']>
  /** The marketing activity related to this engagement. */
  marketingActivity: AdminMarketingActivity
  /** The date that these engagements occurred on. */
  occurredOn: Scalars['Date']
  /** The total number of sends for the day. */
  sendsCount?: Maybe<Scalars['Int']>
  /** The total number of shares for the day. */
  sharesCount?: Maybe<Scalars['Int']>
  /** The total number of unique clicks for the day. */
  uniqueClicksCount?: Maybe<Scalars['Int']>
  /** The total number of unique views for the day. */
  uniqueViewsCount?: Maybe<Scalars['Int']>
  /** The total number of unsubscribes for the day. */
  unsubscribesCount?: Maybe<Scalars['Int']>
  /** The UTC Offset that the app is using to determine which date to allocate spend to. */
  utcOffset?: Maybe<Scalars['UtcOffset']>
  /** The total number of views for the day. */
  viewsCount?: Maybe<Scalars['Int']>
}

/** Return type for `marketingEngagementCreate` mutation. */
export type AdminMarketingEngagementCreatePayload = {
  __typename?: 'MarketingEngagementCreatePayload'
  /** The marketing engagement that was created. */
  marketingEngagement?: Maybe<AdminMarketingEngagement>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** This object represents marketing engagement input fields for a marketing engagement. */
export type AdminMarketingEngagementInput = {
  /** The date that these engagements occurred on. */
  occurredOn: Scalars['Date']
  /** The total number of impressions for the day. */
  impressionsCount?: Maybe<Scalars['Int']>
  /** The total number of views for the day. */
  viewsCount?: Maybe<Scalars['Int']>
  /** The total number of clicks on the marketing event for the day. */
  clicksCount?: Maybe<Scalars['Int']>
  /** The total number of shares for the day. */
  sharesCount?: Maybe<Scalars['Int']>
  /** The total number of favorites for the day. */
  favoritesCount?: Maybe<Scalars['Int']>
  /** The total number of comments for the day. */
  commentsCount?: Maybe<Scalars['Int']>
  /** The total number of unsubscribes for the day. */
  unsubscribesCount?: Maybe<Scalars['Int']>
  /** The total number of complaints for the day. */
  complaintsCount?: Maybe<Scalars['Int']>
  /** The total number of fails for the day. */
  failsCount?: Maybe<Scalars['Int']>
  /** The total number of sends for the day. */
  sendsCount?: Maybe<Scalars['Int']>
  /** The total number of unique views for the day. */
  uniqueViewsCount?: Maybe<Scalars['Int']>
  /** The total number of unique clicks for the day. */
  uniqueClicksCount?: Maybe<Scalars['Int']>
  /** The total ad spend for the day, if the marketing event is a paid ad with a daily spend. */
  adSpend?: Maybe<AdminMoneyInput>
  /** Whether the engagements are reported as lifetime values rather than daily totals. */
  isCumulative?: Maybe<Scalars['Boolean']>
  /** The UTC Offset that the app is using to determine which date to allocate spend to. */
  utcOffset?: Maybe<Scalars['UtcOffset']>
  /** The date time at which the data was fetched. */
  fetchedAt?: Maybe<Scalars['DateTime']>
}

/** Represents actions that market a merchant's store or products. */
export type AdminMarketingEvent = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'MarketingEvent'
    /** The app that the marketing event is attributed to. */
    app: AdminApp
    /** The marketing channel used by the marketing event. */
    channel?: Maybe<AdminMarketingChannel>
    /** A human-readable description of the marketing event. */
    description?: Maybe<Scalars['String']>
    /** The date and time when the marketing event ended. */
    endedAt?: Maybe<Scalars['DateTime']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The URL where the marketing event can be managed. */
    manageUrl?: Maybe<Scalars['URL']>
    /** The URL where the marketing event can be previewed. */
    previewUrl?: Maybe<Scalars['URL']>
    /** An optional ID that helps Shopify validate engagement data. */
    remoteId?: Maybe<Scalars['String']>
    /** The date and time when the marketing event is scheduled to end. */
    scheduledToEndAt?: Maybe<Scalars['DateTime']>
    /**
     * Where the `MarketingEvent` occurred and what kind of content was used.
     * Because `utmSource` and `utmMedium` are often used interchangeably, this is
     * based on a combination of `marketingChannel`, `referringDomain`, and `type` to
     * provide a consistent representation for any given piece of marketing
     * regardless of the app that created it.
     */
    sourceAndMedium: Scalars['String']
    /** The date and time when the marketing event started. */
    startedAt: Scalars['DateTime']
    /**
     * The display text for the marketing event type.
     * @deprecated Use `sourceAndMedium` instead
     */
    targetTypeDisplayText: Scalars['String']
    /** The marketing event type. */
    type: AdminMarketingTactic
    /** The name of the marketing campaign. */
    utmCampaign?: Maybe<Scalars['String']>
    /** The medium that the marketing campaign is using. Example values: `cpc`, `banner`. */
    utmMedium?: Maybe<Scalars['String']>
    /** The referrer of the marketing event. Example values: `google`, `newsletter`. */
    utmSource?: Maybe<Scalars['String']>
  }

export type AdminMarketingEventConnection = {
  __typename?: 'MarketingEventConnection'
  /** A list of edges. */
  edges: Array<AdminMarketingEventEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminMarketingEventEdge = {
  __typename?: 'MarketingEventEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MarketingEventEdge. */
  node: AdminMarketingEvent
}

/** The set of valid sort keys for the MarketingEvent query. */
export enum AdminMarketingEventSortKeys {
  /** Sort by the `started_at` value. */
  StartedAt = 'STARTED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The available types of marketing event. */
export enum AdminMarketingTactic {
  /** An abandoned cart recovery email. */
  AbandonedCart = 'ABANDONED_CART',
  /** An ad, such as a Facebook ad. */
  Ad = 'AD',
  /** An affiliate link. */
  Affiliate = 'AFFILIATE',
  /** A link. */
  Link = 'LINK',
  /** A loyalty program. */
  Loyalty = 'LOYALTY',
  /** A messaging app, such as Facebook Messenger. */
  Message = 'MESSAGE',
  /** A newsletter. */
  Newsletter = 'NEWSLETTER',
  /** A notification in the Shopify admin. */
  Notification = 'NOTIFICATION',
  /** A blog post. */
  Post = 'POST',
  /** A retargeting ad. */
  Retargeting = 'RETARGETING',
  /** A transactional email. */
  Transactional = 'TRANSACTIONAL',
  /** Search engine optimization. */
  Seo = 'SEO',
  /** A direct visit to the online store. */
  Direct = 'DIRECT',
  /** Popup on merchant's store. */
  StorefrontApp = 'STOREFRONT_APP',
  /** A display ad. */
  Display = 'DISPLAY',
  /** Paid search. */
  Search = 'SEARCH',
  /** A follow-up email. */
  FollowUp = 'FOLLOW_UP',
  /** A promotional receipt. */
  Receipt = 'RECEIPT'
}

/** Represents a media interface. */
export type AdminMedia = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** The media content type. */
  mediaContentType: AdminMediaContentType
  /** Any errors which have occurred on the media. */
  mediaErrors: Array<AdminMediaError>
  /** The preview image for the media. */
  preview?: Maybe<AdminMediaPreviewImage>
  /** Current status of the media. */
  status: AdminMediaStatus
}

export type AdminMediaConnection = {
  __typename?: 'MediaConnection'
  /** A list of edges. */
  edges: Array<AdminMediaEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** The possible content types for a media object. */
export enum AdminMediaContentType {
  /** A Shopify hosted video. */
  Video = 'VIDEO',
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted image. */
  Image = 'IMAGE'
}

export type AdminMediaEdge = {
  __typename?: 'MediaEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MediaEdge. */
  node: AdminMedia
}

/** Represents a media error. */
export type AdminMediaError = {
  __typename?: 'MediaError'
  /** Code representing the type of error. */
  code: AdminMediaErrorCode
  /** Additional details regarding the error. */
  details?: Maybe<Scalars['String']>
  /** Translated error message. */
  message: Scalars['String']
}

/** Error types for media. */
export enum AdminMediaErrorCode {
  /** Media error has occured for unknown reason. */
  Unknown = 'UNKNOWN',
  /** Media could not be processed because the signed url was invalid. */
  InvalidSignedUrl = 'INVALID_SIGNED_URL'
}

/** Represents a Shopify hosted image. */
export type AdminMediaImage = AdminNode &
  AdminMedia & {
    __typename?: 'MediaImage'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The image for the media. */
    image?: Maybe<AdminImage>
    /** The media content type. */
    mediaContentType: AdminMediaContentType
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<AdminMediaError>
    /** The preview image for the media. */
    preview?: Maybe<AdminMediaPreviewImage>
    /** Current status of the media. */
    status: AdminMediaStatus
  }

/** Represents the preview image for a media. */
export type AdminMediaPreviewImage = {
  __typename?: 'MediaPreviewImage'
  /** The preview image for the media. */
  image?: Maybe<AdminImage>
  /** Current status of the preview image. */
  status: AdminMediaPreviewImageStatus
}

/** The possible statuses for a media preview image. */
export enum AdminMediaPreviewImageStatus {
  /** Preview image is uploaded but not yet processed. */
  Uploaded = 'UPLOADED',
  /** Preview image is being processed. */
  Processing = 'PROCESSING',
  /** Preview image is ready to be displayed. */
  Ready = 'READY',
  /** Preview image processing has failed. */
  Failed = 'FAILED'
}

/** The possible statuses for a media object. */
export enum AdminMediaStatus {
  /** Media has been uploaded but not yet processed. */
  Uploaded = 'UPLOADED',
  /** Media is being processed. */
  Processing = 'PROCESSING',
  /** Media is ready to be displayed. */
  Ready = 'READY',
  /** Media processing has failed. */
  Failed = 'FAILED'
}

/** Represents an error that happens during execution of a Media query or mutation. */
export type AdminMediaUserError = AdminDisplayableError & {
  __typename?: 'MediaUserError'
  /** Error code to uniquely identify the error. */
  code?: Maybe<AdminMediaUserErrorCode>
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Possible error codes that could be returned by MediaUserError. */
export enum AdminMediaUserErrorCode {
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Video validation failed. */
  VideoValidationError = 'VIDEO_VALIDATION_ERROR',
  /** Model validation failed. */
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
  /** Video creation throttle was exceeded. */
  VideoThrottleExceeded = 'VIDEO_THROTTLE_EXCEEDED',
  /** Model3d creation throttle was exceeded. */
  Model3DThrottleExceeded = 'MODEL3D_THROTTLE_EXCEEDED',
  /** Exceeded the limit of media per product. */
  ProductMediaLimitExceeded = 'PRODUCT_MEDIA_LIMIT_EXCEEDED',
  /** Exceeded the limit of media per shop. */
  ShopMediaLimitExceeded = 'SHOP_MEDIA_LIMIT_EXCEEDED',
  /** Product does not exist. */
  ProductDoesNotExist = 'PRODUCT_DOES_NOT_EXIST',
  /** Media does not exist. */
  MediaDoesNotExist = 'MEDIA_DOES_NOT_EXIST',
  /** Media cannot be modified. It is currently being modified by another operation. */
  MediaCannotBeModified = 'MEDIA_CANNOT_BE_MODIFIED'
}

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * composed of keys, values, and value types.
 */
export type AdminMetafield = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'Metafield'
    /** The description of a metafield. */
    description?: Maybe<Scalars['String']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The key name for a metafield. */
    key: Scalars['String']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The namespace for a metafield. */
    namespace: Scalars['String']
    /** Owner type of a metafield visible to the Storefront API. */
    ownerType: AdminMetafieldOwnerType
    /** The value of a metafield. */
    value: Scalars['String']
    /** Represents the metafield value type. */
    valueType: AdminMetafieldValueType
  }

export type AdminMetafieldConnection = {
  __typename?: 'MetafieldConnection'
  /** A list of edges. */
  edges: Array<AdminMetafieldEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Specifies the input fields to delete a metafield. */
export type AdminMetafieldDeleteInput = {
  /** The ID of the metafield to delete. */
  id: Scalars['ID']
}

/** Return type for `metafieldDelete` mutation. */
export type AdminMetafieldDeletePayload = {
  __typename?: 'MetafieldDeletePayload'
  /** The ID of the deleted metafield. */
  deletedId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminMetafieldEdge = {
  __typename?: 'MetafieldEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldEdge. */
  node: AdminMetafield
}

/** Specifies the input fields for a metafield. */
export type AdminMetafieldInput = {
  /** The description of the metafield . */
  description?: Maybe<Scalars['String']>
  /** The unique ID of the metafield. */
  id?: Maybe<Scalars['ID']>
  /** The key name of the metafield. */
  key?: Maybe<Scalars['String']>
  /** The namespace for a metafield. */
  namespace?: Maybe<Scalars['String']>
  /** The value of a metafield. */
  value?: Maybe<Scalars['String']>
  /** The value type of a metafield. */
  valueType?: Maybe<AdminMetafieldValueType>
}

/** Metafield owner types. */
export enum AdminMetafieldOwnerType {
  /** A metafield owner type. */
  Article = 'ARTICLE',
  /** A metafield owner type. */
  Blog = 'BLOG',
  /** A metafield owner type. */
  Collection = 'COLLECTION',
  /** A metafield owner type. */
  Customer = 'CUSTOMER',
  /** A metafield owner type. */
  Draftorder = 'DRAFTORDER',
  /** A metafield owner type. */
  Order = 'ORDER',
  /** A metafield owner type. */
  Page = 'PAGE',
  /** A metafield owner type. */
  Product = 'PRODUCT',
  /** A metafield owner type. */
  Productimage = 'PRODUCTIMAGE',
  /** A metafield owner type. */
  Productvariant = 'PRODUCTVARIANT',
  /** A metafield owner type. */
  Shop = 'SHOP'
}

/** Represents an allowlist record that enables a metafield to be visible to the storefront. */
export type AdminMetafieldStorefrontVisibility = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'MetafieldStorefrontVisibility'
    /** The date and time when the allowlist record was created. */
    createdAt: Scalars['DateTime']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** Key of a metafield in the visibility allowlist. */
    key: Scalars['String']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** Namespace of a metafield in the visibility allowlist. */
    namespace: Scalars['String']
    /** Owner type of a metafield in the visibility allowlist. */
    ownerType: AdminMetafieldOwnerType
    /** The date and time when the allowlist record was updated. */
    updatedAt: Scalars['DateTime']
  }

export type AdminMetafieldStorefrontVisibilityConnection = {
  __typename?: 'MetafieldStorefrontVisibilityConnection'
  /** A list of edges. */
  edges: Array<AdminMetafieldStorefrontVisibilityEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `metafieldStorefrontVisibilityCreate` mutation. */
export type AdminMetafieldStorefrontVisibilityCreatePayload = {
  __typename?: 'MetafieldStorefrontVisibilityCreatePayload'
  /** The metafield storefront visibility that was created. */
  metafieldStorefrontVisibility?: Maybe<AdminMetafieldStorefrontVisibility>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `metafieldStorefrontVisibilityDelete` mutation. */
export type AdminMetafieldStorefrontVisibilityDeletePayload = {
  __typename?: 'MetafieldStorefrontVisibilityDeletePayload'
  /** The ID of the deleted metafield storefront visibility. */
  deletedMetafieldStorefrontVisibilityId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminMetafieldStorefrontVisibilityEdge = {
  __typename?: 'MetafieldStorefrontVisibilityEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldStorefrontVisibilityEdge. */
  node: AdminMetafieldStorefrontVisibility
}

/** Specifies the input fields for a MetafieldStorefrontVisibilityInput. */
export type AdminMetafieldStorefrontVisibilityInput = {
  /** The namespace of the metafield to be visible to the storefront api. */
  namespace: Scalars['String']
  /** The key of the metafield to be visible to the storefront api. */
  key: Scalars['String']
  /** The core resource ( e.g.: Product ) that owns this metafield. */
  ownerType: AdminMetafieldOwnerType
}

/** Metafield value types. */
export enum AdminMetafieldValueType {
  /** A string. */
  String = 'STRING',
  /** An integer. */
  Integer = 'INTEGER',
  /** A JSON string. */
  JsonString = 'JSON_STRING'
}

/** The set of valid sort keys for the MethodDefinition query. */
export enum AdminMethodDefinitionSortKeys {
  /** Sort by the `rate_provider_type` value. */
  RateProviderType = 'RATE_PROVIDER_TYPE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Represents a Shopify hosted 3D model. */
export type AdminModel3d = AdminNode &
  AdminMedia & {
    __typename?: 'Model3d'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: AdminMediaContentType
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<AdminMediaError>
    /** The original source for a 3d model. */
    originalSource: AdminModel3dSource
    /** The preview image for the media. */
    preview?: Maybe<AdminMediaPreviewImage>
    /** The sources for a 3d model. */
    sources: Array<AdminModel3dSource>
    /** Current status of the media. */
    status: AdminMediaStatus
  }

/** Represents a source for a Shopify hosted 3d model. */
export type AdminModel3dSource = {
  __typename?: 'Model3dSource'
  /** The filesize of the 3d model. */
  filesize: Scalars['Int']
  /** The format of the 3d model. */
  format: Scalars['String']
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String']
  /** The URL of the 3d model. */
  url: Scalars['String']
}

/** A collection of monetary values in their respective currencies. */
export type AdminMoneyBag = {
  __typename?: 'MoneyBag'
  /** Amount in presentment currency. */
  presentmentMoney: AdminMoneyV2
  /** Amount in shop currency. */
  shopMoney: AdminMoneyV2
}

/** Specifies the fields for a monetary value with currency. */
export type AdminMoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: AdminCurrencyCode
}

/**
 * A monetary value with currency.
 *
 * To format currencies, combine this type's amount and currencyCode fields with your client's locale.
 *
 * For example, in JavaScript you could use Intl.NumberFormat:
 *
 * ```js
 * new Intl.NumberFormat(locale, {
 *   style: 'currency',
 *   currency: currencyCode
 * }).format(amount);
 * ```
 *
 * Other formatting libraries include:
 *
 * * iOS - [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter)
 * * Android - [NumberFormat](https://developer.android.com/reference/java/text/NumberFormat.html)
 * * PHP - [NumberFormatter](http://php.net/manual/en/class.numberformatter.php)
 *
 * For a more general solution, the [Unicode CLDR number formatting database] is available with many implementations
 * (such as [TwitterCldr](https://github.com/twitter/twitter-cldr-rb)).
 */
export type AdminMoneyV2 = {
  __typename?: 'MoneyV2'
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: AdminCurrencyCode
}

/** An individual move to perform of an object to a position. */
export type AdminMoveInput = {
  /** The ID of the object to be moved. */
  id: Scalars['ID']
  /** The new position of the object in the set, using a 0 based index. */
  newPosition: Scalars['UnsignedInt64']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutation = {
  __typename?: 'Mutation'
  /** Allows an app to create a credit for a shop that can be used towards future app purchases. */
  appCreditCreate?: Maybe<AdminAppCreditCreatePayload>
  /** Allows an app to charge a shop for features or services one time. */
  appPurchaseOneTimeCreate?: Maybe<AdminAppPurchaseOneTimeCreatePayload>
  /** Cancels an app subscription on a store. */
  appSubscriptionCancel?: Maybe<AdminAppSubscriptionCancelPayload>
  /** Allows an app to charge a store for features or services on a recurring basis. */
  appSubscriptionCreate?: Maybe<AdminAppSubscriptionCreatePayload>
  /** Updates the app plan's pricing details attached to an app subscription. */
  appSubscriptionLineItemUpdate?: Maybe<AdminAppSubscriptionLineItemUpdatePayload>
  /** Allows an app to charge a store for usage. */
  appUsageRecordCreate?: Maybe<AdminAppUsageRecordCreatePayload>
  /**
   * Starts the cancelation process of a running bulk operation.
   *
   * There may be a short delay from when a cancelation starts until the operation is actually canceled.
   */
  bulkOperationCancel?: Maybe<AdminBulkOperationCancelPayload>
  /**
   * Creates and runs a bulk operation query.
   *
   * See the [bulk operations guide](https://help.shopify.com/api/guides/bulk-operations) for more details.
   */
  bulkOperationRunQuery?: Maybe<AdminBulkOperationRunQueryPayload>
  /** Adds products to a collection. */
  collectionAddProducts?: Maybe<AdminCollectionAddProductsPayload>
  /** Creates a collection. */
  collectionCreate?: Maybe<AdminCollectionCreatePayload>
  /** Deletes a collection. */
  collectionDelete?: Maybe<AdminCollectionDeletePayload>
  /**
   * Publishes a collection to a channel.
   * @deprecated Use `publishablePublish` instead
   */
  collectionPublish?: Maybe<AdminCollectionPublishPayload>
  /** Removes a set of products from a given collection. It can take a long time to run. Instead of returning a collection it returns a job, which should be polled. */
  collectionRemoveProducts?: Maybe<AdminCollectionRemoveProductsPayload>
  /** Asynchronously reorders a set of products from a given collection. */
  collectionReorderProducts?: Maybe<AdminCollectionReorderProductsPayload>
  /**
   * Unpublishes a collection.
   * @deprecated Use `publishableUnpublish` instead
   */
  collectionUnpublish?: Maybe<AdminCollectionUnpublishPayload>
  /** Updates a collection. */
  collectionUpdate?: Maybe<AdminCollectionUpdatePayload>
  /** Add tax exemptions to a customer. */
  customerAddTaxExemptions?: Maybe<AdminCustomerAddTaxExemptionsPayload>
  /** Creates a new customer. */
  customerCreate?: Maybe<AdminCustomerCreatePayload>
  /** Deletes a customer. */
  customerDelete?: Maybe<AdminCustomerDeletePayload>
  /** Remove tax exemptions from a customer. */
  customerRemoveTaxExemptions?: Maybe<AdminCustomerRemoveTaxExemptionsPayload>
  /** Replace tax exemptions on a customer. */
  customerReplaceTaxExemptions?: Maybe<AdminCustomerReplaceTaxExemptionsPayload>
  /** Updates a customer's attributes. */
  customerUpdate?: Maybe<AdminCustomerUpdatePayload>
  /** Updates a customer's default address. */
  customerUpdateDefaultAddress?: Maybe<AdminCustomerUpdateDefaultAddressPayload>
  /** Creates a delivery profile. */
  deliveryProfileCreate?: Maybe<AdminDeliveryProfileCreatePayload>
  /** Enqueues the deletion/removal of a delivery profile. */
  deliveryProfileRemove?: Maybe<AdminDeliveryProfileRemovePayload>
  /** Updates a delivery profile. */
  deliveryProfileUpdate?: Maybe<AdminDeliveryProfileUpdatePayload>
  /** Set the delivery settings for a shop. */
  deliverySettingUpdate?: Maybe<AdminDeliverySettingUpdatePayload>
  /** Assign a location as the shipping origin while in legacy compatibility mode profiles. */
  deliveryShippingOriginAssign?: Maybe<AdminDeliveryShippingOriginAssignPayload>
  /** Activates an automatic discount. */
  discountAutomaticActivate?: Maybe<AdminDiscountAutomaticActivatePayload>
  /** Creates a basic automatic discount. */
  discountAutomaticBasicCreate?: Maybe<AdminDiscountAutomaticBasicCreatePayload>
  /** Updates a basic automatic discount using its ID and input. */
  discountAutomaticBasicUpdate?: Maybe<AdminDiscountAutomaticBasicUpdatePayload>
  /**
   * Asynchronously delete automatic discounts in bulk if a `search` or `saved_search_id` argument is provided or if a
   * maximum discount threshold is reached (1,000). Otherwise, deletions will occur inline.
   * **Warning:** All automatic discounts will be deleted if a blank `search` argument is provided.
   */
  discountAutomaticBulkDelete?: Maybe<AdminDiscountAutomaticBulkDeletePayload>
  /** Creates a BXGY automatic discount. */
  discountAutomaticBxgyCreate?: Maybe<AdminDiscountAutomaticBxgyCreatePayload>
  /** Updates a BXGY automatic discount using its ID and input. */
  discountAutomaticBxgyUpdate?: Maybe<AdminDiscountAutomaticBxgyUpdatePayload>
  /** Deactivates an automatic discount. */
  discountAutomaticDeactivate?: Maybe<AdminDiscountAutomaticDeactivatePayload>
  /** Deletes an automatic discount. */
  discountAutomaticDelete?: Maybe<AdminDiscountAutomaticDeletePayload>
  /** Activates a code discount. */
  discountCodeActivate?: Maybe<AdminDiscountCodeActivatePayload>
  /** Creates a basic code discount. */
  discountCodeBasicCreate?: Maybe<AdminDiscountCodeBasicCreatePayload>
  /** Updates a basic code discount. */
  discountCodeBasicUpdate?: Maybe<AdminDiscountCodeBasicUpdatePayload>
  /** Creates a BXGY code discount. */
  discountCodeBxgyCreate?: Maybe<AdminDiscountCodeBxgyCreatePayload>
  /** Updates a BXGY code discount. */
  discountCodeBxgyUpdate?: Maybe<AdminDiscountCodeBxgyUpdatePayload>
  /** Deactivates a code discount. */
  discountCodeDeactivate?: Maybe<AdminDiscountCodeDeactivatePayload>
  /** Deletes a code discount. */
  discountCodeDelete?: Maybe<AdminDiscountCodeDeletePayload>
  /** Creates a free shipping code discount. */
  discountCodeFreeShippingCreate?: Maybe<AdminDiscountCodeFreeShippingCreatePayload>
  /** Updates a free shipping code discount. */
  discountCodeFreeShippingUpdate?: Maybe<AdminDiscountCodeFreeShippingUpdatePayload>
  /**
   * Calculates the properties of a draft order. Useful for determining information
   * such as total taxes or price without actually creating a draft order.
   */
  draftOrderCalculate?: Maybe<AdminDraftOrderCalculatePayload>
  /** Completes a draft order and creates an order. */
  draftOrderComplete?: Maybe<AdminDraftOrderCompletePayload>
  /** Creates a draft order. */
  draftOrderCreate?: Maybe<AdminDraftOrderCreatePayload>
  /** Deletes a draft order. */
  draftOrderDelete?: Maybe<AdminDraftOrderDeletePayload>
  /** Previews a draft order invoice email. */
  draftOrderInvoicePreview?: Maybe<AdminDraftOrderInvoicePreviewPayload>
  /** Sends an email invoice for a draft order. */
  draftOrderInvoiceSend?: Maybe<AdminDraftOrderInvoiceSendPayload>
  /** Updates a draft order. */
  draftOrderUpdate?: Maybe<AdminDraftOrderUpdatePayload>
  /** Triggers a workflow defined by the merchant in Shopify Flow. To learn more, see [_Create Shopify Flow triggers_](https://help.shopify.com/api/embedded-apps/app-extensions/flow/create-triggers). */
  flowTriggerReceive?: Maybe<AdminFlowTriggerReceivePayload>
  /** Cancels a fulfillment. */
  fulfillmentCancel?: Maybe<AdminFulfillmentCancelPayload>
  /**
   * Creates a fulfillment for an order.
   * @deprecated Use the new [fulfillmentOrder](https://shopify.dev/tutorials/manage-fulfillments-with-fulfillment-and-fulfillmentorder-resources) APIs to manage fulfillments.
   */
  fulfillmentCreate?: Maybe<AdminFulfillmentCreatePayload>
  /**
   * Creates a fulfillment for one or many fulfillment orders.
   * The fulfillment orders are associated with the same order and are assigned to the same location.
   */
  fulfillmentCreateV2?: Maybe<AdminFulfillmentCreateV2Payload>
  /** Accept a cancellation request sent to a fulfillment service for a fulfillment order. */
  fulfillmentOrderAcceptCancellationRequest?: Maybe<AdminFulfillmentOrderAcceptCancellationRequestPayload>
  /** Accepts a fulfillment request sent to a fulfillment service for a fulfillment order. */
  fulfillmentOrderAcceptFulfillmentRequest?: Maybe<AdminFulfillmentOrderAcceptFulfillmentRequestPayload>
  /** Marks a fulfillment order as canceled. */
  fulfillmentOrderCancel?: Maybe<AdminFulfillmentOrderCancelPayload>
  /** Marks an in-progress fulfillment order as incomplete, indicating the fulfillment service is unable to ship any remaining items and intends to close the fulfillment order. */
  fulfillmentOrderClose?: Maybe<AdminFulfillmentOrderClosePayload>
  /** Moves a fulfillment order to a new location. */
  fulfillmentOrderMove?: Maybe<AdminFulfillmentOrderMovePayload>
  /** Rejects a cancellation request sent to a fulfillment service for a fulfillment order. */
  fulfillmentOrderRejectCancellationRequest?: Maybe<AdminFulfillmentOrderRejectCancellationRequestPayload>
  /** Rejects a fulfillment request sent to a fulfillment service for a fulfillment order. */
  fulfillmentOrderRejectFulfillmentRequest?: Maybe<AdminFulfillmentOrderRejectFulfillmentRequestPayload>
  /** Sends a cancellation request to the fulfillment service of a fulfillment order. */
  fulfillmentOrderSubmitCancellationRequest?: Maybe<AdminFulfillmentOrderSubmitCancellationRequestPayload>
  /** Sends a fulfillment request to the fulfillment service of a fulfillment order. */
  fulfillmentOrderSubmitFulfillmentRequest?: Maybe<AdminFulfillmentOrderSubmitFulfillmentRequestPayload>
  /** Creates a fulfillment service. */
  fulfillmentServiceCreate?: Maybe<AdminFulfillmentServiceCreatePayload>
  /** Deletes a fulfillment service. */
  fulfillmentServiceDelete?: Maybe<AdminFulfillmentServiceDeletePayload>
  /** Updates a fulfillment service. */
  fulfillmentServiceUpdate?: Maybe<AdminFulfillmentServiceUpdatePayload>
  /**
   * Updates tracking information for a fulfillment.
   * @deprecated Use the new [fulfillmentOrder](https://shopify.dev/tutorials/manage-fulfillments-with-fulfillment-and-fulfillmentorder-resources) APIs to manage fulfillments.
   */
  fulfillmentTrackingInfoUpdate?: Maybe<AdminFulfillmentTrackingInfoUpdatePayload>
  /** Updates tracking information for a fulfillment. */
  fulfillmentTrackingInfoUpdateV2?: Maybe<AdminFulfillmentTrackingInfoUpdateV2Payload>
  /** Activate an inventory item at a location. */
  inventoryActivate?: Maybe<AdminInventoryActivatePayload>
  /** Adjusts the inventory by a certain quantity. */
  inventoryAdjustQuantity?: Maybe<AdminInventoryAdjustQuantityPayload>
  /** Adjusts the inventory at a location for multiple inventory items. */
  inventoryBulkAdjustQuantityAtLocation?: Maybe<AdminInventoryBulkAdjustQuantityAtLocationPayload>
  /** Deactivate an inventory item at a location. */
  inventoryDeactivate?: Maybe<AdminInventoryDeactivatePayload>
  /** Updates an inventory item. */
  inventoryItemUpdate?: Maybe<AdminInventoryItemUpdatePayload>
  /** Kit Skill requested by developer for app and shop. */
  kitSkillTriggerRequest?: Maybe<AdminKitSkillTriggerRequestPayload>
  /** Updates a marketing activity. */
  marketingActivityUpdate?: Maybe<AdminMarketingActivityUpdatePayload>
  /** Creates a new marketing event engagement for a marketing activity. */
  marketingEngagementCreate?: Maybe<AdminMarketingEngagementCreatePayload>
  /** Deletes a metafield. */
  metafieldDelete?: Maybe<AdminMetafieldDeletePayload>
  /** Makes a Metafield with a specific namespace and key visible to the storefront API. */
  metafieldStorefrontVisibilityCreate?: Maybe<AdminMetafieldStorefrontVisibilityCreatePayload>
  /** Deletes a Metafield Storefront Visibility. */
  metafieldStorefrontVisibilityDelete?: Maybe<AdminMetafieldStorefrontVisibilityDeletePayload>
  /** Captures from an authorized transaction on an order. */
  orderCapture?: Maybe<AdminOrderCapturePayload>
  /** Closes an open order. */
  orderClose?: Maybe<AdminOrderClosePayload>
  /** Add a custom item to the order. */
  orderEditAddCustomItem?: Maybe<AdminOrderEditAddCustomItemPayload>
  /** Add a line item from an existing product variant. */
  orderEditAddVariant?: Maybe<AdminOrderEditAddVariantPayload>
  /** Start editing an order. */
  orderEditBegin?: Maybe<AdminOrderEditBeginPayload>
  /** Applies and saves staged changes to an order. */
  orderEditCommit?: Maybe<AdminOrderEditCommitPayload>
  /** Set the quantity of an item on the order. */
  orderEditSetQuantity?: Maybe<AdminOrderEditSetQuantityPayload>
  /** Marks an order as paid. */
  orderMarkAsPaid?: Maybe<AdminOrderMarkAsPaidPayload>
  /** Opens a closed order. */
  orderOpen?: Maybe<AdminOrderOpenPayload>
  /** Updates an order. */
  orderUpdate?: Maybe<AdminOrderUpdatePayload>
  /** Activate a price rule. */
  priceRuleActivate?: Maybe<AdminPriceRuleActivatePayload>
  /** Create a price rule using the input. */
  priceRuleCreate?: Maybe<AdminPriceRuleCreatePayload>
  /** Deactivate a price rule. */
  priceRuleDeactivate?: Maybe<AdminPriceRuleDeactivatePayload>
  /** Delete a price rule. */
  priceRuleDelete?: Maybe<AdminPriceRuleDeletePayload>
  /** Create a discount code for a price rule. */
  priceRuleDiscountCodeCreate?: Maybe<AdminPriceRuleDiscountCodeCreatePayload>
  /** Update a discount code for a price rule. */
  priceRuleDiscountCodeUpdate?: Maybe<AdminPriceRuleDiscountCodeUpdatePayload>
  /** Update a price rule using its id and an input. */
  priceRuleUpdate?: Maybe<AdminPriceRuleUpdatePayload>
  /** Deletes a private metafield. */
  privateMetafieldDelete?: Maybe<AdminPrivateMetafieldDeletePayload>
  /** Creates or update a private metafield. */
  privateMetafieldUpsert?: Maybe<AdminPrivateMetafieldUpsertPayload>
  /** Appends images to a product. */
  productAppendImages?: Maybe<AdminProductAppendImagesPayload>
  /**
   * Adds the price reduction to products in bulk.
   * @deprecated Removed in 2020-04.
   */
  productBulkAddPriceReductions?: Maybe<AdminProductBulkAddPriceReductionsPayload>
  /**
   * Removes the price reduction of products in bulk.
   * @deprecated Removed in 2020-04.
   */
  productBulkRemovePriceReductions?: Maybe<AdminProductBulkRemovePriceReductionsPayload>
  /** Creates a product. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can only be created on online stores. */
  productCreate?: Maybe<AdminProductCreatePayload>
  /** Creates media for a product. */
  productCreateMedia?: Maybe<AdminProductCreateMediaPayload>
  /** Deletes a product. */
  productDelete?: Maybe<AdminProductDeletePayload>
  /** Removes a product images from the product. */
  productDeleteImages?: Maybe<AdminProductDeleteImagesPayload>
  /** Deletes media for a product. */
  productDeleteMedia?: Maybe<AdminProductDeleteMediaPayload>
  /** Duplicates a product. */
  productDuplicate?: Maybe<AdminProductDuplicatePayload>
  /** Updates an image of a product. */
  productImageUpdate?: Maybe<AdminProductImageUpdatePayload>
  /**
   * Publishes a product. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can only be published on online stores.
   * @deprecated Use `publishablePublish` instead
   */
  productPublish?: Maybe<AdminProductPublishPayload>
  /** Asynchronously reorders a set of images for a given product. */
  productReorderImages?: Maybe<AdminProductReorderImagesPayload>
  /** Asynchronously Reoders the media attached to a product. */
  productReorderMedia?: Maybe<AdminProductReorderMediaPayload>
  /**
   * Unpublishes a product.
   * @deprecated Use `publishableUnpublish` instead
   */
  productUnpublish?: Maybe<AdminProductUnpublishPayload>
  /** Updates a product. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be updated only on online stores. If you update a product to be sold only on a subscription, then the product is unpublished from all channels except the online store. */
  productUpdate?: Maybe<AdminProductUpdatePayload>
  /** Updates media for a product. */
  productUpdateMedia?: Maybe<AdminProductUpdateMediaPayload>
  /** Creates a product variant. */
  productVariantCreate?: Maybe<AdminProductVariantCreatePayload>
  /** Deletes a product variant. */
  productVariantDelete?: Maybe<AdminProductVariantDeletePayload>
  /** Updates a product variant. */
  productVariantUpdate?: Maybe<AdminProductVariantUpdatePayload>
  /** Publishes a resource to a channel. If the resource is a product, then its status must be active. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores. */
  publishablePublish?: Maybe<AdminPublishablePublishPayload>
  /** Publishes a resource to current channel. If the resource is a product, then its status must be active. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores. */
  publishablePublishToCurrentChannel?: Maybe<AdminPublishablePublishToCurrentChannelPayload>
  /** Unpublishes a resource from a channel. If the resource is a product, then its status must be active. */
  publishableUnpublish?: Maybe<AdminPublishableUnpublishPayload>
  /** Unpublishes a resource from the current channel. If the resource is a product, then its status must be active. */
  publishableUnpublishToCurrentChannel?: Maybe<AdminPublishableUnpublishToCurrentChannelPayload>
  /** Creates a refund. */
  refundCreate?: Maybe<AdminRefundCreatePayload>
  /** Creates a saved search. */
  savedSearchCreate?: Maybe<AdminSavedSearchCreatePayload>
  /** Delete a saved search. */
  savedSearchDelete?: Maybe<AdminSavedSearchDeletePayload>
  /** Update a saved search. */
  savedSearchUpdate?: Maybe<AdminSavedSearchUpdatePayload>
  /** Creates a new script tag. */
  scriptTagCreate?: Maybe<AdminScriptTagCreatePayload>
  /** Deletes a script tag. */
  scriptTagDelete?: Maybe<AdminScriptTagDeletePayload>
  /** Updates a script tag. */
  scriptTagUpdate?: Maybe<AdminScriptTagUpdatePayload>
  /** Deletes a shipping package. */
  shippingPackageDelete?: Maybe<AdminShippingPackageDeletePayload>
  /** Sets a Shipping Package as the default shipping package. The default shipping package is the one used to calculate shipping costs on checkout. */
  shippingPackageMakeDefault?: Maybe<AdminShippingPackageMakeDefaultPayload>
  /** Updates a custom shipping package. */
  shippingPackageUpdate?: Maybe<AdminShippingPackageUpdatePayload>
  /** Disables a locale for a shop. */
  shopLocaleDisable?: Maybe<AdminShopLocaleDisablePayload>
  /** Enables a locale for a shop. */
  shopLocaleEnable?: Maybe<AdminShopLocaleEnablePayload>
  /** Updates a locale for a shop. */
  shopLocaleUpdate?: Maybe<AdminShopLocaleUpdatePayload>
  /**
   * Generates the URL and signed paramaters needed to upload an asset to Shopify.
   * @deprecated Use `stagedUploadsCreate` instead
   */
  stagedUploadTargetGenerate?: Maybe<AdminStagedUploadTargetGeneratePayload>
  /**
   * Uploads multiple images.
   * @deprecated Use `stagedUploadsCreate` instead
   */
  stagedUploadTargetsGenerate?: Maybe<AdminStagedUploadTargetsGeneratePayload>
  /** Creates staged upload target URLs for each input and is the first step in the upload process. The returned upload targets with URLs can be used as endpoints to upload the files. */
  stagedUploadsCreate?: Maybe<AdminStagedUploadsCreatePayload>
  /** Creates a storefront access token. */
  storefrontAccessTokenCreate?: Maybe<AdminStorefrontAccessTokenCreatePayload>
  /** Deletes a storefront access token. */
  storefrontAccessTokenDelete?: Maybe<AdminStorefrontAccessTokenDeletePayload>
  /** Add tags to a taggable object. */
  tagsAdd?: Maybe<AdminTagsAddPayload>
  /** Remove tags from a taggable object. */
  tagsRemove?: Maybe<AdminTagsRemovePayload>
  /** Creates or updates translations. */
  translationsRegister?: Maybe<AdminTranslationsRegisterPayload>
  /** Removes translations. */
  translationsRemove?: Maybe<AdminTranslationsRemovePayload>
  /** Creates a new webhook subscription. */
  webhookSubscriptionCreate?: Maybe<AdminWebhookSubscriptionCreatePayload>
  /** Deletes a webhook subscription. */
  webhookSubscriptionDelete?: Maybe<AdminWebhookSubscriptionDeletePayload>
  /** Updates a webhook subscription. */
  webhookSubscriptionUpdate?: Maybe<AdminWebhookSubscriptionUpdatePayload>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationAppCreditCreateArgs = {
  description: Scalars['String']
  amount: AdminMoneyInput
  test?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationAppPurchaseOneTimeCreateArgs = {
  name: Scalars['String']
  price: AdminMoneyInput
  returnUrl: Scalars['URL']
  test?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationAppSubscriptionCancelArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationAppSubscriptionCreateArgs = {
  name: Scalars['String']
  lineItems: Array<AdminAppSubscriptionLineItemInput>
  test?: Maybe<Scalars['Boolean']>
  trialDays?: Maybe<Scalars['Int']>
  returnUrl: Scalars['URL']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationAppSubscriptionLineItemUpdateArgs = {
  id: Scalars['ID']
  cappedAmount: AdminMoneyInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationAppUsageRecordCreateArgs = {
  subscriptionLineItemId: Scalars['ID']
  price: AdminMoneyInput
  description: Scalars['String']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationBulkOperationCancelArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationBulkOperationRunQueryArgs = {
  query: Scalars['String']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCollectionAddProductsArgs = {
  id: Scalars['ID']
  productIds: Array<Scalars['ID']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCollectionCreateArgs = {
  input: AdminCollectionInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCollectionDeleteArgs = {
  input: AdminCollectionDeleteInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCollectionPublishArgs = {
  input: AdminCollectionPublishInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCollectionRemoveProductsArgs = {
  id: Scalars['ID']
  productIds: Array<Scalars['ID']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCollectionReorderProductsArgs = {
  id: Scalars['ID']
  moves: Array<AdminMoveInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCollectionUnpublishArgs = {
  input: AdminCollectionUnpublishInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCollectionUpdateArgs = {
  input: AdminCollectionInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCustomerAddTaxExemptionsArgs = {
  customerId: Scalars['ID']
  taxExemptions: Array<AdminTaxExemption>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCustomerCreateArgs = {
  input: AdminCustomerInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCustomerDeleteArgs = {
  input: AdminCustomerDeleteInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCustomerRemoveTaxExemptionsArgs = {
  customerId: Scalars['ID']
  taxExemptions: Array<AdminTaxExemption>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCustomerReplaceTaxExemptionsArgs = {
  customerId: Scalars['ID']
  taxExemptions: Array<AdminTaxExemption>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCustomerUpdateArgs = {
  input: AdminCustomerInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationCustomerUpdateDefaultAddressArgs = {
  customerId: Scalars['ID']
  addressId: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDeliveryProfileCreateArgs = {
  profile: AdminDeliveryProfileInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDeliveryProfileRemoveArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDeliveryProfileUpdateArgs = {
  id: Scalars['ID']
  profile: AdminDeliveryProfileInput
  leaveLegacyModeProfiles?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDeliverySettingUpdateArgs = {
  setting: AdminDeliverySettingInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDeliveryShippingOriginAssignArgs = {
  locationId: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountAutomaticActivateArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountAutomaticBasicCreateArgs = {
  automaticBasicDiscount: AdminDiscountAutomaticBasicInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountAutomaticBasicUpdateArgs = {
  id: Scalars['ID']
  automaticBasicDiscount: AdminDiscountAutomaticBasicInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountAutomaticBulkDeleteArgs = {
  search?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
  ids?: Maybe<Array<Scalars['ID']>>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountAutomaticBxgyCreateArgs = {
  automaticBxgyDiscount: AdminDiscountAutomaticBxgyInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountAutomaticBxgyUpdateArgs = {
  id: Scalars['ID']
  automaticBxgyDiscount: AdminDiscountAutomaticBxgyInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountAutomaticDeactivateArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountAutomaticDeleteArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeActivateArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeBasicCreateArgs = {
  basicCodeDiscount: AdminDiscountCodeBasicInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeBasicUpdateArgs = {
  id: Scalars['ID']
  basicCodeDiscount: AdminDiscountCodeBasicInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeBxgyCreateArgs = {
  bxgyCodeDiscount: AdminDiscountCodeBxgyInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeBxgyUpdateArgs = {
  id: Scalars['ID']
  bxgyCodeDiscount: AdminDiscountCodeBxgyInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeDeactivateArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeDeleteArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeFreeShippingCreateArgs = {
  freeShippingCodeDiscount: AdminDiscountCodeFreeShippingInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDiscountCodeFreeShippingUpdateArgs = {
  id: Scalars['ID']
  freeShippingCodeDiscount: AdminDiscountCodeFreeShippingInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDraftOrderCalculateArgs = {
  input: AdminDraftOrderInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDraftOrderCompleteArgs = {
  id: Scalars['ID']
  paymentPending?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDraftOrderCreateArgs = {
  input: AdminDraftOrderInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDraftOrderDeleteArgs = {
  input: AdminDraftOrderDeleteInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDraftOrderInvoicePreviewArgs = {
  id: Scalars['ID']
  email?: Maybe<AdminEmailInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDraftOrderInvoiceSendArgs = {
  id: Scalars['ID']
  email?: Maybe<AdminEmailInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationDraftOrderUpdateArgs = {
  id: Scalars['ID']
  input: AdminDraftOrderInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFlowTriggerReceiveArgs = {
  body: Scalars['String']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentCancelArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentCreateArgs = {
  input: AdminFulfillmentInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentCreateV2Args = {
  fulfillment: AdminFulfillmentV2Input
  message?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderAcceptCancellationRequestArgs = {
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderAcceptFulfillmentRequestArgs = {
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderCancelArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderCloseArgs = {
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderMoveArgs = {
  id: Scalars['ID']
  newLocationId: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderRejectCancellationRequestArgs = {
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderRejectFulfillmentRequestArgs = {
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderSubmitCancellationRequestArgs = {
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentOrderSubmitFulfillmentRequestArgs = {
  id: Scalars['ID']
  message?: Maybe<Scalars['String']>
  notifyCustomer?: Maybe<Scalars['Boolean']>
  fulfillmentOrderLineItems?: Maybe<Array<AdminFulfillmentOrderLineItemInput>>
  shippingMethod?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentServiceCreateArgs = {
  name: Scalars['String']
  callbackUrl?: Maybe<Scalars['URL']>
  trackingSupport?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentServiceDeleteArgs = {
  id: Scalars['ID']
  destinationLocationId?: Maybe<Scalars['ID']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentServiceUpdateArgs = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  callbackUrl?: Maybe<Scalars['URL']>
  trackingSupport?: Maybe<Scalars['Boolean']>
  fulfillmentOrdersOptIn?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentTrackingInfoUpdateArgs = {
  fulfillmentId: Scalars['ID']
  trackingInfoUpdateInput: AdminTrackingInfoUpdateInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationFulfillmentTrackingInfoUpdateV2Args = {
  fulfillmentId: Scalars['ID']
  trackingInfoInput: AdminFulfillmentTrackingInput
  notifyCustomer?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationInventoryActivateArgs = {
  inventoryItemId: Scalars['ID']
  locationId: Scalars['ID']
  available?: Maybe<Scalars['Int']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationInventoryAdjustQuantityArgs = {
  input: AdminInventoryAdjustQuantityInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationInventoryBulkAdjustQuantityAtLocationArgs = {
  inventoryItemAdjustments: Array<AdminInventoryAdjustItemInput>
  locationId: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationInventoryDeactivateArgs = {
  inventoryLevelId: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationInventoryItemUpdateArgs = {
  id: Scalars['ID']
  input: AdminInventoryItemUpdateInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationKitSkillTriggerRequestArgs = {
  id: Scalars['ID']
  locale: AdminKitSkillLocale
  placeholders?: Maybe<Scalars['JSON']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationMarketingActivityUpdateArgs = {
  input: AdminMarketingActivityUpdateInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationMarketingEngagementCreateArgs = {
  marketingActivityId: Scalars['ID']
  marketingEngagement: AdminMarketingEngagementInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationMetafieldDeleteArgs = {
  input: AdminMetafieldDeleteInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationMetafieldStorefrontVisibilityCreateArgs = {
  input: AdminMetafieldStorefrontVisibilityInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationMetafieldStorefrontVisibilityDeleteArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderCaptureArgs = {
  input: AdminOrderCaptureInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderCloseArgs = {
  input: AdminOrderCloseInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderEditAddCustomItemArgs = {
  id: Scalars['ID']
  title: Scalars['String']
  locationId?: Maybe<Scalars['ID']>
  price: AdminMoneyInput
  quantity: Scalars['Int']
  taxable?: Maybe<Scalars['Boolean']>
  requiresShipping?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderEditAddVariantArgs = {
  id: Scalars['ID']
  variantId: Scalars['ID']
  locationId?: Maybe<Scalars['ID']>
  quantity: Scalars['Int']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderEditBeginArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderEditCommitArgs = {
  id: Scalars['ID']
  notifyCustomer?: Maybe<Scalars['Boolean']>
  staffNote?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderEditSetQuantityArgs = {
  id: Scalars['ID']
  lineItemId: Scalars['ID']
  quantity: Scalars['Int']
  restock?: Maybe<Scalars['Boolean']>
  locationId?: Maybe<Scalars['ID']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderMarkAsPaidArgs = {
  input: AdminOrderMarkAsPaidInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderOpenArgs = {
  input: AdminOrderOpenInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationOrderUpdateArgs = {
  input: AdminOrderInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPriceRuleActivateArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPriceRuleCreateArgs = {
  priceRule: AdminPriceRuleInput
  priceRuleDiscountCode?: Maybe<AdminPriceRuleDiscountCodeInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPriceRuleDeactivateArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPriceRuleDeleteArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPriceRuleDiscountCodeCreateArgs = {
  priceRuleId: Scalars['ID']
  code: Scalars['String']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPriceRuleDiscountCodeUpdateArgs = {
  priceRuleId: Scalars['ID']
  code: Scalars['String']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPriceRuleUpdateArgs = {
  id: Scalars['ID']
  priceRule: AdminPriceRuleInput
  priceRuleDiscountCode?: Maybe<AdminPriceRuleDiscountCodeInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPrivateMetafieldDeleteArgs = {
  input: AdminPrivateMetafieldDeleteInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPrivateMetafieldUpsertArgs = {
  input: AdminPrivateMetafieldInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductAppendImagesArgs = {
  input: AdminProductAppendImagesInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductBulkAddPriceReductionsArgs = {
  productIds?: Maybe<Array<Scalars['ID']>>
  savedSearchId?: Maybe<Scalars['ID']>
  search?: Maybe<Scalars['String']>
  priceReduction: AdminPriceReductionInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductBulkRemovePriceReductionsArgs = {
  productIds?: Maybe<Array<Scalars['ID']>>
  savedSearchId?: Maybe<Scalars['ID']>
  search?: Maybe<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductCreateArgs = {
  input: AdminProductInput
  media?: Maybe<Array<AdminCreateMediaInput>>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductCreateMediaArgs = {
  productId: Scalars['ID']
  media: Array<AdminCreateMediaInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductDeleteArgs = {
  input: AdminProductDeleteInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductDeleteImagesArgs = {
  id: Scalars['ID']
  imageIds: Array<Scalars['ID']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductDeleteMediaArgs = {
  productId: Scalars['ID']
  mediaIds: Array<Scalars['ID']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductDuplicateArgs = {
  productId: Scalars['ID']
  newTitle: Scalars['String']
  includeImages?: Maybe<Scalars['Boolean']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductImageUpdateArgs = {
  productId: Scalars['ID']
  image: AdminImageInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductPublishArgs = {
  input: AdminProductPublishInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductReorderImagesArgs = {
  id: Scalars['ID']
  moves: Array<AdminMoveInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductReorderMediaArgs = {
  id: Scalars['ID']
  moves: Array<AdminMoveInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductUnpublishArgs = {
  input: AdminProductUnpublishInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductUpdateArgs = {
  input: AdminProductInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductUpdateMediaArgs = {
  productId: Scalars['ID']
  media: Array<AdminUpdateMediaInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductVariantCreateArgs = {
  input: AdminProductVariantInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductVariantDeleteArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationProductVariantUpdateArgs = {
  input: AdminProductVariantInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPublishablePublishArgs = {
  id: Scalars['ID']
  input: Array<AdminPublicationInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPublishablePublishToCurrentChannelArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPublishableUnpublishArgs = {
  id: Scalars['ID']
  input: Array<AdminPublicationInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationPublishableUnpublishToCurrentChannelArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationRefundCreateArgs = {
  input: AdminRefundInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationSavedSearchCreateArgs = {
  input: AdminSavedSearchCreateInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationSavedSearchDeleteArgs = {
  input: AdminSavedSearchDeleteInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationSavedSearchUpdateArgs = {
  input: AdminSavedSearchUpdateInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationScriptTagCreateArgs = {
  input: AdminScriptTagInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationScriptTagDeleteArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationScriptTagUpdateArgs = {
  id: Scalars['ID']
  input: AdminScriptTagInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationShippingPackageDeleteArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationShippingPackageMakeDefaultArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationShippingPackageUpdateArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationShopLocaleDisableArgs = {
  locale: Scalars['String']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationShopLocaleEnableArgs = {
  locale: Scalars['String']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationShopLocaleUpdateArgs = {
  locale: Scalars['String']
  shopLocale: AdminShopLocaleInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationStagedUploadTargetGenerateArgs = {
  input: AdminStagedUploadTargetGenerateInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationStagedUploadTargetsGenerateArgs = {
  input: Array<AdminStageImageInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationStagedUploadsCreateArgs = {
  input: Array<AdminStagedUploadInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationStorefrontAccessTokenCreateArgs = {
  input: AdminStorefrontAccessTokenInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationStorefrontAccessTokenDeleteArgs = {
  input: AdminStorefrontAccessTokenDeleteInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationTagsAddArgs = {
  id: Scalars['ID']
  tags: Array<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationTagsRemoveArgs = {
  id: Scalars['ID']
  tags: Array<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationTranslationsRegisterArgs = {
  resourceId: Scalars['ID']
  translations: Array<AdminTranslationInput>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationTranslationsRemoveArgs = {
  resourceId: Scalars['ID']
  translationKeys: Array<Scalars['String']>
  locales: Array<Scalars['String']>
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationWebhookSubscriptionCreateArgs = {
  topic: AdminWebhookSubscriptionTopic
  webhookSubscription: AdminWebhookSubscriptionInput
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationWebhookSubscriptionDeleteArgs = {
  id: Scalars['ID']
}

/** The schema's entry point for all mutation operations. */
export type AdminMutationWebhookSubscriptionUpdateArgs = {
  id: Scalars['ID']
  webhookSubscription: AdminWebhookSubscriptionInput
}

/** A signed upload parameter for uploading an asset to Shopify. */
export type AdminMutationsStagedUploadTargetGenerateUploadParameter = {
  __typename?: 'MutationsStagedUploadTargetGenerateUploadParameter'
  /** The upload parameter name. */
  name: Scalars['String']
  /** The upload parameter value. */
  value: Scalars['String']
}

/**
 * A default cursor for use in pagination.
 * The default cursor can be used for next and previous navigation.
 */
export type AdminNavigable = {
  /** A default cursor for use in pagination. */
  defaultCursor: Scalars['String']
}

/** A navigation item, holding basic link attributes. */
export type AdminNavigationItem = {
  __typename?: 'NavigationItem'
  /** The unique identifier of the navigation item. */
  id: Scalars['String']
  /** The name of the navigation item. */
  title: Scalars['String']
  /** The URL of the page that the navigation item links to. */
  url: Scalars['URL']
}

/** An object with an ID to support global identification. */
export type AdminNode = {
  /** Globally unique identifier. */
  id: Scalars['ID']
}

/**
 * Represents an article in an OnlineStoreBlog object. Articles appear in reverse chronological order, with the
 * most recent entry at the top of the blog's page. A blog can contain any number of articles.
 */
export type AdminOnlineStoreArticle = AdminNode &
  AdminNavigable &
  AdminHasPublishedTranslations & {
    __typename?: 'OnlineStoreArticle'
    /** A default cursor for use in pagination. */
    defaultCursor: Scalars['String']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The translations associated with the resource. */
    translations: Array<AdminPublishedTranslation>
  }

/**
 * Represents an article in an OnlineStoreBlog object. Articles appear in reverse chronological order, with the
 * most recent entry at the top of the blog's page. A blog can contain any number of articles.
 */
export type AdminOnlineStoreArticleTranslationsArgs = {
  locale: Scalars['String']
}

/**
 * Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs.  Blogs are meant
 * to be used as a type of magazine or newsletter for the shop, with content that changes over time.
 */
export type AdminOnlineStoreBlog = AdminNode &
  AdminHasPublishedTranslations & {
    __typename?: 'OnlineStoreBlog'
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The translations associated with the resource. */
    translations: Array<AdminPublishedTranslation>
  }

/**
 * Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs.  Blogs are meant
 * to be used as a type of magazine or newsletter for the shop, with content that changes over time.
 */
export type AdminOnlineStoreBlogTranslationsArgs = {
  locale: Scalars['String']
}

/** A custom page on the Online Store. */
export type AdminOnlineStorePage = AdminNode &
  AdminNavigable &
  AdminHasPublishedTranslations & {
    __typename?: 'OnlineStorePage'
    /** A default cursor for use in pagination. */
    defaultCursor: Scalars['String']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The translations associated with the resource. */
    translations: Array<AdminPublishedTranslation>
  }

/** A custom page on the Online Store. */
export type AdminOnlineStorePageTranslationsArgs = {
  locale: Scalars['String']
}

/** Online Store preview URL of the object. */
export type AdminOnlineStorePreviewable = {
  /** The online store preview URL. */
  onlineStorePreviewUrl?: Maybe<Scalars['URL']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrder = AdminNode &
  AdminCommentEventSubject &
  AdminHasMetafields &
  AdminLegacyInteroperability &
  AdminHasEvents & {
    __typename?: 'Order'
    /**
     * Generated messages that appear at the top of an order page in the Shopify admin.
     * For example, _this is a test order_.
     */
    alerts: Array<AdminResourceAlert>
    /**
     * Mailing address provided by the customer.
     * Not all orders have mailing addresses.
     */
    billingAddress?: Maybe<AdminMailingAddress>
    /** Whether the billing address matches the shipping address. */
    billingAddressMatchesShippingAddress: Scalars['Boolean']
    /** Whether the order can be manually marked as paid. */
    canMarkAsPaid: Scalars['Boolean']
    /** Whether notifications can be sent to the customer or not. */
    canNotifyCustomer: Scalars['Boolean']
    /**
     * Reason the order was canceled.
     * Returns null if the order wasn't canceled.
     */
    cancelReason?: Maybe<AdminOrderCancelReason>
    /**
     * Date and time when the order was canceled.
     * Returns null if the order wasn't canceled.
     */
    cancelledAt?: Maybe<Scalars['DateTime']>
    /**
     * Whether payment for the order can be captured.
     * Returns true when the customer's credit card has been authorized for payment and the authorization period has not expired.
     */
    capturable: Scalars['Boolean']
    /**
     * Amount of the order-level discount (does not contain any line item discounts).
     * @deprecated Use `cartDiscountAmountSet` instead
     */
    cartDiscountAmount?: Maybe<Scalars['Money']>
    /** Amount of the order-level discount (does not contain any line item discounts) in shop and presentment currencies. */
    cartDiscountAmountSet?: Maybe<AdminMoneyBag>
    /**
     * Channel that created the order.
     * @deprecated Use `publication` instead
     */
    channel?: Maybe<AdminChannel>
    /** The ip address of the client that is associated with this order. */
    clientIp?: Maybe<Scalars['String']>
    /** Whether the order is closed. */
    closed: Scalars['Boolean']
    /**
     * Date and time when the order closed.
     * If the order is not closed, then this field is null.
     */
    closedAt?: Maybe<Scalars['DateTime']>
    /** Whether inventory has been reserved for the order. */
    confirmed: Scalars['Boolean']
    /** Date and time when the order was created in Shopify. */
    createdAt: Scalars['DateTime']
    /**
     * The currency of the store at the time of the order.
     * If payment hasn't occurred, then this field is null.
     */
    currencyCode: AdminCurrencyCode
    /**
     * Custom information added to the order by your customer
     * (Also referred to as note attributes).
     */
    customAttributes: Array<AdminAttribute>
    /**
     * Unique identifier of the customer who placed the order.
     * Not all orders have customers associated with them.
     */
    customer?: Maybe<AdminCustomer>
    /** Whether the customer agreed to receive marketing materials. */
    customerAcceptsMarketing: Scalars['Boolean']
    /**
     * Description of the customer's experience with the store leading up to the order.
     * @deprecated Use `customerJourneySummary` instead
     */
    customerJourney?: Maybe<AdminCustomerJourney>
    /**
     * A two-letter or three-letter language code, optionally followed by a region modifier.
     * Example values could be 'en', 'en-CA', 'en-PIRATE'.
     */
    customerLocale?: Maybe<Scalars['String']>
    /** Discounts that have been applied on the order. */
    discountApplications: AdminDiscountApplicationConnection
    /** Discount code provided by the customer. */
    discountCode?: Maybe<Scalars['String']>
    /** Primary address of the customer, which is shown on the order. */
    displayAddress?: Maybe<AdminMailingAddress>
    /**
     * Financial status of the order that can be shown to the merchant.
     * This field does not capture all the possible details of an order's financial state and should only be used for display summary purposes.
     */
    displayFinancialStatus?: Maybe<AdminOrderDisplayFinancialStatus>
    /**
     * Fulfillment status for the order that can be shown to the merchant.
     * This field does not capture all the possible details of an order's fulfillment state. It should only be used for display summary purposes.
     */
    displayFulfillmentStatus: AdminOrderDisplayFulfillmentStatus
    /** Summary of each dispute associated with the order. Sorted in ascending (ASC) order by ID. */
    disputes: Array<AdminOrderDisputeSummary>
    /** List of possible fulfilments that can be made for the order (includes line items that can be partially fulfilled). */
    draftFulfillments: Array<AdminDraftFulfillment>
    /** Whether the order has had any edits applied or not. */
    edited: Scalars['Boolean']
    /** Email address provided by the customer. */
    email?: Maybe<Scalars['String']>
    /** List of internal events associated with the order. */
    events: AdminEventConnection
    /**
     * Whether there are items that can be fulfilled.
     * After an order is completely fulfilled (or completely refunded without any fulfillments) then this field returns false.
     */
    fulfillable: Scalars['Boolean']
    /** List of fulfillment orders with pagination. */
    fulfillmentOrders: AdminFulfillmentOrderConnection
    /** List of shipments for the order. */
    fulfillments: Array<AdminFulfillment>
    /** Whether the order has been paid in full. */
    fullyPaid: Scalars['Boolean']
    /** Whether the merchant added timeline comments to the order. */
    hasTimelineComment: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /**
     * First page of the online store that the customer visited before they submitted the order, for displaying to humans.
     * @deprecated Use `customerJourneySummary.lastVisit.landingPageHtml` instead
     */
    landingPageDisplayText?: Maybe<Scalars['String']>
    /**
     * First page of the online store that the customer visited before they submitted the order.
     * @deprecated Use `customerJourneySummary.lastVisit.landingPage` instead
     */
    landingPageUrl?: Maybe<Scalars['URL']>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** List of the order's line items. */
    lineItems: AdminLineItemConnection
    /** List of the order's line items after any edits. Only available on Developer Preview. */
    lineItemsMutable: AdminLineItemMutableConnection
    /**
     * If the order was processed using Shopify POS, then this is its location as provided by the merchant.
     * @deprecated Use `physicalLocation` instead
     */
    location?: Maybe<Scalars['String']>
    /** Whether the order can be edited or not. */
    merchantEditable: Scalars['Boolean']
    /** The metafield associated with the resource. */
    metafield?: Maybe<AdminMetafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: AdminMetafieldConnection
    /**
     * Unique identifier for the order that appears on the order.
     * For example, _#1000_ or _Store1001.
     * This value is not unique across multiple stores.
     */
    name: Scalars['String']
    /**
     * Net payment for the order, based on the total amount received - total amount refunded.
     * @deprecated Use `netPaymentSet` instead
     */
    netPayment: Scalars['Money']
    /** Net payment for the order, based on the total amount received - total amount refunded in shop and presentment currencies. */
    netPaymentSet: AdminMoneyBag
    /**
     * Line items that can't be fulfilled.
     * For example, because some or all of the items have been refunded, or the item is not one which can be fulfilled, such as a tip.
     * These line items would be 'lost' if you only considered the line items in draft fulfillments or fulfillments.
     */
    nonFulfillableLineItems: AdminLineItemConnection
    /** Contents of the note associated with the order. */
    note?: Maybe<Scalars['String']>
    /** Total price of the order prior to any applied edits in shop and presentment currencies. */
    originalTotalPriceSet: AdminMoneyBag
    /** The payment collection details for an order requiring additional payment. */
    paymentCollectionDetails: AdminOrderPaymentCollectionDetails
    /**
     * List of all payment gateways used for the order.
     * For example, _authorize_net_ and _Cash on Delivery (COD)_.
     */
    paymentGatewayNames: Array<Scalars['String']>
    /** Phone number provided by the customer. */
    phone?: Maybe<Scalars['String']>
    /** If the order was processed using Shopify POS, then this is its location as provided by the merchant. */
    physicalLocation?: Maybe<AdminLocation>
    /** The payment currency of the customer for this order. */
    presentmentCurrencyCode: AdminCurrencyCode
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<AdminPrivateMetafield>
    /** List of private metafields. */
    privateMetafields: AdminPrivateMetafieldConnection
    /**
     * Date and time when the order was processed.
     * When orders are imported from an app, this date and time may not match the date and time when the order was created.
     */
    processedAt: Scalars['DateTime']
    /** Publication that created the order. */
    publication?: Maybe<AdminPublication>
    /**
     * Marketing referral code from the link that the customer clicked to visit your store.
     * Supports the following URL attributes: _ref_, _source_, or _r_. For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
     * @deprecated Use `customerJourneySummary.lastVisit.referralCode` instead
     */
    referralCode?: Maybe<Scalars['String']>
    /**
     * Website that sent the customer to your online store.
     * @deprecated Use `customerJourneySummary.lastVisit.referralInfoHtml` instead
     */
    referrerDisplayText?: Maybe<Scalars['String']>
    /**
     * Webpage where the customer clicked a link that sent them to your online store.
     * For example, _Google_ or _randomblog.com/page1_.
     * @deprecated Use `customerJourneySummary.lastVisit.referrerUrl` instead
     */
    referrerUrl?: Maybe<Scalars['URL']>
    /** The difference between suggested and actual refund amounts.  A positive value indicates a difference in the merchants favor and a negative value indicates a difference in the customers favor. */
    refundDiscrepancySet: AdminMoneyBag
    /** Whether the order can be refunded. */
    refundable: Scalars['Boolean']
    /** List of refunds that have been applied to the order. */
    refunds: Array<AdminRefund>
    /** Whether any line item in the order requires physical shipping. */
    requiresShipping: Scalars['Boolean']
    /** Whether the order can be restocked. */
    restockable: Scalars['Boolean']
    /** Fraud risk level of the order. */
    riskLevel: AdminOrderRiskLevel
    /** The order risks associated with this order. */
    risks: Array<AdminOrderRisk>
    /** Mailing address for shipping provided by the customer. */
    shippingAddress?: Maybe<AdminMailingAddress>
    /** Line item that contains the shipping costs. */
    shippingLine?: Maybe<AdminShippingLine>
    /** The sum of the quantities for the line items that contribute to the order's subtotal. */
    subtotalLineItemsQuantity: Scalars['Int']
    /**
     * Subtotal of the line items and their discounts (does not contain shipping costs and shipping discounts).
     * @deprecated Use `subtotalPriceSet` instead
     */
    subtotalPrice?: Maybe<Scalars['Money']>
    /** Subtotal of the line items and their discounts (does not contain shipping costs and shipping discounts) in shop and presentment currencies. */
    subtotalPriceSet?: Maybe<AdminMoneyBag>
    /** The details of the suggested refund. This response can be used to submit a RefundCreate mutation. */
    suggestedRefund?: Maybe<AdminSuggestedRefund>
    /** A comma separated list of tags that have been added to the order. */
    tags: Array<Scalars['String']>
    /** Taxes charged for the line item. */
    taxLines: Array<AdminTaxLine>
    /** Whether taxes are included in the subtotal price of the order. */
    taxesIncluded: Scalars['Boolean']
    /**
     * Whether the order is a test.
     * Test orders are made using the Shopify Bogus Gateway or a payment provider with test mode enabled.
     */
    test: Scalars['Boolean']
    /**
     * Amount authorized for the order, that is uncaptured or undercaptured.
     * @deprecated Use `totalCapturableSet` instead
     */
    totalCapturable: Scalars['Money']
    /** Amount authorized for the order, that is uncaptured or undercaptured in shop and presentment currencies. */
    totalCapturableSet: AdminMoneyBag
    /**
     * Total amount discounted from the order (includes order-level and line item discounts).
     * @deprecated Use `totalDiscountsSet` instead
     */
    totalDiscounts?: Maybe<Scalars['Money']>
    /** Total amount discounted from the order (includes order-level and line item discounts) in shop and presentment currencies. */
    totalDiscountsSet?: Maybe<AdminMoneyBag>
    /** Total amount of money not yet authorized for the order. */
    totalOutstandingSet: AdminMoneyBag
    /**
     * Total amount of the order (includes taxes and discounts).
     * @deprecated Use `totalPriceSet` instead
     */
    totalPrice: Scalars['Money']
    /** Total amount of the order (includes taxes and discounts) in shop and presentment currencies. */
    totalPriceSet: AdminMoneyBag
    /**
     * Total amount received by the customer for the order.
     * @deprecated Use `totalReceivedSet` instead
     */
    totalReceived: Scalars['Money']
    /** Total amount received by the customer for the order in shop and presentment currencies. */
    totalReceivedSet: AdminMoneyBag
    /**
     * Total amount refunded for the order.
     * @deprecated Use `totalRefundedSet` instead
     */
    totalRefunded: Scalars['Money']
    /** Total amount refunded for the order in shop and presentment currencies. */
    totalRefundedSet: AdminMoneyBag
    /** Total amount refunded for shipping in shop and presentment currencies. */
    totalRefundedShippingSet: AdminMoneyBag
    /**
     * Total amount charged for shipping the order.
     * @deprecated Use `totalShippingPriceSet` instead
     */
    totalShippingPrice: Scalars['Money']
    /** Total amount charged for shipping the order in shop and presentment currencies. */
    totalShippingPriceSet: AdminMoneyBag
    /**
     * Total of all taxes applied to the order.
     * @deprecated Use `totalTaxSet` instead
     */
    totalTax?: Maybe<Scalars['Money']>
    /** Total of all taxes applied to the order in shop and presentment currencies. */
    totalTaxSet?: Maybe<AdminMoneyBag>
    /** Total weight (grams) of the order. */
    totalWeight?: Maybe<Scalars['UnsignedInt64']>
    /** List of all transactions associated with the order. */
    transactions: Array<AdminOrderTransaction>
    /**
     * Whether no payments have been made for the order.
     * If no payments have been made for the order, then this returns true.
     */
    unpaid: Scalars['Boolean']
    /** Date and time when the order was last modified. */
    updatedAt: Scalars['DateTime']
  }

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderDiscountApplicationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminEventSortKeys>
  query?: Maybe<Scalars['String']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderFulfillmentOrdersArgs = {
  displayable?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderFulfillmentsArgs = {
  first?: Maybe<Scalars['Int']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderLineItemsMutableArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderNonFulfillableLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderPrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderRefundsArgs = {
  first?: Maybe<Scalars['Int']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderRisksArgs = {
  first?: Maybe<Scalars['Int']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderSuggestedRefundArgs = {
  shippingAmount?: Maybe<Scalars['Money']>
  refundShipping?: Maybe<Scalars['Boolean']>
  refundLineItems?: Maybe<Array<AdminRefundLineItemInput>>
  suggestFullRefund?: Maybe<Scalars['Boolean']>
}

/** An order represents an agreement to do business between a customer and a merchant. */
export type AdminOrderTransactionsArgs = {
  first?: Maybe<Scalars['Int']>
  capturable?: Maybe<Scalars['Boolean']>
  manuallyResolvable?: Maybe<Scalars['Boolean']>
}

/** Represents the reason that the order is being canceled. Valid values are: customer, fraud, inventory, declined, other. */
export enum AdminOrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** Some other reason not listed. */
  Other = 'OTHER'
}

/** Specifies the authorized transaction to capture and the total amount to capture from it. */
export type AdminOrderCaptureInput = {
  /** The ID of the order to capture. */
  id: Scalars['ID']
  /** The ID of the authorized transaction to capture. */
  parentTransactionId: Scalars['ID']
  /** The amount to capture. */
  amount: Scalars['Money']
  /** The currency (in ISO format) that is used to capture the order. This must be the presentment currency (the currency used by the customer) and is a required field for orders where the currency and presentment currency differ. */
  currency?: Maybe<AdminCurrencyCode>
}

/** Return type for `orderCapture` mutation. */
export type AdminOrderCapturePayload = {
  __typename?: 'OrderCapturePayload'
  /** The transaction of the capture. */
  transaction?: Maybe<AdminOrderTransaction>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies an open order to close. */
export type AdminOrderCloseInput = {
  /** The ID of the order to close. */
  id: Scalars['ID']
}

/** Return type for `orderClose` mutation. */
export type AdminOrderClosePayload = {
  __typename?: 'OrderClosePayload'
  /** The closed order. */
  order?: Maybe<AdminOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminOrderConnection = {
  __typename?: 'OrderConnection'
  /** A list of edges. */
  edges: Array<AdminOrderEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Represents the order's current financial status. */
export enum AdminOrderDisplayFinancialStatus {
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED'
}

/** Represents the order's current fulfillment status. Valid values are: unfulfilled, partial, fulfilled, restocked. */
export enum AdminOrderDisplayFulfillmentStatus {
  /** Displayed as **Unfulfilled**. */
  Unfulfilled = 'UNFULFILLED',
  /** Displayed as **Partially fulfilled**. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Fulfilled**. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **Restocked**. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Pending fulfillment**. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Open**. */
  Open = 'OPEN',
  /** Displayed as **In progress**. */
  InProgress = 'IN_PROGRESS'
}

/** A summary of the important details for a dispute on an order. */
export type AdminOrderDisputeSummary = AdminNode & {
  __typename?: 'OrderDisputeSummary'
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The type that the dispute was initiated as. */
  initiatedAs: AdminDisputeType
  /** The current status of the dispute. */
  status: AdminDisputeStatus
}

export type AdminOrderEdge = {
  __typename?: 'OrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderEdge. */
  node: AdminOrder
}

/** Return type for `orderEditAddCustomItem` mutation. */
export type AdminOrderEditAddCustomItemPayload = {
  __typename?: 'OrderEditAddCustomItemPayload'
  /** The added line item. */
  calculatedLineItem?: Maybe<AdminCalculatedLineItem>
  /** An order with the edits calculated. */
  calculatedOrder?: Maybe<AdminCalculatedOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `orderEditAddVariant` mutation. */
export type AdminOrderEditAddVariantPayload = {
  __typename?: 'OrderEditAddVariantPayload'
  /** The added line item. */
  calculatedLineItem?: Maybe<AdminCalculatedLineItem>
  /** An order with the edits calculated. */
  calculatedOrder?: Maybe<AdminCalculatedOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `orderEditBegin` mutation. */
export type AdminOrderEditBeginPayload = {
  __typename?: 'OrderEditBeginPayload'
  /** The order that will be edited. */
  calculatedOrder?: Maybe<AdminCalculatedOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `orderEditCommit` mutation. */
export type AdminOrderEditCommitPayload = {
  __typename?: 'OrderEditCommitPayload'
  /** The order with changes applied. */
  order?: Maybe<AdminOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `orderEditSetQuantity` mutation. */
export type AdminOrderEditSetQuantityPayload = {
  __typename?: 'OrderEditSetQuantityPayload'
  /** The line item with changes calculated. */
  calculatedLineItem?: Maybe<AdminCalculatedLineItem>
  /** An order with the edits calculated. */
  calculatedOrder?: Maybe<AdminCalculatedOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the information to be updated on the requested order. */
export type AdminOrderInput = {
  /** The email address associated with the order. */
  email?: Maybe<Scalars['String']>
  /** The ID of the order to update. */
  id: Scalars['ID']
  /** The order note. */
  note?: Maybe<Scalars['String']>
  /** A comma separated list of tags that have been added to the order. */
  tags?: Maybe<Array<Scalars['String']>>
  /** The shipping address associated with the order. */
  shippingAddress?: Maybe<AdminMailingAddressInput>
  /** Custom information to add to the order, represented as a key value pair. Also referred to as note attributes. */
  customAttributes?: Maybe<Array<AdminAttributeInput>>
  /** The metafields to associate with this order. */
  metafields?: Maybe<Array<AdminMetafieldInput>>
}

/** Specifies the order to mark as paid. */
export type AdminOrderMarkAsPaidInput = {
  /** The ID of the order to mark as paid. */
  id: Scalars['ID']
}

/** Return type for `orderMarkAsPaid` mutation. */
export type AdminOrderMarkAsPaidPayload = {
  __typename?: 'OrderMarkAsPaidPayload'
  /** The order marked as paid. */
  order?: Maybe<AdminOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies a closed order to open. */
export type AdminOrderOpenInput = {
  /** The ID of the order to open. */
  id: Scalars['ID']
}

/** Return type for `orderOpen` mutation. */
export type AdminOrderOpenPayload = {
  __typename?: 'OrderOpenPayload'
  /** The opened order. */
  order?: Maybe<AdminOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The payment collection details for an order requiring additional payment. */
export type AdminOrderPaymentCollectionDetails = {
  __typename?: 'OrderPaymentCollectionDetails'
  /** URL allowing additional payments to be collected on the order. */
  additionalPaymentCollectionUrl?: Maybe<Scalars['URL']>
}

/** Represents a fraud check on an order. */
export type AdminOrderRisk = {
  __typename?: 'OrderRisk'
  /** Whether the risk level is shown in the Shopify admin. If false, then this order risk is ignored when Shopify determines the overall risk level for the order. */
  display: Scalars['Boolean']
  /**
   * The likelihood that an order is fraudulent, based on this order risk.
   *
   * The level can be set by Shopify risk analysis or by an app.
   */
  level?: Maybe<AdminOrderRiskLevel>
  /** The risk message that's shown to the merchant in the Shopify admin. */
  message?: Maybe<Scalars['String']>
}

/** The likelihood that an order is fraudulent. */
export enum AdminOrderRiskLevel {
  /** There is a low level of risk that this order is fraudulent. */
  Low = 'LOW',
  /** There is a medium level of risk that this order is fraudulent. */
  Medium = 'MEDIUM',
  /** There is a high level of risk that this order is fraudulent. */
  High = 'HIGH'
}

/** The set of valid sort keys for the Order query. */
export enum AdminOrderSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `customer_name` value. */
  CustomerName = 'CUSTOMER_NAME',
  /** Sort by the `financial_status` value. */
  FinancialStatus = 'FINANCIAL_STATUS',
  /** Sort by the `fulfillment_status` value. */
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  /** Sort by the `order_number` value. */
  OrderNumber = 'ORDER_NUMBER',
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** A change that has been applied to an order. */
export type AdminOrderStagedChange =
  | AdminOrderStagedChangeAddCustomItem
  | AdminOrderStagedChangeAddVariant
  | AdminOrderStagedChangeDecrementItem
  | AdminOrderStagedChangeIncrementItem

/** A newly created custom item. */
export type AdminOrderStagedChangeAddCustomItem = {
  __typename?: 'OrderStagedChangeAddCustomItem'
  /** The price of an individual item without any discounts applied. */
  originalUnitPrice: AdminMoneyV2
  /** The number of items. */
  quantity: Scalars['Int']
  /** The title of the item. */
  title: Scalars['String']
}

/** A new item created from an existing product variant. */
export type AdminOrderStagedChangeAddVariant = {
  __typename?: 'OrderStagedChangeAddVariant'
  /** The number of items. */
  quantity: Scalars['Int']
  /** The product variant of the added item. */
  variant: AdminProductVariant
}

export type AdminOrderStagedChangeConnection = {
  __typename?: 'OrderStagedChangeConnection'
  /** A list of edges. */
  edges: Array<AdminOrderStagedChangeEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** An removal of items from an existing line item on the order. */
export type AdminOrderStagedChangeDecrementItem = {
  __typename?: 'OrderStagedChangeDecrementItem'
  /** The number of items removed. */
  delta: Scalars['Int']
  /** The original line item. */
  lineItem: AdminLineItem
  /** The intention to restock the removed items. */
  restock: Scalars['Boolean']
}

export type AdminOrderStagedChangeEdge = {
  __typename?: 'OrderStagedChangeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderStagedChangeEdge. */
  node: AdminOrderStagedChange
}

/** An addition of items to an existing line item on the order. */
export type AdminOrderStagedChangeIncrementItem = {
  __typename?: 'OrderStagedChangeIncrementItem'
  /** The number of items added. */
  delta: Scalars['Int']
  /** The original line item. */
  lineItem: AdminLineItem
}

/** A transaction represents an exchange of money as part of an order. */
export type AdminOrderTransaction = AdminNode & {
  __typename?: 'OrderTransaction'
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']>
  /**
   * The amount of money.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money']
  /** The amount and currency of the transaction in shop and presentment currencies. */
  amountSet: AdminMoneyBag
  /**
   * The amount and currency of the transaction.
   * @deprecated Use `amountSet` instead
   */
  amountV2: AdminMoneyV2
  /** Authorization code associated with the transaction. */
  authorizationCode?: Maybe<Scalars['String']>
  /** Date and time when the transaction was created. */
  createdAt: Scalars['DateTime']
  /** A standardized error code, independent of the payment provider. */
  errorCode?: Maybe<AdminOrderTransactionErrorCode>
  /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']>
  /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The kind of transaction. */
  kind: AdminOrderTransactionKind
  /** Whether the transaction can be manually captured. */
  manuallyCapturable: Scalars['Boolean']
  /**
   * Specifies the available amount to refund on the gateway. Only available within SuggestedRefund.
   * @deprecated Use `maximumRefundableV2` instead
   */
  maximumRefundable?: Maybe<Scalars['Money']>
  /**
   * Specifies the available amount with currency to refund on the gateway.
   * Only available within SuggestedRefund.
   */
  maximumRefundableV2?: Maybe<AdminMoneyV2>
  /** The associated order. */
  order?: Maybe<AdminOrder>
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<AdminOrderTransaction>
  /** Specifies the payment icon to display for this transaction. */
  paymentIcon?: Maybe<AdminImage>
  /**
   * Specifies the credit card company used to pay for this transaction.
   * @deprecated Use `paymentIcon` instead
   */
  paymentMethod?: Maybe<AdminPaymentMethods>
  /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars['DateTime']>
  /**
   * A transaction receipt attached to the transaction by the gateway.
   * The value of this field depends on which gateway processed the transaction.
   * @deprecated Use `receiptJson` instead
   */
  receipt?: Maybe<Scalars['String']>
  /** The status of this transaction. */
  status: AdminOrderTransactionStatus
  /** Whether the transaction is a test transaction. */
  test: Scalars['Boolean']
  /**
   * Specifies the available amount to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
   * @deprecated Use `totalUnsettledSet` instead
   */
  totalUnsettled?: Maybe<Scalars['Money']>
  /**
   * Specifies the available amount with currency to capture on the gateway in shop and presentment currencies.
   * Only available when an amount is capturable or manually mark as paid.
   */
  totalUnsettledSet?: Maybe<AdminMoneyBag>
  /**
   * Specifies the available amount with currency to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
   * @deprecated Use `totalUnsettledSet` instead
   */
  totalUnsettledV2?: Maybe<AdminMoneyV2>
}

/** A transaction represents an exchange of money as part of an order. */
export type AdminOrderTransactionPaymentIconArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

export type AdminOrderTransactionConnection = {
  __typename?: 'OrderTransactionConnection'
  /** A list of edges. */
  edges: Array<AdminOrderTransactionEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminOrderTransactionEdge = {
  __typename?: 'OrderTransactionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderTransactionEdge. */
  node: AdminOrderTransaction
}

/** A standardized error code, independent of the payment provider. */
export enum AdminOrderTransactionErrorCode {
  /** The card number is incorrect. */
  IncorrectNumber = 'INCORRECT_NUMBER',
  /** The format of the card number is incorrect. */
  InvalidNumber = 'INVALID_NUMBER',
  /** The format of the expiry date is incorrect. */
  InvalidExpiryDate = 'INVALID_EXPIRY_DATE',
  /** The format of the CVC is incorrect. */
  InvalidCvc = 'INVALID_CVC',
  /** The card is expired. */
  ExpiredCard = 'EXPIRED_CARD',
  /** The CVC does not match the card number. */
  IncorrectCvc = 'INCORRECT_CVC',
  /** The ZIP or postal code does not match the card number. */
  IncorrectZip = 'INCORRECT_ZIP',
  /** The address does not match the card number. */
  IncorrectAddress = 'INCORRECT_ADDRESS',
  /** The entered PIN is incorrect. */
  IncorrectPin = 'INCORRECT_PIN',
  /** The card was declined. */
  CardDeclined = 'CARD_DECLINED',
  /** There was an error while processing the payment. */
  ProcessingError = 'PROCESSING_ERROR',
  /** Call the card issuer. */
  CallIssuer = 'CALL_ISSUER',
  /** The card has been reported as lost or stolen, and the card issuer has requested that the merchant keep the card and call the number on the back. */
  PickUpCard = 'PICK_UP_CARD',
  /** There is an error in the gateway or merchant configuration. */
  ConfigError = 'CONFIG_ERROR',
  /** A real card was used but the gateway was in test mode. */
  TestModeLiveCard = 'TEST_MODE_LIVE_CARD',
  /** The gateway or merchant configuration doesn't support a feature, such as network tokenization. */
  UnsupportedFeature = 'UNSUPPORTED_FEATURE',
  /** There was an unknown error with processing the payment. */
  GenericError = 'GENERIC_ERROR',
  /** The payment method is not available in the customer's country. */
  InvalidCountry = 'INVALID_COUNTRY',
  /** The amount is either too high or too low for the provider. */
  InvalidAmount = 'INVALID_AMOUNT',
  /** The payment method is momentarily unavailable. */
  PaymentMethodUnavailable = 'PAYMENT_METHOD_UNAVAILABLE',
  /** The payment method was invalid. */
  AmazonPaymentsInvalidPaymentMethod = 'AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD',
  /** The maximum amount has been captured. */
  AmazonPaymentsMaxAmountCharged = 'AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED',
  /** The maximum amount has been refunded. */
  AmazonPaymentsMaxAmountRefunded = 'AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED',
  /** The maximum of 10 authorizations has been captured for an order. */
  AmazonPaymentsMaxAuthorizationsCaptured = 'AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED',
  /** The maximum of 10 refunds has been processed for an order. */
  AmazonPaymentsMaxRefundsProcessed = 'AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED',
  /** The order was canceled, which canceled all open authorizations. */
  AmazonPaymentsOrderReferenceCanceled = 'AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED',
  /** The order was not confirmed within three hours. */
  AmazonPaymentsStale = 'AMAZON_PAYMENTS_STALE'
}

/** Specifies the information needed to create an order transaction. */
export type AdminOrderTransactionInput = {
  /** The amount of money for this transaction. */
  amount: Scalars['Money']
  /** The payment gateway to use for this transaction. */
  gateway: Scalars['String']
  /** The kind of transaction. */
  kind: AdminOrderTransactionKind
  /** The ID of the order associated with the transaction. */
  orderId: Scalars['ID']
  /** The ID of the optional parent transaction, for example the authorization of a capture. */
  parentId?: Maybe<Scalars['ID']>
}

/** The different kinds of order transactions. */
export enum AdminOrderTransactionKind {
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE',
  /** A transfer of the money that was reserved during the authorization stage. */
  Capture = 'CAPTURE',
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   */
  Authorization = 'AUTHORIZATION',
  /** A cancellation of a pending authorization or capture. */
  Void = 'VOID',
  /**
   * A partial or full return of captured funds to the cardholder.
   * A refund can happen only after a capture is processed.
   */
  Refund = 'REFUND',
  /** Money returned to the customer when they have paid too much. */
  Change = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /** A suggested refund transaction that can be used to create a refund. */
  SuggestedRefund = 'SUGGESTED_REFUND'
}

/** Transaction status' describe the status of a transaction. */
export enum AdminOrderTransactionStatus {
  /** The transaction succeeded. */
  Success = 'SUCCESS',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** There was an error while processing the transaction. */
  Error = 'ERROR',
  /** Awaiting a response. */
  AwaitingResponse = 'AWAITING_RESPONSE',
  /** The transaction status is unknown. */
  Unknown = 'UNKNOWN'
}

/** Return type for `orderUpdate` mutation. */
export type AdminOrderUpdatePayload = {
  __typename?: 'OrderUpdatePayload'
  /** The updated order. */
  order?: Maybe<AdminOrder>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Information about pagination in a connection. */
export type AdminPageInfo = {
  __typename?: 'PageInfo'
  /** Indicates if there are more pages to fetch. */
  hasNextPage: Scalars['Boolean']
  /** Indicates if there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']
}

/** List of payment methods used in Shopify. */
export enum AdminPaymentMethods {
  Visa = 'VISA',
  Mastercard = 'MASTERCARD',
  Discover = 'DISCOVER',
  AmericanExpress = 'AMERICAN_EXPRESS',
  DinersClub = 'DINERS_CLUB',
  Jcb = 'JCB',
  Dankort = 'DANKORT',
  Maestro = 'MAESTRO',
  Forbrugsforeningen = 'FORBRUGSFORENINGEN',
  Paypal = 'PAYPAL',
  Bogus = 'BOGUS',
  Bitcoin = 'BITCOIN',
  Litecoin = 'LITECOIN',
  Dogecoin = 'DOGECOIN'
}

/** Settings related to payments. */
export type AdminPaymentSettings = {
  __typename?: 'PaymentSettings'
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<AdminDigitalWallet>
}

/** Specifies the percentage value of a price reduction. */
export type AdminPriceReductionInput = {
  /** Percentage value of a price reduction. */
  percentage: Scalars['Int']
}

/** Price rules are a set of conditions, including entitlements and prerequisites, that must be met in order for a discount code to apply. */
export type AdminPriceRule = AdminNode &
  AdminCommentEventSubject &
  AdminLegacyInteroperability &
  AdminHasEvents & {
    __typename?: 'PriceRule'
    /** The maximum number of times that the price rule can be allocated onto an order. */
    allocationLimit?: Maybe<Scalars['Int']>
    /** The method by which the price rule's value is allocated to its entitled items. */
    allocationMethod: AdminPriceRuleAllocationMethod
    /** The application that created the price rule. */
    app?: Maybe<AdminApp>
    /** The date and time when the price rule was created. */
    createdAt: Scalars['DateTime']
    /** The customers that can use this price rule. */
    customerSelection: AdminPriceRuleCustomerSelection
    /** List of the price rule's discount codes. */
    discountCodes: AdminPriceRuleDiscountCodeConnection
    /** How many discount codes associated with the price rule. */
    discountCodesCount: Scalars['Int']
    /** The date and time when the price rule ends. For open-ended price rules, use `null`. */
    endsAt?: Maybe<Scalars['DateTime']>
    /**
     * Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items.
     * @deprecated Use `prerequisiteToEntitlementQuantityRatio` instead
     */
    entitlementToPrerequisiteQuantityRatio?: Maybe<AdminPriceRuleEntitlementToPrerequisiteQuantityRatio>
    /** The paginated list of events associated with the price rule. */
    events: AdminEventConnection
    /** A list of the price rule's features. */
    features: Array<AdminPriceRuleFeature>
    /** Indicates whether there are any timeline comments on the price rule. */
    hasTimelineComment: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The items to which the price rule applies. */
    itemEntitlements: AdminPriceRuleItemEntitlements
    /** The items required for the price rule to be applicable. */
    itemPrerequisites: AdminPriceRuleLineItemPrerequisites
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** Whether the price rule can be applied only once per customer. */
    oncePerCustomer: Scalars['Boolean']
    /** The number of the entitled items must fall within this range for the price rule to be applicable. */
    prerequisiteQuantityRange?: Maybe<AdminPriceRuleQuantityRange>
    /** The shipping cost must fall within this range for the price rule to be applicable. */
    prerequisiteShippingPriceRange?: Maybe<AdminPriceRuleMoneyRange>
    /** The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable. */
    prerequisiteSubtotalRange?: Maybe<AdminPriceRuleMoneyRange>
    /** Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items. */
    prerequisiteToEntitlementQuantityRatio?: Maybe<AdminPriceRulePrerequisiteToEntitlementQuantityRatio>
    /** URLs that can be used to share the discount. */
    shareableUrls: Array<AdminPriceRuleShareableUrl>
    /** The shipping lines to which the price rule applies. */
    shippingEntitlements: AdminPriceRuleShippingLineEntitlements
    /** The date and time when the price rule starts. */
    startsAt: Scalars['DateTime']
    /** The status of the price rule. */
    status: AdminPriceRuleStatus
    /** A detailed summary of the price rule. */
    summary?: Maybe<Scalars['String']>
    /** The type of lines (line_item or shipping_line) to which the price rule applies. */
    target: AdminPriceRuleTarget
    /** The title of the price rule. */
    title: Scalars['String']
    /** The total sales from orders where the price rule was used. */
    totalSales?: Maybe<AdminMoneyV2>
    /**
     * A list of the price rule's features.
     * @deprecated Use `features` instead
     */
    traits: Array<AdminPriceRuleTrait>
    /** The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count. */
    usageCount: Scalars['Int']
    /** The maximum number of times that the price rule can be used in total. */
    usageLimit?: Maybe<Scalars['Int']>
    /** A time period during which a price rule is applicable. */
    validityPeriod: AdminPriceRuleValidityPeriod
    /**
     * The value of the price rule.
     * @deprecated Use `valueV2` instead
     */
    value: AdminPriceRuleValue
    /** The value of the price rule. */
    valueV2: AdminPricingValue
  }

/** Price rules are a set of conditions, including entitlements and prerequisites, that must be met in order for a discount code to apply. */
export type AdminPriceRuleDiscountCodesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminDiscountCodeSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** Price rules are a set of conditions, including entitlements and prerequisites, that must be met in order for a discount code to apply. */
export type AdminPriceRuleEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminEventSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Return type for `priceRuleActivate` mutation. */
export type AdminPriceRuleActivatePayload = {
  __typename?: 'PriceRuleActivatePayload'
  /** The activated price rule. */
  priceRule?: Maybe<AdminPriceRule>
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<AdminPriceRuleUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** The method by which the price rule's value is allocated to its entitled items. */
export enum AdminPriceRuleAllocationMethod {
  /** The value will be applied to each of the entitled items. */
  Each = 'EACH',
  /** The value will be applied once across the entitled items. */
  Across = 'ACROSS'
}

export type AdminPriceRuleConnection = {
  __typename?: 'PriceRuleConnection'
  /** A list of edges. */
  edges: Array<AdminPriceRuleEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `priceRuleCreate` mutation. */
export type AdminPriceRuleCreatePayload = {
  __typename?: 'PriceRuleCreatePayload'
  /** The newly created price rule. */
  priceRule?: Maybe<AdminPriceRule>
  /** The newly created discount code. */
  priceRuleDiscountCode?: Maybe<AdminPriceRuleDiscountCode>
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<AdminPriceRuleUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** A selection of customers for whom the price rule applies. */
export type AdminPriceRuleCustomerSelection = {
  __typename?: 'PriceRuleCustomerSelection'
  /** List of customers to whom the price rule applies. */
  customers: AdminCustomerConnection
  /** Whether the price rule applies to all customers. */
  forAllCustomers: Scalars['Boolean']
  /** A list of customer saved searches that contain the customers who can use the price rule. */
  savedSearches: Array<AdminSavedSearch>
}

/** A selection of customers for whom the price rule applies. */
export type AdminPriceRuleCustomerSelectionCustomersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCustomerSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** Specifies the input fields to update a price rule customer selection. */
export type AdminPriceRuleCustomerSelectionInput = {
  /** Whether the price rule applies to all customers. */
  forAllCustomers?: Maybe<Scalars['Boolean']>
  /** List of customer saved searches that contain the customers to whom the price rule applies. No single customer IDs may be present. */
  savedSearchIds?: Maybe<Array<Scalars['ID']>>
  /** List of customers to add to the current list of customers to whom the price rule applies. `savedSearchIds` must be empty. */
  customerIdsToAdd?: Maybe<Array<Scalars['ID']>>
  /** A list of customers to remove from the current list of customers to whom the price rule applies. */
  customerIdsToRemove?: Maybe<Array<Scalars['ID']>>
}

/** Return type for `priceRuleDeactivate` mutation. */
export type AdminPriceRuleDeactivatePayload = {
  __typename?: 'PriceRuleDeactivatePayload'
  /** The deactivated price rule. */
  priceRule?: Maybe<AdminPriceRule>
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<AdminPriceRuleUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** Return type for `priceRuleDelete` mutation. */
export type AdminPriceRuleDeletePayload = {
  __typename?: 'PriceRuleDeletePayload'
  /** The id price of the deleted price rule. */
  deletedPriceRuleId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<AdminPriceRuleUserError>
  /** The shop of the deleted price rule. */
  shop: AdminShop
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** A discount code of a price rule. */
export type AdminPriceRuleDiscountCode = AdminNode & {
  __typename?: 'PriceRuleDiscountCode'
  /** The application that created the discount code. */
  app?: Maybe<AdminApp>
  /** The code to use the discount. */
  code: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count. */
  usageCount: Scalars['Int']
}

export type AdminPriceRuleDiscountCodeConnection = {
  __typename?: 'PriceRuleDiscountCodeConnection'
  /** A list of edges. */
  edges: Array<AdminPriceRuleDiscountCodeEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `priceRuleDiscountCodeCreate` mutation. */
export type AdminPriceRuleDiscountCodeCreatePayload = {
  __typename?: 'PriceRuleDiscountCodeCreatePayload'
  /** The updated price rule. */
  priceRule?: Maybe<AdminPriceRule>
  /** The newly created discount code. */
  priceRuleDiscountCode?: Maybe<AdminPriceRuleDiscountCode>
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<AdminPriceRuleUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

export type AdminPriceRuleDiscountCodeEdge = {
  __typename?: 'PriceRuleDiscountCodeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PriceRuleDiscountCodeEdge. */
  node: AdminPriceRuleDiscountCode
}

/** Specifies the input fields to manipulate a discount code. */
export type AdminPriceRuleDiscountCodeInput = {
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>
}

/** Return type for `priceRuleDiscountCodeUpdate` mutation. */
export type AdminPriceRuleDiscountCodeUpdatePayload = {
  __typename?: 'PriceRuleDiscountCodeUpdatePayload'
  /** The updated price rule. */
  priceRule?: Maybe<AdminPriceRule>
  /** The updated discount code. */
  priceRuleDiscountCode?: Maybe<AdminPriceRuleDiscountCode>
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<AdminPriceRuleUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

export type AdminPriceRuleEdge = {
  __typename?: 'PriceRuleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PriceRuleEdge. */
  node: AdminPriceRule
}

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type AdminPriceRuleEntitlementToPrerequisiteQuantityRatio = {
  __typename?: 'PriceRuleEntitlementToPrerequisiteQuantityRatio'
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity: Scalars['Int']
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity: Scalars['Int']
}

/** Specifies the quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type AdminPriceRuleEntitlementToPrerequisiteQuantityRatioInput = {
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity?: Maybe<Scalars['Int']>
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity?: Maybe<Scalars['Int']>
}

/** Possible error codes that could be returned by a price rule mutation. */
export enum AdminPriceRuleErrorCode {
  /** Input value is blank. */
  Blank = 'BLANK',
  /** Input value should be equal to allowed value. */
  EqualTo = 'EQUAL_TO',
  /** Input value should be greater than minimum allowed value. */
  GreaterThan = 'GREATER_THAN',
  /** Input value should be greater than or equal to minimum allowed value. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Input value should be less than maximum allowed value. */
  LessThan = 'LESS_THAN',
  /** Input value should be less or equal to maximum allowed value. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Input value is already taken. */
  Taken = 'TAKEN',
  /** Input value is too long. */
  TooLong = 'TOO_LONG',
  /** Input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unexpected internal error happened. */
  InternalError = 'INTERNAL_ERROR',
  /** Too many arguments provided. */
  TooManyArguments = 'TOO_MANY_ARGUMENTS',
  /** Missing a required argument. */
  MissingArgument = 'MISSING_ARGUMENT',
  /** Duplicate customer prerequisite id present. */
  CustomerPrerequisiteDuplicate = 'CUSTOMER_PREREQUISITE_DUPLICATE',
  CannotEntitleCollectionsWithProductsOrVariants = 'CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS',
  ItemEntitlementInvalidType = 'ITEM_ENTITLEMENT_INVALID_TYPE',
  ItemEntitlementsDuplicateCollection = 'ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION',
  ItemEntitlementsDuplicateProduct = 'ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT',
  ItemEntitlementsDuplicateVariant = 'ITEM_ENTITLEMENTS_DUPLICATE_VARIANT',
  ItemEntitlementsExceededMaxCollection = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION',
  ItemEntitlementsExceededMaxProduct = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT',
  ItemEntitlementsExceededMaxVariant = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT',
  ItemEntitlementsInvalidCollection = 'ITEM_ENTITLEMENTS_INVALID_COLLECTION',
  ItemEntitlementsInvalidProduct = 'ITEM_ENTITLEMENTS_INVALID_PRODUCT',
  ItemEntitlementsInvalidTargetTypeOrSelection = 'ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION',
  ItemEntitlementsInvalidVariant = 'ITEM_ENTITLEMENTS_INVALID_VARIANT',
  ItemEntitlementsMissing = 'ITEM_ENTITLEMENTS_MISSING',
  VariantAlreadyEntitledThroughProduct = 'VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT',
  CannotPrerequisiteCollectionWithProductOrVariants = 'CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS',
  ItemPrerequisitesDuplicateCollection = 'ITEM_PREREQUISITES_DUPLICATE_COLLECTION',
  ItemPrerequisitesDuplicateProduct = 'ITEM_PREREQUISITES_DUPLICATE_PRODUCT',
  ItemPrerequisitesDuplicateVariant = 'ITEM_PREREQUISITES_DUPLICATE_VARIANT',
  ItemPrerequisitesExceededMax = 'ITEM_PREREQUISITES_EXCEEDED_MAX',
  ItemPrerequisitesInvalidCollection = 'ITEM_PREREQUISITES_INVALID_COLLECTION',
  ItemPrerequisitesInvalidProduct = 'ITEM_PREREQUISITES_INVALID_PRODUCT',
  ItemPrerequisitesInvalidType = 'ITEM_PREREQUISITES_INVALID_TYPE',
  ItemPrerequisitesInvalidVariant = 'ITEM_PREREQUISITES_INVALID_VARIANT',
  ItemPrerequisitesMissing = 'ITEM_PREREQUISITES_MISSING',
  ItemPrerequisitesMustBeEmpty = 'ITEM_PREREQUISITES_MUST_BE_EMPTY',
  InvalidTargetTypePrerequisiteShippingPriceRange = 'INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE',
  ShippingEntitlementsDuplicateCountry = 'SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY',
  ShippingEntitlementsExceededMax = 'SHIPPING_ENTITLEMENTS_EXCEEDED_MAX',
  ShippingEntitlementsInvalidCountry = 'SHIPPING_ENTITLEMENTS_INVALID_COUNTRY',
  ShippingEntitlementsInvalidTargetTypeOrSelection = 'SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION',
  ShippingEntitlementsMissing = 'SHIPPING_ENTITLEMENTS_MISSING',
  ShippingEntitlementsUnsupportedDestinationType = 'SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE',
  BothCustomerAndSavedSearchPrerequisitesSelected = 'BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED',
  CustomerPrerequisitesExceededMax = 'CUSTOMER_PREREQUISITES_EXCEEDED_MAX',
  CustomerPrerequisitesInvalidSelection = 'CUSTOMER_PREREQUISITES_INVALID_SELECTION',
  CustomerPrerequisitesMissing = 'CUSTOMER_PREREQUISITES_MISSING',
  CustomerSavedSearchDuplicate = 'CUSTOMER_SAVED_SEARCH_DUPLICATE',
  CustomerSavedSearchExceededMax = 'CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX',
  CustomerSavedSearchInvalid = 'CUSTOMER_SAVED_SEARCH_INVALID',
  DiscountCodeDuplicate = 'DISCOUNT_CODE_DUPLICATE',
  /** Exceeds maximum number allowed. */
  ExceededMax = 'EXCEEDED_MAX',
  BogoInvalidTargetSelection = 'BOGO_INVALID_TARGET_SELECTION',
  BogoInvalidTargetType = 'BOGO_INVALID_TARGET_TYPE',
  BogoInvalidValueType = 'BOGO_INVALID_VALUE_TYPE',
  /** Allocation limit can only be set on buy one get one type discounts. */
  PriceRuleAllocationLimitOnNonBogo = 'PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO',
  /** Allocation limit must be a non zero positive number. */
  PriceRuleAllocationLimitIsZero = 'PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO',
  /** Number of discount codes in the shop has reached its limit. */
  PriceRuleExceededMaxDiscountCode = 'PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE',
  /** Number of discounts in the shop has reached its limit. */
  ShopExceededMaxPriceRules = 'SHOP_EXCEEDED_MAX_PRICE_RULES',
  /** Discount end date must be after the start date. */
  EndDateBeforeStartDate = 'END_DATE_BEFORE_START_DATE',
  /** Percentage value must be between 0 and -100. */
  PriceRulePercentageValueOutsideRange = 'PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE',
  /** Only one of minimum subtotal or minimum quantity condition can be defined. */
  PrerequisiteSubtotalAndQuantityRangeBothPresent = 'PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT',
  /** Allocation method must be "across" for the provided target selection. */
  AllocationMethodMustBeAcrossForGivenTargetSelection = 'ALLOCATION_METHOD_MUST_BE_ACROSS_FOR_GIVEN_TARGET_SELECTION'
}

/** A list of features used by the price rule. */
export enum AdminPriceRuleFeature {
  /** The price rule supports quantity BXGY discounts. */
  BuyOneGetOne = 'BUY_ONE_GET_ONE',
  /** The price rule supports BXGY discounts using custom allocation limit. */
  BuyOneGetOneWithAllocationLimit = 'BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT',
  /** The price rule supports bulk discounts. */
  Bulk = 'BULK',
  /** The price rule supports specific customers. */
  SpecificCustomers = 'SPECIFIC_CUSTOMERS',
  /** The price rule supports quantity discounts. */
  QuantityDiscounts = 'QUANTITY_DISCOUNTS'
}

/** The value of a fixed amount price rule. */
export type AdminPriceRuleFixedAmountValue = {
  __typename?: 'PriceRuleFixedAmountValue'
  /** The monetary value of the price rule. */
  amount: Scalars['Money']
}

/** Specifies the input fields to manipulate a price rule. */
export type AdminPriceRuleInput = {
  /** PriceRuleValidityPeriod for the price rule. */
  validityPeriod?: Maybe<AdminPriceRuleValidityPeriodInput>
  /** Whether the price rule can be applied only once per customer. */
  oncePerCustomer?: Maybe<Scalars['Boolean']>
  /** The customers that can use this price rule. */
  customerSelection?: Maybe<AdminPriceRuleCustomerSelectionInput>
  /** The maximum number of times that the price rule can be used in total. */
  usageLimit?: Maybe<Scalars['Int']>
  /** Title of the price rule. */
  title?: Maybe<Scalars['String']>
  /** The maximum number of times that the price rule can be allocated onto an order. */
  allocationLimit?: Maybe<Scalars['Int']>
  /** The method by which the price rule's value is allocated to its entitled items. */
  allocationMethod?: Maybe<AdminPriceRuleAllocationMethod>
  /** The value of the price rule. */
  value?: Maybe<AdminPriceRuleValueInput>
  /** The type of lines (line_item or shipping_line) to which the price rule applies. */
  target?: Maybe<AdminPriceRuleTarget>
  /** The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable. */
  prerequisiteSubtotalRange?: Maybe<AdminPriceRuleMoneyRangeInput>
  /** The number of the entitled items must fall within this range for the price rule to be applicable. */
  prerequisiteQuantityRange?: Maybe<AdminPriceRuleQuantityRangeInput>
  /** The shipping cost must fall within this range for the price rule to be applicable. */
  prerequisiteShippingPriceRange?: Maybe<AdminPriceRuleMoneyRangeInput>
  /** The items to which the price rule applies. */
  itemEntitlements?: Maybe<AdminPriceRuleItemEntitlementsInput>
  /** The items required for the price rule to be applicable. */
  itemPrerequisites?: Maybe<AdminPriceRuleItemPrerequisitesInput>
  /** The shipping lines to which the price rule applies. */
  shippingEntitlements?: Maybe<AdminPriceRuleShippingEntitlementsInput>
  /** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. This argument is deprecated: Use `prerequisiteToEntitlementQuantityRatio` instead. */
  entitlementToPrerequisiteQuantityRatio?: Maybe<AdminPriceRuleEntitlementToPrerequisiteQuantityRatioInput>
  /** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
  prerequisiteToEntitlementQuantityRatio?: Maybe<AdminPriceRulePrerequisiteToEntitlementQuantityRatioInput>
}

/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
export type AdminPriceRuleItemEntitlements = {
  __typename?: 'PriceRuleItemEntitlements'
  /** The collections to which the price rule applies. */
  collections: AdminCollectionConnection
  /** The product variants to which the price rule applies. */
  productVariants: AdminProductVariantConnection
  /** The products to which the price rule applies. */
  products: AdminProductConnection
  /** Whether the price rule applies to all line items. */
  targetAllLineItems: Scalars['Boolean']
}

/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
export type AdminPriceRuleItemEntitlementsCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
export type AdminPriceRuleItemEntitlementsProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
export type AdminPriceRuleItemEntitlementsProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Specifies the input fields to update a price rule line item entitlement. */
export type AdminPriceRuleItemEntitlementsInput = {
  /** Whether the price rule applies to all items. */
  targetAllLineItems?: Maybe<Scalars['Boolean']>
  /** The products to which the price rule applies. */
  productIds?: Maybe<Array<Scalars['ID']>>
  /** The product variants to which the price rule applies. */
  productVariantIds?: Maybe<Array<Scalars['ID']>>
  /** The collections to which the price rule applies. */
  collectionIds?: Maybe<Array<Scalars['ID']>>
}

/** Specifies the input fields to update a price rule's item prerequisites. */
export type AdminPriceRuleItemPrerequisitesInput = {
  /** The products needed for the price rule to be applied. */
  productIds?: Maybe<Array<Scalars['ID']>>
  /** The product variants needed for the price rule to be applied. */
  productVariantIds?: Maybe<Array<Scalars['ID']>>
  /** The collections needed for the price rule to be applied. */
  collectionIds?: Maybe<Array<Scalars['ID']>>
}

/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
export type AdminPriceRuleLineItemPrerequisites = {
  __typename?: 'PriceRuleLineItemPrerequisites'
  /** The collections required for the price rule to be applicable. */
  collections: AdminCollectionConnection
  /** The product variants required for the price rule to be applicable. */
  productVariants: AdminProductVariantConnection
  /** The products required for the price rule to be applicable. */
  products: AdminProductConnection
}

/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
export type AdminPriceRuleLineItemPrerequisitesCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
export type AdminPriceRuleLineItemPrerequisitesProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
export type AdminPriceRuleLineItemPrerequisitesProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A money range within which the price rule is applicable. */
export type AdminPriceRuleMoneyRange = {
  __typename?: 'PriceRuleMoneyRange'
  /** The lower bound of the money range. */
  greaterThan?: Maybe<Scalars['Money']>
  /** The lower bound or equal of the money range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Money']>
  /** The upper bound of the money range. */
  lessThan?: Maybe<Scalars['Money']>
  /** The upper bound or equal of the money range. */
  lessThanOrEqualTo?: Maybe<Scalars['Money']>
}

/** Specifies the input fields to update the money range within which the price rule is applicable. */
export type AdminPriceRuleMoneyRangeInput = {
  /** The upper bound of the money range. */
  lessThan?: Maybe<Scalars['Money']>
  /** The upper or equal bound of the money range. */
  lessThanOrEqualTo?: Maybe<Scalars['Money']>
  /** The lower bound of the money range. */
  greaterThan?: Maybe<Scalars['Money']>
  /** The lower or equal bound of the money range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Money']>
}

/** The value of a percent price rule. */
export type AdminPriceRulePercentValue = {
  __typename?: 'PriceRulePercentValue'
  /** The percent value of the price rule. */
  percentage: Scalars['Float']
}

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type AdminPriceRulePrerequisiteToEntitlementQuantityRatio = {
  __typename?: 'PriceRulePrerequisiteToEntitlementQuantityRatio'
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity: Scalars['Int']
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity: Scalars['Int']
}

/** Specifies the quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type AdminPriceRulePrerequisiteToEntitlementQuantityRatioInput = {
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity?: Maybe<Scalars['Int']>
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity?: Maybe<Scalars['Int']>
}

/** A quantity range within which the price rule is applicable. */
export type AdminPriceRuleQuantityRange = {
  __typename?: 'PriceRuleQuantityRange'
  /** The lower bound of the quantity range. */
  greaterThan?: Maybe<Scalars['Int']>
  /** The lower bound or equal of the quantity range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>
  /** The upper bound of the quantity range. */
  lessThan?: Maybe<Scalars['Int']>
  /** The upper bound or equal of the quantity range. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>
}

/** Specifies the input fields to update the quantity range within which the price rule is applicable. */
export type AdminPriceRuleQuantityRangeInput = {
  /** The upper bound of the quantity range. */
  lessThan?: Maybe<Scalars['Int']>
  /** The upper or equal bound of the quantity range. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>
  /** The lower bound of the quantity range. */
  greaterThan?: Maybe<Scalars['Int']>
  /** The lower or equal bound of the quantity range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>
}

/** Shareable URL for the discount code associated with the price rule. */
export type AdminPriceRuleShareableUrl = {
  __typename?: 'PriceRuleShareableUrl'
  /** The image URL of the item (product or collection) to which the discount applies. */
  targetItemImage?: Maybe<AdminImage>
  /** The type of page that's associated with the URL. */
  targetType: AdminPriceRuleShareableUrlTargetType
  /** The title of the page that's associated with the URL. */
  title: Scalars['String']
  /** The URL for the discount code. */
  url: Scalars['URL']
}

/** Page type where shareable URL lands. */
export enum AdminPriceRuleShareableUrlTargetType {
  Home = 'HOME',
  Product = 'PRODUCT',
  Collection = 'COLLECTION'
}

/** Specifies the input fields to update a price rule shipping entitlement. */
export type AdminPriceRuleShippingEntitlementsInput = {
  /** Whether the price rule applies to all shipping lines. */
  targetAllShippingLines?: Maybe<Scalars['Boolean']>
  /** The codes for the countries to which the price rule applies to. */
  countryCodes?: Maybe<Array<AdminCountryCode>>
  /** Whether the price rule is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld?: Maybe<Scalars['Boolean']>
}

/** The shipping lines to which the price rule applies to. */
export type AdminPriceRuleShippingLineEntitlements = {
  __typename?: 'PriceRuleShippingLineEntitlements'
  /** The codes for the countries to which the price rule applies to. */
  countryCodes: Array<AdminCountryCode>
  /** Whether the price rule is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars['Boolean']
  /** Whether the price rule applies to all shipping lines. */
  targetAllShippingLines: Scalars['Boolean']
}

/** The set of valid sort keys for the PriceRule query. */
export enum AdminPriceRuleSortKeys {
  /** Sort by the `starts_at` value. */
  StartsAt = 'STARTS_AT',
  /** Sort by the `ends_at` value. */
  EndsAt = 'ENDS_AT',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The status of the price rule. */
export enum AdminPriceRuleStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED'
}

/** The type of lines (line_item or shipping_line) to which the price rule applies. */
export enum AdminPriceRuleTarget {
  /** The price rule applies to line items. */
  LineItem = 'LINE_ITEM',
  /** The price rule applies to shipping lines. */
  ShippingLine = 'SHIPPING_LINE'
}

/** A list of features used by the price rule. */
export enum AdminPriceRuleTrait {
  /** The price rule supports quantity BXGY discounts. */
  BuyOneGetOne = 'BUY_ONE_GET_ONE',
  /** The price rule supports BXGY discounts using custom allocation limit. */
  BuyOneGetOneWithAllocationLimit = 'BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT',
  /** The price rule supports bulk discounts. */
  Bulk = 'BULK',
  /** The price rule supports specific customers. */
  SpecificCustomers = 'SPECIFIC_CUSTOMERS',
  /** The price rule supports quantity discounts. */
  QuantityDiscounts = 'QUANTITY_DISCOUNTS'
}

/** Return type for `priceRuleUpdate` mutation. */
export type AdminPriceRuleUpdatePayload = {
  __typename?: 'PriceRuleUpdatePayload'
  /** The updated price rule. */
  priceRule?: Maybe<AdminPriceRule>
  /** The updated discount code. */
  priceRuleDiscountCode?: Maybe<AdminPriceRuleDiscountCode>
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<AdminPriceRuleUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** Represents an error that happens during execution of a price rule mutation. */
export type AdminPriceRuleUserError = AdminDisplayableError & {
  __typename?: 'PriceRuleUserError'
  /** Error code to uniquely identify the error. */
  code?: Maybe<AdminPriceRuleErrorCode>
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A time period during which a price rule is applicable. */
export type AdminPriceRuleValidityPeriod = {
  __typename?: 'PriceRuleValidityPeriod'
  /** The time after which the price rule becomes invalid. */
  end?: Maybe<Scalars['DateTime']>
  /** The time after which the price rule is valid. */
  start: Scalars['DateTime']
}

/** Specifies the input fields to update the validity period of a price rule. */
export type AdminPriceRuleValidityPeriodInput = {
  /** The time after which the price rule is valid. */
  start: Scalars['DateTime']
  /** The time after which the price rule becomes invalid. */
  end?: Maybe<Scalars['DateTime']>
}

/** The value of the price rule. */
export type AdminPriceRuleValue = AdminPriceRuleFixedAmountValue | AdminPriceRulePercentValue

/** Specifies the input fields to update a price rule. */
export type AdminPriceRuleValueInput = {
  /** The percentage value of the price rule. */
  percentageValue?: Maybe<Scalars['Float']>
  /** The fixed amount value of the price rule. */
  fixedAmountValue?: Maybe<Scalars['Money']>
}

/** The value of the percentage pricing object. */
export type AdminPricingPercentageValue = {
  __typename?: 'PricingPercentageValue'
  /** The percentage value of the object. */
  percentage: Scalars['Float']
}

/** The value of the pricing object. */
export type AdminPricingValue = AdminMoneyV2 | AdminPricingPercentageValue

/**
 * Private metafields represent custom metadata that is attached to a resource.
 * Private metafields are private to the application that creates them on a shop's resources.
 */
export type AdminPrivateMetafield = AdminNode & {
  __typename?: 'PrivateMetafield'
  /** The id of the private metafield. */
  id: Scalars['ID']
  /** The key name for a private metafield. */
  key: Scalars['String']
  /** The namespace for a private metafield. */
  namespace: Scalars['String']
  /** The value of a private metafield. */
  value: Scalars['String']
  /** Represents the private metafield value type. */
  valueType: AdminPrivateMetafieldValueType
}

export type AdminPrivateMetafieldConnection = {
  __typename?: 'PrivateMetafieldConnection'
  /** A list of edges. */
  edges: Array<AdminPrivateMetafieldEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Specifies the input fields for a PrivateMetafield. */
export type AdminPrivateMetafieldDeleteInput = {
  /** The ID of the owning resource. */
  owner?: Maybe<Scalars['ID']>
  /** The namespace for the private metafield. */
  namespace: Scalars['String']
  /** The key for the private metafield. */
  key: Scalars['String']
}

/** Return type for `privateMetafieldDelete` mutation. */
export type AdminPrivateMetafieldDeletePayload = {
  __typename?: 'PrivateMetafieldDeletePayload'
  /** The ID of private metafield that was deleted. */
  deletedPrivateMetafieldId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminPrivateMetafieldEdge = {
  __typename?: 'PrivateMetafieldEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PrivateMetafieldEdge. */
  node: AdminPrivateMetafield
}

/** Specifies the input fields for a PrivateMetafield. */
export type AdminPrivateMetafieldInput = {
  /** The owning resource. */
  owner?: Maybe<Scalars['ID']>
  /** The namespace for the private metafield. */
  namespace: Scalars['String']
  /** The key for the private metafield. */
  key: Scalars['String']
  /** The value and value type of the metafield, wrapped in a ValueInput object. */
  valueInput: AdminPrivateMetafieldValueInput
}

/** Return type for `privateMetafieldUpsert` mutation. */
export type AdminPrivateMetafieldUpsertPayload = {
  __typename?: 'PrivateMetafieldUpsertPayload'
  /** The private metafield that was created or updated. */
  privateMetafield?: Maybe<AdminPrivateMetafield>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Value Input wraps two fields of Private Metafields into one. Those fields are value and value_type. */
export type AdminPrivateMetafieldValueInput = {
  /** The value of a private metafield. */
  value: Scalars['String']
  /** Represents the private metafield value type. */
  valueType: AdminPrivateMetafieldValueType
}

/** Private Metafield value types. */
export enum AdminPrivateMetafieldValueType {
  /** A string metafield. */
  String = 'STRING',
  /** An integer metafield. */
  Integer = 'INTEGER',
  /** A JSON string metafield. */
  JsonString = 'JSON_STRING'
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProduct = AdminNode &
  AdminNavigable &
  AdminHasMetafields &
  AdminHasPublishedTranslations &
  AdminPublishable &
  AdminOnlineStorePreviewable &
  AdminLegacyInteroperability & {
    __typename?: 'Product'
    /** The number of publications a resource is published to without feedback errors. */
    availablePublicationCount: Scalars['Int']
    /**
     * The description of the product, complete with HTML formatting.
     * @deprecated Use `descriptionHtml` instead
     */
    bodyHtml?: Maybe<Scalars['String']>
    /** A list of the collections that include the product. */
    collections: AdminCollectionConnection
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was created. */
    createdAt: Scalars['DateTime']
    /** A default cursor for use in pagination. */
    defaultCursor: Scalars['String']
    /** A stripped description of the product, single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /**
     * Stripped description of the product, single line with HTML tags removed.
     * Truncated to 60 characters.
     * @deprecated Use `description` instead
     */
    descriptionPlainSummary: Scalars['String']
    /** The featured image for the product. */
    featuredImage?: Maybe<AdminImage>
    /** The featured media for the product. */
    featuredMedia?: Maybe<AdminMedia>
    /** Information about the product that's provided through resource feedback. */
    feedback?: Maybe<AdminResourceFeedback>
    /** The theme template used when viewing the gift card in a store. */
    giftCardTemplateSuffix?: Maybe<Scalars['String']>
    /** A unique human-friendly string of the product's title. */
    handle: Scalars['String']
    /** Whether the product has only a single variant with the default option and value. */
    hasOnlyDefaultVariant: Scalars['Boolean']
    /** Whether the product has out of stock variants. */
    hasOutOfStockVariants: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The images associated with the product. */
    images: AdminImageConnection
    /** Whether the product is in a given collection. */
    inCollection: Scalars['Boolean']
    /** Whether the product is a gift card. */
    isGiftCard: Scalars['Boolean']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The media associated with the product. */
    media: AdminMediaConnection
    /** Total count of media belonging to a product. */
    mediaCount: Scalars['Int']
    /** The metafield associated with the resource. */
    metafield?: Maybe<AdminMetafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: AdminMetafieldConnection
    /** The online store preview URL. */
    onlineStorePreviewUrl?: Maybe<Scalars['URL']>
    /**
     * The online store URL for the product.
     * A value of `null` indicates that the product is not published to the Online Store sales channel.
     */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** A list of custom product options (maximum of 3 per product). */
    options: Array<AdminProductOption>
    /**
     * The price range of the product.
     * @deprecated Deprecated in API version 2020-10. Use `priceRangeV2` instead.
     */
    priceRange: AdminProductPriceRange
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<AdminPrivateMetafield>
    /** List of private metafields. */
    privateMetafields: AdminPrivateMetafieldConnection
    /**
     * A list of the channels where the product is published.
     * @deprecated Use `resourcePublications` instead
     */
    productPublications: AdminProductPublicationConnection
    /** The product type specified by the merchant. */
    productType: Scalars['String']
    /** The number of publications a resource is published on. */
    publicationCount: Scalars['Int']
    /**
     * A list of the channels where the product is published.
     * @deprecated Use `resourcePublications` instead
     */
    publications: AdminProductPublicationConnection
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was published to the Online Store. */
    publishedAt?: Maybe<Scalars['DateTime']>
    /**
     * Check to see whether the resource is published to a given channel.
     * @deprecated Use `publishedOnPublication` instead
     */
    publishedOnChannel: Scalars['Boolean']
    /**
     * Check to see whether the resource is published to the calling app's channel.
     * @deprecated Use `publishedOnCurrentPublication` instead
     */
    publishedOnCurrentChannel: Scalars['Boolean']
    /** Check to see whether the resource is published to the calling app's publication. */
    publishedOnCurrentPublication: Scalars['Boolean']
    /** Check to see whether the resource is published to a given publication. */
    publishedOnPublication: Scalars['Boolean']
    /** The list of resources that are published to a publication. */
    resourcePublications: AdminResourcePublicationConnection
    /** SEO information of the product. */
    seo: AdminSeo
    /** The storefront ID of the product. */
    storefrontId: Scalars['StorefrontID']
    /** A comma separated list of tags that have been added to the product. */
    tags: Array<Scalars['String']>
    /** The theme template used when viewing the product in a store. */
    templateSuffix?: Maybe<Scalars['String']>
    /** The title of the product. */
    title: Scalars['String']
    /** The quantity of inventory in stock. */
    totalInventory: Scalars['Int']
    /** The number of variants that are associated with the product. */
    totalVariants: Scalars['Int']
    /** Whether inventory tracking has been enabled for the product. */
    tracksInventory: Scalars['Boolean']
    /** The translations associated with the resource. */
    translations: Array<AdminPublishedTranslation>
    /**
     * The list of channels that the resource is not published to.
     * @deprecated Use `unpublishedPublications` instead
     */
    unpublishedChannels: AdminChannelConnection
    /** The list of publications that the resource is not published to. */
    unpublishedPublications: AdminPublicationConnection
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was last modified. */
    updatedAt: Scalars['DateTime']
    /** A list of variants associated with the product. */
    variants: AdminProductVariantConnection
    /** The name of the product's vendor. */
    vendor: Scalars['String']
  }

/** Represents a product, including information about related collections and product variants. */
export type AdminProductCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCollectionSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductImagesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductImageSortKeys>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductInCollectionArgs = {
  id: Scalars['ID']
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductMediaArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductMediaSortKeys>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductOptionsArgs = {
  first?: Maybe<Scalars['Int']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductPrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductProductPublicationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductPublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductPublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductPublishedOnChannelArgs = {
  channelId: Scalars['ID']
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductPublishedOnPublicationArgs = {
  publicationId: Scalars['ID']
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductResourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductTranslationsArgs = {
  locale: Scalars['String']
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductUnpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductUnpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product, including information about related collections and product variants. */
export type AdminProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductVariantSortKeys>
}

/** Specifies product images to append. */
export type AdminProductAppendImagesInput = {
  /** The ID of the product. */
  id: Scalars['ID']
  /** The images to be appended to the product. */
  images: Array<AdminImageInput>
}

/** Return type for `productAppendImages` mutation. */
export type AdminProductAppendImagesPayload = {
  __typename?: 'ProductAppendImagesPayload'
  /** List of new images appended to the product. */
  newImages?: Maybe<Array<AdminImage>>
  /** The product object. */
  product?: Maybe<AdminProduct>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productAppendImages` mutation. */
export type AdminProductAppendImagesPayloadNewImagesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Return type for `productBulkAddPriceReductions` mutation. */
export type AdminProductBulkAddPriceReductionsPayload = {
  __typename?: 'ProductBulkAddPriceReductionsPayload'
  /** The asynchronous job that adds the price reduction for the specified products. */
  job?: Maybe<AdminJob>
  /** A list of variant IDs that were skipped and not updated. */
  skippedVariantIds?: Maybe<Array<Scalars['ID']>>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productBulkRemovePriceReductions` mutation. */
export type AdminProductBulkRemovePriceReductionsPayload = {
  __typename?: 'ProductBulkRemovePriceReductionsPayload'
  /** The asynchronous job that removes the price reduction for the specified products. */
  job?: Maybe<AdminJob>
  /** A list of variant IDs that were skipped and not updated. */
  skippedVariantIds?: Maybe<Array<Scalars['ID']>>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The set of valid sort keys for the ProductCollection query. */
export enum AdminProductCollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

export type AdminProductConnection = {
  __typename?: 'ProductConnection'
  /** A list of edges. */
  edges: Array<AdminProductEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `productCreateMedia` mutation. */
export type AdminProductCreateMediaPayload = {
  __typename?: 'ProductCreateMediaPayload'
  /** The newly created media. */
  media?: Maybe<Array<AdminMedia>>
  /** List of errors that occurred executing the mutation. */
  mediaUserErrors: Array<AdminMediaUserError>
  /** The product associated with the media. */
  product?: Maybe<AdminProduct>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `mediaUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** Return type for `productCreate` mutation. */
export type AdminProductCreatePayload = {
  __typename?: 'ProductCreatePayload'
  /** The product object. */
  product?: Maybe<AdminProduct>
  /** The shop associated with the product. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productDeleteImages` mutation. */
export type AdminProductDeleteImagesPayload = {
  __typename?: 'ProductDeleteImagesPayload'
  /** This is an array of IDs of images to delete. */
  deletedImageIds: Array<Scalars['ID']>
  /** This is the product object. */
  product?: Maybe<AdminProduct>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the product to delete. */
export type AdminProductDeleteInput = {
  /** The ID of the product. */
  id: Scalars['ID']
}

/** Return type for `productDeleteMedia` mutation. */
export type AdminProductDeleteMediaPayload = {
  __typename?: 'ProductDeleteMediaPayload'
  /** List of media IDs which were deleted. */
  deletedMediaIds?: Maybe<Array<Scalars['ID']>>
  /** List of product image IDs which were deleted. */
  deletedProductImageIds?: Maybe<Array<Scalars['ID']>>
  /** List of errors that occurred executing the mutation. */
  mediaUserErrors: Array<AdminMediaUserError>
  /** The product which media was deleted from. */
  product?: Maybe<AdminProduct>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `mediaUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** Return type for `productDelete` mutation. */
export type AdminProductDeletePayload = {
  __typename?: 'ProductDeletePayload'
  /** The ID of the deleted product. */
  deletedProductId?: Maybe<Scalars['ID']>
  /** The shop associated with the product. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productDuplicate` mutation. */
export type AdminProductDuplicatePayload = {
  __typename?: 'ProductDuplicatePayload'
  /** The asynchronous job duplicating the product images. */
  imageJob?: Maybe<AdminJob>
  /** The duplicated product. */
  newProduct?: Maybe<AdminProduct>
  /** The user's shop. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminProductEdge = {
  __typename?: 'ProductEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductEdge. */
  node: AdminProduct
}

/** The set of valid sort keys for the ProductImage query. */
export enum AdminProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Return type for `productImageUpdate` mutation. */
export type AdminProductImageUpdatePayload = {
  __typename?: 'ProductImageUpdatePayload'
  /** Image updated. */
  image?: Maybe<AdminImage>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productImageUpdate` mutation. */
export type AdminProductImageUpdatePayloadImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Specifies the input fields required to create a product. */
export type AdminProductInput = {
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml?: Maybe<Scalars['String']>
  /** A unique human-friendly string for the product. Automatically generated from the product's title. */
  handle?: Maybe<Scalars['String']>
  /**
   * Whether a redirect is required after a new handle has been provided.
   * If true, then the old handle is redirected to the new one automatically.
   */
  redirectNewHandle?: Maybe<Scalars['Boolean']>
  /** The SEO information associated with the product. */
  seo?: Maybe<AdminSeoInput>
  /** The product type specified by the merchant. */
  productType?: Maybe<Scalars['String']>
  /** A comma separated list tags that have been added to the product. */
  tags?: Maybe<Array<Scalars['String']>>
  /** The theme template used when viewing the product in a store. */
  templateSuffix?: Maybe<Scalars['String']>
  /** Whether the product is a gift card. */
  giftCard?: Maybe<Scalars['Boolean']>
  /** The theme template used when viewing the gift card in a store. */
  giftCardTemplateSuffix?: Maybe<Scalars['String']>
  /** The title of the product. */
  title?: Maybe<Scalars['String']>
  /** The name of the product's vendor. */
  vendor?: Maybe<Scalars['String']>
  /** A description of the product. Supports HTML formatting. This argument is deprecated: Use `descriptionHtml` instead. */
  bodyHtml?: Maybe<Scalars['String']>
  /** The IDs of the collections that this product will be added to. */
  collectionsToJoin?: Maybe<Array<Scalars['ID']>>
  /** The IDs of collections that will no longer include the product. */
  collectionsToLeave?: Maybe<Array<Scalars['ID']>>
  /** Specifies the product to update in productUpdate or creates a new product if absent in productCreate. */
  id?: Maybe<Scalars['ID']>
  /** The images to associate with the product. */
  images?: Maybe<Array<AdminImageInput>>
  /** The metafields to associate with this product. */
  metafields?: Maybe<Array<AdminMetafieldInput>>
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<AdminPrivateMetafieldInput>>
  /** List of custom product options (maximum of 3 per product). */
  options?: Maybe<Array<Scalars['String']>>
  /** A list of the channels where the product is published. This argument is deprecated: Use `PublishablePublish` instead. */
  productPublications?: Maybe<Array<AdminProductPublicationInput>>
  /** A list of the channels where the product is published. This argument is deprecated: Use `PublishablePublish` instead. */
  publications?: Maybe<Array<AdminProductPublicationInput>>
  /** Only products with an active status can be published. This argument is deprecated: Use `PublishablePublish` instead. */
  publishDate?: Maybe<Scalars['DateTime']>
  /** Only products with an active status can be published. This argument is deprecated: Use `PublishablePublish` instead. */
  publishOn?: Maybe<Scalars['DateTime']>
  /** Only products with an active status can be published. This argument is deprecated: Use `PublishablePublish` instead. */
  published?: Maybe<Scalars['Boolean']>
  /** Only products with an active status can be published. This argument is deprecated: Use `PublishablePublish` instead. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** A list of variants associated with the product. */
  variants?: Maybe<Array<AdminProductVariantInput>>
}

/** The set of valid sort keys for the ProductMedia query. */
export enum AdminProductMediaSortKeys {
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/**
 * Custom product property names like "Size", "Color", and "Material".
 * Products are based on permutations of these options.
 * A product may have a maximum of 3 options.
 * 255 characters limit each.
 */
export type AdminProductOption = AdminNode &
  AdminHasPublishedTranslations & {
    __typename?: 'ProductOption'
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The product option’s name. */
    name: Scalars['String']
    /** The product option's position. */
    position: Scalars['Int']
    /** The translations associated with the resource. */
    translations: Array<AdminPublishedTranslation>
    /** The corresponding value to the product option name. */
    values: Array<Scalars['String']>
  }

/**
 * Custom product property names like "Size", "Color", and "Material".
 * Products are based on permutations of these options.
 * A product may have a maximum of 3 options.
 * 255 characters limit each.
 */
export type AdminProductOptionTranslationsArgs = {
  locale: Scalars['String']
}

/** The price range of the product. */
export type AdminProductPriceRange = {
  __typename?: 'ProductPriceRange'
  /** The highest variant's price. */
  maxVariantPrice: AdminMoneyV2
  /** The lowest variant's price. */
  minVariantPrice: AdminMoneyV2
}

/** Represents the channels where a product is published. */
export type AdminProductPublication = {
  __typename?: 'ProductPublication'
  /** The channel where the product was or is published. */
  channel: AdminChannel
  /** Whether the publication is published or not. */
  isPublished: Scalars['Boolean']
  /** The product that was or is going to be published on the channel. */
  product: AdminProduct
  /** The date that the product was or is going to be published on the channel. */
  publishDate?: Maybe<Scalars['DateTime']>
}

export type AdminProductPublicationConnection = {
  __typename?: 'ProductPublicationConnection'
  /** A list of edges. */
  edges: Array<AdminProductPublicationEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminProductPublicationEdge = {
  __typename?: 'ProductPublicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductPublicationEdge. */
  node: AdminProductPublication
}

/** Specifies a publication to which a product will be published. */
export type AdminProductPublicationInput = {
  /** ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>
  /** ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>
  /** This argument is deprecated: Use publicationId instead. */
  channelHandle?: Maybe<Scalars['String']>
  /** The date and time that the product was (or will be) published. */
  publishDate?: Maybe<Scalars['DateTime']>
}

/** Specifies a product to publish and the channels to publish it to. */
export type AdminProductPublishInput = {
  /** The product to create or update publications for. */
  id: Scalars['ID']
  /** The publication that the product is published to. */
  productPublications: Array<AdminProductPublicationInput>
}

/** Return type for `productPublish` mutation. */
export type AdminProductPublishPayload = {
  __typename?: 'ProductPublishPayload'
  /** The product that has been published. */
  product?: Maybe<AdminProduct>
  /**
   * The channels where the product is published.
   * @deprecated Use Product.publications instead.
   */
  productPublications?: Maybe<Array<AdminProductPublication>>
  /** The user's shop. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productReorderImages` mutation. */
export type AdminProductReorderImagesPayload = {
  __typename?: 'ProductReorderImagesPayload'
  /** The asynchronous job reordering the images. */
  job?: Maybe<AdminJob>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productReorderMedia` mutation. */
export type AdminProductReorderMediaPayload = {
  __typename?: 'ProductReorderMediaPayload'
  /** The asynchronous job reordering the media. */
  job?: Maybe<AdminJob>
  /** List of errors that occurred executing the mutation. */
  mediaUserErrors: Array<AdminMediaUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `mediaUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** The set of valid sort keys for the Product query. */
export enum AdminProductSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
  /** Sort by the `inventory_total` value. */
  InventoryTotal = 'INVENTORY_TOTAL',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Specifies a product to unpublish from a channel and the sales channels to unpublish it from. */
export type AdminProductUnpublishInput = {
  /** The ID of the product to create or update publications for. */
  id: Scalars['ID']
  /** The channels to unpublish the product from. */
  productPublications: Array<AdminProductPublicationInput>
}

/** Return type for `productUnpublish` mutation. */
export type AdminProductUnpublishPayload = {
  __typename?: 'ProductUnpublishPayload'
  /** The product that has been unpublished. */
  product?: Maybe<AdminProduct>
  /** The user's shop. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productUpdateMedia` mutation. */
export type AdminProductUpdateMediaPayload = {
  __typename?: 'ProductUpdateMediaPayload'
  /** The updated media. */
  media?: Maybe<Array<AdminMedia>>
  /** List of errors that occurred executing the mutation. */
  mediaUserErrors: Array<AdminMediaUserError>
  /** The product which media was updated on. */
  product?: Maybe<AdminProduct>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `mediaUserErrors` instead
   */
  userErrors: Array<AdminUserError>
}

/** Return type for `productUpdate` mutation. */
export type AdminProductUpdatePayload = {
  __typename?: 'ProductUpdatePayload'
  /** The updated product. */
  product?: Maybe<AdminProduct>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Represents a product variant. */
export type AdminProductVariant = AdminNode &
  AdminHasMetafields &
  AdminHasPublishedTranslations &
  AdminNavigable &
  AdminLegacyInteroperability & {
    __typename?: 'ProductVariant'
    /** Whether the product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /** The value of the barcode associated with the product. */
    barcode?: Maybe<Scalars['String']>
    /** The compare-at price of the variant in the default shop currency. */
    compareAtPrice?: Maybe<Scalars['Money']>
    /** The date and time when the variant was created. */
    createdAt: Scalars['DateTime']
    /** A default cursor for use in pagination. */
    defaultCursor: Scalars['String']
    /** The delivery profile for the variant. */
    deliveryProfile?: Maybe<AdminDeliveryProfile>
    /** Display name of the variant, based on product's title + variant's title. */
    displayName: Scalars['String']
    /** The fulfillment service associated with the product. */
    fulfillmentService?: Maybe<AdminFulfillmentService>
    /** Whether changes to the fulfillment service for the product variant are allowed. */
    fulfillmentServiceEditable: AdminEditableProperty
    /**
     * The Harmonized System Code (or HS Tariff Code) for the variant.
     * @deprecated Use `InventoryItem.harmonizedSystemCode` instead.
     */
    harmonizedSystemCode?: Maybe<Scalars['String']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The featured image for the variant. */
    image?: Maybe<AdminImage>
    /**
     * The featured image for the variant.
     * @deprecated Use the singular `image` field instead. There may never be more than one variant image.
     */
    images: Array<AdminImage>
    /** The inventory item, which is used to query for inventory information. */
    inventoryItem: AdminInventoryItem
    /**
     * The fulfillment service that tracks the number of items in stock for the product variant.
     * @deprecated Use tracked attribute on `inventoryItem` instead.
     */
    inventoryManagement: AdminProductVariantInventoryManagement
    /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
    inventoryPolicy: AdminProductVariantInventoryPolicy
    /** The total sellable quantity of the variant. */
    inventoryQuantity?: Maybe<Scalars['Int']>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The metafield associated with the resource. */
    metafield?: Maybe<AdminMetafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: AdminMetafieldConnection
    /** The order of the product variant in the list of product variants. The first position in the list is 1. */
    position: Scalars['Int']
    /** List of prices and compare-at prices in the presentment currencies for this shop. */
    presentmentPrices: AdminProductVariantPricePairConnection
    /** The price of the product variant in the default shop currency. */
    price: Scalars['Money']
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<AdminPrivateMetafield>
    /** List of private metafields. */
    privateMetafields: AdminPrivateMetafieldConnection
    /** The product that this variant belongs to. */
    product: AdminProduct
    /**
     * Whether a customer needs to provide a shipping address when placing an order for the product variant.
     * @deprecated Use `InventoryItem.requiresShipping` instead.
     */
    requiresShipping: Scalars['Boolean']
    /** List of product options applied to the variant. */
    selectedOptions: Array<AdminSelectedOption>
    /** An identifier for the product variant in the shop. Required in order to connect to a fulfillment service. */
    sku?: Maybe<Scalars['String']>
    /** The storefront ID of the product variant. */
    storefrontId: Scalars['StorefrontID']
    /** The tax code for the product variant. */
    taxCode?: Maybe<Scalars['String']>
    /** Whether a tax is charged when the product variant is sold. */
    taxable: Scalars['Boolean']
    /** The title of the product variant. */
    title: Scalars['String']
    /** The translations associated with the resource. */
    translations: Array<AdminPublishedTranslation>
    /** The date and time (ISO 8601 format) when the product variant was last modified. */
    updatedAt: Scalars['DateTime']
    /** The weight of the product variant in the unit system specified with weight_unit. */
    weight?: Maybe<Scalars['Float']>
    /** The unit of measurement that applies to the product variant's weight. If you don't specify a value for weight_unit, then the shop's default unit of measurement is applied. Valid values: `g`, `kg`, `oz`, `lb`. */
    weightUnit: AdminWeightUnit
  }

/** Represents a product variant. */
export type AdminProductVariantImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Represents a product variant. */
export type AdminProductVariantImagesArgs = {
  first?: Maybe<Scalars['Int']>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Represents a product variant. */
export type AdminProductVariantMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents a product variant. */
export type AdminProductVariantMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product variant. */
export type AdminProductVariantPresentmentPricesArgs = {
  presentmentCurrencies?: Maybe<Array<AdminCurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product variant. */
export type AdminProductVariantPrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents a product variant. */
export type AdminProductVariantPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a product variant. */
export type AdminProductVariantTranslationsArgs = {
  locale: Scalars['String']
}

export type AdminProductVariantConnection = {
  __typename?: 'ProductVariantConnection'
  /** A list of edges. */
  edges: Array<AdminProductVariantEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `productVariantCreate` mutation. */
export type AdminProductVariantCreatePayload = {
  __typename?: 'ProductVariantCreatePayload'
  /** The product associated with the variant. */
  product?: Maybe<AdminProduct>
  /** The successfully created variant. */
  productVariant?: Maybe<AdminProductVariant>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `productVariantDelete` mutation. */
export type AdminProductVariantDeletePayload = {
  __typename?: 'ProductVariantDeletePayload'
  /** ID of the deleted product variant. */
  deletedProductVariantId?: Maybe<Scalars['ID']>
  /** Product of the deleted product variant. */
  product?: Maybe<AdminProduct>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminProductVariantEdge = {
  __typename?: 'ProductVariantEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantEdge. */
  node: AdminProductVariant
}

/** Specifies a product variant to create or update. */
export type AdminProductVariantInput = {
  /** The value of the barcode associated with the product. */
  barcode?: Maybe<Scalars['String']>
  /** The compare-at price of the variant. */
  compareAtPrice?: Maybe<Scalars['Money']>
  /** The ID of the fulfillment service associated with the variant. */
  fulfillmentServiceId?: Maybe<Scalars['ID']>
  /** The Harmonized System Code (or HS Tariff Code) for the variant. */
  harmonizedSystemCode?: Maybe<Scalars['String']>
  /** Specifies the product variant to update or create a new variant if absent. */
  id?: Maybe<Scalars['ID']>
  /** The ID of the image that's associated with the variant. */
  imageId?: Maybe<Scalars['ID']>
  /** The URL of an image to associate with the variant.  This field can only be used through mutations that create product images and must match one of the URLs being created on the product. */
  imageSrc?: Maybe<Scalars['String']>
  /**
   * The fulfillment service that tracks the number of items in stock for the product variant. If you track the inventory yourself using the admin, then set the value to `shopify`. Valid values: `shopify` or the handle of a fulfillment service that has inventory management enabled.
   *  This argument is deprecated: Use tracked attribute on `inventoryItem` instead.
   */
  inventoryManagement?: Maybe<AdminProductVariantInventoryManagement>
  /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
  inventoryPolicy?: Maybe<AdminProductVariantInventoryPolicy>
  /** Create only field. The inventory quantities at each location where the variant is stocked. */
  inventoryQuantities?: Maybe<Array<AdminInventoryLevelInput>>
  /** Inventory Item associated with the variant, used for unit cost. */
  inventoryItem?: Maybe<AdminInventoryItemInput>
  /** Additional customizable information about the product variant. */
  metafields?: Maybe<Array<AdminMetafieldInput>>
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<AdminPrivateMetafieldInput>>
  /** The custom properties that a shop owner uses to define product variants. */
  options?: Maybe<Array<Scalars['String']>>
  /** The order of the product variant in the list of product variants. The first position in the list is 1. */
  position?: Maybe<Scalars['Int']>
  /** The price of the variant. */
  price?: Maybe<Scalars['Money']>
  /** Create only required field. Specifies the product on which to create the variant. */
  productId?: Maybe<Scalars['ID']>
  /** Whether the variant requires shipping. */
  requiresShipping?: Maybe<Scalars['Boolean']>
  /** The SKU for the variant. */
  sku?: Maybe<Scalars['String']>
  /** Whether the variant is taxable. */
  taxable?: Maybe<Scalars['Boolean']>
  /** This argument is deprecated: Variant title is not a writable field; it is generated from the selected variant options. */
  title?: Maybe<Scalars['String']>
  /** The tax code associated with the variant. */
  taxCode?: Maybe<Scalars['String']>
  /** The weight of the variant. */
  weight?: Maybe<Scalars['Float']>
  /** The unit of weight that's used to measure the variant. */
  weightUnit?: Maybe<AdminWeightUnit>
}

/** The method of inventory tracking for a product variant. */
export enum AdminProductVariantInventoryManagement {
  /** Shopify tracks this product variant's inventory. */
  Shopify = 'SHOPIFY',
  /** This product variant's inventory is not tracked. */
  NotManaged = 'NOT_MANAGED',
  /** A third-party fulfillment service tracks this product variant's inventory. */
  FulfillmentService = 'FULFILLMENT_SERVICE'
}

/**
 * The inventory policy for a product variant controls whether customers can continue to buy the variant when it
 * is out of stock. When the value is <code>continue</code>, customers are able to buy the variant when it's out of stock.
 * When the value is <code>deny</code>, customers can't buy the variant when it's out of stock.
 */
export enum AdminProductVariantInventoryPolicy {
  /** Stop selling a product variant when it is out of stock. */
  Deny = 'DENY',
  /** Continue selling a product variant when it is out of stock. */
  Continue = 'CONTINUE'
}

/** The compare-at price and price of a variant sharing a currency. */
export type AdminProductVariantPricePair = {
  __typename?: 'ProductVariantPricePair'
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<AdminMoneyV2>
  /** The price of the variant with associated currency. */
  price: AdminMoneyV2
}

export type AdminProductVariantPricePairConnection = {
  __typename?: 'ProductVariantPricePairConnection'
  /** A list of edges. */
  edges: Array<AdminProductVariantPricePairEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminProductVariantPricePairEdge = {
  __typename?: 'ProductVariantPricePairEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantPricePairEdge. */
  node: AdminProductVariantPricePair
}

/** The set of valid sort keys for the ProductVariant query. */
export enum AdminProductVariantSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `inventory_quantity` value. */
  InventoryQuantity = 'INVENTORY_QUANTITY',
  /** Sort by the `inventory_management` value. */
  InventoryManagement = 'INVENTORY_MANAGEMENT',
  /** Sort by the `inventory_levels.available` value. */
  InventoryLevelsAvailable = 'INVENTORY_LEVELS_AVAILABLE',
  /** Sort by the `inventory_policy` value. */
  InventoryPolicy = 'INVENTORY_POLICY',
  /** Sort by the `full_title` value. */
  FullTitle = 'FULL_TITLE',
  /** Sort by the `popular` value. */
  Popular = 'POPULAR',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Return type for `productVariantUpdate` mutation. */
export type AdminProductVariantUpdatePayload = {
  __typename?: 'ProductVariantUpdatePayload'
  /** The product associated with the variant. */
  product?: Maybe<AdminProduct>
  /** The updated variant. */
  productVariant?: Maybe<AdminProductVariant>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The set of valid sort keys for the ProfileItem query. */
export enum AdminProfileItemSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
  /** Sort by the `inventory_total` value. */
  InventoryTotal = 'INVENTORY_TOTAL',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** A publication is a group of products and collections that is published to an app. */
export type AdminPublication = AdminNode & {
  __typename?: 'Publication'
  /** The app associated with the publication. */
  app: AdminApp
  /** The collection publications for the list of collections published to the publication. */
  collectionPublicationsV3: AdminResourcePublicationConnection
  /** The list of collections published to the publication. */
  collections: AdminCollectionConnection
  /** Whether the collection is available to the publication. */
  hasCollection: Scalars['Boolean']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Name of the publication. */
  name: Scalars['String']
  /** The product publications for the list of products published to the publication. */
  productPublicationsV3: AdminResourcePublicationConnection
  /** The list of products published to the publication. */
  products: AdminProductConnection
  /** Whether or not this publication supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean']
}

/** A publication is a group of products and collections that is published to an app. */
export type AdminPublicationCollectionPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A publication is a group of products and collections that is published to an app. */
export type AdminPublicationCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A publication is a group of products and collections that is published to an app. */
export type AdminPublicationHasCollectionArgs = {
  id: Scalars['ID']
}

/** A publication is a group of products and collections that is published to an app. */
export type AdminPublicationProductPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A publication is a group of products and collections that is published to an app. */
export type AdminPublicationProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

export type AdminPublicationConnection = {
  __typename?: 'PublicationConnection'
  /** A list of edges. */
  edges: Array<AdminPublicationEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminPublicationEdge = {
  __typename?: 'PublicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PublicationEdge. */
  node: AdminPublication
}

/** Specifies the input fields required to publish a resource. */
export type AdminPublicationInput = {
  /** ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>
  /** ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>
  /**
   * The date and time that the resource was published. Setting this to a date in the future will schedule
   * the resource to be published. Only online store channels support future publishing.
   */
  publishDate?: Maybe<Scalars['DateTime']>
}

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type AdminPublishable = {
  /** The number of publications a resource is published to without feedback errors. */
  availablePublicationCount: Scalars['Int']
  /** The number of publications a resource is published on. */
  publicationCount: Scalars['Int']
  /**
   * Check to see whether the resource is published to a given channel.
   * @deprecated Use `publishedOnPublication` instead
   */
  publishedOnChannel: Scalars['Boolean']
  /**
   * Check to see whether the resource is published to the calling app's channel.
   * @deprecated Use `publishedOnCurrentPublication` instead
   */
  publishedOnCurrentChannel: Scalars['Boolean']
  /** Check to see whether the resource is published to the calling app's publication. */
  publishedOnCurrentPublication: Scalars['Boolean']
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars['Boolean']
  /** The list of resources that are published to a publication. */
  resourcePublications: AdminResourcePublicationConnection
  /**
   * The list of channels that the resource is not published to.
   * @deprecated Use `unpublishedPublications` instead
   */
  unpublishedChannels: AdminChannelConnection
  /** The list of publications that the resource is not published to. */
  unpublishedPublications: AdminPublicationConnection
}

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type AdminPublishablePublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
}

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type AdminPublishablePublishedOnChannelArgs = {
  channelId: Scalars['ID']
}

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type AdminPublishablePublishedOnPublicationArgs = {
  publicationId: Scalars['ID']
}

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type AdminPublishableResourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type AdminPublishableUnpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type AdminPublishableUnpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Return type for `publishablePublish` mutation. */
export type AdminPublishablePublishPayload = {
  __typename?: 'PublishablePublishPayload'
  /** Resource that has been published. */
  publishable?: Maybe<AdminPublishable>
  /** The user's shop. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `publishablePublishToCurrentChannel` mutation. */
export type AdminPublishablePublishToCurrentChannelPayload = {
  __typename?: 'PublishablePublishToCurrentChannelPayload'
  /** Resource that has been published. */
  publishable?: Maybe<AdminPublishable>
  /** The user's shop. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `publishableUnpublish` mutation. */
export type AdminPublishableUnpublishPayload = {
  __typename?: 'PublishableUnpublishPayload'
  /** Resource that has been unpublished. */
  publishable?: Maybe<AdminPublishable>
  /** The user's shop. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `publishableUnpublishToCurrentChannel` mutation. */
export type AdminPublishableUnpublishToCurrentChannelPayload = {
  __typename?: 'PublishableUnpublishToCurrentChannelPayload'
  /** Resource that has been unpublished. */
  publishable?: Maybe<AdminPublishable>
  /** The user's shop. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Published translation of a field of a resource. */
export type AdminPublishedTranslation = {
  __typename?: 'PublishedTranslation'
  /** Translation key. */
  key: Scalars['String']
  /** Translation locale. */
  locale: Scalars['String']
  /** Translation value. */
  value?: Maybe<Scalars['String']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRoot = {
  __typename?: 'QueryRoot'
  /** Lookup an App by ID or return the currently authenticated App. */
  app?: Maybe<AdminApp>
  /**
   * Fetches app by handle.
   * Returns null if the app doesn't exist.
   */
  appByHandle?: Maybe<AdminApp>
  /**
   * Fetches app by apiKey.
   * Returns null if the app doesn't exist.
   */
  appByKey?: Maybe<AdminApp>
  /** Lookup an AppInstallation by ID or return the AppInstallation for the currently authenticated App. */
  appInstallation?: Maybe<AdminAppInstallation>
  /** List of app installations. */
  appInstallations: AdminAppInstallationConnection
  /**
   * Returns an automatic discount resource by ID.
   * @deprecated Use `automaticDiscountNode` instead
   */
  automaticDiscount?: Maybe<AdminDiscountAutomatic>
  /** Returns an automatic discount resource by ID. */
  automaticDiscountNode?: Maybe<AdminDiscountAutomaticNode>
  /** List of automatic discounts. */
  automaticDiscountNodes: AdminDiscountAutomaticNodeConnection
  /** List of the shop's automatic discount saved searches. */
  automaticDiscountSavedSearches: AdminSavedSearchConnection
  /**
   * List of automatic discounts.
   * @deprecated Use `automaticDiscountNodes` instead
   */
  automaticDiscounts: AdminDiscountAutomaticConnection
  /** List of activated carrier services and which shop locations support them. */
  availableCarrierServices: Array<AdminDeliveryCarrierServiceAndLocations>
  /** List of available locales. */
  availableLocales: Array<AdminLocale>
  /** Lookup a carrier service by ID. */
  carrierService?: Maybe<AdminDeliveryCarrierService>
  /**
   * Lookup a channel by ID.
   * @deprecated Use `publication` instead
   */
  channel?: Maybe<AdminChannel>
  /**
   * List of the active sales channels.
   * @deprecated Use `publications` instead
   */
  channels: AdminChannelConnection
  /** Returns a code discount resource by ID. */
  codeDiscountNode?: Maybe<AdminDiscountCodeNode>
  /** Returns a code discount identified by its code. */
  codeDiscountNodeByCode?: Maybe<AdminDiscountCodeNode>
  /**
   * List of code discounts. Special fields for query params:
   *  * status: active, expired, scheduled
   *  * discount_type: bogo, fixed_amount, free_shipping, percentage.
   */
  codeDiscountNodes: AdminDiscountCodeNodeConnection
  /** List of the shop's code discount saved searches. */
  codeDiscountSavedSearches: AdminSavedSearchConnection
  /** Returns a Collection resource by ID. */
  collection?: Maybe<AdminCollection>
  /** Return a collection by its handle. */
  collectionByHandle?: Maybe<AdminCollection>
  /** A list of rule conditions to define how collections with rules can be created. */
  collectionRulesConditions: Array<AdminCollectionRuleConditions>
  /** List of the shop's collection saved searches. */
  collectionSavedSearches: AdminSavedSearchConnection
  /** List of collections. */
  collections: AdminCollectionConnection
  /** Return the AppInstallation for the currently authenticated App. */
  currentAppInstallation: AdminAppInstallation
  /** Returns the current app's most recent BulkOperation. */
  currentBulkOperation?: Maybe<AdminBulkOperation>
  /** Returns a Customer resource by ID. */
  customer?: Maybe<AdminCustomer>
  /** List of the shop's customer saved searches. */
  customerSavedSearches: AdminSavedSearchConnection
  /** List of customers. */
  customers: AdminCustomerConnection
  /** The paginated list of deletion events. */
  deletionEvents: AdminDeletionEventConnection
  /** Lookup a Delivery Profile by ID. */
  deliveryProfile?: Maybe<AdminDeliveryProfile>
  /** List of saved delivery profiles. */
  deliveryProfiles: AdminDeliveryProfileConnection
  /** The shop-wide shipping settings. */
  deliverySettings?: Maybe<AdminDeliverySetting>
  /** Lookup a Domain by ID. */
  domain?: Maybe<AdminDomain>
  /** Returns a DraftOrder resource by ID. */
  draftOrder?: Maybe<AdminDraftOrder>
  /** List of the shop's draft order saved searches. */
  draftOrderSavedSearches: AdminSavedSearchConnection
  /** List of saved draft orders. */
  draftOrders: AdminDraftOrderConnection
  /** Returns a Fulfillment resource by ID. */
  fulfillment?: Maybe<AdminFulfillment>
  /** Returns a Fulfillment order resource by ID. */
  fulfillmentOrder?: Maybe<AdminFulfillmentOrder>
  /** Returns an InventoryItem resource by ID. */
  inventoryItem?: Maybe<AdminInventoryItem>
  /** List of inventory items. */
  inventoryItems: AdminInventoryItemConnection
  /** Returns an InventoryLevel resource by ID. */
  inventoryLevel?: Maybe<AdminInventoryLevel>
  /** Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes. */
  job?: Maybe<AdminJob>
  /** Returns an inventory Location resource by ID. */
  location?: Maybe<AdminLocation>
  /** List of active locations. */
  locations: AdminLocationConnection
  /**
   * Returns a list of all origin locations available for a delivery profile.
   * @deprecated Use `locationsAvailableForDeliveryProfilesConnection` instead
   */
  locationsAvailableForDeliveryProfiles?: Maybe<Array<AdminLocation>>
  /** Returns a list of all origin locations available for a delivery profile. */
  locationsAvailableForDeliveryProfilesConnection: AdminLocationConnection
  /** List of a campaign's marketing activities. */
  marketingActivities: AdminMarketingActivityConnection
  /** Returns a MarketingActivity resource by ID. */
  marketingActivity?: Maybe<AdminMarketingActivity>
  /** Returns a MarketingEvent resource by ID. */
  marketingEvent?: Maybe<AdminMarketingEvent>
  /** List of marketing events. */
  marketingEvents: AdminMarketingEventConnection
  /** List of metafield namespaces and keys visible to the Storefront API. */
  metafieldStorefrontVisibilities: AdminMetafieldStorefrontVisibilityConnection
  /** Returns metafield storefront visibility by ID. */
  metafieldStorefrontVisibility?: Maybe<AdminMetafieldStorefrontVisibility>
  /** Returns a specific node by ID. */
  node?: Maybe<AdminNode>
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<AdminNode>>
  /** Returns an Order resource by ID. */
  order?: Maybe<AdminOrder>
  /** List of the shop's order saved searches. */
  orderSavedSearches: AdminSavedSearchConnection
  /** List of orders placed. */
  orders: AdminOrderConnection
  /** Lookup a price rule by ID. */
  priceRule?: Maybe<AdminPriceRule>
  /** List of the shop's price rule saved searches. */
  priceRuleSavedSearches: AdminSavedSearchConnection
  /** List of price rules. */
  priceRules: AdminPriceRuleConnection
  /** Returns a private metafield by ID. */
  privateMetafield?: Maybe<AdminPrivateMetafield>
  /** List of private metafields. */
  privateMetafields: AdminPrivateMetafieldConnection
  /** Returns a Product resource by ID. */
  product?: Maybe<AdminProduct>
  /** Return a product by its handle. */
  productByHandle?: Maybe<AdminProduct>
  /** List of the shop's product saved searches. */
  productSavedSearches: AdminSavedSearchConnection
  /** Returns a ProductVariant resource by ID. */
  productVariant?: Maybe<AdminProductVariant>
  /** List of the product variants. */
  productVariants: AdminProductVariantConnection
  /** List of products. */
  products: AdminProductConnection
  /** The list of public Admin API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<AdminApiVersion>
  /** Lookup a publication by ID. */
  publication?: Maybe<AdminPublication>
  /** List of the active publications. */
  publications: AdminPublicationConnection
  /** Returns a Refund resource by ID. */
  refund?: Maybe<AdminRefund>
  /** Lookup a script tag resource by ID. */
  scriptTag?: Maybe<AdminScriptTag>
  /** A comma separated list of script tags. */
  scriptTags: AdminScriptTagConnection
  /** Returns a Shop resource corresponding to access token used in request. */
  shop: AdminShop
  /** List of locales available on a shop. */
  shopLocales: Array<AdminShopLocale>
  /** Shopify Payments account information, including balances and payouts. */
  shopifyPaymentsAccount?: Maybe<AdminShopifyPaymentsAccount>
  /** List of TenderTransactions associated with the Shop. */
  tenderTransactions: AdminTenderTransactionConnection
  /** Translatable resource. */
  translatableResource?: Maybe<AdminTranslatableResource>
  /** List of translatable resources. */
  translatableResources: AdminTranslatableResourceConnection
  /** Returns a webhook subscription by ID. */
  webhookSubscription?: Maybe<AdminWebhookSubscription>
  /** List of webhook subscriptions. */
  webhookSubscriptions: AdminWebhookSubscriptionConnection
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAppArgs = {
  id?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAppByHandleArgs = {
  handle: Scalars['String']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAppByKeyArgs = {
  apiKey: Scalars['String']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAppInstallationArgs = {
  id?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAppInstallationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminAppInstallationSortKeys>
  category?: Maybe<AdminAppInstallationCategory>
  privacy?: Maybe<AdminAppInstallationPrivacy>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAutomaticDiscountArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAutomaticDiscountNodeArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAutomaticDiscountNodesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminAutomaticDiscountSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAutomaticDiscountSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootAutomaticDiscountsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminAutomaticDiscountSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCarrierServiceArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootChannelArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootChannelsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCodeDiscountNodeArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCodeDiscountNodeByCodeArgs = {
  code: Scalars['String']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCodeDiscountNodesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCodeDiscountSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCodeDiscountSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCollectionArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCollectionSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCollectionSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCustomerArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCustomerSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCustomerSavedSearchSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootCustomersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCustomerSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootDeletionEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminDeletionEventSortKeys>
  query?: Maybe<Scalars['String']>
  subjectTypes?: Maybe<Array<AdminDeletionEventSubjectType>>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootDeliveryProfileArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootDeliveryProfilesArgs = {
  merchantOwnedOnly?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootDomainArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootDraftOrderArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootDraftOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootDraftOrdersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminDraftOrderSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootFulfillmentArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootFulfillmentOrderArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootInventoryItemArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootInventoryItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootInventoryLevelArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootJobArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootLocationArgs = {
  id?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootLocationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminLocationSortKeys>
  query?: Maybe<Scalars['String']>
  includeLegacy?: Maybe<Scalars['Boolean']>
  includeInactive?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootLocationsAvailableForDeliveryProfilesConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootMarketingActivitiesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminMarketingActivitySortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootMarketingActivityArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootMarketingEventArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootMarketingEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminMarketingEventSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootMetafieldStorefrontVisibilitiesArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootMetafieldStorefrontVisibilityArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootNodeArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootNodesArgs = {
  ids: Array<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootOrderArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootOrdersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminOrderSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootPriceRuleArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootPriceRuleSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootPriceRulesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminPriceRuleSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootPrivateMetafieldArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  owner: Scalars['ID']
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootProductArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootProductByHandleArgs = {
  handle: Scalars['String']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootProductSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootProductVariantArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductVariantSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootPublicationArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootPublicationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootRefundArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootScriptTagArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootScriptTagsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  src?: Maybe<Scalars['URL']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootShopLocalesArgs = {
  published?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootTenderTransactionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootTranslatableResourceArgs = {
  resourceId: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootTranslatableResourcesArgs = {
  resourceType: AdminTranslatableResourceType
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootWebhookSubscriptionArgs = {
  id: Scalars['ID']
}

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type AdminQueryRootWebhookSubscriptionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminWebhookSubscriptionSortKeys>
  query?: Maybe<Scalars['String']>
  callbackUrl?: Maybe<Scalars['URL']>
  format?: Maybe<AdminWebhookSubscriptionFormat>
  topics?: Maybe<Array<AdminWebhookSubscriptionTopic>>
}

/** Represents a refund of items or transactions in an order. */
export type AdminRefund = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'Refund'
    /** When the refund was created. */
    createdAt?: Maybe<Scalars['DateTime']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** Note associated with the refund. */
    note?: Maybe<Scalars['String']>
    /** The RefundLineItem resources attached to the refund. */
    refundLineItems: AdminRefundLineItemConnection
    /**
     * Whether the RefundLineItem resources were restocked when the refund was created.
     * @deprecated Use `RefundLineItem.restockType` instead.
     */
    restocked: Scalars['Boolean']
    /**
     * Total amount refunded across all the transactions for this refund.
     * @deprecated Use `totalRefundedSet` instead
     */
    totalRefunded: AdminMoneyV2
    /** Total amount refunded across all the transactions for this refund in shop and presentment currencies. */
    totalRefundedSet: AdminMoneyBag
    /** Transactions associated with the refund. */
    transactions: AdminOrderTransactionConnection
    /** When the refund was last updated. */
    updatedAt: Scalars['DateTime']
  }

/** Represents a refund of items or transactions in an order. */
export type AdminRefundRefundLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a refund of items or transactions in an order. */
export type AdminRefundTransactionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Return type for `refundCreate` mutation. */
export type AdminRefundCreatePayload = {
  __typename?: 'RefundCreatePayload'
  /** The order associated with the created refund. */
  order?: Maybe<AdminOrder>
  /** The created refund. */
  refund?: Maybe<AdminRefund>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the fields to create a refund. */
export type AdminRefundInput = {
  /** The currency (in ISO format) that is used to refund the order. This must be the presentment currency (the currency used by the customer) and is a required field for orders where the currency and presentment currency differ. */
  currency?: Maybe<AdminCurrencyCode>
  /** Order ID for which the refund is created. */
  orderId: Scalars['ID']
  /** An optional note attached to a refund. */
  note?: Maybe<Scalars['String']>
  /** Whether to send a refund notification to the customer. */
  notify?: Maybe<Scalars['Boolean']>
  /** Specifies how much of the shipping cost to refund. */
  shipping?: Maybe<AdminShippingRefundInput>
  /** A list of line items to refund. */
  refundLineItems?: Maybe<Array<AdminRefundLineItemInput>>
  /** A list of transactions involved in the refund. */
  transactions?: Maybe<Array<AdminOrderTransactionInput>>
}

/** Represents the details about a refunded line item. */
export type AdminRefundLineItem = {
  __typename?: 'RefundLineItem'
  /** Returns a LineItem resource. This represents the LineItem in the non-refund context. */
  lineItem: AdminLineItem
  /** The inventory restock location. */
  location?: Maybe<AdminLocation>
  /**
   * Returns the price of a refunded line item.
   * @deprecated Use `priceSet` instead
   */
  price: Scalars['Money']
  /** Returns the price of a refunded line item in shop and presentment currencies. */
  priceSet: AdminMoneyBag
  /** Returns the quantity of a refunded line item. */
  quantity: Scalars['Int']
  /**
   * Represents the type of restock for the refunded line item.
   * @deprecated Use `restockType` instead
   */
  refundType: AdminRefundLineItemRefundType
  /** Represents the type of restock for the refunded line item. */
  restockType: AdminRefundLineItemRestockType
  /** Whether the refunded line item was restocked. Not applicable in the context of a SuggestedRefund. */
  restocked: Scalars['Boolean']
  /**
   * Returns the subtotal price of a refunded line item.
   * @deprecated Use `subtotalSet` instead
   */
  subtotal: Scalars['Money']
  /** Returns the subtotal price of a refunded line item in shop and presentment currencies. */
  subtotalSet: AdminMoneyBag
  /**
   * Returns the total tax charged on a refunded line item.
   * @deprecated Use `totalTaxSet` instead
   */
  totalTax: Scalars['Money']
  /** Returns the total tax charged on a refunded line item in shop and presentment currencies. */
  totalTaxSet: AdminMoneyBag
}

export type AdminRefundLineItemConnection = {
  __typename?: 'RefundLineItemConnection'
  /** A list of edges. */
  edges: Array<AdminRefundLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminRefundLineItemEdge = {
  __typename?: 'RefundLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of RefundLineItemEdge. */
  node: AdminRefundLineItem
}

/** Specifies the fields required to return line items on a refund. */
export type AdminRefundLineItemInput = {
  /** The ID of the line item in the refund. */
  lineItemId: Scalars['ID']
  /** The quantity of the associated line item that was returned. */
  quantity: Scalars['Int']
  /** The type of restock for this line item. */
  restockType?: Maybe<AdminRefundLineItemRestockType>
  /** The intended location for restocking if `refundType` is not `NO_RESTOCK` */
  locationId?: Maybe<Scalars['ID']>
}

/** The type of restock performed for a particular refund line item. */
export enum AdminRefundLineItemRefundType {
  /** Refund line item was returned. */
  Return = 'RETURN',
  /** Refund line item was canceled. */
  Cancel = 'CANCEL',
  /** Refund line item was restocked, without specifically being identified as a return or cancelation. */
  LegacyRestock = 'LEGACY_RESTOCK',
  /** Refund line item was not restocked. */
  NoRestock = 'NO_RESTOCK'
}

/** The type of restock performed for a particular refund line item. */
export enum AdminRefundLineItemRestockType {
  /** Refund line item was returned. */
  Return = 'RETURN',
  /** Refund line item was canceled. */
  Cancel = 'CANCEL',
  /** Refund line item was restocked, without specifically being identified as a return or cancelation. */
  LegacyRestock = 'LEGACY_RESTOCK',
  /** Refund line item was not restocked. */
  NoRestock = 'NO_RESTOCK'
}

/**
 * Presents information or problems to merchants, with 1 or more actions that they can take.
 * They can optionally have a specific icon and be dismissed by merchants.
 */
export type AdminResourceAlert = {
  __typename?: 'ResourceAlert'
  /**
   * Buttons in the alert that link to related information.
   * For example, _View risk assessment_.
   */
  actions: Array<AdminResourceAlertAction>
  /** Details about the alert. */
  content: Scalars['HTML']
  /**
   * Unique identifier that appears when an alert is manually closed by the merchant.
   * Most alerts cannot be manually closed.
   */
  dismissibleHandle?: Maybe<Scalars['String']>
  /** Icon that displays with the alert. */
  icon?: Maybe<AdminResourceAlertIcon>
  /** Indication of how important the alert is. */
  severity: AdminResourceAlertSeverity
  /** The name of the alert. */
  title: Scalars['String']
}

/** An action associated to a resource alert. */
export type AdminResourceAlertAction = {
  __typename?: 'ResourceAlertAction'
  /** Whether the action is primary or not. */
  primary: Scalars['Boolean']
  /** Resource for the action to show. */
  show?: Maybe<Scalars['String']>
  /** Action title. */
  title: Scalars['String']
  /** Action target URL. */
  url: Scalars['URL']
}

/** The available icons for resource alerts. */
export enum AdminResourceAlertIcon {
  /** A checkmark inside a circle. */
  CheckmarkCircle = 'CHECKMARK_CIRCLE',
  /** A lowercase `i` inside a circle. */
  InformationCircle = 'INFORMATION_CIRCLE'
}

/** The possible severity levels for a resource alert. */
export enum AdminResourceAlertSeverity {
  /** Indicates a neutral alert. */
  Default = 'DEFAULT',
  /** Indicates an informative alert. */
  Info = 'INFO',
  /** Indicates a warning alert. */
  Warning = 'WARNING',
  /** Indicates a success alert. */
  Success = 'SUCCESS',
  /** Indicates a critical alert. */
  Critical = 'CRITICAL',
  Error = 'ERROR'
}

/** Represents feedback from apps about a resource, and the steps required to set up the apps on the shop. */
export type AdminResourceFeedback = {
  __typename?: 'ResourceFeedback'
  /**
   * Feedback from an app about the steps a merchant needs to take to set up the app on their store.
   * @deprecated Use `details` instead
   */
  appFeedback: Array<AdminAppFeedback>
  /** List of AppFeedback detailing issues regarding a resource. */
  details: Array<AdminAppFeedback>
  /** Summary of resource feedback pertaining to the resource. */
  summary: Scalars['String']
}

/** A resource limit represents the limits that the resource has. */
export type AdminResourceLimit = {
  __typename?: 'ResourceLimit'
  /** Whether or not the resource is available. */
  available: Scalars['Boolean']
  /** Quantity available. If null the quantity available is unlimited. */
  quantityAvailable?: Maybe<Scalars['Int']>
  /** Quantity limit of the resource. If null the quantity is unlimited. */
  quantityLimit?: Maybe<Scalars['Int']>
  /** Quantity used of the resource. If null the quantity used cannot be retrieved. */
  quantityUsed?: Maybe<Scalars['Int']>
}

/** A resource publication represents that a resource has been published to a publication. */
export type AdminResourcePublication = {
  __typename?: 'ResourcePublication'
  /**
   * The channel the resource publication is published to.
   * @deprecated Use `publication` instead
   */
  channel: AdminChannel
  /**
   * Whether the resource publication is published. Also returns true if the resource publication is scheduled to be published.
   * If false, then the resource publication is neither published nor scheduled to be published.
   */
  isPublished: Scalars['Boolean']
  /** The publication the resource publication is published to. */
  publication: AdminPublication
  /** The date that the resource publication was or is going to be published to the publication. */
  publishDate: Scalars['DateTime']
  /** The resource published to the publication. */
  publishable: AdminPublishable
}

export type AdminResourcePublicationConnection = {
  __typename?: 'ResourcePublicationConnection'
  /** A list of edges. */
  edges: Array<AdminResourcePublicationEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminResourcePublicationEdge = {
  __typename?: 'ResourcePublicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ResourcePublicationEdge. */
  node: AdminResourcePublication
}

/** SEO information. */
export type AdminSeo = {
  __typename?: 'SEO'
  /** SEO Description. */
  description?: Maybe<Scalars['String']>
  /** SEO Title. */
  title?: Maybe<Scalars['String']>
}

/** SEO information. */
export type AdminSeoInput = {
  /** SEO title of the product. */
  title?: Maybe<Scalars['String']>
  /** SEO description of the product. */
  description?: Maybe<Scalars['String']>
}

/** A saved search is a representation of a search query saved in the admin. */
export type AdminSavedSearch = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'SavedSearch'
    /** The filters of a saved search. */
    filters: Array<AdminSearchFilter>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The name of a saved search. */
    name: Scalars['String']
    /** The query string of a saved search. This includes search terms and filters. */
    query: Scalars['String']
    /** The type of resource this saved search is searching in. */
    resourceType: AdminSearchResultType
    /** The search terms of a saved search. */
    searchTerms: Scalars['String']
  }

export type AdminSavedSearchConnection = {
  __typename?: 'SavedSearchConnection'
  /** A list of edges. */
  edges: Array<AdminSavedSearchEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Specifies the fields required to create a saved search. */
export type AdminSavedSearchCreateInput = {
  /** The type of resouce this saved search is searching in. */
  resourceType: AdminSearchResultType
  /** A descriptive name of the saved search. */
  name: Scalars['String']
  /** The query string of a saved search. This includes search terms and filters. */
  query: Scalars['String']
}

/** Return type for `savedSearchCreate` mutation. */
export type AdminSavedSearchCreatePayload = {
  __typename?: 'SavedSearchCreatePayload'
  /** The saved search that was created. */
  savedSearch?: Maybe<AdminSavedSearch>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the fields to delete a saved search. */
export type AdminSavedSearchDeleteInput = {
  /** ID of the saved search to delete. */
  id: Scalars['ID']
}

/** Return type for `savedSearchDelete` mutation. */
export type AdminSavedSearchDeletePayload = {
  __typename?: 'SavedSearchDeletePayload'
  /** The id of the saved search that was deleted. */
  deletedSavedSearchId?: Maybe<Scalars['ID']>
  /** The shop of the saved search that was deleted. */
  shop: AdminShop
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminSavedSearchEdge = {
  __typename?: 'SavedSearchEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SavedSearchEdge. */
  node: AdminSavedSearch
}

/** Specifies the fields required to update a saved search. */
export type AdminSavedSearchUpdateInput = {
  /** ID of the saved search to update. */
  id: Scalars['ID']
  /** A descriptive name of the saved search. */
  name?: Maybe<Scalars['String']>
  /** The query string of a saved search. This included search terms and filters. */
  query?: Maybe<Scalars['String']>
}

/** Return type for `savedSearchUpdate` mutation. */
export type AdminSavedSearchUpdatePayload = {
  __typename?: 'SavedSearchUpdatePayload'
  /** The saved search that was updated. */
  savedSearch?: Maybe<AdminSavedSearch>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script for an order's line item or shipping line.
 */
export type AdminScriptDiscountApplication = AdminDiscountApplication & {
  __typename?: 'ScriptDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: AdminDiscountApplicationAllocationMethod
  /**
   * The description of the application as defined by the Script.
   * @deprecated Use `title` instead
   */
  description: Scalars['String']
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int']
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: AdminDiscountApplicationTargetSelection
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: AdminDiscountApplicationTargetType
  /** The title of the application as defined by the Script. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: AdminPricingValue
}

/** A script tag represents remote JavaScript code that is loaded into the pages of a shop's storefront or the order status page of checkout. */
export type AdminScriptTag = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'ScriptTag'
    /** The date and time when the script tag was created. */
    createdAt: Scalars['DateTime']
    /** The page or pages on the online store that the script should be included. */
    displayScope: AdminScriptTagDisplayScope
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The URL to the remote script. */
    src: Scalars['URL']
    /** The date and time when the script tag was last updated. */
    updatedAt: Scalars['DateTime']
  }

export type AdminScriptTagConnection = {
  __typename?: 'ScriptTagConnection'
  /** A list of edges. */
  edges: Array<AdminScriptTagEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `scriptTagCreate` mutation. */
export type AdminScriptTagCreatePayload = {
  __typename?: 'ScriptTagCreatePayload'
  /** The script tag that was created. */
  scriptTag?: Maybe<AdminScriptTag>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `scriptTagDelete` mutation. */
export type AdminScriptTagDeletePayload = {
  __typename?: 'ScriptTagDeletePayload'
  /** The ID of the deleted script tag. */
  deletedScriptTagId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** The page or pages on the online store where the script should be included. */
export enum AdminScriptTagDisplayScope {
  /** Include the script on both the web storefront and the order status page. */
  All = 'ALL',
  /** Include the script only on the order status page. */
  OrderStatus = 'ORDER_STATUS',
  /** Include the script only on the web storefront. */
  OnlineStore = 'ONLINE_STORE'
}

export type AdminScriptTagEdge = {
  __typename?: 'ScriptTagEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ScriptTagEdge. */
  node: AdminScriptTag
}

/** Specifies the input fields for a script tag. */
export type AdminScriptTagInput = {
  /** The URL of the remote script. */
  src?: Maybe<Scalars['URL']>
  /** The page or pages on the online store where the script should be included. */
  displayScope?: Maybe<AdminScriptTagDisplayScope>
}

/** Return type for `scriptTagUpdate` mutation. */
export type AdminScriptTagUpdatePayload = {
  __typename?: 'ScriptTagUpdatePayload'
  /** The script tag that was updated. */
  scriptTag?: Maybe<AdminScriptTag>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** A filter in a search query represented by a key value pair. */
export type AdminSearchFilter = {
  __typename?: 'SearchFilter'
  /** The key of the search filter. */
  key: Scalars['String']
  /** The value of the search filter. */
  value: Scalars['String']
}

/** A list of search filters along with their specific options in value and label pair for filtering. */
export type AdminSearchFilterOptions = {
  __typename?: 'SearchFilterOptions'
  /** A list of options that can be use to filter product availability. */
  productAvailability: Array<AdminFilterOption>
}

/** Represents an individual result returned from a search. */
export type AdminSearchResult = {
  __typename?: 'SearchResult'
  /** Returns the search result description text. */
  description?: Maybe<Scalars['String']>
  /** Returns the Image resource presented to accompany a search result. */
  image?: Maybe<AdminImage>
  /** Returns the ID of the resource returned in the search result. */
  reference: AdminNode
  /** Returns the resource title. */
  title: Scalars['String']
  /** Returns the absolute URL to the resource in the search result. */
  url: Scalars['URL']
}

/** The connection type for SearchResult. */
export type AdminSearchResultConnection = {
  __typename?: 'SearchResultConnection'
  /** A list of edges. */
  edges: Array<AdminSearchResultEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
  /**
   * Information to aid in pagination.
   * @deprecated The provided information is not accurate.
   */
  resultsAfterCount: Scalars['Int']
}

export type AdminSearchResultEdge = {
  __typename?: 'SearchResultEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SearchResultEdge. */
  node: AdminSearchResult
}

/** Specifies the type of resources to be returned from a search. */
export enum AdminSearchResultType {
  Order = 'ORDER',
  Customer = 'CUSTOMER',
  Product = 'PRODUCT',
  OnlineStorePage = 'ONLINE_STORE_PAGE',
  OnlineStoreBlog = 'ONLINE_STORE_BLOG',
  OnlineStoreArticle = 'ONLINE_STORE_ARTICLE',
  Collection = 'COLLECTION',
  DraftOrder = 'DRAFT_ORDER',
  PriceRule = 'PRICE_RULE'
}

/**
 * Custom properties that a shop owner can use to define product variants.
 * Multiple options can exist. Options are represented as: option1, option2, option3, etc.
 */
export type AdminSelectedOption = {
  __typename?: 'SelectedOption'
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Represents the shipping details that the customer chose for their order. */
export type AdminShippingLine = {
  __typename?: 'ShippingLine'
  /**
   * A reference to the carrier service that provided the rate.
   * Present when the rate was computed by a third-party carrier service.
   */
  carrierIdentifier?: Maybe<Scalars['String']>
  /** A reference to the shipping method. */
  code?: Maybe<Scalars['String']>
  /** Whether the shipping line is custom or not. */
  custom: Scalars['Boolean']
  /** The general classification of the delivery method. */
  deliveryCategory?: Maybe<Scalars['String']>
  /** The discounts that have been allocated to the shipping line. */
  discountAllocations: Array<AdminDiscountAllocation>
  /**
   * The pre-tax shipping price with discounts applied.
   * @deprecated Use `discountedPriceSet` instead
   */
  discountedPrice: AdminMoneyV2
  /** The pre-tax shipping price with discounts applied. */
  discountedPriceSet: AdminMoneyBag
  /** Globally unique identifier. */
  id?: Maybe<Scalars['ID']>
  /**
   * The pre-tax shipping price without any discounts applied.
   * @deprecated Use `originalPriceSet` instead
   */
  originalPrice: AdminMoneyV2
  /** The pre-tax shipping price without any discounts applied. */
  originalPriceSet: AdminMoneyBag
  /** The phone number at the shipping address. */
  phone?: Maybe<Scalars['String']>
  /**
   * Returns the price of the shipping line.
   * @deprecated Use `originalPriceSet` instead
   */
  price: Scalars['Money']
  /**
   * The fulfillment service requested for the shipping method.
   * Present if the shipping method requires processing by a third party fulfillment service.
   */
  requestedFulfillmentService?: Maybe<AdminFulfillmentService>
  /** A unique identifier for the shipping rate. The format can change without notice and is not meant to be shown to users. */
  shippingRateHandle?: Maybe<Scalars['String']>
  /** Returns the rate source for the shipping line. */
  source?: Maybe<Scalars['String']>
  /** The TaxLine objects connected to this shipping line. */
  taxLines: Array<AdminTaxLine>
  /** Returns the title of the shipping line. */
  title: Scalars['String']
}

/** Specifies the shipping details for the order. */
export type AdminShippingLineInput = {
  /** Price of the shipping rate. */
  price?: Maybe<Scalars['Money']>
  /** A unique identifier for the shipping rate. */
  shippingRateHandle?: Maybe<Scalars['String']>
  /** Title of the shipping rate. */
  title?: Maybe<Scalars['String']>
}

/** The shipping method for the delivery. */
export type AdminShippingMethod = {
  __typename?: 'ShippingMethod'
  /** A unique code associated with the rate. For example: `expedited_mail` */
  code: Scalars['String']
  /**
   * A description of the rate, which customers will see at checkout.
   * For example: `Includes tracking and insurance`.
   */
  label: Scalars['String']
}

/** Return type for `shippingPackageDelete` mutation. */
export type AdminShippingPackageDeletePayload = {
  __typename?: 'ShippingPackageDeletePayload'
  /** The ID of the deleted shipping package. */
  deletedId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `shippingPackageMakeDefault` mutation. */
export type AdminShippingPackageMakeDefaultPayload = {
  __typename?: 'ShippingPackageMakeDefaultPayload'
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `shippingPackageUpdate` mutation. */
export type AdminShippingPackageUpdatePayload = {
  __typename?: 'ShippingPackageUpdatePayload'
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** A shipping rate to be applied to an order. */
export type AdminShippingRate = {
  __typename?: 'ShippingRate'
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String']
  /** Price of this shipping rate. */
  price: AdminMoneyV2
  /** Title of this shipping rate. */
  title: Scalars['String']
}

/** Represents the shipping costs refunded on the Refund. */
export type AdminShippingRefund = {
  __typename?: 'ShippingRefund'
  /**
   * The monetary value of the shipping fees to be returned.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money']
  /** The monetary value of the shipping fees to be returned in shop and presentment currencies. */
  amountSet: AdminMoneyBag
  /**
   * The maximum amount of shipping fees currently refundable.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable: Scalars['Money']
  /** The maximum amount of shipping fees currently refundable in shop and presentment currencies. */
  maximumRefundableSet: AdminMoneyBag
  /**
   * The monetary value of the tax allocated to shipping fees to be returned.
   * @deprecated Use `taxSet` instead
   */
  tax: Scalars['Money']
  /** The monetary value of the tax allocated to shipping fees to be returned in shop and presentment currencies. */
  taxSet: AdminMoneyBag
}

/** Specifies the fields required to return shipping costs on a Refund. */
export type AdminShippingRefundInput = {
  /** The monetary value of the shipping fees to be returned. */
  amount?: Maybe<Scalars['Money']>
  /** Whether a full refund is provided. */
  fullRefund?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShop = AdminNode &
  AdminHasPublishedTranslations &
  AdminHasMetafields & {
    __typename?: 'Shop'
    /** Alert message that appears in the Shopify admin. */
    alerts: Array<AdminShopAlert>
    /** The token required to query the shop's reports or dashboards. */
    analyticsToken: Scalars['String']
    /** Paginated list of fulfillment orders assigned to fulfillment services. */
    assignedFulfillmentOrders: AdminFulfillmentOrderConnection
    /** List of sales channels not currently installed on the shop. */
    availableChannelApps: AdminAppConnection
    /** The shop's billing address information. */
    billingAddress: AdminMailingAddress
    /**
     * Exposes the number of channels.
     * @deprecated Use `publicationCount` instead
     */
    channelCount: Scalars['Int']
    /**
     * List of the shop's active sales channels.
     * @deprecated Use `QueryRoot.channels` instead.
     */
    channels: AdminChannelConnection
    /** Specifies whether the shop supports checkouts via Checkout API. */
    checkoutApiSupported: Scalars['Boolean']
    /**
     * Return a collection by its handle.
     * @deprecated Use `QueryRoot.collectionByHandle` instead.
     */
    collectionByHandle?: Maybe<AdminCollection>
    /**
     * List of the shop's collection saved searches.
     * @deprecated Use `QueryRoot.collectionSavedSearches` instead.
     */
    collectionSavedSearches: AdminSavedSearchConnection
    /**
     * List of the shop's collections.
     * @deprecated Use `QueryRoot.collections` instead.
     */
    collections: AdminCollectionConnection
    /**
     * The public-facing contact email address for the shop.
     * Customers will use this email to communicate with the shop owner.
     */
    contactEmail: Scalars['String']
    /** Countries that have been defined in shipping zones for the shop. */
    countriesInShippingZones: AdminCountriesInShippingZones
    /** The three letter code for the shop's currency. */
    currencyCode: AdminCurrencyCode
    /** How currencies are displayed on your store. */
    currencyFormats: AdminCurrencyFormats
    /** The currency settings for the shop. */
    currencySettings: AdminCurrencySettingConnection
    /** The shop's customer account requirement preference. */
    customerAccounts: AdminShopCustomerAccountsSetting
    /**
     * List of the shop's customer saved searches.
     * @deprecated Use `QueryRoot.customerSavedSearches` instead.
     */
    customerSavedSearches: AdminSavedSearchConnection
    /** A comma separated list of tags that have been added to customer accounts. */
    customerTags: AdminStringConnection
    /**
     * Customer accounts associated to the shop.
     * @deprecated Use `QueryRoot.customers` instead.
     */
    customers: AdminCustomerConnection
    /** The shop's meta description used in search engine results. */
    description?: Maybe<Scalars['String']>
    /**
     * List of the shop's draft order saved searches.
     * @deprecated Use `QueryRoot.draftOrderSavedSearches` instead.
     */
    draftOrderSavedSearches: AdminSavedSearchConnection
    /** A comma separated list of tags that have been added to draft orders. */
    draftOrderTags: AdminStringConnection
    /**
     * List of saved draft orders on the shop.
     * @deprecated Use `QueryRoot.draftOrders` instead.
     */
    draftOrders: AdminDraftOrderConnection
    /**
     * The shop owner's email address.
     * Shopify will use this email address to communicate with the shop owner.
     */
    email: Scalars['String']
    /** The presentment currencies enabled for the shop. */
    enabledPresentmentCurrencies: Array<AdminCurrencyCode>
    /** The shop's features. */
    features: AdminShopFeatures
    /** Paginated list of merchant-managed and third-party fulfillment orders. */
    fulfillmentOrders: AdminFulfillmentOrderConnection
    /** List of the shop's installed fulfillment services. */
    fulfillmentServices: Array<AdminFulfillmentService>
    /** The shop's time zone as defined by the IANA. */
    ianaTimezone: Scalars['String']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /**
     * List of the shop's inventory items.
     * @deprecated Use `QueryRoot.inventoryItems` instead.
     */
    inventoryItems: AdminInventoryItemConnection
    /**
     * The number of pendings orders on the shop.
     * Limited to a maximum of 10000.
     */
    limitedPendingOrderCount: AdminLimitedPendingOrderCount
    /**
     * List of active locations of the shop.
     * @deprecated Use `QueryRoot.locations` instead.
     */
    locations: AdminLocationConnection
    /**
     * List of a shop's marketing events.
     * @deprecated Use `QueryRoot.marketingEvents` instead.
     */
    marketingEvents: AdminMarketingEventConnection
    /** The metafield associated with the resource. */
    metafield?: Maybe<AdminMetafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: AdminMetafieldConnection
    /** The shop's .myshopify.com domain name. */
    myshopifyDomain: Scalars['String']
    /** The shop's name. */
    name: Scalars['String']
    /** The navigation settings of the shop. */
    navigationSettings: Array<AdminNavigationItem>
    /** The prefix that appears before order numbers. */
    orderNumberFormatPrefix: Scalars['String']
    /** The suffix that appears after order numbers. */
    orderNumberFormatSuffix: Scalars['String']
    /**
     * List of the shop's order saved searches.
     * @deprecated Use `QueryRoot.orderSavedSearches` instead.
     */
    orderSavedSearches: AdminSavedSearchConnection
    /** A comma separated list of tags that have been added to orders. */
    orderTags: AdminStringConnection
    /**
     * List of orders placed on the shop.
     * @deprecated Use `QueryRoot.orders` instead.
     */
    orders: AdminOrderConnection
    /** Settings related to payments. */
    paymentSettings: AdminPaymentSettings
    /**
     * Number of pending orders on the shop.
     * @deprecated Use `limitedPendingOrderCount` instead
     */
    pendingOrderCount: Scalars['Int']
    /** The shop's plan. */
    plan: AdminShopPlan
    /**
     * List of the shop's price rule saved searches.
     * @deprecated Use `QueryRoot.priceRuleSavedSearches` instead.
     */
    priceRuleSavedSearches: AdminSavedSearchConnection
    /**
     * List of the shop’s price rules.
     * @deprecated Use `QueryRoot.priceRules` instead.
     */
    priceRules: AdminPriceRuleConnection
    /** The shop's primary domain name. */
    primaryDomain: AdminDomain
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<AdminPrivateMetafield>
    /** List of private metafields. */
    privateMetafields: AdminPrivateMetafieldConnection
    /**
     * Return a product by its handle.
     * @deprecated Use `QueryRoot.productByHandle` instead.
     */
    productByHandle?: Maybe<AdminProduct>
    /** All images of all products of the shop. */
    productImages: AdminImageConnection
    /**
     * List of the shop's product saved searches.
     * @deprecated Use `QueryRoot.productSavedSearches` instead.
     */
    productSavedSearches: AdminSavedSearchConnection
    /** A comma separated list of tags that have been added to products. */
    productTags: AdminStringConnection
    /** Types added to products. */
    productTypes: AdminStringConnection
    /**
     * List of the shop's product variants.
     * @deprecated Use `QueryRoot.productVariants` instead.
     */
    productVariants: AdminProductVariantConnection
    /** Vendors added to products. */
    productVendors: AdminStringConnection
    /**
     * List of the shop's products.
     * @deprecated Use `QueryRoot.products`.
     */
    products: AdminProductConnection
    /** Exposes the number of publications. */
    publicationCount: Scalars['Int']
    /** Resource limits of a shop. */
    resourceLimits: AdminShopResourceLimits
    /** The URL of the rich text editor. */
    richTextEditorUrl: Scalars['URL']
    /** Return admin search results. */
    search: AdminSearchResultConnection
    /** List of search filter options. */
    searchFilters: AdminSearchFilterOptions
    /** Whether the shop has outstanding setup steps. */
    setupRequired: Scalars['Boolean']
    /** Countries that the shop ships to. */
    shipsToCountries: Array<AdminCountryCode>
    /**
     * Shopify Payments account information, including balances and payouts.
     * @deprecated Use `QueryRoot.shopifyPaymentsAccount` instead.
     */
    shopifyPaymentsAccount?: Maybe<AdminShopifyPaymentsAccount>
    /** Storefront access token of a private application. Scoped per-application. */
    storefrontAccessTokens: AdminStorefrontAccessTokenConnection
    /**
     * The URL of the shop's storefront.
     * @deprecated Use `url` instead
     */
    storefrontUrl: Scalars['URL']
    /** Specifies whether or not taxes are charged for shipping. */
    taxShipping: Scalars['Boolean']
    /** The setting for whether applicable taxes are included in product prices. */
    taxesIncluded: Scalars['Boolean']
    /** The shop's time zone abbreviation. */
    timezoneAbbreviation: Scalars['String']
    /** The shop's time zone offset. */
    timezoneOffset: Scalars['String']
    /** The shop's time zone offset expressed in number of minutes. */
    timezoneOffsetMinutes: Scalars['Int']
    /** The translations associated with the resource. */
    translations: Array<AdminPublishedTranslation>
    /** The shop's unit system. */
    unitSystem: AdminUnitSystem
    /** All images uploaded to the shop. */
    uploadedImages: AdminImageConnection
    /** Fetch list of images uploaded to shop by ids. */
    uploadedImagesByIds: Array<AdminImage>
    /** The URL of the shop's storefront. */
    url: Scalars['URL']
    /** The shop's primary unit of weight for products and shipping. */
    weightUnit: AdminWeightUnit
  }

/** Represents the shop object. */
export type AdminShopAssignedFulfillmentOrdersArgs = {
  assignmentStatus?: Maybe<AdminFulfillmentOrderAssignmentStatus>
  locationIds?: Maybe<Array<Scalars['ID']>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminFulfillmentOrderSortKeys>
}

/** Represents the shop object. */
export type AdminShopAvailableChannelAppsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopChannelsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** Represents the shop object. */
export type AdminShopCollectionSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCollectionSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** Represents the shop object. */
export type AdminShopCurrencySettingsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopCustomerSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCustomerSavedSearchSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopCustomerTagsArgs = {
  first: Scalars['Int']
}

/** Represents the shop object. */
export type AdminShopCustomersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminCustomerSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopDraftOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopDraftOrderTagsArgs = {
  first: Scalars['Int']
}

/** Represents the shop object. */
export type AdminShopDraftOrdersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminDraftOrderSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopFulfillmentOrdersArgs = {
  includeClosed?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminFulfillmentOrderSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopInventoryItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopLocationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminLocationSortKeys>
  query?: Maybe<Scalars['String']>
  includeLegacy?: Maybe<Scalars['Boolean']>
  includeInactive?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopMarketingEventsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminMarketingEventSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents the shop object. */
export type AdminShopMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopOrderTagsArgs = {
  first: Scalars['Int']
  sort?: Maybe<AdminShopTagSort>
}

/** Represents the shop object. */
export type AdminShopOrdersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminOrderSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopPriceRuleSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopPriceRulesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminPriceRuleSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** Represents the shop object. */
export type AdminShopPrivateMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents the shop object. */
export type AdminShopPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopProductByHandleArgs = {
  handle: Scalars['String']
}

/** Represents the shop object. */
export type AdminShopProductImagesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductImageSortKeys>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Represents the shop object. */
export type AdminShopProductSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopProductTagsArgs = {
  first: Scalars['Int']
}

/** Represents the shop object. */
export type AdminShopProductTypesArgs = {
  first: Scalars['Int']
}

/** Represents the shop object. */
export type AdminShopProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductVariantSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopProductVendorsArgs = {
  first: Scalars['Int']
}

/** Represents the shop object. */
export type AdminShopProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminProductSortKeys>
  query?: Maybe<Scalars['String']>
  savedSearchId?: Maybe<Scalars['ID']>
}

/** Represents the shop object. */
export type AdminShopSearchArgs = {
  query: Scalars['String']
  types?: Maybe<Array<AdminSearchResultType>>
  first: Scalars['Int']
  after?: Maybe<Scalars['String']>
}

/** Represents the shop object. */
export type AdminShopStorefrontAccessTokensArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents the shop object. */
export type AdminShopTranslationsArgs = {
  locale: Scalars['String']
}

/** Represents the shop object. */
export type AdminShopUploadedImagesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<AdminShopImageSortKeys>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<AdminCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** Represents the shop object. */
export type AdminShopUploadedImagesByIdsArgs = {
  imageIds: Array<Scalars['ID']>
}

/** Alert message that appears in the Shopify admin. */
export type AdminShopAlert = {
  __typename?: 'ShopAlert'
  /** Button in the alert that links to related information. */
  action: AdminShopAlertAction
  /** Description of the alert. */
  description: Scalars['String']
}

/** An action associated to a shop alert. */
export type AdminShopAlertAction = {
  __typename?: 'ShopAlertAction'
  /** Action title. */
  title: Scalars['String']
  /** Action target URL. */
  url: Scalars['URL']
}

/**
 * Possible branding of a shop.
 * Branding can be used to define the look of a shop including its styling and logo in the Shopify Admin.
 */
export enum AdminShopBranding {
  /** Shop has Shopify Gold branding. */
  ShopifyGold = 'SHOPIFY_GOLD',
  /** Shop has Shopify Plus branding. */
  ShopifyPlus = 'SHOPIFY_PLUS',
  /** Shop has Rogers branding. */
  Rogers = 'ROGERS',
  /** Shop has Shopify branding. */
  Shopify = 'SHOPIFY'
}

/** Represents the shop's customer account requirement preference. */
export enum AdminShopCustomerAccountsSetting {
  Required = 'REQUIRED',
  Optional = 'OPTIONAL',
  Disabled = 'DISABLED'
}

/** Represents the feature set available to the shop. */
export type AdminShopFeatures = {
  __typename?: 'ShopFeatures'
  /** Whether a shop has access to avalara avatax. */
  avalaraAvatax: Scalars['Boolean']
  /** Branding of the shop. */
  branding: AdminShopBranding
  /** Whether a shop's storefront can have CAPTCHA protection. */
  captcha: Scalars['Boolean']
  /** Whether a shop's storefront can have CAPTCHA protection for domains not managed by Shopify. */
  captchaExternalDomains: Scalars['Boolean']
  /**
   * Whether the delivery profiles functionality is enabled for this shop.
   * @deprecated Delivery profiles are now 100% enabled across Shopify.
   */
  deliveryProfiles: Scalars['Boolean']
  /** Whether a shop has access to the dynamic remarketing feature. */
  dynamicRemarketing: Scalars['Boolean']
  /** Whether a shop can create gift cards. */
  giftCards: Scalars['Boolean']
  /** Display Harmonized System codes on products.  Used for customs when shipping cross-border. */
  harmonizedSystemCode: Scalars['Boolean']
  /** Whether to show the live view. Live view is hidden from merchants that are on a trial or don't have a storefront. */
  liveView: Scalars['Boolean']
  /** Whether the multi-location functionality is enabled for this shop. */
  multiLocation: Scalars['Boolean']
  /** Whether a shop has access to the onboarding visual. */
  onboardingVisual: Scalars['Boolean']
  /** Whether a shop has access to all reporting features. */
  reports: Scalars['Boolean']
  /**
   * Whether the shop has a Shopify Plus subscription.
   * @deprecated Use Shop.plan.shopifyPlus instead.
   */
  shopifyPlus: Scalars['Boolean']
  /** Whether to show metrics. Metrics are hidden for new merchants until they become meaningful. */
  showMetrics: Scalars['Boolean']
  /** Whether the shop has an online storefront. */
  storefront: Scalars['Boolean']
}

/** The set of valid sort keys for the ShopImage query. */
export enum AdminShopImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Available locale for a shop. */
export type AdminShopLocale = {
  __typename?: 'ShopLocale'
  /** Locale identifier. */
  locale: Scalars['String']
  /** Locale name. */
  name: Scalars['String']
  /** Whether or not this is the default locale for the shop. */
  primary: Scalars['Boolean']
  /** Whether or not the locale is published. */
  published: Scalars['Boolean']
}

/** Return type for `shopLocaleDisable` mutation. */
export type AdminShopLocaleDisablePayload = {
  __typename?: 'ShopLocaleDisablePayload'
  /** The locale identifier that was disabled. */
  locale?: Maybe<Scalars['String']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `shopLocaleEnable` mutation. */
export type AdminShopLocaleEnablePayload = {
  __typename?: 'ShopLocaleEnablePayload'
  /** The locale that was enabled. */
  shopLocale?: Maybe<AdminShopLocale>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the input fields for a shop locale. */
export type AdminShopLocaleInput = {
  /** Specifies the publication state of the locale. */
  published?: Maybe<Scalars['Boolean']>
}

/** Return type for `shopLocaleUpdate` mutation. */
export type AdminShopLocaleUpdatePayload = {
  __typename?: 'ShopLocaleUpdatePayload'
  /** The locale that was updated. */
  shopLocale?: Maybe<AdminShopLocale>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Represents the billing plan of the shop. */
export type AdminShopPlan = {
  __typename?: 'ShopPlan'
  /** The name of the shop's billing plan. */
  displayName: Scalars['String']
  /** Whether the shop is a partner development shop for testing purposes. */
  partnerDevelopment: Scalars['Boolean']
  /** Whether the shop has a Shopify Plus subscription. */
  shopifyPlus: Scalars['Boolean']
}

/** Resource limits of a shop. */
export type AdminShopResourceLimits = {
  __typename?: 'ShopResourceLimits'
  /** Maximum number of locations allowed. */
  locationLimit: Scalars['Int']
  /** Maximum number of product options allowed. */
  maxProductOptions: Scalars['Int']
  /** Maximum number of variants allowed. */
  maxProductVariants: Scalars['Int']
  /** Whether the shop has reached the limit of the number of URL redirects it can make for resources. */
  redirectLimitReached: Scalars['Boolean']
  /** SKU limits. If the shop has unlimited skus the quantity used cannot be retrieved. */
  skuResourceLimits: AdminResourceLimit
}

/** Possible sort of tags. */
export enum AdminShopTagSort {
  /** Alphabetical sort. */
  Alphabetical = 'ALPHABETICAL',
  /** Popularity sort. */
  Popular = 'POPULAR'
}

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type AdminShopifyPaymentsAccount = AdminNode & {
  __typename?: 'ShopifyPaymentsAccount'
  /** Whether the Shopify Payments setup is completed. */
  activated: Scalars['Boolean']
  /** Current balances in all currencies for the account. */
  balance: Array<AdminMoneyV2>
  /** All bank accounts configured for the Shopify Payments account. */
  bankAccounts: AdminShopifyPaymentsBankAccountConnection
  /**
   * Statement descriptor used for charges.
   *
   * This is what buyers will see on their credit card or bank statements when making a purchase.
   * @deprecated Use `chargeStatementDescriptors` instead
   */
  chargeStatementDescriptor?: Maybe<Scalars['String']>
  /**
   * Statement descriptors used for charges.
   *
   * This is what buyers will see on their credit card or bank statements when making a purchase.
   */
  chargeStatementDescriptors?: Maybe<AdminShopifyPaymentsChargeStatementDescriptor>
  /** The Shopify Payments account country. */
  country: Scalars['String']
  /** The default payout currency for the Shopify Payments account. */
  defaultCurrency: AdminCurrencyCode
  /** All disputes related to the Shopify Payments account. */
  disputes: AdminShopifyPaymentsDisputeConnection
  /** The fraud settings of the Shopify Payments account. */
  fraudSettings: AdminShopifyPaymentsFraudSettings
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The notifications settings for the account. */
  notificationSettings: AdminShopifyPaymentsNotificationSettings
  /** Whether the Shopify Payments account can be onboarded. */
  onboardable: Scalars['Boolean']
  /** Payout schedule for the account. */
  payoutSchedule: AdminShopifyPaymentsPayoutSchedule
  /**
   * Descriptor used for payouts.
   *
   * This is what merchants will see on their bank statement when receiving a payout.
   */
  payoutStatementDescriptor?: Maybe<Scalars['String']>
  /** All current and previous payouts made between the account and the bank account. */
  payouts: AdminShopifyPaymentsPayoutConnection
  /** The permitted documents for identity verification. */
  permittedVerificationDocuments: Array<AdminShopifyPaymentsVerificationDocument>
  /** The verifications necessary for this account. */
  verifications: Array<AdminShopifyPaymentsVerification>
}

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type AdminShopifyPaymentsAccountBankAccountsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type AdminShopifyPaymentsAccountDisputesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
}

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type AdminShopifyPaymentsAccountPayoutsArgs = {
  transactionType?: Maybe<AdminShopifyPaymentsPayoutTransactionType>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A bank account that can receive payouts. */
export type AdminShopifyPaymentsBankAccount = AdminNode & {
  __typename?: 'ShopifyPaymentsBankAccount'
  /** The account number of the bank account. */
  accountNumber: Scalars['String']
  /** The last digits of the account number (the rest is redacted). */
  accountNumberLastDigits: Scalars['String']
  /** The name of the bank. */
  bankName?: Maybe<Scalars['String']>
  /** The country of the bank. */
  country: AdminCountryCode
  /** The date that the bank account was created. */
  createdAt: Scalars['DateTime']
  /** The currency of the bank account. */
  currency: AdminCurrencyCode
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** All current and previous payouts made between the account and the bank account. */
  payouts: AdminShopifyPaymentsPayoutConnection
  /** The routing number of the bank account. */
  routingNumber: Scalars['String']
  /** The status of the bank account. */
  status: AdminShopifyPaymentsBankAccountStatus
}

/** A bank account that can receive payouts. */
export type AdminShopifyPaymentsBankAccountPayoutsArgs = {
  transactionType?: Maybe<AdminShopifyPaymentsPayoutTransactionType>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

export type AdminShopifyPaymentsBankAccountConnection = {
  __typename?: 'ShopifyPaymentsBankAccountConnection'
  /** A list of edges. */
  edges: Array<AdminShopifyPaymentsBankAccountEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminShopifyPaymentsBankAccountEdge = {
  __typename?: 'ShopifyPaymentsBankAccountEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ShopifyPaymentsBankAccountEdge. */
  node: AdminShopifyPaymentsBankAccount
}

/** The bank account status. */
export enum AdminShopifyPaymentsBankAccountStatus {
  /** A bank account that hasn't had any activity and that's not validated. */
  New = 'NEW',
  /** It was determined that the bank account exists. */
  Validated = 'VALIDATED',
  /** Bank account validation was successful. */
  Verified = 'VERIFIED',
  /** A payout to the bank account failed. */
  Errored = 'ERRORED'
}

/** The charge descriptors for a payments account. */
export type AdminShopifyPaymentsChargeStatementDescriptor = {
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String']
}

/** The charge descriptors for a payments account. */
export type AdminShopifyPaymentsDefaultChargeStatementDescriptor = AdminShopifyPaymentsChargeStatementDescriptor & {
  __typename?: 'ShopifyPaymentsDefaultChargeStatementDescriptor'
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String']
}

/** A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution. */
export type AdminShopifyPaymentsDispute = AdminLegacyInteroperability &
  AdminNode & {
    __typename?: 'ShopifyPaymentsDispute'
    /** The total amount disputed by the cardholder. */
    amount: AdminMoneyV2
    /** The deadline for evidence submission. */
    evidenceDueBy?: Maybe<Scalars['Date']>
    /** The date when evidence was sent. Returns null if evidence has not yet been sent. */
    evidenceSentOn?: Maybe<Scalars['Date']>
    /** The date when this dispute was resolved. Returns null if the dispute is not yet resolved. */
    finalizedOn?: Maybe<Scalars['Date']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The date when this dispute was initiated. */
    initiatedAt: Scalars['DateTime']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The order that contains the charge that is under dispute. */
    order?: Maybe<AdminOrder>
    /** The reason of the dispute. */
    reasonDetails: AdminShopifyPaymentsDisputeReasonDetails
    /** The current state of the dispute. */
    status: AdminDisputeStatus
    /** Indicates if this dispute is still in the inquiry phase or has turned into a chargeback. */
    type: AdminDisputeType
  }

export type AdminShopifyPaymentsDisputeConnection = {
  __typename?: 'ShopifyPaymentsDisputeConnection'
  /** A list of edges. */
  edges: Array<AdminShopifyPaymentsDisputeEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminShopifyPaymentsDisputeEdge = {
  __typename?: 'ShopifyPaymentsDisputeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ShopifyPaymentsDisputeEdge. */
  node: AdminShopifyPaymentsDispute
}

/** The reason for the dispute provided by the cardholder's bank. */
export enum AdminShopifyPaymentsDisputeReason {
  /** The cardholder claims that they didn’t authorize the payment. */
  Fraudulent = 'FRAUDULENT',
  /** The dispute is uncategorized, so you should contact the customer for additional details to find out why the payment was disputed. */
  General = 'GENERAL',
  /** The customer doesn’t recognize the payment appearing on their card statement. */
  Unrecognized = 'UNRECOGNIZED',
  /** The customer claims they were charged multiple times for the same product or service. */
  Duplicate = 'DUPLICATE',
  /** The customer claims that you continued to charge them after a subscription was canceled. */
  SubscriptionCancelled = 'SUBSCRIPTION_CANCELLED',
  /** The product or service was received but was defective, damaged, or not as described. */
  ProductUnacceptable = 'PRODUCT_UNACCEPTABLE',
  /** The customer claims they did not receive the products or services purchased. */
  ProductNotReceived = 'PRODUCT_NOT_RECEIVED',
  /** The customer claims that the purchased product was returned or the transaction was otherwise canceled, but you have not yet provided a refund or credit. */
  CreditNotProcessed = 'CREDIT_NOT_PROCESSED',
  /** The customer account associated with the purchase is incorrect. */
  IncorrectAccountDetails = 'INCORRECT_ACCOUNT_DETAILS',
  /** The customer's bank account has insufficient funds. */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** The customer's bank cannot process the charge. */
  BankCannotProcess = 'BANK_CANNOT_PROCESS',
  /** The customer's bank cannot proceed with the debit since it has not been authorized. */
  DebitNotAuthorized = 'DEBIT_NOT_AUTHORIZED',
  /** The customer initiated the dispute, so you should contact the customer for additional details to find out why the payment was disputed. */
  CustomerInitiated = 'CUSTOMER_INITIATED'
}

/** Details regarding a dispute reason. */
export type AdminShopifyPaymentsDisputeReasonDetails = {
  __typename?: 'ShopifyPaymentsDisputeReasonDetails'
  /** The raw code provided by the payment network. */
  networkReasonCode?: Maybe<Scalars['String']>
  /** The reason for the dispute provided by the cardholder's banks. */
  reason: AdminShopifyPaymentsDisputeReason
}

/** The fraud settings of a payments account. */
export type AdminShopifyPaymentsFraudSettings = {
  __typename?: 'ShopifyPaymentsFraudSettings'
  /** Decline a charge if there is an AVS failure. */
  declineChargeOnAvsFailure: Scalars['Boolean']
  /** Decline a charge if there is an CVC failure. */
  declineChargeOnCvcFailure: Scalars['Boolean']
}

/** The charge descriptors for a Japanese payments account. */
export type AdminShopifyPaymentsJpChargeStatementDescriptor = AdminShopifyPaymentsChargeStatementDescriptor & {
  __typename?: 'ShopifyPaymentsJpChargeStatementDescriptor'
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>
  /** The charge statement descriptor in kana. */
  kana?: Maybe<Scalars['String']>
  /** The charge statement descriptor in kanji. */
  kanji?: Maybe<Scalars['String']>
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String']
}

/** The notification settings for the account. */
export type AdminShopifyPaymentsNotificationSettings = {
  __typename?: 'ShopifyPaymentsNotificationSettings'
  /** Receive email notifications when new payouts are sent or payouts fail. */
  payouts: Scalars['Boolean']
}

/**
 * Payouts represent the movement of money between a merchant's Shopify
 * Payments balance and their bank account.
 */
export type AdminShopifyPaymentsPayout = AdminLegacyInteroperability &
  AdminNode & {
    __typename?: 'ShopifyPaymentsPayout'
    /** The bank account for the payout. */
    bankAccount: AdminShopifyPaymentsBankAccount
    /**
     * The total amount and currency of the payout.
     * @deprecated Use `net` instead
     */
    gross: AdminMoneyV2
    /** Globally unique identifier. */
    id: Scalars['ID']
    /**
     * The exact time when the payout was issued. The payout only contains
     * balance transactions that were available at this time.
     */
    issuedAt: Scalars['DateTime']
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The total amount and currency of the payout. */
    net: AdminMoneyV2
    /** The transfer status of the payout. */
    status: AdminShopifyPaymentsPayoutStatus
    /** The summary of the payout. */
    summary: AdminShopifyPaymentsPayoutSummary
    /** The direction of the payout. */
    transactionType: AdminShopifyPaymentsPayoutTransactionType
  }

export type AdminShopifyPaymentsPayoutConnection = {
  __typename?: 'ShopifyPaymentsPayoutConnection'
  /** A list of edges. */
  edges: Array<AdminShopifyPaymentsPayoutEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminShopifyPaymentsPayoutEdge = {
  __typename?: 'ShopifyPaymentsPayoutEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ShopifyPaymentsPayoutEdge. */
  node: AdminShopifyPaymentsPayout
}

/** The interval at which payouts are sent to the connected bank account. */
export enum AdminShopifyPaymentsPayoutInterval {
  /** Each business day. */
  Daily = 'DAILY',
  /** Each week, on the day of week specified by weeklyAnchor. */
  Weekly = 'WEEKLY',
  /** Each month, on the day of month specified by monthlyAnchor. */
  Monthly = 'MONTHLY',
  /** Payouts will not be automatically made. */
  Manual = 'MANUAL'
}

/** The payment schedule for a payments account. */
export type AdminShopifyPaymentsPayoutSchedule = {
  __typename?: 'ShopifyPaymentsPayoutSchedule'
  /** The interval at which payouts are sent to the connected bank account. */
  interval: AdminShopifyPaymentsPayoutInterval
  /**
   * The day of the month funds will be paid out.
   *
   * The value can be any day of the month from the 1st to the 31st.
   * If the payment interval is set to monthly, this value will be used.
   * Payouts scheduled between 29-31st of the month are sent on the last day of shorter months.
   */
  monthlyAnchor?: Maybe<Scalars['Int']>
  /**
   * The day of the week funds will be paid out.
   *
   * The value can be any weekday from Monday to Friday.
   * If the payment interval is set to weekly, this value will be used.
   */
  weeklyAnchor?: Maybe<AdminDayOfTheWeek>
}

/** The transfer status of the payout. */
export enum AdminShopifyPaymentsPayoutStatus {
  /**
   * The payout has been created and had transactions assigned to it, but
   * it has not yet been submitted to the bank.
   */
  Scheduled = 'SCHEDULED',
  /** The payout has been submitted to the bank. */
  InTransit = 'IN_TRANSIT',
  /** The payout has been successfully deposited into the bank. */
  Paid = 'PAID',
  /** The payout has been declined by the bank. */
  Failed = 'FAILED',
  /** The payout has been canceled by Shopify. */
  Canceled = 'CANCELED'
}

/**
 * Breakdown of the total fees and gross of each of the different types of transactions associated
 * with the payout.
 */
export type AdminShopifyPaymentsPayoutSummary = {
  __typename?: 'ShopifyPaymentsPayoutSummary'
  /** Total fees for all adjustments including disputes. */
  adjustmentsFee: AdminMoneyV2
  /** Total gross amount for all adjustments including disputes. */
  adjustmentsGross: AdminMoneyV2
  /** Total fees for all charges. */
  chargesFee: AdminMoneyV2
  /** Total gross amount for all charges. */
  chargesGross: AdminMoneyV2
  /** Total fees for all refunds. */
  refundsFee: AdminMoneyV2
  /** Total gross amount for all refunds. */
  refundsFeeGross: AdminMoneyV2
  /** Total fees for all reserved funds. */
  reservedFundsFee: AdminMoneyV2
  /** Total gross amount for all reserved funds. */
  reservedFundsGross: AdminMoneyV2
  /** Total fees for all retried payouts. */
  retriedPayoutsFee: AdminMoneyV2
  /** Total gross amount for all retried payouts. */
  retriedPayoutsGross: AdminMoneyV2
}

/** The possible transaction types for a payout. */
export enum AdminShopifyPaymentsPayoutTransactionType {
  /** The payout is a deposit. */
  Deposit = 'DEPOSIT',
  /** The payout is a withdrawal. */
  Withdrawal = 'WITHDRAWAL'
}

/**
 * Each subject (individual) of an account has a verification object giving
 *  information about the verification state.
 */
export type AdminShopifyPaymentsVerification = AdminNode & {
  __typename?: 'ShopifyPaymentsVerification'
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The status of the verification. */
  status: AdminShopifyPaymentsVerificationStatus
  /** The subject/individual who has to be verified. */
  subject: AdminShopifyPaymentsVerificationSubject
}

/** A document which can be used to verify an individual. */
export type AdminShopifyPaymentsVerificationDocument = {
  __typename?: 'ShopifyPaymentsVerificationDocument'
  /** True if the back side of the document is required. */
  backRequired: Scalars['Boolean']
  /** True if the front side of the document is required. */
  frontRequired: Scalars['Boolean']
  /** The type of the document which can be used for verification. */
  type: AdminShopifyPaymentsVerificationDocumentType
}

/** The types of possible verification documents. */
export enum AdminShopifyPaymentsVerificationDocumentType {
  /** The subject's driver's license. */
  DriversLicense = 'DRIVERS_LICENSE',
  /** A government's identification document of the subject. */
  GovernmentIdentification = 'GOVERNMENT_IDENTIFICATION',
  /** The subject's passport. */
  Passport = 'PASSPORT'
}

/** The status of a verification. */
export enum AdminShopifyPaymentsVerificationStatus {
  /** The verification has been verified. */
  Verified = 'VERIFIED',
  /** The verification has not yet been verified. */
  Unverified = 'UNVERIFIED',
  /** The verification request has been submitted but a response has not yet been given. */
  Pending = 'PENDING'
}

/** The verification subject represents an individual that has to be verified. */
export type AdminShopifyPaymentsVerificationSubject = {
  __typename?: 'ShopifyPaymentsVerificationSubject'
  /** The family name of the individual to verify. */
  familyName: Scalars['String']
  /** The given name of the individual to verify. */
  givenName: Scalars['String']
}

/** Image to be uploaded. */
export type AdminStageImageInput = {
  /** Image resource. */
  resource: AdminStagedUploadTargetGenerateUploadResource
  /** Image filename. */
  filename: Scalars['String']
  /** Image MIME type. */
  mimeType: Scalars['String']
  /** HTTP method to be used by the Staged Upload. */
  httpMethod?: Maybe<AdminStagedUploadHttpMethodType>
}

/** Staged media target information. */
export type AdminStagedMediaUploadTarget = {
  __typename?: 'StagedMediaUploadTarget'
  /** Parameters of the media to be uploaded. */
  parameters: Array<AdminStagedUploadParameter>
  /** The url to be passed as the original_source for the product create media mutation input. */
  resourceUrl?: Maybe<Scalars['URL']>
  /** Media URL. */
  url?: Maybe<Scalars['URL']>
}

/** Possible HTTP method of a staged upload target. */
export enum AdminStagedUploadHttpMethodType {
  /** The POST HTTP method. */
  Post = 'POST',
  /** The PUT HTTP method. */
  Put = 'PUT'
}

/** Media to be uploaded. */
export type AdminStagedUploadInput = {
  /** Media resource. */
  resource: AdminStagedUploadTargetGenerateUploadResource
  /** Media filename. */
  filename: Scalars['String']
  /** Media MIME type. */
  mimeType: Scalars['String']
  /** HTTP method to be used by the Staged Upload. */
  httpMethod?: Maybe<AdminStagedUploadHttpMethodType>
  /** Size of the file to upload, in bytes. This is required for VIDEO and MODEL_3D resources. */
  fileSize?: Maybe<Scalars['UnsignedInt64']>
}

/** Upload parameter of a Media. */
export type AdminStagedUploadParameter = {
  __typename?: 'StagedUploadParameter'
  /** Parameter name. */
  name: Scalars['String']
  /** Parameter value. */
  value: Scalars['String']
}

/** Staged target information. */
export type AdminStagedUploadTarget = {
  __typename?: 'StagedUploadTarget'
  /** Parameters of an image to be uploaded. */
  parameters: Array<AdminImageUploadParameter>
  /** Image URL. */
  url: Scalars['String']
}

/** Specifies the fields required to generate the URL and parameters needed to upload an asset to Shopify. */
export type AdminStagedUploadTargetGenerateInput = {
  /** The resource type being uploaded. */
  resource: AdminStagedUploadTargetGenerateUploadResource
  /** The filename of the asset being uploaded. */
  filename: Scalars['String']
  /** The MIME type of the asset being uploaded. */
  mimeType: Scalars['String']
  /** The HTTP method to be used by the staged upload. */
  httpMethod?: Maybe<AdminStagedUploadHttpMethodType>
  /** The size of the file to upload, in bytes. */
  fileSize?: Maybe<Scalars['UnsignedInt64']>
}

/** Return type for `stagedUploadTargetGenerate` mutation. */
export type AdminStagedUploadTargetGeneratePayload = {
  __typename?: 'StagedUploadTargetGeneratePayload'
  /** The signed parameters that can be used to upload the asset. */
  parameters: Array<AdminMutationsStagedUploadTargetGenerateUploadParameter>
  /** The signed URL where the asset can be uploaded. */
  url: Scalars['String']
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the resource type to receive. */
export enum AdminStagedUploadTargetGenerateUploadResource {
  /** A timeline event. */
  Timeline = 'TIMELINE',
  /** A product image. */
  ProductImage = 'PRODUCT_IMAGE',
  /** A collection image. */
  CollectionImage = 'COLLECTION_IMAGE',
  /** A shop image. */
  ShopImage = 'SHOP_IMAGE',
  /** Merchandising::Video resource representation. */
  Video = 'VIDEO',
  /** Merchandising::Model3d resource representation. */
  Model_3D = 'MODEL_3D',
  /** Merchandising::Image resource representation. */
  Image = 'IMAGE'
}

/** Return type for `stagedUploadTargetsGenerate` mutation. */
export type AdminStagedUploadTargetsGeneratePayload = {
  __typename?: 'StagedUploadTargetsGeneratePayload'
  /** The staged upload targets that were generated. */
  urls?: Maybe<Array<AdminStagedUploadTarget>>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `stagedUploadsCreate` mutation. */
export type AdminStagedUploadsCreatePayload = {
  __typename?: 'StagedUploadsCreatePayload'
  /** The staged upload targets that were generated. */
  stagedTargets?: Maybe<Array<AdminStagedMediaUploadTarget>>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Token used to delegate unauthenticated access scopes to clients that need to access the unautheticated Storefront API. */
export type AdminStorefrontAccessToken = AdminNode & {
  __typename?: 'StorefrontAccessToken'
  /** List of permissions associated with the token. */
  accessScopes: Array<AdminAccessScope>
  /** The issued public access token. */
  accessToken: Scalars['String']
  /** The date and time when the public access token was created. */
  createdAt: Scalars['DateTime']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** An arbitrary title for each token determined by the developer, used for reference         purposes. */
  title: Scalars['String']
  /** The date and time when the storefront access token was updated. */
  updatedAt: Scalars['DateTime']
}

export type AdminStorefrontAccessTokenConnection = {
  __typename?: 'StorefrontAccessTokenConnection'
  /** A list of edges. */
  edges: Array<AdminStorefrontAccessTokenEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `storefrontAccessTokenCreate` mutation. */
export type AdminStorefrontAccessTokenCreatePayload = {
  __typename?: 'StorefrontAccessTokenCreatePayload'
  /** The user's shop. */
  shop: AdminShop
  /** The storefront access token. */
  storefrontAccessToken?: Maybe<AdminStorefrontAccessToken>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Specifies the input fields to delete a storefront access token. */
export type AdminStorefrontAccessTokenDeleteInput = {
  /** The ID of the storefront access token to delete. */
  id: Scalars['ID']
}

/** Return type for `storefrontAccessTokenDelete` mutation. */
export type AdminStorefrontAccessTokenDeletePayload = {
  __typename?: 'StorefrontAccessTokenDeletePayload'
  /** The ID of the deleted storefront access token. */
  deletedStorefrontAccessTokenId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminStorefrontAccessTokenEdge = {
  __typename?: 'StorefrontAccessTokenEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StorefrontAccessTokenEdge. */
  node: AdminStorefrontAccessToken
}

/** Specifies the input fields for a storefront access token. */
export type AdminStorefrontAccessTokenInput = {
  /** A title for the storefront access token. */
  title: Scalars['String']
}

export type AdminStringConnection = {
  __typename?: 'StringConnection'
  /** A list of edges. */
  edges: Array<AdminStringEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminStringEdge = {
  __typename?: 'StringEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StringEdge. */
  node: Scalars['String']
}

/** Represents a suggested transaction. */
export type AdminSuggestedOrderTransaction = {
  __typename?: 'SuggestedOrderTransaction'
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']>
  /**
   * The amount of the transaction.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money']
  /** The amount on the order transaction in applicable currencies. */
  amountSet: AdminMoneyBag
  /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']>
  /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']>
  /** Specifies the kind of the suggested order transaction. */
  kind: AdminSuggestedOrderTransactionKind
  /**
   * Specifies the available amount to refund on the gateway. Only available within SuggestedRefund.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable?: Maybe<Scalars['Money']>
  /** Specifies the available amount to refund on the gateway in shop and presentment currencies. Only available within SuggestedRefund. */
  maximumRefundableSet?: Maybe<AdminMoneyBag>
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<AdminOrderTransaction>
}

/** Specifies the kind of the suggested order transaction. */
export enum AdminSuggestedOrderTransactionKind {
  /** A suggested refund transaction for an order. */
  SuggestedRefund = 'SUGGESTED_REFUND'
}

/** Represents the suggested refund to be submitted based on the items being returned. */
export type AdminSuggestedRefund = {
  __typename?: 'SuggestedRefund'
  /**
   * The total monetary value to be refunded.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money']
  /** The total monetary value to be refunded in shop and presentment currencies. */
  amountSet: AdminMoneyBag
  /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotalSet: AdminMoneyBag
  /**
   * The total monetary value available to refund.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable: Scalars['Money']
  /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundableSet: AdminMoneyBag
  /** An array of line items that will be returned to the customer. */
  refundLineItems: Array<AdminRefundLineItem>
  /** Refund details for shipping costs paid by customer. */
  shipping: AdminShippingRefund
  /**
   * The sum of all the prices of the line items being refunded.
   * @deprecated Use `subtotalSet` instead
   */
  subtotal: Scalars['Money']
  /** The sum of all the prices of the line items being refunded in shop and presentment currencies. */
  subtotalSet: AdminMoneyBag
  /** Array of SuggestedOrderTransaction items. */
  suggestedTransactions: Array<AdminSuggestedOrderTransaction>
  /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmountSet: AdminMoneyBag
  /** The sum of all the taxes being refunded from the order (must be positive) in shop and presentment currencies. */
  totalTaxSet: AdminMoneyBag
  /**
   * The sum of all the taxes being refunded from the order (must be positive).
   * @deprecated Use `totalTaxSet` instead
   */
  totalTaxes: Scalars['Money']
}

/** Return type for `tagsAdd` mutation. */
export type AdminTagsAddPayload = {
  __typename?: 'TagsAddPayload'
  /** The object that was updated. */
  node?: Maybe<AdminNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `tagsRemove` mutation. */
export type AdminTagsRemovePayload = {
  __typename?: 'TagsRemovePayload'
  /** The object that was updated. */
  node?: Maybe<AdminNode>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Available customer tax exemptions. */
export enum AdminTaxExemption {
  /** This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada. */
  CaStatusCardExemption = 'CA_STATUS_CARD_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia. */
  CaBcResellerExemption = 'CA_BC_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba. */
  CaMbResellerExemption = 'CA_MB_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan. */
  CaSkResellerExemption = 'CA_SK_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada. */
  CaDiplomatExemption = 'CA_DIPLOMAT_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia. */
  CaBcCommercialFisheryExemption = 'CA_BC_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba. */
  CaMbCommercialFisheryExemption = 'CA_MB_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia. */
  CaNsCommercialFisheryExemption = 'CA_NS_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island. */
  CaPeCommercialFisheryExemption = 'CA_PE_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan. */
  CaSkCommercialFisheryExemption = 'CA_SK_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia. */
  CaBcProductionAndMachineryExemption = 'CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan. */
  CaSkProductionAndMachineryExemption = 'CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia. */
  CaBcSubContractorExemption = 'CA_BC_SUB_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan. */
  CaSkSubContractorExemption = 'CA_SK_SUB_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia. */
  CaBcContractorExemption = 'CA_BC_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan. */
  CaSkContractorExemption = 'CA_SK_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario. */
  CaOnPurchaseExemption = 'CA_ON_PURCHASE_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba. */
  CaMbFarmerExemption = 'CA_MB_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia. */
  CaNsFarmerExemption = 'CA_NS_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan. */
  CaSkFarmerExemption = 'CA_SK_FARMER_EXEMPTION'
}

/** Represents the information about the tax charged on the associated line item. */
export type AdminTaxLine = {
  __typename?: 'TaxLine'
  /**
   * The amount of tax to be charged.
   * @deprecated Use `priceSet` instead
   */
  price: Scalars['Money']
  /** The amount of tax to be charged in shop and presentment currencies. */
  priceSet: AdminMoneyBag
  /** The tax rate to be applied. */
  rate?: Maybe<Scalars['Float']>
  /** The percentage of the price that the tax rate represents. */
  ratePercentage?: Maybe<Scalars['Float']>
  /** The name of the tax. */
  title: Scalars['String']
}

/** A tender transaction represents a transaction which modifies the shop's balance. */
export type AdminTenderTransaction = AdminNode & {
  __typename?: 'TenderTransaction'
  /** The amount and currency of the tender transaction. */
  amount: AdminMoneyV2
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Information about the payment method used for this transaction. */
  paymentMethod?: Maybe<Scalars['String']>
  /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars['DateTime']>
  /** The remote gateway reference associated with the tender transaction. */
  remoteReference?: Maybe<Scalars['String']>
  /** Whether the transaction is a test transaction. */
  test: Scalars['Boolean']
  /** Information about the payment instrument used for this transaction. */
  transactionDetails?: Maybe<AdminTenderTransactionDetails>
}

export type AdminTenderTransactionConnection = {
  __typename?: 'TenderTransactionConnection'
  /** A list of edges. */
  edges: Array<AdminTenderTransactionEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Information about the credit card used for this transaction. */
export type AdminTenderTransactionCreditCardDetails = {
  __typename?: 'TenderTransactionCreditCardDetails'
  /** The name of the company that issued the customer's credit card. */
  creditCardCompany?: Maybe<Scalars['String']>
  /** The customer's credit card number, with most of the leading digits redacted. */
  creditCardNumber?: Maybe<Scalars['String']>
}

/** Information about the payment instrument used for this transaction. */
export type AdminTenderTransactionDetails = AdminTenderTransactionCreditCardDetails

export type AdminTenderTransactionEdge = {
  __typename?: 'TenderTransactionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of TenderTransactionEdge. */
  node: AdminTenderTransaction
}

/** Specifies the fields for tracking information. */
export type AdminTrackingInfoInput = {
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['String']>
}

/** Specifies all possible fields for updating tracking information. */
export type AdminTrackingInfoUpdateInput = {
  /** Tracking information consisting of one or more tracking URLs and numbers associated with the fulfillment. */
  trackingDetails?: Maybe<Array<AdminTrackingInfoInput>>
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>
  /** Indicates whether the customer will be notified of this update and future updates for this fulfillment. */
  notifyCustomer?: Maybe<Scalars['Boolean']>
}

/** Translatable content of a resource's field. */
export type AdminTranslatableContent = {
  __typename?: 'TranslatableContent'
  /** Digest (hash) of the content. */
  digest?: Maybe<Scalars['String']>
  /** Content key. */
  key: Scalars['String']
  /** Content locale. */
  locale: Scalars['String']
  /** Content value. */
  value?: Maybe<Scalars['String']>
}

/** A resource that has translatable fields. */
export type AdminTranslatableResource = {
  __typename?: 'TranslatableResource'
  /** GID of the resource. */
  resourceId: Scalars['ID']
  /** Translatable content. */
  translatableContent: Array<AdminTranslatableContent>
  /** Translatable content translations. */
  translations: Array<AdminTranslation>
}

/** A resource that has translatable fields. */
export type AdminTranslatableResourceTranslationsArgs = {
  locale: Scalars['String']
  outdated?: Maybe<Scalars['Boolean']>
}

export type AdminTranslatableResourceConnection = {
  __typename?: 'TranslatableResourceConnection'
  /** A list of edges. */
  edges: Array<AdminTranslatableResourceEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

export type AdminTranslatableResourceEdge = {
  __typename?: 'TranslatableResourceEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of TranslatableResourceEdge. */
  node: AdminTranslatableResource
}

/** Specifies the type of resources that are translatable. */
export enum AdminTranslatableResourceType {
  /** Represents a product. */
  Product = 'PRODUCT',
  /** Represents a product variant. */
  ProductVariant = 'PRODUCT_VARIANT',
  /** Represents an email template. */
  EmailTemplate = 'EMAIL_TEMPLATE',
  /** Represents an online store theme. */
  OnlineStoreTheme = 'ONLINE_STORE_THEME',
  /** Represents an article. */
  OnlineStoreArticle = 'ONLINE_STORE_ARTICLE',
  /** Represents an online store blog. */
  OnlineStoreBlog = 'ONLINE_STORE_BLOG',
  /** Represents an online store page. */
  OnlineStorePage = 'ONLINE_STORE_PAGE',
  /** Represents a collection of products. */
  Collection = 'COLLECTION',
  /** Represents a link to direct users to. */
  Link = 'LINK',
  /** Represents a metafield. */
  Metafield = 'METAFIELD',
  /** Represents an SMS template. */
  SmsTemplate = 'SMS_TEMPLATE',
  /** Represents a shop. */
  Shop = 'SHOP',
  /** Represents a shop policy. */
  ShopPolicy = 'SHOP_POLICY',
  /** Represents a payment gateway. */
  PaymentGateway = 'PAYMENT_GATEWAY',
  /** Represents a custom product property name like "Size", "Color", and "Material". */
  ProductOption = 'PRODUCT_OPTION',
  /** Represents a delivery method definition. For example, "Standard", or "Expedited". */
  DeliveryMethodDefinition = 'DELIVERY_METHOD_DEFINITION'
}

/** Translation of a field of a resource. */
export type AdminTranslation = {
  __typename?: 'Translation'
  /** Translation key. */
  key: Scalars['String']
  /** Translation locale. */
  locale: Scalars['String']
  /** Marked as outdated. */
  outdated: Scalars['Boolean']
  /** Translation value. */
  value?: Maybe<Scalars['String']>
}

/** Possible error codes that could be returned by TranslationUserError. */
export enum AdminTranslationErrorCode {
  /** Input value is blank. */
  Blank = 'BLANK',
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Resource does not exist. */
  ResourceNotFound = 'RESOURCE_NOT_FOUND',
  /** Too many translation keys for resource. */
  TooManyKeysForResource = 'TOO_MANY_KEYS_FOR_RESOURCE',
  /** Translation key is invalid. */
  InvalidKeyForModel = 'INVALID_KEY_FOR_MODEL',
  /** Translation value is invalid. */
  FailsResourceValidation = 'FAILS_RESOURCE_VALIDATION',
  /** Translatable content is invalid. */
  InvalidTranslatableContent = 'INVALID_TRANSLATABLE_CONTENT',
  /** Locale is invalid for the shop. */
  InvalidLocaleForShop = 'INVALID_LOCALE_FOR_SHOP',
  /** Locale language code is invalid. */
  InvalidCode = 'INVALID_CODE',
  /** Locale code format is invalid. */
  InvalidFormat = 'INVALID_FORMAT'
}

/** Provides the fields and values to use when creating or updating a translation. */
export type AdminTranslationInput = {
  /** The locale of the translation. */
  locale: Scalars['String']
  /** The key of the translation. */
  key: Scalars['String']
  /** The value of the translation. */
  value: Scalars['String']
  /** The digest (hash) of the content being translated. */
  translatableContentDigest: Scalars['String']
}

/** Represents an error that happens during the execution of a translation mutation. */
export type AdminTranslationUserError = AdminDisplayableError & {
  __typename?: 'TranslationUserError'
  /** Error code to uniquely identify the error. */
  code?: Maybe<AdminTranslationErrorCode>
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Return type for `translationsRegister` mutation. */
export type AdminTranslationsRegisterPayload = {
  __typename?: 'TranslationsRegisterPayload'
  /** The translations that were created or updated. */
  translations?: Maybe<Array<AdminTranslation>>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminTranslationUserError>
}

/** Return type for `translationsRemove` mutation. */
export type AdminTranslationsRemovePayload = {
  __typename?: 'TranslationsRemovePayload'
  /** The translations that were deleted. */
  translations?: Maybe<Array<AdminTranslation>>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminTranslationUserError>
}

/**
 * Specifies the
 * [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters)
 * that are associated with a related marketing campaign.
 */
export type AdminUtmInput = {
  /** The name of the UTM campaign. */
  campaign: Scalars['String']
  /** The name of the website or application where the referral link exists. */
  source: Scalars['String']
  /** The UTM campaign medium. */
  medium: Scalars['String']
}

/** Represents a set of UTM parameters. */
export type AdminUtmParameters = {
  __typename?: 'UTMParameters'
  /** The name of a marketing campaign. */
  campaign?: Maybe<Scalars['String']>
  /** Identifies specific content in a marketing campaign. Used to differentiate between similar content or links in a marketing campaign to determine which is the most effective. */
  content?: Maybe<Scalars['String']>
  /** The medium of a marketing campaign, such as a banner or email newsletter. */
  medium?: Maybe<Scalars['String']>
  /** The source of traffic to the merchant's store, such as Google or an email newsletter. */
  source?: Maybe<Scalars['String']>
  /** Paid search terms used by a marketing campaign. */
  term?: Maybe<Scalars['String']>
}

/** Systems of weights and measures. */
export enum AdminUnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM'
}

/** Specifies the input fields required to update a media object. */
export type AdminUpdateMediaInput = {
  /** Specifies the media to update. */
  id: Scalars['ID']
  /** The source from which to update the media preview image. May be an external URL or signed upload URL. */
  previewImageSource?: Maybe<Scalars['String']>
  /** The alt text associated to the media. */
  alt?: Maybe<Scalars['String']>
}

/** Represents an error in the input of a mutation. */
export type AdminUserError = AdminDisplayableError & {
  __typename?: 'UserError'
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Represents a Shopify hosted video. */
export type AdminVideo = AdminNode &
  AdminMedia & {
    __typename?: 'Video'
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: AdminMediaContentType
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<AdminMediaError>
    /** The original source for a video. */
    originalSource?: Maybe<AdminVideoSource>
    /** The preview image for the media. */
    preview?: Maybe<AdminMediaPreviewImage>
    /** The sources for a video. */
    sources: Array<AdminVideoSource>
    /** Current status of the media. */
    status: AdminMediaStatus
  }

/** Represents a source for a Shopify hosted video. */
export type AdminVideoSource = {
  __typename?: 'VideoSource'
  /** The format of the video source. */
  format: Scalars['String']
  /** The height of the video. */
  height: Scalars['Int']
  /** The video MIME type. */
  mimeType: Scalars['String']
  /** The URL of the video. */
  url: Scalars['String']
  /** The width of the video. */
  width: Scalars['Int']
}

/** Represents a subscription to a webhook. */
export type AdminWebhookSubscription = AdminNode &
  AdminLegacyInteroperability & {
    __typename?: 'WebhookSubscription'
    /**
     * URL where the webhook subscription should send the POST request when the event occurs.
     * @deprecated Use `endpoint` instead
     */
    callbackUrl: Scalars['URL']
    /** The date and time when the webhook subscription was created. */
    createdAt: Scalars['DateTime']
    /** The format in which the webhook subscription should send the data. */
    format: AdminWebhookSubscriptionFormat
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** The list of fields to be included in the webhook subscription. */
    includeFields: Array<Scalars['String']>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64']
    /** The list of namespaces for any metafields that should be included in the webhook subscription. */
    metafieldNamespaces: Array<Scalars['String']>
    /** The type of event that triggers the webhook. */
    topic: AdminWebhookSubscriptionTopic
    /** The date and time when the webhook subscription was updated. */
    updatedAt: Scalars['DateTime']
  }

export type AdminWebhookSubscriptionConnection = {
  __typename?: 'WebhookSubscriptionConnection'
  /** A list of edges. */
  edges: Array<AdminWebhookSubscriptionEdge>
  /** Information to aid in pagination. */
  pageInfo: AdminPageInfo
}

/** Return type for `webhookSubscriptionCreate` mutation. */
export type AdminWebhookSubscriptionCreatePayload = {
  __typename?: 'WebhookSubscriptionCreatePayload'
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
  /** The webhook subscription that was created. */
  webhookSubscription?: Maybe<AdminWebhookSubscription>
}

/** Return type for `webhookSubscriptionDelete` mutation. */
export type AdminWebhookSubscriptionDeletePayload = {
  __typename?: 'WebhookSubscriptionDeletePayload'
  /** The ID of the deleted webhook subscription. */
  deletedWebhookSubscriptionId?: Maybe<Scalars['ID']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

export type AdminWebhookSubscriptionEdge = {
  __typename?: 'WebhookSubscriptionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of WebhookSubscriptionEdge. */
  node: AdminWebhookSubscription
}

/** The supported formats for webhook subscriptions. */
export enum AdminWebhookSubscriptionFormat {
  Json = 'JSON',
  Xml = 'XML'
}

/** Specifies the input fields for a webhook subscription. */
export type AdminWebhookSubscriptionInput = {
  /** URL where the webhook subscription should send the POST request when the event occurs. */
  callbackUrl?: Maybe<Scalars['URL']>
  /** The format in which the webhook subscription should send the data. */
  format?: Maybe<AdminWebhookSubscriptionFormat>
  /** The list of fields to be included in the webhook subscription. */
  includeFields?: Maybe<Array<Scalars['String']>>
  /** The list of namespaces for any metafields that should be included in the webhook subscription. */
  metafieldNamespaces?: Maybe<Array<Scalars['String']>>
}

/** The set of valid sort keys for the WebhookSubscription query. */
export enum AdminWebhookSubscriptionSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The supported topics for webhook subscriptions. */
export enum AdminWebhookSubscriptionTopic {
  /** The webhook topic for `app/uninstalled` events. */
  AppUninstalled = 'APP_UNINSTALLED',
  /** The webhook topic for `carts/create` events. */
  CartsCreate = 'CARTS_CREATE',
  /** The webhook topic for `carts/update` events. */
  CartsUpdate = 'CARTS_UPDATE',
  /** The webhook topic for `channels/delete` events. */
  ChannelsDelete = 'CHANNELS_DELETE',
  /** The webhook topic for `checkouts/create` events. */
  CheckoutsCreate = 'CHECKOUTS_CREATE',
  /** The webhook topic for `checkouts/delete` events. */
  CheckoutsDelete = 'CHECKOUTS_DELETE',
  /** The webhook topic for `checkouts/update` events. */
  CheckoutsUpdate = 'CHECKOUTS_UPDATE',
  /** The webhook topic for `collection_listings/add` events. */
  CollectionListingsAdd = 'COLLECTION_LISTINGS_ADD',
  /** The webhook topic for `collection_listings/remove` events. */
  CollectionListingsRemove = 'COLLECTION_LISTINGS_REMOVE',
  /** The webhook topic for `collection_listings/update` events. */
  CollectionListingsUpdate = 'COLLECTION_LISTINGS_UPDATE',
  /** The webhook topic for `collection_publications/create` events. */
  CollectionPublicationsCreate = 'COLLECTION_PUBLICATIONS_CREATE',
  /** The webhook topic for `collection_publications/delete` events. */
  CollectionPublicationsDelete = 'COLLECTION_PUBLICATIONS_DELETE',
  /** The webhook topic for `collection_publications/update` events. */
  CollectionPublicationsUpdate = 'COLLECTION_PUBLICATIONS_UPDATE',
  /** The webhook topic for `collections/create` events. */
  CollectionsCreate = 'COLLECTIONS_CREATE',
  /** The webhook topic for `collections/delete` events. */
  CollectionsDelete = 'COLLECTIONS_DELETE',
  /** The webhook topic for `collections/update` events. */
  CollectionsUpdate = 'COLLECTIONS_UPDATE',
  /** The webhook topic for `customer_groups/create` events. */
  CustomerGroupsCreate = 'CUSTOMER_GROUPS_CREATE',
  /** The webhook topic for `customer_groups/delete` events. */
  CustomerGroupsDelete = 'CUSTOMER_GROUPS_DELETE',
  /** The webhook topic for `customer_groups/update` events. */
  CustomerGroupsUpdate = 'CUSTOMER_GROUPS_UPDATE',
  /** The webhook topic for `customers/create` events. */
  CustomersCreate = 'CUSTOMERS_CREATE',
  /** The webhook topic for `customers/delete` events. */
  CustomersDelete = 'CUSTOMERS_DELETE',
  /** The webhook topic for `customers/disable` events. */
  CustomersDisable = 'CUSTOMERS_DISABLE',
  /** The webhook topic for `customers/enable` events. */
  CustomersEnable = 'CUSTOMERS_ENABLE',
  /** The webhook topic for `customers/update` events. */
  CustomersUpdate = 'CUSTOMERS_UPDATE',
  /** The webhook topic for `disputes/create` events. */
  DisputesCreate = 'DISPUTES_CREATE',
  /** The webhook topic for `disputes/update` events. */
  DisputesUpdate = 'DISPUTES_UPDATE',
  /** The webhook topic for `draft_orders/create` events. */
  DraftOrdersCreate = 'DRAFT_ORDERS_CREATE',
  /** The webhook topic for `draft_orders/delete` events. */
  DraftOrdersDelete = 'DRAFT_ORDERS_DELETE',
  /** The webhook topic for `draft_orders/update` events. */
  DraftOrdersUpdate = 'DRAFT_ORDERS_UPDATE',
  /** The webhook topic for `fulfillment_events/create` events. */
  FulfillmentEventsCreate = 'FULFILLMENT_EVENTS_CREATE',
  /** The webhook topic for `fulfillment_events/delete` events. */
  FulfillmentEventsDelete = 'FULFILLMENT_EVENTS_DELETE',
  /** The webhook topic for `fulfillments/create` events. */
  FulfillmentsCreate = 'FULFILLMENTS_CREATE',
  /** The webhook topic for `fulfillments/update` events. */
  FulfillmentsUpdate = 'FULFILLMENTS_UPDATE',
  /** The webhook topic for `attributed_sessions/first` events. */
  AttributedSessionsFirst = 'ATTRIBUTED_SESSIONS_FIRST',
  /** The webhook topic for `attributed_sessions/last` events. */
  AttributedSessionsLast = 'ATTRIBUTED_SESSIONS_LAST',
  /** The webhook topic for `order_transactions/create` events. */
  OrderTransactionsCreate = 'ORDER_TRANSACTIONS_CREATE',
  /** The webhook topic for `orders/cancelled` events. */
  OrdersCancelled = 'ORDERS_CANCELLED',
  /** The webhook topic for `orders/create` events. */
  OrdersCreate = 'ORDERS_CREATE',
  /** The webhook topic for `orders/delete` events. */
  OrdersDelete = 'ORDERS_DELETE',
  /** The webhook topic for `orders/edited` events. */
  OrdersEdited = 'ORDERS_EDITED',
  /** The webhook topic for `orders/fulfilled` events. */
  OrdersFulfilled = 'ORDERS_FULFILLED',
  /** The webhook topic for `orders/paid` events. */
  OrdersPaid = 'ORDERS_PAID',
  /** The webhook topic for `orders/partially_fulfilled` events. */
  OrdersPartiallyFulfilled = 'ORDERS_PARTIALLY_FULFILLED',
  /** The webhook topic for `orders/updated` events. */
  OrdersUpdated = 'ORDERS_UPDATED',
  /** The webhook topic for `product_listings/add` events. */
  ProductListingsAdd = 'PRODUCT_LISTINGS_ADD',
  /** The webhook topic for `product_listings/remove` events. */
  ProductListingsRemove = 'PRODUCT_LISTINGS_REMOVE',
  /** The webhook topic for `product_listings/update` events. */
  ProductListingsUpdate = 'PRODUCT_LISTINGS_UPDATE',
  /** The webhook topic for `product_publications/create` events. */
  ProductPublicationsCreate = 'PRODUCT_PUBLICATIONS_CREATE',
  /** The webhook topic for `product_publications/delete` events. */
  ProductPublicationsDelete = 'PRODUCT_PUBLICATIONS_DELETE',
  /** The webhook topic for `product_publications/update` events. */
  ProductPublicationsUpdate = 'PRODUCT_PUBLICATIONS_UPDATE',
  /** The webhook topic for `products/create` events. */
  ProductsCreate = 'PRODUCTS_CREATE',
  /** The webhook topic for `products/delete` events. */
  ProductsDelete = 'PRODUCTS_DELETE',
  /** The webhook topic for `products/update` events. */
  ProductsUpdate = 'PRODUCTS_UPDATE',
  /** The webhook topic for `refunds/create` events. */
  RefundsCreate = 'REFUNDS_CREATE',
  /** The webhook topic for `shipping_addresses/create` events. */
  ShippingAddressesCreate = 'SHIPPING_ADDRESSES_CREATE',
  /** The webhook topic for `shipping_addresses/update` events. */
  ShippingAddressesUpdate = 'SHIPPING_ADDRESSES_UPDATE',
  /** The webhook topic for `shop/update` events. */
  ShopUpdate = 'SHOP_UPDATE',
  /** The webhook topic for `tax_services/create` events. */
  TaxServicesCreate = 'TAX_SERVICES_CREATE',
  /** The webhook topic for `tax_services/update` events. */
  TaxServicesUpdate = 'TAX_SERVICES_UPDATE',
  /** The webhook topic for `themes/create` events. */
  ThemesCreate = 'THEMES_CREATE',
  /** The webhook topic for `themes/delete` events. */
  ThemesDelete = 'THEMES_DELETE',
  /** The webhook topic for `themes/publish` events. */
  ThemesPublish = 'THEMES_PUBLISH',
  /** The webhook topic for `themes/update` events. */
  ThemesUpdate = 'THEMES_UPDATE',
  /** The webhook topic for `variants/in_stock` events. */
  VariantsInStock = 'VARIANTS_IN_STOCK',
  /** The webhook topic for `variants/out_of_stock` events. */
  VariantsOutOfStock = 'VARIANTS_OUT_OF_STOCK',
  /** The webhook topic for `inventory_levels/connect` events. */
  InventoryLevelsConnect = 'INVENTORY_LEVELS_CONNECT',
  /** The webhook topic for `inventory_levels/update` events. */
  InventoryLevelsUpdate = 'INVENTORY_LEVELS_UPDATE',
  /** The webhook topic for `inventory_levels/disconnect` events. */
  InventoryLevelsDisconnect = 'INVENTORY_LEVELS_DISCONNECT',
  /** The webhook topic for `attribution/risk` events. */
  AttributionRisk = 'ATTRIBUTION_RISK',
  /** The webhook topic for `inventory_items/create` events. */
  InventoryItemsCreate = 'INVENTORY_ITEMS_CREATE',
  /** The webhook topic for `inventory_items/update` events. */
  InventoryItemsUpdate = 'INVENTORY_ITEMS_UPDATE',
  /** The webhook topic for `inventory_items/delete` events. */
  InventoryItemsDelete = 'INVENTORY_ITEMS_DELETE',
  /** The webhook topic for `locations/create` events. */
  LocationsCreate = 'LOCATIONS_CREATE',
  /** The webhook topic for `locations/update` events. */
  LocationsUpdate = 'LOCATIONS_UPDATE',
  /** The webhook topic for `locations/delete` events. */
  LocationsDelete = 'LOCATIONS_DELETE',
  /** The webhook topic for `tender_transactions/create` events. */
  TenderTransactionsCreate = 'TENDER_TRANSACTIONS_CREATE',
  /** The webhook topic for `app_purchases_one_time/update` events. */
  AppPurchasesOneTimeUpdate = 'APP_PURCHASES_ONE_TIME_UPDATE',
  /** The webhook topic for `app_subscriptions/update` events. */
  AppSubscriptionsUpdate = 'APP_SUBSCRIPTIONS_UPDATE',
  /** The webhook topic for `locales/create` events. */
  LocalesCreate = 'LOCALES_CREATE',
  /** The webhook topic for `locales/update` events. */
  LocalesUpdate = 'LOCALES_UPDATE'
}

/** Return type for `webhookSubscriptionUpdate` mutation. */
export type AdminWebhookSubscriptionUpdatePayload = {
  __typename?: 'WebhookSubscriptionUpdatePayload'
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
  /** The webhook subscription that was updated. */
  webhookSubscription?: Maybe<AdminWebhookSubscription>
}

/** Represents weight unit and value. */
export type AdminWeight = {
  __typename?: 'Weight'
  /** Unit of measurement for `value`. */
  unit: AdminWeightUnit
  /** The weight using the unit system specified with `unit`. */
  value: Scalars['Float']
}

/** Specifies the weight unit and value inputs. */
export type AdminWeightInput = {
  /** The weight value using the unit system specified with `weight_unit`. */
  value: Scalars['Float']
  /** Unit of measurement for `value`. */
  unit: AdminWeightUnit
}

/** Units of measurement for weight. */
export enum AdminWeightUnit {
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES'
}

/** Return type for `deliveryProfileCreate` mutation. */
export type AdminDeliveryProfileCreatePayload = {
  __typename?: 'deliveryProfileCreatePayload'
  /** The delivery profile that was created. */
  profile?: Maybe<AdminDeliveryProfile>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `deliveryProfileRemove` mutation. */
export type AdminDeliveryProfileRemovePayload = {
  __typename?: 'deliveryProfileRemovePayload'
  /** The profile deletion job triggered by the mutation. */
  job?: Maybe<AdminJob>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}

/** Return type for `deliveryProfileUpdate` mutation. */
export type AdminDeliveryProfileUpdatePayload = {
  __typename?: 'deliveryProfileUpdatePayload'
  /** The delivery profile that was updated. */
  profile?: Maybe<AdminDeliveryProfile>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<AdminUserError>
}
