<template>
  <div class="editable-image editable-part"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       @click="showToolbox"
       @dblclick="setPickImageMode"
       :class="{
       'editable-active': editMode,
       'under-edit': toolboxVisible}">
    <EditablePartToolbox
            :visibile-image-selector="true"
            :visibile-link-selector="linkable"
            @update="updateStyles"
            @updatewidget="updateEditableData"
            :groups="['border', 'general']"
            :currentStyles="touchedData.styles"
            :editableData="touchedData"
            v-if="toolboxVisible"
            @hide="hideToolbox"></EditablePartToolbox>

    <a v-if="touchedData.href"
       :contenteditable="editMode"
       :href="touchedData.href">
      <img :style="touchedData.styles"
           alt="image"
           :class="cssClass"
           :contenteditable="editMode"
           class="img-fluid editable-image-img"
           :src="touchedData.src">
    </a>
    <img v-else
         :style="touchedData.styles"
         alt="image"
         :class="cssClass"
         :contenteditable="editMode"
         class="img-fluid editable-image-img"
         :src="touchedData.src"
    />
  </div>
</template>

<script>
import EditablePartMixin from '../../mixins/editablePart'
import { EventBus } from '../../events/event-bus'

export default {
  name: 'ImageEditable',
  mixins: [EditablePartMixin],
  methods: {
    setPickLinkMode (e) {
      e.preventDefault()
      this.$store.dispatch('layout/setModalView', {
        name: 'link',
        data: this.touchedData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        this.touchedData = widgetData
        this.updateWidget()
      })
      return false
    },
    setPickImageMode (e) {
      e.preventDefault()
      this.$store.dispatch('layout/setModalView', {
        name: 'image',
        data: this.touchedData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData && widgetData.src) {
          this.touchedData = widgetData
          this.updateWidget()
        }
      })
      return false
    }
  }
}
</script>
