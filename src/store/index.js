import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0,
    mults: [0, 1, 1, 1]
  },
  mutations: {
    increment (state, n) { 
      state.money += n
      
    },
    decrement (state, n) {
      state.money -= n
    },
    editMult (state, payload) {
      state.mults[payload.index] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
