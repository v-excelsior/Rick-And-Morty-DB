import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MainPage from './views/MainPage.vue'
import RandomPage from './views/RandomPage.vue'
import SearchPage from './views/SearchPage.vue'

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/dist',
            component: MainPage,
        },
        {
            path: '/dist/RandomPage',
            component: RandomPage,
        },
        {
            path: '/dist/SearchPage',
            component: SearchPage,
        },
        {
            // instead 404 page
            path: '/*',
            redirect: '/dist',
        },
    ],
})
