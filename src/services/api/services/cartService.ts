import { client } from '@/services/api/client'

interface CartSettings {
  colorBackdrop: string
  colorBackground: string
  colorBorderPrimary: string
  colorButtonPrimaryBackground: string
  colorButtonPrimaryText: string
  colorProgressBarPrimary: string
  colorTextLink: string
  colorTextPrimary: string
  colorTextSecondary: string
  displayBorders: boolean
  displayShadows: boolean
  opacityBackdrop: number
  paddingCart: number
  roundedCorners: boolean
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
