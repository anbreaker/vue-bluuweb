<template>
  <button @click="actionBtn({ status, value: 15 })">
    {{ textBtn }}
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    status: Boolean,
  },

  computed: {
    textBtn() {
      return this.status ? 'Increment' : 'Decrement';
    },
  },
  methods: {
    ...mapActions(['actionBtn']),
  },
};
</script>
