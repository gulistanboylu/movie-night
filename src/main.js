import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'babel-polyfill';
import { store } from './store/store';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
