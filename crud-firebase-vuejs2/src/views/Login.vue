<template>
  <div>
    <h1 class="my-5">Login User</h1>

    <form @submit.prevent="loginUser({ email, password: pass1 })">
      <input
        class="form-control my-2"
        type="email"
        placeholder="Your Email"
        v-model.trim="email"
      />
      <input
        class="form-control my-2"
        type="password"
        placeholder="Your Password"
        v-model.trim="pass1"
      />

      <button class="btn btn-primary" type="submit">Login!</button>
    </form>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      pass1: '',
    };
  },

  methods: {
    ...mapActions(['loginUser']),
  },

  computed: {
    ...mapState(['error']),
  },
};
</script>
