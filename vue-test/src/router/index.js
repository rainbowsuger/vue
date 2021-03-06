import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/components/guide'
import Route1 from '@/components/route1'
import Route2 from '@/components/route2'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {title: '首页'},
      component: () => import(/* webpackChunkName: "home" */'@/views/home.vue')
    },
    {
      path: '/guide',
      name: 'lazyImg',
      meta: {title: '新手引导'},
      component: HelloWorld
    },
    {
      path: '/guide2',
      name: 'driver',
      meta: {title: '新手引导'},
      component: () => import(/* webpackChunkName: "knowledge" */ '@/views/components/02guide.vue')
    },
    // 若有设置keepAlive=true，本页面缓存起来,返回back，路由跳转时不会执行create生命周期
    {
      path: '/route1',
      name: 'route1',
      meta: {title: '路由跳转缓存', keepAlive: true},
      component: Route1
    },
    {
      path: '/route2',
      name: 'route2',
      component: Route2
    },
    {
      path: '/route3',
      name: 'route3',
      component: () => import('@/components/route3.vue')
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: () => import(/* webpackChunkName: "knowledge" */ '@/views/components/knowledge.vue')
    },
    {
      path: '/mcanvas',
      name: 'mcanvas',
      component: () => import(/* webpackChunkName: "mcanvas" */ '@/views/components/mcanvas.vue')
    },
    {
      path: '/mychart',
      name: 'mychart',
      component: () => import(/* webpackChunkName: "mychart" */ '@/views/components/chart.vue')
    },
    {
      path: '/promise',
      name: 'promise',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/components/promise.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import(/* webpackChunkName: "map" */ '@/views/components/map.vue')
    },
    {
      path: '/signature',
      name: 'signature',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/components/signature.vue')
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/components/cropper.vue')
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/components/echarts.vue')
    },
    {
      path: '/debounceThrottle',
      name: 'debounceAndthrottle',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/components/debounceAndthrottle.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/components/vuex.vue')
    },
    {
      path: '/viewer',
      name: 'viewer',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/components/viewer.vue')
    },
    {
      path: '/aboutTs',
      name: 'aboutTs',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/typeScript/aboutTs.vue')
    },
    {
      path: '/vuedraggable',
      name: 'vuedraggable',
      component: () => import(/* webpackChunkName: "promise" */ '@/views/components/vuedraggable.vue')
    }
  ]
})

// next()后代码会不会执行：会。
router.beforeEach((to, from, next) => {
  next()
  console.log('router.beforeEach ====', 'next()之后得我执行了')
})

export default router
