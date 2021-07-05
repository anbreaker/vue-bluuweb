<template>
  <div>
    <h1>Edit</h1>
    <form @submit.prevent="editTask(task)" class="form-inline">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Name</div>
        </div>
        <input type="text" class="form-control" v-model="task.name" />
      </div>

      <button type="submit" class="btn btn-primary mb-2">Add Task</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Edit',

  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTask(this.id);
  },

  methods: {
    ...mapActions(['getTask', 'editTask']),
  },

  computed: {
    ...mapState(['task']),
  },
};
</script>
