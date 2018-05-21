import Vue from 'vue'
import lodash from 'lodash'

const rawWidgetList = [
  {
    name: 'TeamWidget',
    data: {}
  },
  {
    name: 'TeamWidget2',
    data: {}
  },
  {
    name: 'Header',
    data: {}
  },
  {
    name: 'Footer',
    data: {}
  },
  {
    name: 'Banner',
    data: {}
  },
]

let page = [
  {
    name: 'Banner',
    uniqeId: 'Bannere21432141',
    data: {
      mainTitle: {
        text: 'Hi i am banner Widget from store',
        styles: {}
      }
    }
  }
]

let defaultCurrentWidgetList = window.localStorage.getItem('page') ? JSON.parse(window.localStorage.getItem('page')).data : page

export default {
  namespaced: true,
  state: {
    addWidgetMode: false,
    // currentWidgetList: ['Banner'],
    currentWidgetList: defaultCurrentWidgetList,
    rawWidgetList: rawWidgetList
  },
  mutations: {
    setAddWidgetMode(state, payload) {
      state.addWidgetMode = payload
    },
    updateItemOfCurrentWidgetList(state, payload = {key: null, name: 'null', data: {}}) {
      // TODO: check this, it might raise cant read 0 of undefined
      let item = state.currentWidgetList.filter((n) => {
        return n.uniqeId == payload.key
      })[0]
      // console.log('updateItemOfCurrentWidgetList')
      // console.log(item)
      // console.log(item.uniqeId)
      if (typeof item.data === 'undefined') {
        item.data = {}
      }
      item.data[payload.name] = payload.data
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    addToCurrentWidgetList(state, payload) {
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
    removeFromCurrentWidgetList(state, payload) {
      // console.log('---------------- removeFromCurrentWidgetList :: ' + payload)
      let list = lodash.cloneDeep(state.currentWidgetList)

      // TODO: check this functionality later
      lodash.remove(list, (n, index) => {
        return n.uniqeId === payload
      })

      // console.log(list.splice(payload, 1))
      state.currentWidgetList = list
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    }
  },
  actions: {
    updateItemOfCurrentWidgetList(context, payload) {
      context.commit('updateItemOfCurrentWidgetList', payload)
    },
    addToCurrentWidgetList(context, payload) {
      context.commit('addToCurrentWidgetList', payload)
    },
    removeFromCurrentWidgetList(context, payload) {
      context.commit('removeFromCurrentWidgetList', payload)
    },
    setAddWidgetMode(context, payload) {
      context.commit('setAddWidgetMode', payload)
    }
  }
}
