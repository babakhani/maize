import i18n from '@/i18n'
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    imageList: []
  },
  mutations: {
    updateImageList (state, payload) {
      state.imageList = payload
    }
  },
  actions: {
    loadRandomImages (context, payload) {
      axios
        .get('https://picsum.photos/v2/list?page=1&limit=10')
        .then((response) => {
          context.commit('updateImageList', response.data)
      })
    }
  }
}
