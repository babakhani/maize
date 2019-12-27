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
    </button>
    <EditablePartToolbox 
            :visibile-link-selector="linkable"
            @update="updateStyles"
            @updatewidget="updateEditableData"
            :groups="['icon', 'text', 'background', 'border', 'general']"
            :currentStyles="touchedData.styles"
            :editableData="touchedData"
            v-if="toolboxVisible"
            @hide="hideToolbox"></EditablePartToolbox>
    <a 
       @click="openSelectorIcon"
       v-if="touchedData.href"
       :class="touchedData.cssClass"
       :href="touchedData.href">
      <i 
       :style="touchedData.styles"
       :class="touchedData.iconName" >
      </i>
    </a>
    <span
      @click="openSelectorIcon"
      v-else
      :class="touchedData.cssClass">
      <i 
       :style="touchedData.styles"
       :class="touchedData.iconName" >
      </i>
    </span>
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'
  import {EventBus} from '../../events/event-bus'

  export default {
    name: 'ImageEditable',
    mixins: [EditablePartMixin],
    methods: {
      openSelectorLink (e) {
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
      openSelectorIcon (e) {
        e.preventDefault()
        this.$store.dispatch('layout/setModalView', {
          name: 'icon',
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
