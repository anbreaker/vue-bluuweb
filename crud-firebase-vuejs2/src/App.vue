<template>
  <div id="app" class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },

  name: 'App',

  computed: {
    ...mapGetters(['authenticatedUser']),
  },

  methods: {
    ...mapActions(['signOutUser']),
  },
};
</script>
