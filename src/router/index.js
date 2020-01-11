import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index'
import Widgets from '@/pages/widgets'
import Preview from '@/pages/preview'

Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
