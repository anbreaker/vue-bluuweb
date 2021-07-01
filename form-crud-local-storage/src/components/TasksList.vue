<template>
  {{ tasks }}
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">Status</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <th scope="row">{{ task.id }}</th>
        <td>{{ task.name }}</td>
        <td>
          <!-- <span v-for="(category, index) in task.categories" :key="index">
            {{ index > 0 ? `, ${category} ` : category }}
          </span> -->
          {{ task.categories.join(', ') }}
        </td>
        <td>{{ task.status }}</td>
        <td>{{ task.numbers }}</td>
        <td>
          <router-link
            class="mr-2 btn btn-warning btn-sm"
            :to="{
              name: 'Edit',
              params: {
                id: task.id,
              },
            }"
            >Edit</router-link
          >

          <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['tasks']),
  },

  methods: {
    ...mapActions(['deleteTask']),
  },
};
</script>
