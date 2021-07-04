import { createStore } from 'vuex';
require('dotenv').config();

import router from '../router';

const urlDB = process.env.VUE_APP_URL_FIREBASE;
const urlApiKey = process.env.VUE_APP_KEY;
const urlLoginFirebase = process.env.VUE_APP_LOGIN_FIREBASE;

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

  user: null,

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

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
    async loginUser({ commit }, user) {
      try {
        const { email, password } = user;

        const response = await fetch(urlLoginFirebase, {
          method: 'POST',
          body: JSON.stringify({ email, password, returnSecureToken: true }),
        });

        const userDB = await response.json();

        if (userDB.error) return console.log(userDB.error);

        commit('setUser', userDB);

        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },

    async registerUser({ commit }, user) {
      try {
        const { email, password } = user;

        const response = await fetch(urlApiKey, {
          method: 'POST',
          body: JSON.stringify({ email, password, returnSecureToken: true }),
        });

        const userDB = await response.json();
        console.log(userDB);

        if (userDB.error) return console.log(userDB.error);

        commit('setUser', userDB);
        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },

    async loadFirebaseDB({ commit, state }) {
      try {
        const { localId, idToken } = state.user;
        const response = await fetch(`${urlDB}.json`);

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
        const response = await fetch(`${urlDB}/${task.id}.json`, {
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
        await fetch(`${urlDB}/${id}.json`, {
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
        const response = await fetch(`${urlDB}/${task.id}.json`, {
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
