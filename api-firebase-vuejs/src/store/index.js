import { createStore } from 'vuex';
require('dotenv').config();

import router from '../router';

const url = process.env.VUE_APP_URL_FIREBASE;

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

      console.log(state.task);
    },

    actionDeleteTask(state, payload) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
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
    },
  },

  actions: {
    async loadFirebaseDB({ commit }) {
      try {
        const response = await fetch(`${url}.json`);
        const dataDB = await response.json();

        const arrayTasks = [];

        for (let id in dataDB) {
          arrayTasks.push(dataDB[id]);
        }

        commit('actionLoad', arrayTasks);
      } catch (error) {
        console.log(error);
      }
    },

    async setTasks({ commit }, task) {
      try {
        const response = await fetch(`${url}/${task.id}.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(task),
        });

        const dataDB = await response.json();
        console.log(dataDB, '<-- Enviado');

        commit('actionSet', task);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTask({ commit }, id) {
      try {
        await fetch(`${url}/${id}.json`, {
          method: 'DELETE',
        });

        commit('actionDeleteTask', id);
      } catch (error) {
        console.log(error);
      }
    },

    setTask({ commit }, id) {
      commit('actionEditTask', id);
    },

    async updateTask({ commit }, task) {
      try {
        const response = await fetch(`${url}/${task.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(task),
        });

        const dataDB = await response.json();

        commit('actionUpdateTask', dataDB);
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
