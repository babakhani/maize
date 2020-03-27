import lodash from 'lodash'
import rawWidgetList from '../../components/widgets/spec'
const CONFIG = window.CONFIG
export default {
  namespaced: true,
  state: {
    page: window.localStorage.getItem('page') ? JSON.parse(window.localStorage.getItem('page')) : null,
    settings: window.localStorage.getItem('page') ? JSON.parse(window.localStorage.getItem('page')).settings : CONFIG.siteDefaultSettings,
    currentHistoryIndex: 0,
    historyLength: 0,
    currentWidgetList: window.localStorage.getItem('page') ? JSON.parse(window.localStorage.getItem('page')).widgets : [],
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
    },
    updateLocalStorage (state) {
      state.page = {
        maize: '0.0.1',
        widgets: state.currentWidgetList,
        settings: state.settings
      }
      window.localStorage.setItem('page', JSON.stringify(state.page))
    },
    moveWidget (state, payload) {
      // TODO: do better
      function arrayMove (x, from, to) {
        x.splice((to < 0 ? x.length + to : to), 0, x.splice(from, 1)[0])
      }
      const list = lodash.cloneDeep(state.currentWidgetList)
      let itemIndex = null
      list.forEach((n, index) => {
        if (n.uniqeId === payload.key) {
          itemIndex = index
        }
      })
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
    },
    updateCurrentWidgetList (state, payload = { key: null, data: {} }) {
      state.currentWidgetList = payload
    },
    updateWidgetByUniqeId (state, payload = { key: null, data: {} }) {
      const list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this, it might raise cant read 0 of undefined
      let item = list.find((n) => {
        return n.uniqeId === payload.key
      })
      if (typeof item.data === 'undefined') {
        item.data = {}
      }
      item.data = lodash.extend(item.data, payload.data)
      state.currentWidgetList = []
      state.currentWidgetList = list
    },
    // TODO: delete
    updateItemOfCurrentWidgetList (state, payload = { key: null, name: 'null', data: {} }) {
      const list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this, it might raise cant read 0 of undefined
      let item = list.find((n) => {
        return n.uniqeId === payload.key
      })
      if (typeof item.data === 'undefined') {
        item.data = {}
      }
      item.data[payload.name] = lodash.extend(item.data[payload.name], payload.data)
      state.currentWidgetList = []
      state.currentWidgetList = list
    },
    addToCurrentWidgetList (state, payload) {
      payload.forEach((item) => {
        let it = lodash.cloneDeep(item)
        it.uniqeId = it.name + (lodash.random(1000) + new Date().valueOf())
        state.currentWidgetList.push(it)
      })
    },
    removeFromCurrentWidgetList (state, payload) {
      let list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this functionality later
      lodash.remove(list, (n, index) => {
        return n.uniqeId === payload
      })
      state.currentWidgetList = list
    },
    sortCurrentWidgetList (state, payload) {
      state.currentWidgetList = payload
    }
  },
  actions: {
    updateSettings (context, payload) {
      context.commit('updateSettings', payload)
      context.commit('updateLocalStorage')
    },
    moveWidget (context, payload = { direction: null, key: null }) {
      context.commit('moveWidget', payload)
      context.commit('updateLocalStorage')
    },
    sortCurrentWidgetList (context, payload) {
      context.commit('sortCurrentWidgetList', payload)
      context.commit('updateLocalStorage')
    },
    updateCurrentWidgetList (context, payload) {
      context.commit('updateCurrentWidgetList', payload)
      context.commit('updateLocalStorage')
    },
    updateWidgetByUniqeId (context, payload) {
      context.commit('updateWidgetByUniqeId', payload)
      context.commit('updateLocalStorage')
    },
    updateItemOfCurrentWidgetList (context, payload) {
      context.commit('updateItemOfCurrentWidgetList', payload)
      context.commit('updateLocalStorage')
    },
    addToCurrentWidgetList (context, payload) {
      context.commit('addToCurrentWidgetList', payload)
      context.commit('updateLocalStorage')
    },
    removeFromCurrentWidgetList (context, payload) {
      context.commit('removeFromCurrentWidgetList', payload)
      context.commit('updateLocalStorage')
    }
  }
}
