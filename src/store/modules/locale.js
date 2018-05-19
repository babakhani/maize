import i18n from '@/i18n'

export default {
  namespaced: true,
  state: {
    direction: 'ltr',
    alignment: 'right'
  },
  mutations: {
    setLang (state, payload) {
      i18n.locale = payload
      window.localStorage.setItem('locale', payload)
    }
  },
  actions: {
    changeLang (context, payload) {
      context.commit('setLang', payload)
    }
  }
}
