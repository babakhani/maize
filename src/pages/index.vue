<template>
  <div class="editor-page"
       :class="{ 'editor-page-preview-mode': previewMode, 'editor-page-mobile-preview-mode': mobilePreviewMode, 'editor-page-tablet-preview-mode':tabletPreviewMode}">
    <!--<page-toolbox></page-toolbox>-->
    <global-page-toolbox></global-page-toolbox>
    <div class="editor-page--plot-area">
      <draggable v-model="currentWidgetList"
                 :options="{handle:'.widget-drag-handle'}"
                 @start="drag=true"
                 @end="drag=false">
        <div v-for="(widget, index) in currentWidgetList"
             :key="widget.uniqeId">
          <div :is="widget.name"
               :widgetData="widget.data"
               :uniqeKey="widget.uniqeId"></div>
        </div>
      </draggable>
      <AddWidget>
        <div class="blocks-area">
        </div>
      </AddWidget>
    </div>
    <WidgetListModal></WidgetListModal>
    <ImagePickerModal></ImagePickerModal>
    <VideoPickerModal></VideoPickerModal>
    <LinkPickerModal></LinkPickerModal>
    <ModalSettings></ModalSettings>
  </div>
</template>
<script>
  import editor from '../mixins/editorpage'
  import draggable from 'vuedraggable'
  // TODO: move to mixin
  import ImagePickerModal from '../components/partial/ModalImagePicker'
  import VideoPickerModal from '../components/partial/ModalVideoPicker'
  import LinkPickerModal from '../components/partial/ModalLinkPicker'
  import ModalSettings from '../components/partial/ModalSettings'

  export default {
    name: 'Events',
    data () {
      return {
        myArray: [
          {
            id: 1,
            name: 'reza'
          },
          {
            id: 2,
            name: 'bita'
          }
        ]
      }
    },
    mixins: [editor],
    components: {
      LinkPickerModal,
      draggable,
      ImagePickerModal,
      VideoPickerModal,
      ModalSettings
    },
    computed: {
      previewMode () {
        return this.$store.state.layout.previewMode
      },
      tabletPreviewMode () {
        return this.$store.state.layout.tabletPreviewMode
      },
      mobilePreviewMode () {
        return this.$store.state.layout.mobilePreviewMode
      },
      currentWidgetList: {
        get () {
          console.log('currentWidgetList')
          return this.$store.state.main.currentWidgetList
        },
        set (value) {
          this.$store.dispatch('main/sortCurrentWidgetList', value)
        }
      }
    }
  }
</script>

