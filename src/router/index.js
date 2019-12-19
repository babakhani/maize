import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index'
import Widgets from '@/pages/widgets'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/widgets',
      name: 'Widgets',
      component: Widgets
    }
  ]
})
