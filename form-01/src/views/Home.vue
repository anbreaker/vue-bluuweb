<template>
  <form>
    <input
      type="text"
      class="form-control my-2"
      placeholder="Enter Name"
      v-model="task.name"
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
      },
    };
  },
};
</script>
