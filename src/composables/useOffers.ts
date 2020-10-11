import { watch, reactive } from 'vue'
import offerService from '@/services/api/services/offerService'

export default function useOffers(filters, page, limit) {
  const data = reactive({
    items: [],
    total: 0,
    first: 0,
    last: 0,
    pages: 0
  })
  watch([filters, page, limit], async () => Object.assign(data, await offerService.findAll(filters, page, limit)), { immediate: true })
  return data
}
