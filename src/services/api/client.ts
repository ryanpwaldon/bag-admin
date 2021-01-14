import qs from 'qs'
import app from '@/main'
import axios from 'axios'

export const client = axios.create({ baseURL: process.env.VUE_APP_SERVER_URL })

client.interceptors.request.use(async config => {
  const token = (app.$shopify && (await app.$shopify.getSessionToken())) || null
  config.headers.Authorization = `Bearer ${token}`
  config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'brackets', encode: false })
  return config
})
