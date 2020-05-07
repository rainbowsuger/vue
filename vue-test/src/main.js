// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import createStore from './views/components/store'
import VueLazyload from 'vue-lazyload'
import 'view-design/dist/styles/iview.css'
import '@/libs/init'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueLazyload)
const store = createStore()
Vue.config.productionTip = false
Vue.prototype.HOST = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
