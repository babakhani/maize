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
                 'add-widget-modal--widget-item--selected': addWidgetList.find((e) => {return e.name === widget.name})
                 }"
        @click="updateAddList(widget, $refs.widegtContainer[index])">
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
              v-if="getWidgetIndex(widget.name) > -1">{{getWidgetIndex(widget.name)}}</span>
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
export default {
  name: 'WidgetListModal',
  components: { ...Widgets, Frame, FrameChild, draggable },
  methods: {
    getWidgetIndex (name) {
      let finded = this.addWidgetList.find((i) => { return i.name === name })
      return this.addWidgetList.indexOf(finded)
    },
    updateAddList (item, widgetDefaultData) {
      this.$emit('updateAddList', {
        ...item,
        data: this._.cloneDeep(widgetDefaultData.defaultData)
      })
      this.$forceUpdate()
    },
    cloneDog (e) {
      let index = this.widgetList.indexOf(e)
      return {
        name: e.name,
        data: this._.cloneDeep(this.$refs.widegtContainer[index].defaultData),
        uniqeId: e.name + (this._.random(1000) + new Date().valueOf())
      }
    }
  },
  computed: {
    scale () {
      clearTimeout(this.setWidthTimeout)
      this.setWidthTimeout = setTimeout(() => {
        if (this.$refs.column[0]) {
          this.width = this.$refs.column[0].clientWidth
          this.scale2 = ((this.width * 100) / this.widthFrame) / 100
        }
      }, 100)
      return ((this.width * 100) / this.widthFrame) / 100
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
      this.setHeightTimeout = setTimeout(() => {
        if (this.$refs.widegtContainer && this.updateHeightCounter < 3) {
          this.heightList = []
          this.$refs.widegtContainer.forEach((widgetItem, index) => {
            if (this.heightList[index]) {
              this.heightList[index] = widgetItem.$el.clientHeight
            } else {
              this.heightList.push(widgetItem.$el.clientHeight)
            }
          })
          this.overlayVisbility = false
          this.updateHeightCounter++
        }
      }, 500)
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
