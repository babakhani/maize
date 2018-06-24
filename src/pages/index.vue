<template>
  <div id="#page-content-wrapper"
       class="editor-page"
       :class="{ 'editor-page-preview-mode': previewMode, 'editor-page-mobile-preview-mode': mobilePreviewMode, 'editor-page-tablet-preview-mode':tabletPreviewMode}">
    <!--<page-toolbox></page-toolbox>-->
    <global-page-toolbox></global-page-toolbox>

    <div class="wrapper">
      <nav id="sidebar"
           :class="{'active': !pageSideBarIsActive}"
           class="editable-part-sidebar">
        <EditablePartSidebar></EditablePartSidebar>
      </nav>
      <div id="content">
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
  import EditablePartSidebar from '../components/partial/EditablePartSidebar'

  // $(document).ready(function () {
  //   $("#sidebarCollapse").on("click", function () {
  //     $("#sidebar").toggleClass("active");
  //     $(this).toggleClass("active");
  //   });
  // });
  export default {
    name: 'Events',
    mixins: [editor],
    components: {
      LinkPickerModal,
      draggable,
      ImagePickerModal,
      VideoPickerModal,
      ModalSettings,
      EditablePartSidebar
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

