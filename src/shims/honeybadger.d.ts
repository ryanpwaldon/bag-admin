import { Honeybadger } from '@/plugins/honeybadger'
import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $honeybadger: Honeybadger
  }
}
