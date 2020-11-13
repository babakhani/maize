<template>
  <b-card
    no-body>
      <template
        v-model="currentTab"
        v-for="item in groupedWidgetList">
        <WidgetList
        @updateAddList="updateAddList"
        :add-widget-list="addWidgetList"
        :widget-list="item.widgets" />
      </template>
  </b-card>
</template>
<script>
import Widgets from '../components/widgets'
import Frame from '../components/partial/Frame.vue'
import FrameChild from '../components/partial/FrameChild.vue'
import WidgetList from '../components/partial/WidgetList'
export default {
  name: 'WidgetListModal',
  components: { ...Widgets, Frame, FrameChild, WidgetList },
  methods: {
    updateAddList (itemName) {
      let widgetList = this.addWidgetList
      if (widgetList.indexOf(itemName) > -1) {
        this._.remove(widgetList, (n) => {
          return n === itemName
        })
        this.$forceUpdate()
      } else {
        widgetList.push(itemName)
      }
      this.addWidgetList = widgetList
      // TODO: fix this, remove $forceUpdate
    },
    onHide () {
      this.$store.dispatch('layout/setAddWidgetMode', false)
      this.addWidgetList = []
    },
    onOk () {
      // TODO: complete this
      this.$store.dispatch('main/addToCurrentWidgetList', this.addWidgetList)
    }
  },
  computed: {
    modalShowGlobalState () {
      return this.$store.state.layout.addWidgetMode
    },
    groupedWidgetList () {
      return this.$store.state.main.rawWidgetList
    }
  },
  data () {
    return {
      showModal: false,
      addWidgetList: []
    }
  },
  watch: {
    modalShowGlobalState () {
      this.showModal = this.modalShowGlobalState
    }
  }
}
</script>
