import Vue from 'vue'
import lodash from 'lodash'

const rawWidgetList = [
  {
    name: 'Header',
    data: {}
  },
  {
    name: 'Footer',
    data: {}
  },
  {
    name: 'Kitchensink',
    data: {}
  },
]

let page = []

let defaultCurrentWidgetList = window.localStorage.getItem('page') ? JSON.parse(window.localStorage.getItem('page')).data : page

// console.log(defaultCurrentWidgetList)

export default {
  namespaced: true,
  state: {
    mobilePreviewMode: false,
    previewMode: false,
    addWidgetMode: false,
    tabletPreviewMode: false,
    pickImageMode: false,
    pickVideoMode: false,
  },
  mutations: {
    setMobilePreviewMode(state, payload) {
      state.mobilePreviewMode = payload
      if (payload) {
        state.tabletPreviewMode = false
      }
    },
    setTabletPreviewMode(state, payload) {
      state.tabletPreviewMode = payload
      if (payload) {
        state.mobilePreviewMode = false
      }
    },
    setPreviewMode(state, payload) {
      state.previewMode = payload
    },
    setPickImageMode(state, payload) {
      state.pickImageMode = payload
    },
    setPickVideoMode(state, payload) {
      state.pickVideoMode = payload
      console.log('setPickImageMode : ' + payload)
    },
    setAddWidgetMode(state, payload) {
      state.addWidgetMode = payload
    }
  },
  actions: {
    setMobilePreviewMode(context, payload) {
      context.commit('setMobilePreviewMode', payload)
    },
    setTabletPreviewMode(context, payload) {
      context.commit('setTabletPreviewMode', payload)
    },
    setPreviewMode(context, payload) {
      context.commit('setPreviewMode', payload)
    },
    setPickImageMode(context, payload) {
      context.commit('setPickImageMode', payload)
    },
    setPickVideoMode(context, payload) {
      context.commit('setPickVideoMode', payload)
    },
    setAddWidgetMode(context, payload) {
      context.commit('setAddWidgetMode', payload)
    }
  }
}
