/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import router from './router'
import App from './views/App'

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
    router,
    render: h => h(App),
}).$mount('#spa')
