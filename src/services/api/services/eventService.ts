import { client } from '@/services/api/client'

export enum EventType {
  CrossSellImpression = 'CrossSellImpression',
  ProgressBarImpression = 'ProgressBarImpression'
}

export default {
  async countCrossSellImpressions(id: string): Promise<number> {
    const query = { type: EventType.CrossSellImpression, crossSell: id }
    return (await client({ url: `/event/count`, method: 'get', params: { query } })).data
  },

  async countProgressBarImpressions(id: string): Promise<number> {
    const query = { type: EventType.ProgressBarImpression, progressBar: id }
    return (await client({ url: `/event/count`, method: 'get', params: { query } })).data
  }
}
