import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    SET_COUNTER (state, newCount) {
      state.counter = newCount
    }
  },
  actions: {
    incrementCounter ({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchReservations () {
      const result = await axios.get('http://localhost:3000/reservation/all/json')
      console.log(result)
    }
  },
  modules: {
  }
})
