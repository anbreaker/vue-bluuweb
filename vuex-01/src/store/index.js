import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 100,
  },

  mutations: {
    increase(state) {
      state.count = state.count + 10;
    },

    decrement(state, payload) {
      state.count = state.count - payload;
    },
  },

  actions: {
    actionIncrease({ commit }) {
      commit('increase');
    },

    actionDecrement({ commit }, value) {
      commit('decrement', value);
    },
  },

  modules: {},
});
