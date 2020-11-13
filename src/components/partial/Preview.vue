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
export default {
  name: 'Preview',
  components: { ...Widgets, Frame, FrameChild },
  mounted () {
    if (this.$refs && this.$refs.frame) {
      window.previewFrame = this.$refs.frame
    }
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
