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
      console.log('addToCurrentWidgetList')
      console.log(lodash.isString(payload))
      console.log(lodash.isArray(payload))

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
      // TODO: check this functionality later
      // state.currentWidgetList.push(payload)
      if (lodash.isString(payload)) {
        state.currentWidgetList.push(payload)
      } else if (lodash.isArray(payload)) {
        lodash.remove(this.state, function(n) {
          return payload.indexOf(n) > -1
        })
      }
    }
  },
  actions: {
    addToCurrentWidgetList(context, payload) {
      context.commit('addToCurrentWidgetList', payload)
    },
    removeFromCurrentWidgetList(context, payload) {
      state.addWidgetMode = payload
    },
    setAddWidgetMode(context, payload) {
      context.commit('setAddWidgetMode', payload)
    }
  }
}
