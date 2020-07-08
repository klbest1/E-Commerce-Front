import Vue from 'vue'
import App from './App'
import httpApi from '@/server/httpApi'
import mock from '@/mock/api.js'

Vue.config.productionTip = false
Vue.prototype.$http = httpApi

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
