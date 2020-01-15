<template>
  <div class="preview">
    <Frame
      ref="frame"
      :style="{ width: `${previewSize}` }"
      :class="previewMode"
      class="preview-frame">
    <FrameChild>
    <component
      :id="widget.uniqeId"
      v-for="widget in currentWidgetList"
      :class="{'container': (widget.data && widget.data.config) ? !widget.data.config.fullWidth : false }"
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
import { EventBus } from '@/events/event-bus.js'
import JSZip from 'jszip'
import saveAs from 'jszip/vendor/FileSaver.js'
export default {
  name: 'Preview',
  components: { ...Widgets, Frame, FrameChild },
  mounted () {
    let that = this
    EventBus.$on('downloadHtml', event => {
      that.makeExportableDownload() })
  },
  data () {
    return {
      imagesFiles: [] 
    }
  },
  methods: {
    makeExportableDownload () {
      if (this.$refs && this.$refs.frame) {
        let frameContent = this.$refs.frame.$el.contentDocument || this.$refs.frame.contentWindow.document
        let cloneFrameContent = frameContent.cloneNode(true)
        this._.each(cloneFrameContent.getElementsByTagName('img'), (item) => {
          let fileExtension = item.src.split(';')[0].split('/')[1]
          let sanitizedbase64 = item.src.split('base64,')[1]
          let imageName = (new Date()).valueOf() + Math.random().toString().split('.')[1] + '.' + fileExtension
          if (fileExtension && sanitizedbase64) {
            this.imagesFiles.push({
              base64: sanitizedbase64,
              name: imageName
            }) 
            item.src = `images/${imageName}`
          }
        })
        let html = `<!DOCTYPE html><html lang="${this.$store.getters['main/settings'].language}" prefix="og: http://ogp.me/ns#">${cloneFrameContent.documentElement.innerHTML}</html>`
        this.download('index.html', html)
      }
    },
    download (filename, html) {
      var zip = new JSZip()
      zip.file("index.html", html)
      if (this.imagesFiles.length > 0) {
        var img = zip.folder("images");
        this._.each(this.imagesFiles,  (item) => {
          img.file(item.name, item.base64, {base64: true});
        })
      }
      zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "maize.zip");
      });
      //var element = document.createElement('a')
      //element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
      //element.setAttribute('download', filename)
      //element.style.display = 'none'
      //document.body.appendChild(element)
      //element.click()
      //document.body.removeChild(element)
    }
  },
  computed: {
    previewMode () {
      return this.$store.getters['layout/previewMode']
    },
    previewSize () {
      let out = this.$store.getters['layout/previewSize']
      if (out === 1366) {
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

<style lang="scss">
.preview {
  background: #f1f1f1;
  .preview-frame {
    max-width: 100%;
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.35);
    display: block;
    float: none;
    margin: 0 auto;
    width: 100%;
    height: calc(100vh - 68px);
    &.desktop {
      height: calc(100vh - 68px);
    }
  }
}
</style>
