import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueClipboards from 'vue-clipboards'

Vue.use(VueClipboards)

axios.defaults.baseURL = './api'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
