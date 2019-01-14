import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
import Upcoming from "./Upcoming.vue";
import Toprated from "./Toprated.vue";
import Home from "./Home.vue";


Vue.use(Router);

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/upcoming',
        name: 'upcoming',
        component: Upcoming
      },
      {
        path: '/toprated',
        name: 'toprated',
        component: Toprated
      }
    ]
  })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
