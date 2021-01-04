import { createStore } from 'vuex'
import userService, { User } from '@/services/api/services/userService'
import accessScopeService from '@/services/api/services/accessScopeService'

export default createStore({
  state: {
    user: null as null | User
  },
  mutations: {
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async authenticate({ commit }) {
      const user = await userService.findMe().catch(() => null)
      const accessScopesUpToDate = await accessScopeService.checkStatus().catch(() => false)
      if (!(user && accessScopesUpToDate)) return false
      commit('setUser', user)
      return user
    }
  }
})
