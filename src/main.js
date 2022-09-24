import Vue from 'vue'
import App from './App.vue'
import router from './router'

import TypeNav from './pages/Home/TypeNav'
Vue.config.productionTip = false

//三级事件全局注册
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
