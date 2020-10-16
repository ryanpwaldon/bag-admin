import { createStore } from 'vuex'
import userService, { User } from '@/services/api/services/userService'

export default createStore({
  state: {
    framed: window.top !== window.self,
    user: null as null | User
  },
  getters: {
    roles(state) {
      return state.user && state.user.roles
    }
  },
  mutations: {
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async authenticate({ commit }) {
      const user = await userService.findMe().catch(() => null)
      // if (user) {
      //   const userAttributes = {
      //     name: user.shopOrigin,
      //     shopOrigin: user.shopOrigin,
      //     email: user.details.email,
      //     appName: process.env.VUE_APP_NAME,
      //     environment: process.env.VUE_APP_ENV,
      //     createdAt: user.createdAt
      //   }
      //   Vue.prototype.$segment.identify(user.id, userAttributes)
      commit('setUser', user)
      return user
    }
  }
})
