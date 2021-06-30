<template>
  <button>
    {{ textBtn }}
  </button>
</template>

<script>
export default {
  props: {
    status: Boolean,
  },

  computed: {
    textBtn() {
      return this.status ? 'Increment' : 'Decrement';
    },
  },
};
</script>
