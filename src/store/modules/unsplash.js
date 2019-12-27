import i18n from '@/i18n'
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    imageList: [
      'https://picsum.photos/id/1/200/300',
      'https://picsum.photos/id/2/200/300',
      'https://picsum.photos/id/3/200/300',
      'https://picsum.photos/id/4/200/300',
      'https://picsum.photos/id/5/200/300',
      'https://picsum.photos/id/6/200/300',
      'https://picsum.photos/id/7/200/300',
      'https://picsum.photos/id/8/200/300',
      'https://picsum.photos/id/9/200/300',
      'https://picsum.photos/id/10/200/300',
      'https://picsum.photos/id/11/200/300',
    ]
  },
  mutations: {
    updateImageList (state, payload) {
      state.imageList = payload
    }
  },
  actions: {
    loadRandomImages (context, payload) {
      //axios
      //  .get('https://picsum.photos/v2/list?page=1&limit=10')
      //  .then((response) => {
      //    context.commit('updateImageList', response.data)
      //})
    }
  }
}
