import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './registerServiceWorker'
import VueLocalStorage from 'vue-localstorage'

require('semantic-ui-css/semantic.css')

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
