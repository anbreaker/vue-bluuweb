import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { privateRoute: true },
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    meta: { privateRoute: true },
    component: () => import('../views/Edit.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to.meta.privateRoute); --> true

  if (to.meta.privateRoute) {
    if (store.getters.authenticatedUser) next();
    else next('/login');
  } else {
    next();
  }
});

export default router;
