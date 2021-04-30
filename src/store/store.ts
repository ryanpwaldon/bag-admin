import { createStore } from 'vuex'
import { User } from '@/services/api/services/userService'

export default createStore({
  state: {
    user: null as null | User
  },
  mutations: {
    setUser(state, value) {
      state.user = value
    }
  }
})
