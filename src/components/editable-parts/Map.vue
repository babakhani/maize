<template>
  <div class="editable-map editable-part"
       :data-aos="touchedData.animate.name"
       :data-aos-delay="touchedData.animate.delay"
       :data-aos-duration="touchedData.animate.duration"
       :data-aos-easing="touchedData.animate.easing"
       :data-aos-mirror="touchedData.animate.mirror"
       :data-aos-once="touchedData.animate.once"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       @dblclick="setPickMapMode"
       :class="{
               'editable-active': editMode,
               'under-edit': toolboxVisible}">
    <iframe class="map"
            :class="cssClass"
            :src="touchedData.frameSrc"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0"
            allowfullscreen></iframe>
    <div
      @click="(e) => e.preventDefault()"
      @dblclick="setPickMapMode"
      class="iframe-overlay"></div>
  </div>
</template>

<script>
import EditablePartMixin from '../../mixins/editablePart'
import { EventBus } from '../../events/event-bus'

export default {
  name: 'MapEditable',
  mixins: [EditablePartMixin],
  methods: {
    setPickMapMode (e) {
      e.preventDefault()
      this.$store.dispatch('layout/setModalView', {
        name: 'map',
        data: this.touchedData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData) {
          this.touchedData = widgetData
        }
        this.updateWidget()
      })
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.editable-map {
  position: relative;
  .iframe-overlay {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .1);
  }
}

</style>
