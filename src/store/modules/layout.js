export default {
  namespaced: true,
  state: {
    previewModeSize: 'desktop',
    previewMode: false,
    addWidgetMode: false,
    pickImageMode: false,
    pickVideoMode: false,
    pickVideoType: false,
    pickLinkType: false,
    pickLinkCurrent: '',
    settingsMode: false,
    pageSideBarIsActive: false,
    selectedItemProperties: {}
  },
  getters: {
    previewMode (state) {
      return state.previewModeSize
    },
    previewSize (state) {
      return state.previewModeSize == 'phone' ? 366 : state.previewModeSize == 'tablet' ? 724 : 1366
    }
  },
  mutations: {
    setPreviewModeSize (state, payload) {
      state.previewModeSize = payload
    },
    setSelectedItemProperties (state, payload) {
      state.selectedItemProperties = payload
    },
    setPageSideBarIsActive (state, payload) {
      state.pageSideBarIsActive = payload
    },
    setPreviewMode (state, payload) {
      state.previewMode = payload
    },
    setPickImageMode (state, payload) {
      state.pickImageMode = payload
    },
    setPickVideoMode (state, payload) {
      if (payload == false) {
        state.pickVideoType = false
      }
      state.pickVideoMode = payload
    },
    setAddWidgetMode (state, payload) {
      state.addWidgetMode = payload
    },
    setPickVideoType (state, payload) {
      state.pickVideoType = payload
    },
    setPickLinkMode (state, payload) {
      state.pickLinkType = payload
    },
    setPickLinkCurrent (state, payload) {
      state.pickLinkCurrent = payload
    },
    setSettingsMode (state, payload) {
      state.settingsMode = payload
    }
  },
  actions: {
    setPreviewModeSize (context, payload) {
      context.commit('setPreviewModeSize', payload)
    },
    setSelectedItemProperties (context, payload) {
      context.commit('setSelectedItemProperties', payload)
    },
    setPageSideBarIsActive (context, payload) {
      context.commit('setPageSideBarIsActive', payload)
    },
    setTabletPreviewMode (context, payload) {
      context.commit('setTabletPreviewMode', payload)
    },
    setPreviewMode (context, payload) {
      context.commit('setPreviewMode', payload)
    },
    setPickImageMode (context, payload) {
      context.commit('setPickImageMode', payload)
    },
    setPickVideoMode (context, payload) {
      context.commit('setPickVideoMode', payload)
    },
    setAddWidgetMode (context, payload) {
      context.commit('setAddWidgetMode', payload)
    },
    setPickVideoType (context, payload) {
      context.commit('setPickVideoType', payload)
    },
    setPickLinkMode (context, payload) {
      context.commit('setPickLinkMode', payload)
    },
    setPickLinkCurrent (context, payload) {
      context.commit('setPickLinkCurrent', payload)
    },
    setSettingsMode (context, payload) {
      context.commit('setSettingsMode', payload)
    }
  }
}
