<template>
  <div id="#page-content-wrapper"
       class="editor-page"
       :class="{ 'editor-page-preview-mode': previewMode, 'editor-page-mobile-preview-mode': mobilePreviewMode, 'editor-page-tablet-preview-mode':tabletPreviewMode}">
    <!--<page-toolbox></page-toolbox>-->
    <global-page-toolbox></global-page-toolbox>

    <div class="wrapper">
      <nav id="sidebar"
           v-if="pageSideBarIsActive"
           :class="{'active': !pageSideBarIsActive}"
           class="editable-part-sidebar">
      </nav>
      <div 
        :class="{ 'px-4': !previewMode }"
        class="w-100">
        <draggable v-model="currentWidgetList"
                   :options="{handle:'.widget-drag-handle'}"
                   @start="drag=true"
                   @end="drag=false">
          <div v-for="(widget, index) in currentWidgetList"
               :key="widget.uniqeId">
            <component :is="widget.name"
                 class="widget-block"
                 :class="{'container': (widget.data && widget.data.config) ? widget.data.config.fullWidth : false }"
                 :edit-mode="!$store.state.main.previewMode"
                 :widgetData="widget.data"
                 :uniqeKey="widget.uniqeId">
            </component>
          </div>
        </draggable>
        <AddWidget>
          <div class="blocks-area"></div>
        </AddWidget>
      </div>
    </div>
    <ModalWidgetList></ModalWidgetList>
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
    mixins: [editor],
    components: {
      LinkPickerModal,
      draggable,
      ImagePickerModal,
      VideoPickerModal,
      ModalSettings
    },
    computed: {
      pageSideBarIsActive() {
        return this.$store.state.layout.pageSideBarIsActive
      },
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
          return this.$store.state.main.currentWidgetList
        },
        set (value) {
          this.$store.dispatch('main/sortCurrentWidgetList', value)
        }
      }
    }
  }
</script>

