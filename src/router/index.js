import Vue from 'vue'
import Router from 'vue-router'
import Events from '@/pages/index'
import EventBuilder from '@/components/partial/EventBuilder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Events',
      component: Events
    },
    {
      path: '/event-builder',
      name: 'EventBuilder',
      component: EventBuilder
    }
  ]
})
