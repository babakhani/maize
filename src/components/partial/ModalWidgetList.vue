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
          <b-tab v-if="item[0]"
                 :title="item[0]['group']"
                 active>
            <div class="row add-widget-modal--tab">
              <div v-for="widget in item"
                   class="add-widget-modal--widget-item col-3"
                   :class="{'add-widget-modal--widget-item--selected': addWidgetList.indexOf(widget) > -1}"
                   @click="updateAddList(widget)">
            <span class="widget-name">
              {{widget.name}}
            </span>
                <Frame class="widget-thumb-container">
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
        return this._.groupBy(this.$store.state.main.rawWidgetList, 'group')
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
