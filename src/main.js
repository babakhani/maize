import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Store from './store'
import i18n from '@/i18n'
import BootstrapVue from 'bootstrap-vue'
import VueLodash from 'vue-lodash'
import VTooltip from 'v-tooltip'
import faker from 'faker/locale/fa'
const options = { name: '_' } // customize the way you want to call it
Vue.use(VueLodash, options)
Vue.use(VTooltip)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component('icon', Icon)
/* eslint-disable no-new */

Vue.mixin({
  beforeCreate () {
    let base = 'https://cdn.landingo.ir/public'
    faker.setLocale('fa')
    faker.commerce.color()
    window.faker = faker
    this.faker = faker
    faker.url = function () {
      return 'https://landingo.ir'
    }
    faker.icon = {
      normal (name = 'fa-tree', color = '333', width = 48, height = 48) {
        return `https://imgplaceholder.com/${width}x${height}/transparent/${color}/${name}`
      }
    }
    faker.img = {
      size (width = 300, height = 300) {
        return `https://picsum.photos/${width}/${height}`
      },
      big () {
        return `${base}/imgs/wide.jpg`
      },
      tall () {
        return `${base}/imgs/tall.jpg`
      },
      icon () {
        return `${base}/imgs/img_square_1.svg`
      },
      wide () {
        return `${base}/imgs/wider.jpg`
      },
      rounded () {
        return `${base}/imgs/img_circle_300.png`
      },
      logo () {
        return `${base}/imgs/img_logo.png`
      },
      customer_1 () {
        return `${base}/imgs/customers/adobe.svg`
      },
      customer_2 () {
        return `${base}/imgs/customers/discovery.svg`
      },
      customer_3 () {
        return `${base}/imgs/customers/ebay.svg`
      },
      customer_4 () {
        return `${base}/imgs/customers/samsung.svg`
      },
      customer_5 () {
        return `${base}/imgs/customers/orange.svg`
      },
      customer_6 () {
        return `${base}/imgs/customers/salesforce.svg`
      }
    }
    faker.footer = {
      copyright () {
        return '2018 Maize. All Rights Reserved'
      }
    }
  }
})

new Vue({
  el: '#app',
  router,
  i18n,
  store: Store,
  components: {
    App,
    Icon
  },
  template: '<App/>'
})
