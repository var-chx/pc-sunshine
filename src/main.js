import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import { Button } from 'element-ui'
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
