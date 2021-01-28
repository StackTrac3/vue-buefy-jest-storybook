import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '@templates/DefaultTemplate';
import HomePage from '@pages/HomePage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: 'home',
        path: '',
        component: HomePage,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
