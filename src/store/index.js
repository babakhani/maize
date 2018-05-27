import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import layout from './modules/layout'
import locale from './modules/locale'
import unsplash from './modules/unsplash'
import lodash from 'lodash'

Vue.use(Vuex)

class UndoRedoHistory {
  store;
  history = [];
  currentIndex = -1;

  init (store) {
    this.store = store;
  }

  addState (state) {
    // may be we have to remove redo steps
    if (this.currentIndex + 1 < this.history.length) {
      this.history.splice(this.currentIndex + 1);
    }
    this.history.push(state);
    this.currentIndex++;
  }

  undo () {
    const prevState = this.history[this.currentIndex - 1];
    if (prevState) {
      this.store.replaceState(lodash.cloneDeep(prevState));
      this.currentIndex--;
    }
  }

  redo () {
    const nextState = this.history[this.currentIndex + 1];
    if (nextState) {
      this.store.replaceState(lodash.cloneDeep(nextState));
      this.currentIndex++;
    }
  }
}

const undoRedoHistory = new UndoRedoHistory();
const filterFromHistory = ['layout/setAddWidgetMode', 'layout/setPickImageMode', 'layout/setPreviewMode']
const undoRedoPlugin = (store) => {
  undoRedoHistory.init(store);
  let firstState = lodash.cloneDeep(store.state);
  undoRedoHistory.addState(firstState);
  store.subscribe((mutation, state) => {
    if (filterFromHistory.indexOf(mutation.type) == -1) {
      undoRedoHistory.addState(lodash.cloneDeep(state));
    }
  });
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
    unsplash: unsplash
  }
})
export default store
