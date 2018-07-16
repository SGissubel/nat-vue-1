import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Dashboard from '../components/Dashboard/Dashboard';
import LandingPage from '../components/LandingPage/LandingPage';
import Login from '../components/Login/Login';
import SignUp from '../components/Login/SignUp';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/welcome',
      component: LandingPage,
      meta: {
        title: 'Welcome',
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/signup',
      component: SignUp,
      meta: {
        title: 'SignUp',
      },
    },
    {path: '*', redirect: '/welcome'},
  ],
});

router.replace('/welcome');

module.exports = router;
