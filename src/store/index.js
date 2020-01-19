import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import layout from './modules/layout'
import locale from './modules/locale'
import exportPage from './modules/exportPage'

import lodash from 'lodash'

Vue.use(Vuex)

class UndoRedoHistory {
  store;
  history = [];
  currentIndex = -1;

  init (store) {
    this.store = store
  }

  addState (state) {
    if (this.history.length === 0 || JSON.stringify(this.history[this.currentIndex]) !== JSON.stringify(state.main)) {
      if (this.currentIndex + 1 !== this.history.length) {
        this.history.splice(this.currentIndex + 1)
      }
      this.history.push(state.main)
      this.currentIndex++
      state.main.currentHistoryIndex = this.currentIndex
      state.main.historyLength = this.history.length
      this.store.replaceState(lodash.cloneDeep(state))
    }
  }

  undo () {
    const prevMainState = this.history[this.currentIndex - 1]
    if (prevMainState) {
      let oldStates = lodash.cloneDeep(store.state)
      oldStates.main = prevMainState
      this.currentIndex--
      oldStates.main.currentHistoryIndex = this.currentIndex
      oldStates.main.historyLength = this.history.length
      this.store.replaceState(lodash.cloneDeep(oldStates))
    }
  }

  redo () {
    const nextMainState = this.history[this.currentIndex + 1]
    if (nextMainState) {
      let oldStates = lodash.cloneDeep(store.state)
      oldStates.main = nextMainState
      this.currentIndex++
      oldStates.main.currentHistoryIndex = this.currentIndex
      oldStates.main.historyLength = this.history.length
      this.store.replaceState(lodash.cloneDeep(oldStates))
    }
  }
}

const undoRedoHistory = new UndoRedoHistory()
const filterFromHistory = ['layout/setAddWidgetMode', 'layout/setPickImageMode', 'layout/setPreviewMode']
const undoRedoPlugin = (store) => {
  undoRedoHistory.init(store)
  let firstState = lodash.cloneDeep(store.state)
  undoRedoHistory.addState(firstState)
  store.subscribe((mutation, state) => {
    if (filterFromHistory.indexOf(mutation.type) === -1) {
      undoRedoHistory.addState(lodash.cloneDeep(state))
    }
  })
}

const store = new Vuex.Store({
  plugins: [undoRedoPlugin],
  strict: false,
  state: {
    storeVersion: '0.0.0'
  },
  actions: {
    undo () {
      undoRedoHistory.undo()
    },
    redo () {
      undoRedoHistory.redo()
    }
  },
  modules: {
    main: main,
    locale: locale,
    layout: layout,
    exportPage: exportPage
  }
})
export default store
