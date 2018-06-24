import Vue from 'vue'
import lodash from 'lodash'
import rawWidgetList from '../../components/widgets/spec'
let defaultCurrentWidgetList = window.localStorage.getItem('page') ? JSON.parse(window.localStorage.getItem('page')).data : []
export default {
  namespaced: true,
  state: {
    currentWidgetList: defaultCurrentWidgetList,
    rawWidgetList: rawWidgetList
  },
  mutations: {
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
    updateItemOfCurrentWidgetList (state, payload = {key: null, name: 'null', data: {}}) {

      console.log('updateItemOfCurrentWidgetList')

      const list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this, it might raise cant read 0 of undefined
      let item = list.filter((n) => {
        return n.uniqeId == payload.key
      })[0]
      if (typeof item.data === 'undefined') {
        item.data = {}
      }
      item.data[payload.name] = lodash.extend(item.data[payload.name], payload.data)
      state.currentWidgetList = []
      state.currentWidgetList = list
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    addToCurrentWidgetList (state, payload) {
      if (lodash.isString(payload)) {
        state.currentWidgetList.push(payload)
      } else if (lodash.isArray(payload)) {
        payload.forEach((item) => {
          let it = lodash.cloneDeep(item)
          it.uniqeId = it.name + (lodash.random(1000) + new Date().valueOf())
          state.currentWidgetList.push(it)
        })
      }
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
    moveWidget (context, payload = {direction: null, key: null}) {
      context.commit('moveWidget', payload)
    },
    sortCurrentWidgetList (context, payload) {
      context.commit('sortCurrentWidgetList', payload)
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
