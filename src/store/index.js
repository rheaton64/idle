import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0
  },
  mutations: {
    increment (state, n) {
      state.money += n
    },
    decrement (state, n) {
      state.money -= n
    }
  },
  actions: {
  },
  modules: {
  }
})
