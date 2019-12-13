<template>
  <div class="editable-text editable-part"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       :class="{'editable-active': editMode}">
    <!--Min Slot-->
    <button v-if="editMode && showToolboxButton"
            class="btn btn-link editable-part--settings-btn"
            :title="$t('toolbox.settings')"
            v-b-tooltip.hover.bottom.small
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :currentStyles="touchedData.styles"
                           @setPickLinkMode="setPickLinkMode"
                           v-if="editMode && toolboxVisible">
      </EditablePartToolbox>
    </button>
    <component 
        :is="tag"
        v-bind:style="touchedData.styles"
        :class="touchedData.cssClass"
        :contenteditable="editMode"
        :href="tag === 'a' ? touchedData.src : false"
        :target="tag === 'a' ? '_blank' : false"
        @focus="showToolbox"
        @focusout="updateTextOnBlur"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
        {{touchedData.text}}
    </component>
  </div>
</template>
<script>
  import EditablePartMixin from '../../mixins/editablePart'
  import {EventBus} from '../../events/event-bus'

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
      setPickLinkMode () {
        this.goToEditMode()
        if (this.editMode || noCheckState == true) {
          this.$store.dispatch('layout/setPickLinkMode', true)
          EventBus.$once('pickLink', (linkSrc) => {
            this.touchedData.src = linkSrc
            this.updateWidget()
          })
        }
      },
      /**
       * @link https://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser/6804718#6804718
       * @param e
       */
      onPaste (e) {
        // TODO: must move to helpre class
        function strip (html) {
          const tmp = document.createElement("DIV")
          tmp.innerHTML = html
          return tmp.textContent || tmp.innerText || ""
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
