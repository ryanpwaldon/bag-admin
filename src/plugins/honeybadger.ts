/* eslint-disable @typescript-eslint/no-explicit-any */

import { App } from '@vue/runtime-core'
import Honeybadger from '@honeybadger-io/js'

const honeybadger = {
  install(app: App, options: any) {
    const honeybadger = Honeybadger.configure(options)
    app.config.globalProperties.$honeybadger = honeybadger
    const extractContext = function(vm: any) {
      const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {}
      const name = options.name || options._componentTag
      const file = options.__file
      return {
        isRoot: vm.$root === vm,
        name: name,
        props: options.propsData,
        parentVnodeTag: options._parentVnode ? options._parentVnode.tag : undefined,
        file: file
      }
    }
    app.config.errorHandler = (error: any, vm, info) => {
      console.error(error, vm, info)
      honeybadger.notify(error, { context: { vm: extractContext(vm), info: info } })
    }
    return honeybadger
  }
}

export type Honeybadger = ReturnType<typeof honeybadger.install>

export default honeybadger
