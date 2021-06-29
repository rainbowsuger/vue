// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createStore from './views/components/store'
import VueLazyload from 'vue-lazyload'
import 'view-design/dist/styles/iview.css'
import '@/libs/init'
import Vuex from 'vuex'
import './plugins/local'

Vue.use(Vuex)
Vue.use(VueLazyload)
const store = createStore()
Vue.config.productionTip = false
Vue.prototype.HOST = '/api'

var EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
        return EventBus
    }
  }
})

Vue.prototype.$bus.$emit('test', '数据总线值')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
