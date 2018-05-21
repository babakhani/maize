import Vue from 'vue'
import lodash from 'lodash'

const rawWidgetList = [
  {
    name: 'TeamWidget'
  },
  {
    name: 'TeamWidget2'
  },
  {
    name: 'Header'
  },
  {
    name: 'Footer'
  },
  {
    name: 'Banner'
  },
]

let page = [
  {
    name: 'Banner',
    data: {
      mainTitle: {
        text: 'HI i am banner Widget from store',
        styles: {}
      },
      subtitle: {
        text: 'HI i am banner Widget from store',
        styles: {color: 'red'}
      }
    }
  },
  {
    name: 'Banner',
    data: {
      mainTitle: {
        text: 'HI i am banner Widget from store 1',
        styles: {}
      },
      subtitle: {
        text: 'HI i am banner Widget from store 1',
        styles: {color: 'red'}
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
    updateItemOfCurrentWidgetList(state, payload={key: null,name:'null',  }) {

      state.currentWidgetList[payload.key].data[payload.name] = payload.data

      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    addToCurrentWidgetList(state, payload) {
      if (lodash.isString(payload)) {
        state.currentWidgetList.push(payload)
      } else if (lodash.isArray(payload)) {
        payload.forEach((item) => {
          state.currentWidgetList.unshift(item)
        })
      }
    },
    removeFromCurrentWidgetList(state, payload) {
      let list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this functionality later
      lodash.remove(list, (n) => {
        return n.name === payload
      })
      state.currentWidgetList = list
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
