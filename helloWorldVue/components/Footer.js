app.component('footer-bank', {
  props: ['value', 'date'],

  template: /*html*/ `
    <div class="bg-dark py-3 mt-4 text-white">
      <h3>{{ text }} - {{ value }}</h3>
      <p>{{ date }}</p> 
    </div>
  `,

  data() {
    return {
      text: 'Footer Web',
    };
  },
});
