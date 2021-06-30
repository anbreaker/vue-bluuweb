<template>
  <button @click="actionDecrement(50)">Decrement</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['actionDecrement']),
  },
};
</script>
