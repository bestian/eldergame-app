import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './registerServiceWorker'
import VueLocalStorage from 'vue-localstorage'
import ImageUploader from 'vue-image-upload-resize'

require('semantic-ui-css/semantic.css')

Vue.config.productionTip = false
Vue.use(VueLocalStorage)
Vue.use(ImageUploader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
