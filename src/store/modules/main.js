import Vue from 'vue'
import lodash from 'lodash'
import rawWidgetList from '../../components/widgets/spec'
export default {
  namespaced: true,
  state: {
    settings: window.localStorage.getItem('settings') ? JSON.parse(window.localStorage.getItem('settings')) : {
      title: 'Maize',
      description: 'Example description',
      language: 'en',
      baseURL: 'https://raw.githubusercontent.com/babakhani/maize/master/public/',
      canonical: '/',
      nextURL: '',
      image: '',
      imageWidth: '',
      imageHeight: '',
      imageType: '',
      secureURL: '',
      facebookAppID: '',
      twitterAccount: '',
      twitterCard: 'summary',
      type: 'Organization',
      color: '#fff'
    },
    currentHistoryIndex: null,
    historyLength: null,
    currentWidgetList: window.localStorage.getItem('page') ? JSON.parse(window.localStorage.getItem('page')).data : [],
    rawWidgetList: rawWidgetList
  },
  getters: {
    settings (state) {
      return state.settings
    }
  },
  mutations: {
    updateSettings (state, payload) {
      state.settings = payload
      window.localStorage.setItem('settings', JSON.stringify(state.settings))
    },
    moveWidget (state, payload) {
      // TODO: do better
      function arrayMove (x, from, to) {
        x.splice((to < 0 ? x.length + to : to), 0, x.splice(from, 1)[0]);
      }
      const list = lodash.cloneDeep(state.currentWidgetList)
      let itemIndex = null
      // TODO: check this, it might raise cant read 0 of undefined
      let item = list.filter((n, index) => {
        if (n.uniqeId == payload.key) {
          itemIndex = index
        }
        return n.uniqeId == payload.key
      })[0]
      let targetIndex = null
      if (payload.direction === 'up') {
        targetIndex = itemIndex - 1
      } else if (payload.direction === 'down') {
        targetIndex = itemIndex + 1
      }
      if (targetIndex < 0 || targetIndex > list.length - 1) {
      } else {
        arrayMove(list, itemIndex, targetIndex)
      }
      state.currentWidgetList = []
      state.currentWidgetList = list
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    updateCurrentWidgetList (state, payload = { key: null, data: {} }) {
      const list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this, it might raise cant read 0 of undefined
      let item = list.find((n) => {
        return n.uniqeId == payload.key
      })
      item = payload.data
      state.currentWidgetList = []
      state.currentWidgetList = list
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    updateItemOfCurrentWidgetList (state, payload = {key: null, name: 'null', data: {}}) {
      const list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this, it might raise cant read 0 of undefined
      let item = list.find((n) => {
        return n.uniqeId == payload.key
      })
      if (typeof item.data === 'undefined') {
        item.data = {}
      }
      item.data[payload.name] = lodash.extend(item.data[payload.name], payload.data)
      state.currentWidgetList = []
      state.currentWidgetList = list
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    addToCurrentWidgetList (state, payload) {
      payload.forEach((item) => {
        let it = lodash.cloneDeep(item)
        it.uniqeId = it.name + (lodash.random(1000) + new Date().valueOf())
        state.currentWidgetList.push(it)
      })
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    removeFromCurrentWidgetList (state, payload) {
      let list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this functionality later
      lodash.remove(list, (n, index) => {
        return n.uniqeId === payload
      })
      state.currentWidgetList = list
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    sortCurrentWidgetList (state, payload) {
      state.currentWidgetList = payload
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    }
  },
  actions: {
    updateSettings (context, payload) {
      context.commit('updateSettings', payload)
    },
    moveWidget (context, payload = {direction: null, key: null}) {
      context.commit('moveWidget', payload)
    },
    sortCurrentWidgetList (context, payload) {
      context.commit('sortCurrentWidgetList', payload)
    },
    updateCurrentWidgetList (context, payload) {
      context.commit('updateCurrentWidgetList', payload)
    },
    updateItemOfCurrentWidgetList (context, payload) {
      context.commit('updateItemOfCurrentWidgetList', payload)
    },
    addToCurrentWidgetList (context, payload) {
      context.commit('addToCurrentWidgetList', payload)
    },
    removeFromCurrentWidgetList (context, payload) {
      context.commit('removeFromCurrentWidgetList', payload)
    }
  }
}
