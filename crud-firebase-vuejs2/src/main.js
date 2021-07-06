import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import { auth } from './firebase.config';

// Observer Firebase
auth.onAuthStateChanged((user) => {
  if (user) {
    const userActive = {
      email: user.email,
      uid: user.uid,
    };

    store.dispatch('activeUser', userActive);
  } else {
    console.log(user, '<--- en Main');
    store.dispatch('activeUser', null);
  }

  //To wait comprobation...
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
