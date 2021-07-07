<template>
  <div>
    <h1 :class="className[0]">Color Red</h1>
    <h1 :class="className[1]">Color Blue</h1>
  </div>
</template>

<script>
export default {
  name: 'ClassName',

  data() {
    return {
      // className: 'red',

      className: ['red', 'blue'],

      // className: {
      //   red: true,
      //   blue: false,
      // },
    };
  },
};
</script>

<style scoped>
.red {
  color: crimson;
}

.blue {
  color: blue;
}
</style>
