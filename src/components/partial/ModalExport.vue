<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="modal-setting modal-box"
    :title="$t('export')">

    <div class="d-block p-3 text-center">
      <b-card>
        <b-jumbotron
          :lead="$t('messages.export_model_header')"
         >
          <p
          v-if="makeExoprtFileResultSize">
          {{ $t('messages.export_model_file_size') }} : {{ makeExoprtFileResultSize }}
          </p>
          <b-btn
            style="min-width: 100px;"
            :disabled="makeExportFileLoading"
            variant="outline-success"
            @click.stop.prevent="onOk"
            size="lg"
            >
            {{ $t('modal.export') }}
            <icon
            size="lg"
            name="download"></icon>
          </b-btn>
          <b-progress
            v-if="makeExportFileLoading"
            class="mt-4"
            :value="makeExportFileProgress"
            max="100"
            show-progress
            animated>
          </b-progress>
        </b-jumbotron>
      </b-card>
    </div>
    <template slot="modal-footer">
      <b-button
        @click="onHide"
        variant="outline-link"
        class="text-muted">
        {{ $t('modal.continue') }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import JSZip from 'jszip'
import saveAs from 'jszip/vendor/FileSaver.js'
export default {
  name: 'ModalExport',
  data () {
    return {
      makeExportFileLoading: false,
      makeExoprtFileResultSize: null,
      makeExportFileProgress: 0,
      imagesFiles: [],
      siteSettings: {
        title: 'Main'
      },
      pickedLinkSrc: null
    }
  },
  methods: {
    onHide () {
      this.$store.dispatch('layout/setExportMode', false)
    },
    onOk (e) {
      // e.preventDefault()
      // this.onHide()
      this.$store.dispatch('main/updateSettings', this.siteSettings)
      this.exportZip()
      return false
    },
    exportZip () {
      this.makeExportableDownload()
    },
    getAssets (cloneFrameContent) {
      this.makeExportFileProgress = 1
      this.makeExportFileLoading = true
      let promiseList = []
      this.cssFiles = {}
      this.jsFiles = {}
      this.fontsFiles = {}
      let cssLength = Object.keys(window.CONFIG.cdn.css).length
      let jsLength = Object.keys(window.CONFIG.cdn.js).length
      let fontLength = Object.keys(window.CONFIG.cdn.fonts).length
      let filesCount = cssLength + jsLength + fontLength
      let perFileProgress = 98 / filesCount
      this._.each(window.CONFIG.cdn.css, (url, key) => {
        promiseList.push(fetch(url)
          .then((resp) => resp.text())
          .then((data) => {
            this.cssFiles[key] = data
            this.makeExportFileProgress += perFileProgress
          }))
      })
      this._.each(window.CONFIG.cdn.js, (url, key) => {
        promiseList.push(fetch(url)
          .then((resp) => resp.text())
          .then((data) => {
            this.jsFiles[key] = data
            this.makeExportFileProgress += perFileProgress
          }))
      })
      this._.each(window.CONFIG.cdn.fonts, (url, key) => {
        promiseList.push(fetch(url + key)
          .then((resp) => resp.arrayBuffer())
          .then((data) => {
            this.fontsFiles[key] = data
            this.makeExportFileProgress += perFileProgress
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
      if (window.previewFrame) {
        let frameContent = window.previewFrame.$el.contentDocument || window.previewFrame.contentWindow.document
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
      let self = this
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
        self.makeExportFileLoading = false
        self.makeExportFileProgress = 100
        self.makeExoprtFileResultSize = self.humanFileSize(content.size)
        saveAs(content, 'maize.zip')
      })
    },
    humanFileSize (bytes, si = false, dp = 1) {
      const thresh = si ? 1000 : 1024

      if (Math.abs(bytes) < thresh) {
        return bytes + ' B'
      }

      const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
      let u = -1
      const r = 10 ** dp

      do {
        bytes /= thresh
        ++u
      } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1)

      return bytes.toFixed(dp) + ' ' + units[u]
    },
    reset () {
      this.makeExoprtFileResultSize = null
    }
  },
  mounted () {
    this.siteSettings = this._.cloneDeep(this.$store.getters['main/settings'])
  },
  watch: {
    showModal () {
      this.reset()
    }
  },
  computed: {
    pageData () {
      return this.$store.state.main.page
    },
    randomImageList () {
      return this.$store.state.unsplash.imageList
    },
    showModal: {
      get () {
        return this.$store.state.layout.exportMode
      },
      set (value) {
        this.$store.dispatch('layout/setExportMode', value)
      }
    }
  }
}
</script>
