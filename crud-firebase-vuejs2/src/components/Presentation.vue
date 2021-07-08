<template>
  <div>
    <!-- Header -->
    <div class="container">
      <div class="header-nav"></div>
    </div>

    <div class="container p-4 form-sign">
      <div class="jumbotron">
        <h1 class="display-3">Hello, world!</h1>
        <p class="lead">
          This is a simple exercise to use VueJs in Frontend with Firebase on backend.
        </p>
        <hr class="my-4" />
        <p>It is practice for learning.</p>
        <div class="text-center">
          <div class="row">
            <div class="col">
              <router-link
                class="btn btn-info btn-lg btn-block"
                v-if="!authenticatedUser"
                to="/login"
                >Sign In</router-link
              >
            </div>
            <div class="col">
              <router-link
                class="btn btn-info btn-lg btn-block"
                v-if="!authenticatedUser"
                to="/register"
                >Go to Register</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="container">
      <div class="main"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Presentation',

  computed: {
    ...mapGetters(['authenticatedUser']),
  },

  methods: {
    ...mapActions(['signOutUser']),
  },
};
</script>

<style></style>
