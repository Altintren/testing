import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    reservations: []
  },
  getters: {
  },
  mutations: {
    SET_COUNTER (state, newCount) {
      state.counter = newCount
    },
    SET_RESERVATIONS (state, data) {
      state.reservations = data
    }
  },
  actions: {
    incrementCounter ({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchReservations ({ commit }) {
      const result = await axios.get('http://localhost:3000/reservation/all/json')
      commit('SET_RESERVATIONS', result.data)
    }
  },
  modules: {
  }
})
