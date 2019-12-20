<template>
  <div class="preview">
    <Frame 
       :style="{
         width: `${previewSize}px`,
       }"
       class="preview-frame">
    <FrameChild 
       title="this is iframe title">
    <link href="/lib/bootstrap.min.css"
          rel="stylesheet"
          crossorigin="anonymous">
    <link rel="stylesheet"
          href="/lib/maize_blocks.min.css">
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
export default {
  name: 'Preview',
  components: {...Widgets, Frame, FrameChild},
  methods: {
  },
  computed: {
    previewSize () {
      return this.$store.getters['layout/previewSize']
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
