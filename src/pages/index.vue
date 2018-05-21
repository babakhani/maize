<template>
  <div class="editor-page">
    <page-toolbox></page-toolbox>
    <div class="editor-page--plot-area">
      <div v-for="widget in currentWidgetList">
        <div :is="widget.name" :widgetData="widget.data" :uniqeKey="currentWidgetList.indexOf(widget)"></div>
      </div>
      <AddWidget>
        <div class="blocks-area">
        </div>
      </AddWidget>
    </div>
    <WidgetListModal></WidgetListModal>
  </div>
</template>
<script>
  import editor from '../mixins/editorpage'

  // TODO: move to mixin
  import TeamWidget from '../components/widgets/Team'
  import TeamWidget2 from '../components/widgets/Team2'
  import Header from '../components/widgets/Header'
  import Footer from '../components/widgets/Footer'
  import Banner from '../components/widgets/Banner'

  export default {
    name: 'Events',
    mixins: [editor],
    components: {TeamWidget, TeamWidget2, Banner, Header, Footer},
    computed: {
      currentWidgetList() {
        console.log('currentWidgetList computed')
        return this.$store.state.main.currentWidgetList
      }
    }
  }
</script>

