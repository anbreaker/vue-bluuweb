<template>
  <div class="home">
    <h1>Home</h1>

    <router-link to="/add">
      <button class="btn btn-success btn-block">Add Task</button>
    </router-link>

    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="(item, index) in tasks" :key="index">
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
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Home',

  created() {
    this.getTasks();
  },

  methods: {
    ...mapActions(['getTasks', 'deleteTask']),
  },

  computed: {
    ...mapState(['tasks']),
  },
};
</script>
