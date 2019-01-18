import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
import Upcoming from "./components/Upcoming.vue";
import Toprated from "./components/Toprated.vue";
import Home from "./components/Home.vue";


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
