import Vue from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false
Vue.component('Paginate', Paginate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

