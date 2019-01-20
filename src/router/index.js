import Vue from 'vue'
import Router from 'vue-router'

import Upcoming from "../view/Upcoming.vue";
import Toprated from "../view/Toprated.vue";
import Home from "../view/Home.vue";

Vue.use(Router);

export default new Router({
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