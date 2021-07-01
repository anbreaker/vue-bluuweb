<template>
  <form @submit.prevent="useForm">
    <Input :task="task" />
  </form>
  <hr />

  <TasksList />
</template>

<script>
import { mapActions } from 'vuex';
import shortid from 'shortid';

import Input from '../components/Input.vue';
import TasksList from '../components/TasksList.vue';

export default {
  name: 'Home',

  components: {
    Input,
    TasksList,
  },

  data() {
    return {
      task: {
        id: '',
        name: '',
        categories: [],
        status: '',
        numbers: 0,
      },
    };
  },

  methods: {
    ...mapActions(['setTasks']),

    useForm() {
      console.log(this.task);

      if (this.task.name.trim() === '') {
        console.log('Field Empty');
        return;
      }
      console.log('Field With data.');

      // Create id
      this.task.id = shortid.generate();

      // Send Data...
      this.setTasks(this.task);

      // Clean Data
      this.task = {
        id: '',
        name: '',
        categories: [],
        status: '',
        numbers: 0,
      };
    },
  },
};
</script>
