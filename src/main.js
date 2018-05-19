import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Store from './store'
import i18n from '@/i18n'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store: Store,
  components: { App, Icon },
  template: '<App/>'
})
