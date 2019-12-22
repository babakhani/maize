<template>
  <div class="preview">
    <Frame 
       ref="frame"
       :style="{
         width: `${previewSize}`,
       }"
       :class="previewMode"
       class="preview-frame">
    <FrameChild>
    <component 
          v-for="widget in currentWidgetList"
          :key="widget.uniqeId"
          ref="widegtContainer"
          :is="widget.name"
          :widgetData="widget.data"
          :demoMode="true"
          :uniqeKey="widget.uniqeId"></component>
    </FrameChild>
    </Frame>
  </div>
</template>

<script>
import Widgets from '../widgets'
import Frame from './Frame.vue'
import FrameChild from './FrameChild.vue'
import {EventBus} from '@/events/event-bus.js'
export default {
  name: 'Preview',
  components: {...Widgets, Frame, FrameChild},
  mounted () {
    let that = this
    EventBus.$on('downloadHtml', event => {
       that.down()
    })
  },
  methods: {
    down () {
      if (this.$refs && this.$refs.frame) {
        let frameContent = this.$refs.frame.$el.contentDocument || this.$refs.frame.contentWindow.document
        let html = `<!DOCTYPE html><html lang="${this.$store.getters['main/settings'].language}" prefix="og: http://ogp.me/ns#">${frameContent.documentElement.innerHTML}</html>`
        this.download('index.html', html)
      }
    },
    download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  },
  computed: {
    previewMode () {
      return this.$store.getters['layout/previewMode']
    },
    previewSize () {
      let out = this.$store.getters['layout/previewSize']
      if (out == 1366) {
         out = '100%'
      } else {
         out = `${out}px`
      }
      return out
    },
    currentWidgetList: {
      get () {
        return this.$store.state.main.currentWidgetList
      },
      set (value) {
        this.$store.dispatch('main/sortCurrentWidgetList', value)
      }
    }
  }
}
</script>
