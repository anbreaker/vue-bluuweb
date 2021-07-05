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
  },

  mutations: {
    setUser(state, payload) {
      const { user } = state;
      user = payload;
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

        console.log(newUser);

        commit('setUser', newUser);
      } catch (error) {
        console.log(error);

        commit('setError', error);
      }
    },

    async getTasks({ commit }) {
      try {
        const tasks = [];
        const response = await db.collection('tasks').get();

        response.forEach((doc) => {
          let task = doc.data();
          task.id = doc.id;
          tasks.push(task);
        });

        commit('setTasks', tasks);
      } catch (error) {
        console.log(error);
      }
    },

    async getTask({ commit }, idTask) {
      try {
        const doc = await db
          .collection('tasks')
          .doc(idTask)
          .get();

        let task = doc.data();
        task.id = doc.id;

        commit('setTask', task);
      } catch (error) {
        console.log(error);
      }
    },

    async editTask({ commit }, task) {
      try {
        const { name, id } = task;
        await db
          .collection('tasks')
          .doc(id)
          .update({ name });

        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },

    async addTask({ commit }, taskName) {
      try {
        await db.collection('tasks').add({ name: taskName });

        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTask({ commit, dispatch }, taskId) {
      try {
        await db
          .collection('tasks')
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

  modules: {},
});
