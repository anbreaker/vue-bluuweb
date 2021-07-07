<template>
  <div>
    <div class="row my-5">
      <div class="col mb-2">
        <h1 class="float-left">Add Task</h1>
        <h1 class="float-right" v-if="user">{{ user.email }}</h1>
      </div>
    </div>

    <form @submit.prevent="addTask(nameTask)" class="">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Name</div>
        </div>
        <input type="text" class="form-control" v-model="nameTask" />
      </div>

      <button
        type="submit"
        class="btn btn-primary mt-2"
        :disabled="$v.$invalid || loading"
      >
        Add Task
      </button>
    </form>
    <br />
    <small v-if="!$v.nameTask.required" class="text-danger">Field required</small>
    <small v-if="!$v.nameTask.minLength" class="text-danger"
      >Min Length 3 characteres</small
    >
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
const { required, minLength } = require('vuelidate/lib/validators');

export default {
  name: 'Add',

  data() {
    return {
      nameTask: '',
    };
  },

  methods: {
    ...mapActions(['addTask']),
  },
  computed: {
    ...mapState(['user', 'loading']),
  },

  validations: {
    nameTask: { required, minLength: minLength(3) },
  },
};
</script>
