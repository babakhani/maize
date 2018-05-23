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
  {
    name: 'Kitchensink',
    data: {}
  },
]

let page = [
  {
    name: 'Banner',
    uniqeId: 'Bannere21432141',
    data: {}
  }
]

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
    // currentWidgetList: ['Banner'],
    currentWidgetList: defaultCurrentWidgetList,
    rawWidgetList: rawWidgetList
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
    },
    moveWidget(state, payload) {
      function arrayMove(x, from, to) {
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
      // console.log('moveWidget')
      // console.log(list[0].uniqeId)
      // console.log(list[1].uniqeId)
      // console.log(itemIndex)
      // console.log(list.length - 1)

      // if (payload.direction == 'down') {
      //   if (list.length - 1 === itemIndex) {
      //     list.splice(itemIndex, 1);
      //     list.push(item)
      //   }
      // }
      // if (payload.direction == 'up') {
      //   if (0 === itemIndex) {
      //     list.splice(itemIndex, 1);
      //     list.pop(item)
      //   }
      // }
      // list.splice(itemIndex, 1, item)
      arrayMove(list, itemIndex, itemIndex + 1)
      state.currentWidgetList = []
      state.currentWidgetList = list
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    updateItemOfCurrentWidgetList(state, payload = {key: null, name: 'null', data: {}}) {
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
      let list = lodash.cloneDeep(state.currentWidgetList)
      // TODO: check this functionality later
      lodash.remove(list, (n, index) => {
        return n.uniqeId === payload
      })
      state.currentWidgetList = list
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    },
    sortCurrentWidgetList(state, payload) {
      state.currentWidgetList = payload
      window.localStorage.setItem('page', JSON.stringify({data: state.currentWidgetList}))
    }
  },
  actions: {
    moveWidget(context, payload = {direction: null, key: null}) {
      context.commit('moveWidget', payload)
    },
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
    sortCurrentWidgetList(context, payload) {
      context.commit('sortCurrentWidgetList', payload)
    },
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
