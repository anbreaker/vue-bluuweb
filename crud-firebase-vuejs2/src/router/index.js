import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import { auth } from '../firebase.config';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { privateRoute: true },
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/AddTask.vue'),
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    meta: { privateRoute: true },
    component: () => import('../views/Edit.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.privateRoute)) {
    const userActive = auth.currentUser;

    if (!userActive) next({ path: '/login' });
    else next();
  } else {
    next();
  }
});

export default router;
