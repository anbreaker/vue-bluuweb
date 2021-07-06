<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">
      Forms
    </router-link>
    <div class="d-flex">
      <router-link class="btn btn-dark" v-if="authenticatedUser" to="/"
        >Tasks</router-link
      >
      <router-link class="btn btn-dark" v-if="!authenticatedUser" to="/login"
        >Sign In</router-link
      >
      <router-link class="btn btn-dark" v-if="!authenticatedUser" to="/register"
        >Register</router-link
      >
      <button class="btn btn-dark" v-if="authenticatedUser" @click="signOutUser">
        Sign out
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['authenticatedUser']),
  },
  methods: {
    ...mapActions(['signOutUser']),
  },
};
</script>
