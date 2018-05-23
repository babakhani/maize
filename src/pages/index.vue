<template>
  <div class="editor-page"
       :class="{ 'editor-page-preview-mode': previewMode, 'editor-page-mobile-preview-mode': mobilePreviewMode}">
    <!--<page-toolbox></page-toolbox>-->
    <global-page-toolbox></global-page-toolbox>
    <div class="editor-page--plot-area">

      <draggable v-model="currentWidgetList" :options="{group:'people'}" @start="drag=true" @end="drag=false">
        <div v-for="(widget, index) in currentWidgetList" :key="widget.uniqeId">
          <div :is="widget.name" :widgetData="widget.data" :uniqeKey="widget.uniqeId"></div>
        </div>
      </draggable>

      <AddWidget>
        <div class="blocks-area">
        </div>
      </AddWidget>
    </div>
    <WidgetListModal></WidgetListModal>
    <ImagePickerModal></ImagePickerModal>
  </div>
</template>
<script>
  import editor from '../mixins/editorpage'
  import draggable from 'vuedraggable'
  // TODO: move to mixin
  import TeamWidget from '../components/widgets/Team'
  import TeamWidget2 from '../components/widgets/Team2'
  import Header from '../components/widgets/Header'
  import Footer from '../components/widgets/Footer'
  import Banner from '../components/widgets/Banner'
  import Kitchensink from '../components/widgets/Kitchensink'
  import ImagePickerModal from '../components/partial/ImagePickermodal'

  export default {
    name: 'Events',
    data() {
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
    components: {TeamWidget, TeamWidget2, Banner, Header, Footer, draggable, ImagePickerModal, Kitchensink},
    computed: {
      previewMode() {
        return this.$store.state.main.previewMode
      },
      mobilePreviewMode() {
        return this.$store.state.main.mobilePreviewMode
      },
      currentWidgetList: {
        get() {
          console.log('currentWidgetList')
          return this.$store.state.main.currentWidgetList
        },
        set(value) {
          this.$store.dispatch('main/sortCurrentWidgetList', value)
        }
      }
    }
  }
</script>

