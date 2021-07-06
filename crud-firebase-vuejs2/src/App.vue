<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link to="/">
        <img alt="Vue logo" src="./assets/logo.png" />
      </router-link>

      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>

      <button class="ml-4 btn btn-dark" @click="signOutUser">
        Sign out
      </button>
    </div>

    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  computed: {
    //
  },

  methods: {
    ...mapActions(['signOutUser']),
  },
};
</script>
