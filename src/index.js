import Vue from 'vue'
import router from './router'

import '@/styles/style.scss'

import App from './App.vue'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
