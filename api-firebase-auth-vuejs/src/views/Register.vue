import { mapActions } from 'vuex';
<template>
  <h1 class="my-5">Register Users</h1>

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
    <input
      class="form-control my-2"
      type="password"
      placeholder="Your Password"
      v-model.trim="pass2"
    />

    <button class="btn btn-primary" type="submit" :disabled="blockBtn">Register</button>
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
      pass2: '123456',
    };
  },

  computed: {
    blockBtn() {
      if (!this.email.includes('@')) return true;

      if (this.pass1.length > 5 && this.pass1 === this.pass2) return false;
      else return true;
    },
  },

  methods: {
    ...mapActions(['registerUser']),

    processForm() {
      this.registerUser({ email: this.email, password: this.pass1 });
      this.email = '';
      this.pass1 = '';
      this.pass2 = '';
    },
  },
};
</script>

<style></style>
