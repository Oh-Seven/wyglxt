import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'   //样式表

Vue.use(ElementUI);//使用element-ui
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
