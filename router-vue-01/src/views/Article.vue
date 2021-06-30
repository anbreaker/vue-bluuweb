<template>
  <Title text="Dynamic route with Params" />
  <h2>Param: {{ $route.params.id }}</h2>

  <h3>{{ post.title }}</h3>
  <p>{{ post.id }} - {{ post.body }}</p>
</template>

<script>
import Title from '@/components/Title.vue';

export default {
  components: {
    Title,
  },

  data() {
    return {
      post: {},
    };
  },

  methods: {
    async useApiPost() {
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        const objectData = await data.json();

        this.post = objectData;
      } catch (error) {
        console.error(error);
      }
    },
  },

  created() {
    this.useApiPost();
  },
};
</script>

<style></style>
