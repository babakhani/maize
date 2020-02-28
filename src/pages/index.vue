<template>
  <div
    class="editor-page"
    :class="{
            'editor-page-preview-mode': previewMode,
            'editor-page-mobile-preview-mode': mobilePreviewMode,
            'editor-page-tablet-preview-mode':tabletPreviewMode
            }">
    <PageHeader></PageHeader>
    <Preview v-if="previewMode"/>
    <div  v-show="!previewMode" class="wrapper">
      <nav id="sidebar"
           v-if="pageSideBarIsActive"
           :class="{'active': !pageSideBarIsActive}"
           class="editable-part-sidebar w-25">
        <b-button-group size="sm" class="w-100 mb-3">
          <b-dropdown
            :text="groupedWidgetList[currentListIndex].title"
            variant="outline-primary"
            class="w-100">
            <b-dropdown-item
              value="index"
              @click="currentListIndex = index"
              :key="index"
              v-for="(item, index) in groupedWidgetList" >
              {{ item.title }}
            </b-dropdown-item>
          </b-dropdown>
          <!--<b-button -->
          <!--variant="outline-danger"-->
          <!--@click="hideSidebar"-->
          <!--class="btn-sm" >-->
          <!--<icon name="times" />-->
          <!--</b-button>-->
        </b-button-group>
        <div
          v-for="(item, index) in groupedWidgetList"
          :key="index">
          <WidgetList
            v-if="delayedSidebarPreview && index == currentListIndex"
            :widget-list="item.widgets" />
        </div>
      </nav>
      <div
        :class="{
                 'plotarea-width-sidebar': pageSideBarIsActive,
                 'w-100': !pageSideBarIsActive,
                 'w-75': pageSideBarIsActive
                 }"
        class="plotarea float-right mr-0">
        <draggable
          v-model="currentWidgetList"
          :options="{handle:'.widget-block--toolbox'}"
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

      <Modal> </Modal>
      <ModalWidgetList></ModalWidgetList>
      <ModalSettings></ModalSettings>
      <ModalExport></ModalExport>
      <ModalImport></ModalImport>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ModalSettings from '../components/partial/ModalSettings'
import Preview from '../components/partial/Preview'
import Modal from '../components/partial/Modal'
import Widgets from '../components//widgets'
import WidgetList from '../components/partial/WidgetList'
import PageHeader from '../components/partial/PageHeader.vue'
import AddWidget from '../components/partial/AddWidget'
import ModalWidgetList from '../components/partial/ModalWidgetList'
import ModalExport from '../components/partial/ModalExport'
import ModalImport from '../components/partial/ModalImport'

export default {
  name: 'EditorPage',
  components: {
    ModalImport,
    ModalExport,
    Modal,
    Preview,
    draggable,
    ModalSettings,
    ...Widgets,
    WidgetList,
    Widgets,
    AddWidget,
    ModalWidgetList,
    PageHeader
  },
  data () {
    return {
      sidebarPreviewDelaytimer: null,
      delayedSidebarPreview: false,
      currentListIndex: 0
    }
  },
  beforeDestroy () {
    clearTimeout(this.sidebarPreviewDelaytimer)
  },
  methods: {
    showSidebarWithDelay () {
      if (this.$store.state.layout.pageSideBarIsActive) {
        clearTimeout(this.sidebarPreviewDelaytimer)
        this.sidebarPreviewDelaytimer = setTimeout(() => {
          this.delayedSidebarPreview = true
        }, 100)
      } else {
        this.delayedSidebarPreview = false
      }
    },
    hideSidebar () {
      this.$store.dispatch('layout/setPageSideBarIsActive', false)
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
      this.showSidebarWithDelay()
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

<style lang="scss">
.wrapper {
  display: flex;
  #content {
    // padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
    width: 90%;
    margin: 0 auto;
  }
}

.plotarea-width-sidebar {
  position: absolute;
  right: 0;
  overflow: visible;
  > div:first-child {
    &:empty {
       border: 2px dashed rgba($primary-color, .05);
       min-height: 200px;
       margin-top: 3em;
    }
  }
}

.editable-part-sidebar {
  left: 0;
  position: fixed;
  height: calc(100vh - 50px);
  background: rgba($black, 0.1);
  overflow: auto;
  padding: 1em;
  .dropdown-menu  {
    width: 100%;
  }
  @media (min-width: 768px) {
    .card-columns {column-count: 1;}
  }
}
</style>
