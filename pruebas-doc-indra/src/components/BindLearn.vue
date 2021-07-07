import HelloWorld from '@/components/HelloWorld.vue';
<template>
  <div>
    <img v-bind:src="image" v-bind:[key]="text" />
    <img :src="image" :[key]="text" />
  </div>
</template>

<script>
export default {
  name: 'BindLearn',

  props: {
    msg: String,
  },

  data() {
    return {
      key: 'alt',
      image: 'https://lenguajejs.com/javascript/logo.svg',
      text: 'Logo Javascritp',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
