import i18n from '@/i18n'

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    exportPage (context) {
      const data = JSON.stringify(context.rootState.main.currentWidgetList)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
        a = document.createElement('a');
      a.download = "test.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    }
  }
}
