import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 100,
  },

  mutations: {
    increment(state, payload) {
      state.count = state.count + payload;
    },

    decrement(state, payload) {
      state.count = state.count - payload;
    },
  },

  actions: {
    actionIncrement({ commit }) {
      commit('increment', 10);
    },

    actionDecrement({ commit }, value) {
      commit('decrement', value);
    },

    actionBtn({ commit }, objeto) {
      const { status, value } = objeto;

      if (status) commit('increment', value);
      else commit('decrement', value);
    },
  },

  modules: {},
});
