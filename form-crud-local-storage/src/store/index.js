import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [],

    task: {
      id: '',
      name: '',
      categories: [],
      status: '',
      numbers: 0,
    },
  },

  mutations: {
    actionSet(state, payload) {
      state.tasks.push(payload);

      console.log(state.task);
    },

    actionDeleteTask(state, payload) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
  },

  actions: {
    setTasks({ commit }, task) {
      commit('actionSet', task);
    },

    deleteTask({ commit }, id) {
      commit('actionDeleteTask', id);
    },
  },

  modules: {},
});
