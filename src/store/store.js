// Vue
import Vue from 'vue'

// state management.
import Vuex from 'vuex'

// Vue use Vuex
Vue.use(Vuex)

// State
const state = {
  count: 0
}

// Get part of state
// Or get something related to state
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// Define something to change part of state
const mutations = {
  increment (state) {
    // We chagne part of the state
    state.count++
  },

  decrement (state) {
    state.count--
  }
}

// We only have 1 state, but we can build
// many many actions
//
// Use those something to really change state
// key func
const actions = {
  // only way to change state is commit
  // { commit } === { commit: commit }
  // increment: ({ commit }) => commit('increment'),
  // decrement: ({ commit }) => commit('decrement'),
  increment ({ commit }) {
    commit('increment')
  },
  decrement ({ commit }) {
    commit('decrement')
  },
  // {commit: commit, state: state}
  // It is like a { commit }
  incrementIfOdd ({ commit, state }) {
    // We check state, if yes, then commit action
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  // Can pass commit or state
  incrementAsync ({ commit }) {
    // promise, commit increase, when 1s
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// Put sub states into Vuex.store
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
