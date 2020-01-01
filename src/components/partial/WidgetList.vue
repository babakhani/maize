<template>
  <div 
    class="card-columns">
    <div
      v-if="widgetList && widgetList.length > 0"
      v-for="(widget, index) in widgetList"
      class="card mt-1">
      <div
       ref="column"
       class="add-widget-modal--widget-item mb-0"
       :style="{ 
                height: heightList[index] ? `${heightList[index] * sanitizedScale}px`  : `${
                widget.height ?  widget.height : 100 }px`
                }"
       :class="{
                'add-widget-modal--widget-item--selected': addWidgetList.indexOf(widget) > -1
                }"
       @click="updateAddList(widget)">
        <span 
          v-if="false"
          class="widget-name">
          {{widget.name}}
        </span>
        <Frame 
          ref="widegtframe"
          :style="{
                   width: `${widthFrame}px`,
                   transform: `scale(${sanitizedScale}) translate(-50% , -50%)`,
                   height: heightList[index] ? `${heightList[index]}px`  : `${ widget.height ?  widget.height : 100 }px`
                   }"
          class="widget-thumb-container">
        <FrameChild 
              title="this is iframe title">
        <link href="/lib/bootstrap.min.css"
              rel="stylesheet"
              crossorigin="anonymous">
        <link rel="stylesheet"
              href="/lib/maize_blocks.min.css">
        <component 
              ref="widegtContainer"
              :is="widget.name"
              :widgetData="widget.data"
              :demoMode="true"
              :uniqeKey="widget.uniqeId"></component>
        </FrameChild>
        </Frame>
        <span class="widget-selected-num"
              v-if="addWidgetList.indexOf(widget) > -1">{{addWidgetList.indexOf(widget)}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Widgets from '../widgets'
import Frame from './Frame.vue'
import FrameChild from './FrameChild.vue'
export default {
  name: 'WidgetListModal',
  components: {...Widgets, Frame, FrameChild},
  methods: {
    updateAddList (name) {
      this.$emit('updateAddList', name)
      this.$forceUpdate()
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
    }
  },
  updated () {
    this.$nextTick(function () {
      if (this.$refs.widegtContainer && this.heightSetup) {
        setTimeout( () => {
          this.$refs.widegtContainer.forEach((widgetItem, index) => {
             this.heightList.push(widgetItem.$el.clientHeight)
          })
        }, 1500)
        this.heightSetup = false
      }
    })
  },
  props: {
    addWidgetList: {
      type: [Array, Boolean],
      required: true,
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
      heightSetup: true,
      heightList: [],
      currentTab: 1,
      scale2: 1,
      widthFrame: 1366,
    }
  }
}
</script>
