<template>
  <h1 class="my-5">Register Users</h1>

  <div class="alert alert-danger" v-if="error.type !== null">{{ error.message }}</div>

  <form @submit.prevent="processForm">
    <input
      class="form-control my-2"
      type="email"
      placeholder="Your Email"
      v-model.trim="email"
      :class="[error.type === 'email' ? 'is-invalid' : '']"
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
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      email: '',
      pass1: '',
      pass2: '',
    };
  },

  computed: {
    blockBtn() {
      if (!this.email.includes('@')) return true;

      if (this.pass1.length > 5 && this.pass1 === this.pass2) return false;
      else return true;
    },

    ...mapState(['error']),
  },

  methods: {
    ...mapActions(['registerUser']),

    async processForm() {
      await this.registerUser({ email: this.email, password: this.pass1 });

      if (this.error.type !== null) return;

      this.email = '';
      this.pass1 = '';
      this.pass2 = '';
    },
  },
};
</script>
