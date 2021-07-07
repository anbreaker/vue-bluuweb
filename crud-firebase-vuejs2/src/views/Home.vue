<template>
  <div class="home">
    <div class="row my-5">
      <div class="col mb-2">
        <h1 class="float-left">Home</h1>
        <h1 class="float-right" v-if="user">{{ user.email }}</h1>
      </div>
    </div>

    <router-link to="/add">
      <button class="btn btn-success btn-block">Add Task</button>
    </router-link>

    <div v-if="loading" class="text-center ">
      <h3>Loading...</h3>
      <PulseLoader :loading="loading" class="mt-5"></PulseLoader>
    </div>

    <form class="mt-4" @submit.prevent="searchTaskByText(searchTask)">
      <h4>Serch Task!</h4>
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        v-model="searchTask"
        v-on:keyup="searchTaskByText(searchTask)"
      />
    </form>

    <ul class="list-group mt-5" v-if="!loading">
      <li
        class="list-group-item"
        v-for="(item, index) in searchTaskArrayFilter"
        :key="index"
      >
        {{ item.name }} - {{ item.id }}

        <div class="float-right">
          <router-link :to="{ name: 'Edit', params: { id: item.id } }">
            <button class="btn btn-warning btn-sm mr-2">Edit</button>
          </router-link>
          <button @click="deleteTask(item.id)" class="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'Home',

  data() {
    return {
      searchTask: '',
    };
  },

  components: { PulseLoader },

  created() {
    this.getTasks();
  },

  methods: {
    ...mapActions(['getTasks', 'deleteTask', 'searchTaskByText']),
  },

  computed: {
    ...mapState(['tasks', 'user', 'loading']),
    ...mapGetters(['searchTaskArrayFilter']),
  },
};
</script>
