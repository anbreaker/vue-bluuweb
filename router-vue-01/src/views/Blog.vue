<template>
  <div>
    <Title text="Title Blog" />

    <div v-for="post in arrayBlog" :key="post.id">
      <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';

export default {
  components: {
    Title,
  },

  data() {
    return {
      arrayBlog: [],
    };
  },

  methods: {
    async useApi() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const arrayData = await data.json();

        this.arrayBlog = arrayData;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.useApi();
  },
};
</script>

<style scoped></style>
