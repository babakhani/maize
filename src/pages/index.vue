<template>
  <div id="#page-content-wrapper"
       class="editor-page"
       :class="{ 'editor-page-preview-mode': previewMode, 'editor-page-mobile-preview-mode': mobilePreviewMode, 'editor-page-tablet-preview-mode':tabletPreviewMode}">
    <!--<page-toolbox></page-toolbox>-->
    <global-page-toolbox></global-page-toolbox>

    <template v-if="previewMode">
      <Preview />
    </template>
    <template v-else>
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
      <Modal> </Modal>
      <ModalWidgetList></ModalWidgetList>
      <ModalSettings></ModalSettings>
    </template>
  </div>
</template>

<script>
  import editor from '../mixins/editorpage'
  import draggable from 'vuedraggable'
  import ModalSettings from '../components/partial/ModalSettings'
  import Preview from '../components/partial/Preview'
  import Modal from '../components/partial/Modal'

  export default {
    name: 'EditorPage',
    mixins: [editor],
    components: {
      Modal,
      Preview,
      draggable,
      ModalSettings
    },
    computed: {
      modalName () {
        return this.$store.state.layout.modalName
      },
      preData () {
        return this.$store.state.layout.modalDefaultData
      },
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

