import HelloWorld from '@/components/HelloWorld.vue';
<template>
  <div>
    <img v-bind="image" />
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: 'BindLearnAlternaive',

  props: {
    msg: String,
  },

  data() {
    return {
      image: {
        src: 'https://lenguajejs.com/javascript/logo.svg',
        alt: 'Logo Javascritp',
      },
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
