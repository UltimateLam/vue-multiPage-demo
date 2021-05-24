import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import "@/assets/scss/public.scss"

Vue.config.productionTip = false

window.myVue = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
