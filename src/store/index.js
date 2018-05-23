import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import locale from './modules/locale'
import lodash from 'lodash'

Vue.use(Vuex)


class UndoRedoHistory {
  store;
  history = [];
  currentIndex = -1;
  init(store) {
    this.store = store;
  }
  addState(state) {
    // may be we have to remove redo steps
    if (this.currentIndex + 1 < this.history.length) {
      this.history.splice(this.currentIndex + 1);
    }
    this.history.push(state);
    this.currentIndex++;
  }
  undo() {
    const prevState = this.history[this.currentIndex - 1];
    // take a copy of the history state
    // because it would be changed during store mutations
    // what would corrupt the undo-redo-history
    // (same on redo)
    this.store.replaceState(lodash.cloneDeep(prevState));
    this.currentIndex--;
  }
  redo() {
    const nextState = this.history[this.currentIndex + 1];
    this.store.replaceState(lodash.cloneDeep(nextState));
    this.currentIndex++;
  }
}

const undoRedoHistory = new UndoRedoHistory();

const undoRedoPlugin = (store) => {
  // initialize and save the starting stage
  undoRedoHistory.init(store);
  let firstState = lodash.cloneDeep(store.state);
  undoRedoHistory.addState(firstState);
  store.subscribe((mutation, state) => {
    // is called AFTER every mutation
    console.log('vuex : plugins : subscribe')
    console.log(store.state)
    undoRedoHistory.addState(lodash.cloneDeep(state));
  });
}

const store = new Vuex.Store({
  plugins: [undoRedoPlugin],
  strict: false,
  state: {
    storeVersion: '0.0.0'
  },
  actions: {
    undo() {
      undoRedoHistory.undo()
    },
    redo() {
      undoRedoHistory.redo()
    }
  },
  modules: {
    main: main,
    locale: locale
  }
})
export default store
