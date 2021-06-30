<template>
  <button @click="clickButton" :disabled="disableButton">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    disableButton: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
  },
};
</script>

<style scoped></style>
