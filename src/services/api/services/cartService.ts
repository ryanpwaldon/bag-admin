import { client } from '@/services/api/client'

interface CartSettings {
  backdropColor: string
  backdropOpacity: number
  borderColor1: string
  brightness1: number
  cartPadding: number
  checkoutButtonColor: string
  checkoutButtonTextColor: string
  progressBarColor: string
  roundCorners: boolean
  showBorders: boolean
  showShadows: boolean
  textColor1: string
  textColor2: string
  textColor3: string
  themeColor1: string
  themeColor2: string
}

export type Cart = {
  user: string
  active: boolean
  cartSettings: CartSettings
}

export default {
  async findOne() {
    return (await client({ url: `/cart`, method: 'get' })).data
  },

  async updateOne(body: Partial<Cart>) {
    return (await client({ url: `/cart`, method: 'put', data: body })).data
  }
}
