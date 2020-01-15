<template>
  <div class="editable-text editable-part"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       :class="{
               'editable-active': editMode,
               'under-edit': toolboxVisible}">
    <EditablePartToolbox
      :visibile-link-selector="tag === 'a'"
      :toolbox-visible="toolboxVisible"
      :currentStyles="touchedData.styles"
      :editableData="touchedData"
      @updatewidget="updateEditableData"
      @hide="hideToolbox"
      @update="updateStyles"
      v-if="toolboxVisible">
    </EditablePartToolbox>
    <button
      v-bind:style="touchedData.styles"
      :class="cssClass"
      :contenteditable="editMode"
      :href="tag === 'a' ? touchedData.href : false"
      :target="tag === 'a' ? '_blank' : false"
      :type="type"
      @focus="showToolbox"
      @focusout="updateTextOnBlur"
      @dblclick="goToEditMode"
      @paste="onPaste"
      @input="updateText">
      {{touchedData.text}}
    </button>
  </div>
</template>
<script>
import EditablePartMixin from '../../mixins/editablePart'

export default {
  name: 'ButtonEditable',
  mixins: [EditablePartMixin],
  data () {
    return {
      touchedText: null
    }
  },
  props: {
    type: {
      required: false,
      default: 'button'
    }
  },
  methods: {
    preventInEditMode (e) {
      if (this.editMode) {
        e.preventDefault()
        return false
      }
    },
    /**
     * @link https://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser/6804718#6804718
     * @param e
     */
    onPaste (e) {
      // TODO: must move to helpre class
      function strip (html) {
        const tmp = document.createElement('DIV')
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ''
      }

      e.stopPropagation()
      e.preventDefault()
      const clipboardData = e.clipboardData || window.clipboardData
      const pastedData = clipboardData.getData('Text')
      this.touchedText = strip(pastedData)
      this.updatePastedText(this.touchedText)
    }
  }
}
</script>
