<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model.sync="showModal"
    id="addWidgetModal"
    size="lg"
    centered
    class="add-widget-modal"
    title="Choose your widget:">
    <b-card no-body>
      <b-tabs card>
        <template v-for="item in groupedWidgetList">
          <b-tab v-if="item"
              :active="item.group === 'header'"
              :title="item.title">
              <div class="row add-widget-modal--tab">
                <div 
                  v-for="widget in item.widgets"
                  style="float-left"
                  class="float-right"
                  :class="{
                    'col-12': item.landspace,
                    'col-6': !item.landspace
                  }">
                <div 
                  class="add-widget-modal--widget-item"
                  :style="{
                    height: item.landspace ? '10em' : '25em'
                  }"
                  :class="{
                    'add-widget-modal--widget-item--selected': addWidgetList.indexOf(widget) > -1
                  }"
                  @click="updateAddList(widget)">
                  <span class="widget-name">
                    {{widget.name}}
                  </span>
                  <Frame 
                  :style="{
                    transform: `scale(${ item.landspace ? 0.9 : 0.3}) translate(-50% , -50%)`,
                    height: item.landspace ? '100px' : '800px'
                  }"
                  class="widget-thumb-container">
                  <FrameChild title="this is iframe title">
                    <link href="/static/lib/bootstrap.min.css"
                          rel="stylesheet"
                          crossorigin="anonymous">
                    <link rel="stylesheet"
                          href="https://cdn0.froala.com/assets/design/blocks/builder-28d9f2585c6323df9cef7312bf1b67de.css">
                    <div :is="widget.name"
                         :widgetData="widget.data"
                         :demoMode="true"
                         :uniqeKey="widget.uniqeId"></div>
                  </FrameChild>
                  </Frame>
                  <span class="widget-selected-num"
                        v-if="addWidgetList.indexOf(widget) > -1">{{addWidgetList.indexOf(widget) + 1}}</span>
                </div>
              </div>
            </div>
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
  export default {
    name: 'WidgetListModal',
    components: {...Widgets, Frame, FrameChild},
    methods: {
      updateAddList (itemName) {
        if (this.addWidgetList.indexOf(itemName) > -1) {
          this._.remove(this.addWidgetList, (n) => {
            return n === itemName
          })
        } else {
          this.addWidgetList.push(itemName)
        }
        // TODO: fix this, remove $forceUpdate
        this.$forceUpdate()
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
