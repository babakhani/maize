import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index'
import Widgets from '@/pages/widgets'
import Preview from '@/pages/preview'
import Source from '@/pages/source'
import Templates from '@/pages/picktemplates'

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
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/source',
      name: 'Source',
      component: Source
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates
    }
  ]
})
