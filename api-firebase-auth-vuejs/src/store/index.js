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

    user: null,

    error: {
      type: null,
      message: null,
    },
  },

  mutations: {
    setError(state, payload) {
      if (payload === null) return (state.error = { type: null, message: null });

      if (payload === 'EMAIL_NOT_FOUND') {
        return (state.error = { type: 'email', message: 'Email Not Found' });
      }

      if (payload === 'INVALID_PASSWORD') {
        return (state.error = { type: 'password', message: 'Invalid Password' });
      }

      if (payload === 'EMAIL_EXISTS') {
        return (state.error = { type: 'email', message: 'Email Exists!' });
      }

      if (payload === 'INVALID_EMAIL') {
        return (state.error = { type: 'email', message: 'Invalid Email!' });
      }
    },

    setUser(state, payload) {
      state.user = payload;
    },

    actionLoad(state, payload) {
      state.tasks = payload;
    },

    actionSet(state, payload) {
      state.tasks.push(payload);
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

        if (userDB.error) {
          console.log(userDB.error);

          return commit('setError', userDB.error.message);
        }

        commit('setUser', userDB);

        // To clean form
        commit('setError', null);

        router.push('/');

        localStorage.setItem('user', JSON.stringify(userDB));
      } catch (error) {
        console.log(error);
      }
    },

    signOutUser({ commit }) {
      commit('setUser', null);
      router.push('/login');

      localStorage.removeItem('user');
    },

    async registerUser({ commit }, user) {
      try {
        const { email, password } = user;

        const response = await fetch(urlApiKey, {
          method: 'POST',
          body: JSON.stringify({ email, password, returnSecureToken: true }),
        });

        const userDB = await response.json();

        if (userDB.error) {
          console.log(userDB.error);

          return commit('setError', userDB.error.message);
        }

        commit('setUser', userDB);
        router.push('/');

        // To clean form
        commit('setError', null);

        localStorage.setItem('user', JSON.stringify(userDB));
      } catch (error) {
        console.log(error);
      }
    },

    async loadFirebaseDB({ commit, state }) {
      if (localStorage.getItem('user')) {
        commit('setUser', JSON.parse(localStorage.getItem('user')));
      } else {
        return commit('setUser', null);
      }

      try {
        const { localId, idToken } = state.user;

        const response = await fetch(`${urlDB}/${localId}.json?auth=${idToken}`);
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

    async setTasks({ commit, state }, task) {
      try {
        const { id } = task;
        const response = await fetch(
          `${urlDB}/${state.user.localId}/${id}.json?auth=${state.user.idToken}`,
          {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
          }
        );

        const dataDB = await response.json();

        commit('actionSet', task);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTask({ commit, state }, id) {
      try {
        await fetch(
          `${urlDB}/${state.user.localId}/${id}.json?auth=${state.user.idToken}`,
          {
            method: 'DELETE',
          }
        );

        commit('actionDeleteTask', id);
      } catch (error) {
        console.log(error);
      }
    },

    setTask({ commit, state }, id) {
      commit('actionEditTask', id);
    },

    async updateTask({ commit, state }, task) {
      try {
        const response = await fetch(
          `${urlDB}/${state.user.localId}/${task.id}.json?auth=${state.user.idToken}`,
          {
            method: 'PATCH',
            body: JSON.stringify(task),
          }
        );

        const dataDB = await response.json();

        commit('actionUpdateTask', dataDB);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    authenticatedUser(state) {
      return !!state.user;
    },
  },
  modules: {},
});
