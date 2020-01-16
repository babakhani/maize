<template>
  <div class="editable-text editable-part"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       @click="showToolbox"
       :class="{
               'editable-active': editMode,
               'under-edit': toolboxVisible}">
    <EditablePartToolbox
      :visibile-text-selector="true"
      :visibile-link-selector="tag === 'a'"
      :toolbox-visible="toolboxVisible"
      :currentStyles="touchedData.styles"
      :editableData="touchedData"
      @updatewidget="updateEditableData"
      @hide="hideToolbox"
      @update="updateStyles"
      v-if="editMode && toolboxVisible">
    </EditablePartToolbox>
    <component
      v-if="toolboxVisible"
      :is="tag"
      v-bind:style="touchedData.styles"
      :class="touchedData.cssClass"
      :contenteditable="editMode"
      :href="tag === 'a' ? touchedData.href : false"
      :target="tag === 'a' ? '_blank' : false"
      @focus="showToolbox"
      @click="(e) => e.preventDefault()"
      @focusout="updateTextOnBlur"
      @dblclick="goToEditMode"
      @paste="onPaste"
      @input="updateText">
      {{touchedData.text}}
    </component>
    <component
      v-if="!toolboxVisible"
      :is="tag"
      v-bind:style="touchedData.styles"
      :class="touchedData.cssClass"
      :contenteditable="editMode"
      :href="tag === 'a' ? touchedData.href : false"
      :target="tag === 'a' ? '_blank' : false"
      v-html="touchedData.text"
      @click="(e) => e.preventDefault()"
      @focus="showToolbox"
      @focusout="updateTextOnBlur"
      @dblclick="goToEditMode"
      @paste="onPaste"
      @input="updateText">
    </component>
  </div>
</template>
<script>
import EditablePartMixin from '../../mixins/editablePart'

export default {
  name: 'TextEditable',
  mixins: [EditablePartMixin],
  data () {
    return {
      touchedText: null
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

<style lang="scss" scoped>
.editable-text {
  position: relative;
  padding: 0;
  display: inline-block;
  //width: 100%;

  &.editable-active {
    //padding-left: 2em;
    min-height: 2em !important;
    line-height: 2em;
    .widget-text-editable--toolbox {
      display: block;
    }
  }
  .editor-page-preview-mode & {
    padding-left: 0;
  }

  .editable-text--settings-btn {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 2em;
    height: 2em;
    padding: 0;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

</style>
