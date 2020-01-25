import i18n from '@/i18n'

export default {
  namespaced: true,
  state: {
    direction: window.CONFIG.direction,
    // DEPRECATED
    currentLocale: null,
    current: window.CONFIG.locale
  },
  mutations: {
    setLang (state, payload) {
      i18n.locale = payload
      state.currentLocale = payload
      state.current = payload
      window.localStorage.setItem('locale', payload)
    }
  },
  actions: {
    changeLang (context, payload) {
      context.commit('setLang', payload)
    }
  }
}
