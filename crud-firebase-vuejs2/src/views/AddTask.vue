<template>
  <div>
    <div class="row my-5">
      <div class="col mb-2">
        <h1 class="float-left">Add Task</h1>
        <h1 class="float-right" v-if="user">{{ user.email }}</h1>
      </div>
    </div>

    <form @submit.prevent="addTask(name)" class="">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Name</div>
        </div>
        <input type="text" class="form-control" v-model="name" />
      </div>

      <button type="submit" class="btn btn-primary mt-2">Add Task</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Add',

  data() {
    return {
      name: '',
    };
  },

  methods: {
    ...mapActions(['addTask']),
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>
