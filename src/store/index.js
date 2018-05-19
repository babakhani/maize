import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import locale from './modules/locale'
// https://forum.vuejs.org/t/nothing-but-blank-pages-in-internet-explorer-11/5638/12
/* eslint-disable */
// let Promise = require('es6-promise').Promise
// require('es6-promise').polyfill()
/* eslint-enable */
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: false,
  state: {
    storeVersion: '0.0.0'
  },
  modules: {
    main: main,
    locale: locale
  }
})
export default store
