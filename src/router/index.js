import Vue from 'vue';
import Router from 'vue-router';

import Upcoming from '../view/Upcoming.vue';
import Toprated from '../view/Toprated.vue';
import Nowplaying from '../view/Nowplaying.vue';
import Home from '../view/Home.vue';
import Search from '../view/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming,
    },
    {
      path: '/toprated',
      name: 'toprated',
      component: Toprated,
    },
    {
      path: '/nowplaying',
      name: 'nowplaying',
      component: Nowplaying,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
  ],
});
