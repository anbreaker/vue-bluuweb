<template>
  <div>
    <button v-on:click="showMessage">Click1</button>
    <!-- v-on: equivalent @ -->
    <button @click="showMessage">Click2</button>
    <!-- Dynamic Event -->
    <button @[event]="showMessage">Click3</button>
    <!-- Dynamic Event -->
    <button v-on="handleEvent">Multiple</button>
    <!-- Event Modifiers -->
    <button v-on:click.once="oneMessage">Once</button>
    <!-- <button @click.once="oneMessage">Once</button> -->
  </div>
</template>

<script>
export default {
  name: 'Event',

  data() {
    return {
      event: 'click',
      handleEvent: {
        click: () => alert('Click!!'),
        mouseleave: () => alert('You removed the focus from the button.'),
        mousewheel: (event) => console.log('You did scroll', event.deltaY),
      },
    };
  },

  methods: {
    showMessage() {
      alert('Hello! Thanks for click me!');
    },

    oneMessage() {
      console.log('It will only display the warning once');
      alert('only one!');
    },
  },
};
</script>
