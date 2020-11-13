<template>
  <div class="editable-image editable-part"
       :data-aos="touchedData.animate.name"
       :data-aos-delay="touchedData.animate.delay"
       :data-aos-duration="touchedData.animate.duration"
       :data-aos-easing="touchedData.animate.easing"
       :data-aos-mirror="touchedData.animate.mirror"
       :data-aos-once="touchedData.animate.once"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       @click="showToolbox"
       @dblclick="openSelectorIcon"
       :class="{
               'editable-active': editMode,
               'under-edit': toolboxVisible}">
    <EditablePartToolbox
      :visibile-icon-selector="true"
      :visibile-link-selector="linkable"
      @update="updateStyles"
      @updatewidget="updateEditableData"
      :groups="['icon', 'text', 'background', 'border', 'general']"
      :currentStyles="touchedData.styles"
      :editableData="touchedData"
      v-if="editMode && toolboxVisible"
      @hide="hideToolbox"></EditablePartToolbox>
    <a
      v-if="touchedData.href"
      :class="touchedData.cssClass"
      :href="touchedData.href">
      <i
        :style="touchedData.styles"
        :class="touchedData.iconName" >
      </i>
    </a>
    <span
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
import { EventBus } from '../../events/event-bus'

export default {
  name: 'ImageEditable',
  mixins: [EditablePartMixin],
  methods: {
    openSelectorIcon (e) {
      e.preventDefault()
      this.$store.dispatch('layout/setModalView', {
        name: 'extensionloader',
        extensions: ['FontAwesomePicker'],
        data: this.touchedData.iconName
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (data) => {
        if (data) {
          this.touchedData.iconName = data
          this.updateWidget()
        }
      })
      return false
    }
  }
}
</script>
