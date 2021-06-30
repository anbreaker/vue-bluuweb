<template>
  <div class="home">
    <h1 :style="colorCount">{{ title }}: {{ count }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',

  components: {},

  data() {
    return {
      title: 'Count Vuex',
    };
  },

  computed: {
    ...mapState(['count']),
    colorCount() {
      return this.count >= 100 ? { color: 'green' } : { color: 'red' };
    },
  },
};
</script>
