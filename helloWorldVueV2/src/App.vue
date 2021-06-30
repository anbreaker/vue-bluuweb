<template>
  <Title text="Dinamic Bank 2.0" />
  <Account />
</template>

<script>
import Title from '@/components/Title';
import Account from '@/components/Account';

export default {
  name: 'App',
  components: {
    Title,
    Account,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
