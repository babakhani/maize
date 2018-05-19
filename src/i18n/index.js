import Vue from 'vue'
import VueI18n from 'vue-i18n'
import config from '../config/config'
import En from './en'
import Fa from './fa'

Vue.use(VueI18n)
const messages = {
  en: En,
  fa: Fa
}
// https://github.com/kazupon/vue-i18n
const i18n = new VueI18n({
  // set locale
  locale: window.localStorage.getItem('locale') ? window.localStorage.getItem('locale') : config.locale,
  // set locale messages
  messages
})
// Sample usage
// <h1>{{ $t("message.hello")}}</h1>
export default i18n
