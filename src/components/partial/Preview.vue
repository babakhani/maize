<template>
  <div class="preview">
    <Frame
      :srcdoc-enabled="true"
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
      that.makeExportableDownload()
    })
  },
  props: {
    previewVersion: {
      default: 0,
      type: Number,
      required: false
    }
  },
  watch: {
    previewVersion () {
      if (this.$refs.frame && this.$refs.frame.$el) {
        this.$refs.frame.$el.contentDocument.location.reload(true)
      }
    }
  },
  data () {
    return {
      exportHtml: null,
      imagesFiles: [],
      favicon: null,
      cssFiles: null,
      fontsFiles: null,
      jsFiles: null
    }
  },
  methods: {
    getAssets (cloneFrameContent) {
      let promiseList = []
      this.cssFiles = {}
      this.jsFiles = {}
      this.fontsFiles = {}
      this._.each(window.CONFIG.cdn.css, (url, key) => {
        promiseList.push(fetch(url)
          .then((resp) => resp.text())
          .then((data) => {
            this.cssFiles[key] = data
          }))
      })
      this._.each(window.CONFIG.cdn.js, (url, key) => {
        promiseList.push(fetch(url)
          .then((resp) => resp.text())
          .then((data) => {
            this.jsFiles[key] = data
          }))
      })
      this._.each(window.CONFIG.cdn.fonts, (url, key) => {
        promiseList.push(fetch(url + key)
          .then((resp) => resp.arrayBuffer())
          .then((data) => {
            this.fontsFiles[key] = data
          }))
      })
      Promise.all([...promiseList]).then(() => {
        this._.each(this.cssFiles, (file, id) => {
          let sanitizedId = `${id}_css`
          let elem = cloneFrameContent.getElementById(sanitizedId)
          elem.href = `./css/${id}.css`
        })
        this._.each(this.jsFiles, (file, id) => {
          let sanitizedId = `${id}_js`
          let elem = cloneFrameContent.getElementById(sanitizedId)
          elem.src = `./js/${id}.js`
        })
        // NOTE: Layout Direction
        // Main Export Html
        this.exportHtml = `
          <!DOCTYPE html>
          <html 
          dir="${window.CONFIG.direction}" 
          lang="${this.$store.getters['main/settings'].language}" 
          prefix="og: 
          http://ogp.me/ns#">
          ${cloneFrameContent.documentElement.innerHTML}
          </html>`
        this.download('index.html', this.exportHtml)
      })
    },
    makeExportableDownload () {
      if (this.$refs && this.$refs.frame) {
        let frameContent = this.$refs.frame.$el.contentDocument || this.$refs.frame.contentWindow.document
        let cloneFrameContent = frameContent.cloneNode(true)

        // Find Imge tags
        this.favicon = cloneFrameContent.getElementById('mainFavicon').href
        if (this.favicon && this.favicon.split('base64,')[1]) {
          this.favicon = this.favicon.split('base64,')[1]
          cloneFrameContent.getElementById('mainFavicon').href = 'favicon.svg'
        }

        this._.each(cloneFrameContent.getElementsByClassName('editable-background'), (item) => {
          if (item.style && item.style.backgroundImage) {
            if (item.style.backgroundImage.match(/(?<=")(.*)(?=")/g)) {
              let src = item.style.backgroundImage.match(/(?<=")(.*)(?=")/g)[0]
              let fileExtension = src.split(';')[0].split('/')[1]
              if (fileExtension === 'svg+xml') {
                fileExtension = 'svg'
              }
              let sanitizedbase64 = src.split('base64,')[1]
              let imageName = (new Date()).valueOf() + Math.random().toString().split('.')[1] + '.' + fileExtension
              if (fileExtension && sanitizedbase64) {
                this.imagesFiles.push({
                  base64: sanitizedbase64,
                  name: imageName
                })
                item.style.backgroundImage = `url(images/${imageName})`
              }
            }
          }
        })

        this._.each(cloneFrameContent.getElementsByTagName('img'), (item) => {
          let fileExtension = item.src.split(';')[0].split('/')[1]
          if (fileExtension === 'svg+xml') {
            fileExtension = 'svg'
          }
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
        this.getAssets(cloneFrameContent)
      }
    },
    download (filename, html) {
      var zip = new JSZip()

      // Index
      zip.file('index.html', html)

      // Images
      if (this.imagesFiles.length > 0) {
        var img = zip.folder('images')
        this._.each(this.imagesFiles, (item) => {
          img.file(item.name, item.base64, { base64: true })
        })
      }

      // Favicon
      if (this.favicon) {
        zip.file('favicon.svg', this.favicon, { base64: true })
      }

      // CSS
      if (this.cssFiles) {
        var css = zip.folder('css')
        this._.each(this.cssFiles, (item, name) => {
          css.file(`${name}.css`, item)
        })
      }

      // JS
      if (this.jsFiles) {
        var js = zip.folder('js')
        this._.each(this.jsFiles, (item, name) => {
          js.file(`${name}.js`, item)
        })
      }

      // JS
      if (this.fontsFiles) {
        var font = zip.folder('webfonts')
        this._.each(this.fontsFiles, (item, name) => {
          font.file(name, item)
        })
      }

      // Maize Json File
      zip.file('maize.json', JSON.stringify(this.pageData))
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, 'maize.zip')
      })
    }
  },
  computed: {
    pageData () {
      return this.$store.state.main.page
    },
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
