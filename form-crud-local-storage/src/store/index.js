import { createStore } from 'vuex';

import router from '../router';

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
    actionLoad(state, payload) {
      state.tasks = payload;
    },

    actionSet(state, payload) {
      state.tasks.push(payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));

      console.log(state.task);
    },

    actionDeleteTask(state, payload) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    actionEditTask(state, payload) {
      if (!state.tasks.find((item) => item.id === payload)) {
        router.push('/');
        return;
      }

      state.task = state.tasks.find((item) => item.id === payload);
    },

    actionUpdateTask(state, payload) {
      state.tasks = state.tasks.map((item) => (item.id === payload.id ? payload : item));

      router.push('/');

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },

  actions: {
    loadLocalStorage({ commit }) {
      if (localStorage.getItem('tasks')) {
        const tasks = JSON.parse(localStorage.getItem('tasks'));

        commit('actionLoad', tasks);
        return;
      }

      localStorage.setItem('tasks', JSON.stringify([]));
    },

    setTasks({ commit }, task) {
      commit('actionSet', task);
    },

    deleteTask({ commit }, id) {
      commit('actionDeleteTask', id);
    },

    setTask({ commit }, id) {
      commit('actionEditTask', id);
    },

    updateTask({ commit }, task) {
      commit('actionUpdateTask', task);
    },
  },

  modules: {},
});
