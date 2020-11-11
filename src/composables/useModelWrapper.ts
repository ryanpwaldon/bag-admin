/* eslint @typescript-eslint/no-explicit-any: 0 */

import { computed } from 'vue'

export default (props: Record<string, any>, emit: (event: string, ...args: any[]) => void, name = 'modelValue') => {
  return computed({
    get: () => props[name],
    set: value => emit(`update:${name}`, value)
  })
}
