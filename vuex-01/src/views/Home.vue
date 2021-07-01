<template>
  <div class="home">
    <h1 :style="colorCount">{{ title }}: {{ count }}</h1>

    <button @click="actionIncrement">Increment</button>

    <BtnDecrement />
    <hr />

    <BtnAction :status="true" />
    <BtnAction :status="false" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import BtnDecrement from '@/components/BtnDecrement.vue';
import BtnAction from '@/components/BtnAction.vue';

export default {
  name: 'Home',

  components: { BtnDecrement, BtnAction },

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

  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['actionIncrement']),
  },
};
</script>
