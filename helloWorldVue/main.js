const app = Vue.createApp({
  data() {
    return {
      title: 'First Hello World VueJs!',
      link: 'https://google.es',
      quantity: 400,
      status: false,
      services: ['transfers', 'payments', 'drafts'],
      activate: false,
    };
  },

  methods: {
    addCredit() {
      this.quantity = this.quantity + 100;
    },

    reduceCredit(value) {
      if (this.quantity <= 0) {
        this.activate = true;
        alert('Credit 0!!');
        return;
      }

      this.quantity = this.quantity - value;
    },
  },
});
