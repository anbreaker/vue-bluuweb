<template>
  <div>
    <div class="row my-5">
      <div class="col mb-2">
        <h1 class="float-left">Edit Task</h1>
        <h1 class="float-right" v-if="user">{{ user.email }}</h1>
      </div>
    </div>

    <div class="row">
      <div class="col mb-2">
        <h3 class="float-left">Task with ID:</h3>
        <h3 class="float-right" v-if="task">{{ task.id }}</h3>
      </div>
    </div>

    <form @submit.prevent="editTask(task)">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Name</div>
        </div>
        <input type="text" class="form-control" v-model="$v.task.name.$model" />
      </div>

      <button
        type="submit"
        class="btn btn-primary mt-2"
        :disabled="$v.task.$invalid || loading"
      >
        Edit Task
      </button>
    </form>
    <br />
    <small v-if="!$v.task.name.required" class="text-danger">Field required</small>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
const { required, minLength } = require('vuelidate/lib/validators');

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
    ...mapState(['user', 'task', 'loading']),
  },

  validations: {
    task: {
      name: { required, minLength: minLength(3) },
    },
  },
};
</script>
