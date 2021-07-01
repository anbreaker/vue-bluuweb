<template>
  <form @submit.prevent="useForm">
    <input
      type="text"
      class="form-control my-2"
      placeholder="Enter Name"
      v-model.trim="task.name"
    />
    <div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkbox-1"
          v-model="task.categories"
          value="Javascript"
        />
        <label class="form-check-label" for="checkbox-1">Javascript</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkbox-2"
          v-model="task.categories"
          value="NodeJs"
        />
        <label class="form-check-label" for="checkbox-2">NodeJs</label>
      </div>
    </div>

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-1"
          class="form-check-input"
          value="urgent"
          v-model="task.status"
        />
        <label for="radio-1" class="form-check-label">Urgent</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-2"
          class="form-check-input"
          value="relax"
          v-model="task.status"
        />
        <label for="radio-2" class="form-check-label">Relax</label>
      </div>
    </div>

    <div class="mt-2">
      <input type="number" class="form-control" v-model.number="task.numbers" />
    </div>

    <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="blockSubmitBtn">
      Execute!
    </button>
  </form>

  <hr />
  <p>{{ task }}</p>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      task: {
        name: '',
        categories: [],
        status: '',
        numbers: 0,
      },
    };
  },

  methods: {
    useForm() {
      console.log(this.task);

      if (this.task.name.trim() === '') {
        console.log('Field Empty');
        return;
      }
      console.log('Field With data.');
      // Send Data...

      this.task = {
        name: '',
        categories: [],
        status: '',
        numbers: 0,
      };
    },
  },

  computed: {
    blockSubmitBtn() {
      return this.task.name.trim() === '' ? true : false;
    },
  },
};
</script>
