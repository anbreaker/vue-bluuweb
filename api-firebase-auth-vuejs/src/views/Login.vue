<template>
  <h1 class="my-5">Login User</h1>

  <form @submit.prevent="processForm">
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

    <button class="btn btn-primary" type="submit" :disabled="blockBtn">Login!</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      // TODO delete this on production, For testing only
      email: 'anbreaker@test.com',
      pass1: '123456',
    };
  },

  computed: {
    blockBtn() {
      if (!this.email.includes('@')) return true;

      if (this.pass1.length > 5) return false;
      else return true;
    },
  },

  methods: {
    ...mapActions(['loginUser']),

    processForm() {
      this.loginUser({ email: this.email, password: this.pass1 });
      this.email = '';
      this.pass1 = '';
    },
  },
};
</script>
