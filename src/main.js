import Vue from 'vue'
import App from './App.vue'

import './assets/icon/iconfont.css'
import './plugins/element.js'
import router from './router'

//导入图片懒加载
import LazyLoad from 'vue-lazyload'

Vue.use(LazyLoad)
Vue.config.productionTip = false

import axios from 'axios'

// axios.defaults.baseURL = '/api'
Vue.prototype.axios = axios

Vue.prototype.$bus = new Vue()
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
