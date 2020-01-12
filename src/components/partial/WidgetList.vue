<template>
  <div
    class="card-columns">
    <draggable
    :sort="false"  
    :clone="cloneDog"
    ghost-class="ghost-ghost"
    drag-class="drag-ghost"
    chosen-class="chosen-ghost"
    :list="widgetList"
    :group="{ name: 'pagewidget', pull: 'clone', put: false }">
    <div
      v-if="widgetList && widgetList.length > 0"
      :key="index"
      v-for="(widget, index) in widgetList"
      class="card mt-1">
      <div
       ref="column"
       class="add-widget-modal--widget-item mb-0"
       :style="{
                height: heightList[index] ? `${heightList[index] * sanitizedScale}px`  : `100px`
                }"
       :class="{
                'add-widget-modal--widget-item--selected': addWidgetList.indexOf(widget) > -1
                }"
       @click="updateAddList(widget)">
        <Frame
          :style="{
                   width: `${widthFrame}px`,
                   transform: `scale(${sanitizedScale})`,
                   height: heightList[index] ? `${heightList[index]}px`  : `100px`
                   }"
          class="widget-thumb-container">
        <FrameChild>
        <component
              style="overflow: hidden;"
              ref="widegtContainer"
              :is="widget.name"
              :widgetData="widget.data"
              :demoMode="true"
              :uniqeKey="widget.uniqeId"></component>
        </FrameChild>
        </Frame>
        <div
          v-if="overlayVisbility"
          class="iframe-loading-overlay" >
            <b-spinner
              variant="primary"
              size="sm"
              class="m-5 mt-5"
              label="Spinning"></b-spinner>
        </div>
        <span class="widget-selected-num"
              v-if="addWidgetList.indexOf(widget) > -1">{{addWidgetList.indexOf(widget)}}</span>
      </div>
    </div>
    </draggable>
  </div>
</template>
<script>
import Widgets from '../widgets'
import Frame from './Frame.vue'
import FrameChild from './FrameChild.vue'
import draggable from 'vuedraggable'
import lodash from 'lodash'
export default {
  name: 'WidgetListModal',
  components: { ...Widgets, Frame, FrameChild, draggable },
  methods: {
    updateAddList (name) {
      this.$emit('updateAddList', name)
      this.$forceUpdate()
    },
    cloneDog (e) {
      return {
        name: e.name,
        uniqeId: e.name + (lodash.random(1000) + new Date().valueOf())
      }
    }
  },
  computed: {
    scale () {
      clearTimeout(this.setWidthTimeout)
      this.setWidthTimeout = setTimeout(() => {
        if (this.$refs.column[0]) {
          this.width = this.$refs.column[0].clientWidth
          this.scale2 = ((this.width * 100) / 1366) / 100
        }
      }, 100)
      return ((this.width * 100) / 1366) / 100
    },
    sanitizedScale () {
      let out = 1
      if (this.scale || this.scale === 0) {
        out = this.scale
      } else {
        out = this.scale2
      }
      if (out > 1) {
        out = 1
      }
      return out
    }
  },
  updated () {
    this.$nextTick(function () {
      clearTimeout(this.setHeightTimeout)
      if (this.$refs.widegtContainer && this.updateHeightCounter < 2) {
        this.setHeightTimeout = setTimeout(() => {
          console.log('set height')
          this.heightList = []
          this.$refs.widegtContainer.forEach((widgetItem, index) => {
            if (this.heightList[index] ) {
              this.heightList[index] = widgetItem.$el.clientHeight
            } else {
              this.heightList.push(widgetItem.$el.clientHeight)
            }
          })
          this.overlayVisbility = false
          this.updateHeightCounter++
        }, 500)
      }
    })
  },
  beforeDestroy () {
    clearTimeout(this.setWidthTimeout)
    clearTimeout(this.setHeightTimeout)
  },
  props: {
    addWidgetList: {
      type: [Array, Boolean],
      required: false,
      default () {
        return []
      }
    },
    widgetList: {
      type: [Array, Boolean],
      required: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      updateHeightCounter: 0,
      overlayVisbility: true,
      setWidthTimeout: null,
      setHeightTimeout: null,
      heightList: [],
      currentTab: 1,
      scale2: 1,
      widthFrame: 1366
    }
  }
}
</script>
