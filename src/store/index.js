import { createStore } from 'vuex'
import {mutations} from './mutations'
import {actions} from './actions'

const state= {
  username: '',
}

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  }
})
