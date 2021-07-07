<template>
  <div class="home">
    <BindLearn />
    <BindLearnAlternaive />
  </div>
</template>

<script>
// @ is an alias to /src
import BindLearn from '@/components/BindLearn.vue';
import BindLearnAlternaive from '@/components/BindLearnAlternaive.vue';

export default {
  name: 'Home',
  components: {
    BindLearn,
    BindLearnAlternaive,
  },
};
</script>
