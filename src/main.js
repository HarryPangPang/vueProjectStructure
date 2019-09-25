import Vue from 'vue'
import App from './App.vue'
import router from './routers'
// axios 拦截器
import './plugins/network/axios'
import api from './plugins/network/api'
import http from './plugins/network/http'
import './assets/css/index.scss'
import gaComponent from './components'

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === "development") {
  require("@/mock");
}

Vue.config.productionTip = false

// 对后端接口 进行全局注册
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;

Vue.use(gaComponent)

// 将vue实例放在全局以便拦截器使用
window.vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
