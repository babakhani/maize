<template>
  <div class="editable-text"
       :class="{'editable-active': editMode}">
    <!--Min Slot-->
    <button v-if="editMode"
            class="btn btn-link editable-text--settings-btn"
            :title="$t('toolbox.bg_settings')"
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :currentStyles="styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
    </button>

    <h1 v-bind:style="styles"
        v-if="tag === 'h1'"
        :contenteditable="editMode"
        @focusin="showToolbox"
        @focusout="updateTextOnBlur"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">{{text}}</h1>
    <h2 v-bind:style="styles"
        v-if="tag === 'h2'"
        :contenteditable="editMode"
        @focusin="showToolbox"

        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">

      {{text}}
    </h2>
    <h3 v-bind:style="styles"
        v-if="tag === 'h3'"
        @focusin="showToolbox"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{text}}
    </h3>
    <h4 v-bind:style="styles"
        v-if="tag === 'h4'"
        @focusin="showToolbox"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">

      {{text}}
    </h4>
    <h5 v-bind:style="styles"
        v-if="tag === 'h5'"
        @focusin="showToolbox"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{text}}
    </h5>
    <h6 v-bind:style="styles"
        v-if="tag === 'h6'"
        @focusin="showToolbox"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">

      {{text}}
    </h6>
    <span v-bind:style="styles"
          v-if="tag === 'span'"
          @focusin="showToolbox"
          @focusout="updateTextOnBlur"
          :contenteditable="editMode"
          @dblclick="goToEditMode"
          @paste="onPaste"
          @input="updateText">

      {{text}}
    </span>
    <p v-bind:style="styles"
       v-if="tag === 'p'"
       @focusin="showToolbox"
       @focusout="updateTextOnBlur"
       :contenteditable="editMode"
       @dblclick="goToEditMode"
       @paste="onPaste"
       @input="updateText">
      {{text}}
    </p>

    <a v-bind:style="styles"
       v-if="tag === 'a'"
       :href="src"
       target="_blank"
       @focusin="showToolbox"
       @focusout="updateTextOnBlur"
       :contenteditable="editMode"
       @dblclick="goToEditMode"
       @click.native="preventInEditMode"
       @paste="onPaste"
       @input="updateText">
      {{text}}
    </a>
  </div>
</template>
<script>
  import EditablePartMixin from '../../mixins/editablePart'

  export default {
    name: 'TextEditable',
    mixins: [EditablePartMixin],
    data () {
      return {
        touchedText: this.text
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
