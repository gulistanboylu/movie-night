import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
import Upcoming from "./components/Upcoming.vue";
import Toprated from "./components/Toprated.vue";
import Home from "./components/Home.vue";
import router from './router/index.js';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
