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
      <EditablePartToolbox 
            @update="updateStyles"
            :groups="['icon', 'text', 'background', 'border', 'general']"
            :currentStyles="touchedData.styles"
            v-if="toolboxVisible"
            @hide="hideToolbox"></EditablePartToolbox>
    </button>

    <button v-if="editMode && showToolboxButton"
            :title="$t('toolbox.link')"
            @click="openSelectorLink"
            v-b-tooltip.hover.top.small
            class="btn btn-link editable-part--link-btn">
      <icon name="link"></icon>
    </button>

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
