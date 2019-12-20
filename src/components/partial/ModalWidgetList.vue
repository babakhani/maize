<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model.sync="showModal"
    id="addWidgetModal"
    size="lg"
    centered
    class="add-widget-modal"
    :title=" $t('choose_widget')">
    <b-card 
      v-if="showModal"
      no-body>
      <b-tabs card>
        <template 
          v-model="currentTab"
          v-for="(item, index) in groupedWidgetList">
          <b-tab 
          :lazy="true"
          :active="item.group === 'header'"
          :title="item.title">
          <WidgetList 
          @updateAddList="updateAddList"
          :add-widget-list="addWidgetList"
          :widget-list="item.widgets" />
          </b-tab>
        </template>
      </b-tabs>
    </b-card>
  </b-modal>
</template>
<script>
import Widgets from '../widgets'
import Frame from './Frame.vue'
import FrameChild from './FrameChild.vue'
import WidgetList from './WidgetList'
export default {
  name: 'WidgetListModal',
  components: {...Widgets, Frame, FrameChild, WidgetList},
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
      currentTab: 1,
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
