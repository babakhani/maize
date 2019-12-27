<template>
  <div class="editable-image editable-part"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       @keydown.esc="hideToolbox()"
       :class="{
       'editable-active': editMode,
       'under-edit': toolboxVisible}">
    <button v-if="editMode && showToolboxButton"
            class="btn btn-link editable-part--settings-btn"
            :title="$t('toolbox.settings')"
            v-b-tooltip.hover.bottom.small
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :groups="['border', 'general']"
                           :currentStyles="touchedData.styles"
                           :editableData="touchedData"
                           v-if="toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
    </button>

    <button v-if="editMode && showToolboxButton"
            :title="$t('toolbox.link')"
            v-b-tooltip.hover.top.small
            @click="setPickLinkMode"
            class="btn btn-link editable-part--link-btn">
      <icon name="link"></icon>
    </button>

    <a v-if="touchedData.href"
       @click="setPickImageMode"
       :contenteditable="editMode"
       :href="touchedData.href">
      <img :style="touchedData.styles"
           alt="image"
           :class="cssClass"
           :contenteditable="editMode"
           @click="setPickImageMode"
           class="img-fluid editable-image-img"
           :src="touchedData.src">
    </a>
    <img v-else
         :style="touchedData.styles"
         alt="image"
         :class="cssClass"
         :contenteditable="editMode"
         @click="setPickImageMode"
         class="img-fluid editable-image-img"
         :src="touchedData.src"
    />
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'
  import {EventBus} from '../../events/event-bus'

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
          this.touchedData = widgetData
          this.updateWidget()
        })
        return false 
      }
    }
  }
</script>
