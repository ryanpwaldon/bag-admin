import app from '@/main'
import { createStore } from 'vuex'
import { RouteLocationNormalized } from 'vue-router'
import { User } from '@/services/api/services/userService'

export default createStore({
  state: {
    user: null as null | User,
    continueToRoute: null as null | RouteLocationNormalized
  },
  mutations: {
    setUser(state, value) {
      state.user = value
      app.$honeybadger.setContext(value)
    },
    setContinueToRoute(state, value) {
      state.continueToRoute = value
    }
  }
})
