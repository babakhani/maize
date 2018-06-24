export default {
  namespaced: true,
  state: {
    mobilePreviewMode: false,
    previewMode: false,
    addWidgetMode: false,
    tabletPreviewMode: false,
    pickImageMode: false,
    pickVideoMode: false,
    pickVideoType: false,
    pickLinkType: false,
    settingsMode: false,
    pageSideBarIsActive: false
  },
  mutations: {
    setPageSideBarIsActive (state, payload) {
      state.pageSideBarIsActive = payload
    },
    setMobilePreviewMode (state, payload) {
      state.mobilePreviewMode = payload
      if (payload) {
        state.tabletPreviewMode = false
      }
    },
    setTabletPreviewMode (state, payload) {
      state.tabletPreviewMode = payload
      if (payload) {
        state.mobilePreviewMode = false
      }
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
    setSettingsMode (state, payload) {
      state.settingsMode = payload
    }
  },
  actions: {
    setPageSideBarIsActive (context, payload) {
      context.commit('setPageSideBarIsActive', payload)
    },
    setMobilePreviewMode (context, payload) {
      context.commit('setMobilePreviewMode', payload)
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
    setSettingsMode (context, payload) {
      context.commit('setSettingsMode', payload)
    }
  }
}
