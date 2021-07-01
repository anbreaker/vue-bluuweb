<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>V-model Example!</h2>
    <input type="text" v-model="text" placeholder="Text Here!" />
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
};
</script>
