import Vue from 'vue';
import Vuex from 'vuex';

import { auth, db } from '../firebase.config';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],

    task: { name: '', id: '' },

    user: null,

    error: null,

    loading: false,
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    setError(state, payload) {
      state.error = payload;
    },

    setTasks(state, payload) {
      state.tasks = payload;
    },

    setTask(state, payload) {
      state.task = payload;
    },

    setDeleteTask(state, payload) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },

    loadingFirebase(state, payload) {
      state.loading = payload;
    },
  },

  actions: {
    async registerUser({ commit }, user) {
      try {
        const { email, password } = user;
        const response = await auth.createUserWithEmailAndPassword(email, password);

        const newUser = {
          email,
          uid: response.user.uid,
        };

        // Create Colletions DataBase Firestore but, firebase --> Error on addDoc???
        // await db.collection(email).add();

        commit('setUser', newUser);
        router.push('/');
      } catch (error) {
        console.log(error);

        commit('setError', error);
      }
    },

    async loginUser({ commit }, user) {
      try {
        const { email, password } = user;
        const response = await auth.signInWithEmailAndPassword(email, password);

        const userLogged = {
          email,
          uid: response.user.uid,
        };

        commit('setUser', userLogged);
        router.push('/');
      } catch (error) {
        console.log(error);
        commit('setError', error);
      }
    },

    async signOutUser({ commit }) {
      await auth.signOut();

      router.push('/login');
    },

    async activeUser({ commit }, user) {
      commit('setUser', user);
    },

    async getTasks({ commit, state }) {
      try {
        //Run spinner
        commit('loadingFirebase', true);

        const tasks = [];

        const response = await db.collection(state.user.email).get();

        response.forEach((doc) => {
          let task = doc.data();
          task.id = doc.id;
          tasks.push(task);
        });

        // Stop spinner
        commit('loadingFirebase', false);

        commit('setTasks', tasks);
      } catch (error) {
        console.log(error);
      }
    },

    async getTask({ commit, state }, idTask) {
      try {
        const doc = await db
          .collection(state.user.email)
          .doc(idTask)
          .get();

        let task = doc.data();
        task.id = doc.id;

        commit('setTask', task);
      } catch (error) {
        console.log(error);
      }
    },

    async editTask({ commit, state }, task) {
      try {
        const { name, id } = task;
        await db
          .collection(state.user.email)
          .doc(id)
          .update({ name });

        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },

    async addTask({ commit, state }, taskName) {
      try {
        await db.collection(state.user.email).add({ name: taskName });

        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTask({ commit, state, dispatch }, taskId) {
      try {
        await db
          .collection(state.user.email)
          .doc(taskId)
          .delete();

        commit('setDeleteTask', taskId);

        // get to Serve!
        // dispatch('getTasks');
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    authenticatedUser(state) {
      if (state.user === null) return false;
      else return true;
    },
  },

  modules: {},
});
