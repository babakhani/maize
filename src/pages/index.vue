<template>
  <div 
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
             class="editable-part-sidebar w-25">
          <b-dropdown 
            :text="groupedWidgetList[currentListIndex].title" 
            size="sm"
            variant="outline-primary"
            class="w-100 mb-3">
            <b-dropdown-item
              value="index"
              class="w-100"
              @click="currentListIndex = index"
              :key="index"
             v-for="(item, index) in groupedWidgetList" >
             {{ item.title }} 
            </b-dropdown-item>
          </b-dropdown>
             <div 
             v-for="(item, index) in groupedWidgetList"
             :key="index">
               <WidgetList
                 v-if="index == currentListIndex" 
                 :widget-list="item.widgets" />
             </div>
        </nav>
        <div
          :class="{ 
                    'px-4': !previewMode,
                    'w-100': !pageSideBarIsActive,
                    'w-75': pageSideBarIsActive
                    }"
          class="plotarea float-right mr-0">
          <draggable 
          v-model="currentWidgetList"
          :options="{handle:'.widget-drag-handle'}"
          group="pagewidget">
          <div v-for="widget in currentWidgetList"
               :key="widget.uniqeId">
            <component :is="widget.name"
               class="widget-block"
               :class="{'container': (widget.data && widget.data.config) ?
               !widget.data.config.fullWidth : false }"
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
import Widgets from '../components//widgets'
import WidgetList from '../components/partial/WidgetList'

export default {
  name: 'EditorPage',
  mixins: [editor],
  components: {
    Modal,
    Preview,
    draggable,
    ModalSettings,
    ...Widgets,
    WidgetList
  },
  data () {
    return {
      currentListIndex: 0
    }
  },
  computed: {
    groupedWidgetList () {
      return this.$store.state.main.rawWidgetList
    },
    modalName () {
      return this.$store.state.layout.modalName
    },
    preData () {
      return this.$store.state.layout.modalDefaultData
    },
    pageSideBarIsActive () {
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
