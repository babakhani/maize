import Vue from 'vue'
import lodash from 'lodash'

export default {
  namespaced: true,
  state: {
    addWidgetMode: false,
    currentWidgetList: [],
    rawWidgetList: ['TeamWidget', 'TeamWidget2', 'Header', 'Footer', 'Banner']
  },
  mutations: {
    setAddWidgetMode(state, payload) {
      state.addWidgetMode = payload
    },
    addToCurrentWidgetList(state, payload) {
      if (lodash.isString(payload)) {
        state.currentWidgetList.push(payload)
      } else if (lodash.isArray(payload)) {
        payload.forEach((item) => {
          state.currentWidgetList.unshift(item)
          // state.currentWidgetList.push(item)
        })
      }
    },
    removeFromCurrentWidgetList(state, payload) {
      let list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this functionality later
      lodash.remove(list, (n) => {
        return n === payload
      })
      state.currentWidgetList = list
    }
  },
  actions: {
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
