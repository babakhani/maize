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
        <template v-for="item in groupedWidgetList">
          <b-tab v-if="item"
                 :active="item.group === 'header'"
                 :title="item.title">
            <div class="row add-widget-modal--tab">
              <div 
                 ref="column"
                 v-for="widget in item.widgets"
                 class="float-left col-6">
                <div 
                 class="add-widget-modal--widget-item"
                 :style="{
                          height: widget.height ? `${widget.height }px`  : '650px'
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
                                 width: '1366px',
                                 transform: `scale(${sanitizedScale}) translate(-50% , -50%)`,
                                 height: widget.height ? `${widget.height / sanitizedScale}px`  : '650px'
                                 }"
                        class="widget-thumb-container">
                  <FrameChild 

                        title="this is iframe title">
                  <link href="/static/lib/bootstrap.min.css"
                        rel="stylesheet"
                        crossorigin="anonymous">
                  <link rel="stylesheet"
                        href="/">
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
    scale () {
      setTimeout(() => {
        this.width = this.$refs.column[0].clientWidth
        this.scale2 =  ((this.width * 100) / 1366) / 100
      }, 1000) 
      return ((this.width * 100) / 1366) / 100
    },
    sanitizedScale () {
      let out = 1
      if (this.scale || this.scale === 0) {
        out =  this.scale
      } else {
        out = this.scale2
      }
      if (out > 1) {
        out = 1
      }
      return out
    },
    modalShowGlobalState () {
      return this.$store.state.layout.addWidgetMode
    },
    groupedWidgetList () {
      return this.$store.state.main.rawWidgetList
    }
  },
  data () {
    return {
      scale2: 1,
      width: 1366,
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
