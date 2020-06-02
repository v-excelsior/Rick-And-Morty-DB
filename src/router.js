import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/dist',
            component: () => import('./views/MainPage.vue'),
        },
        {
            path: '/dist/RandomPerson',
            component: () => import('./views/RandomPerson.vue'),
        },
        {
            // instead 404 page
            path: '/*',
            redirect: '/dist',
        },
    ],
})
