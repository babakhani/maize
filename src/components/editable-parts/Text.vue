<template>
  <div class="editable-text editable-part"
       :class="{'editable-active': editMode}">
    <!--Min Slot-->
    <button v-if="editMode"
            class="btn btn-link editable-part--settings-btn"
            :title="$t('toolbox.bg_settings')"
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :currentStyles="styles"
                           @setPickLinkMode="setPickLinkMode"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox">
      </EditablePartToolbox>
    </button>
    <h1 v-bind:style="styles"
        v-if="tag === 'h1'"
        :class="cssClass"
        :contenteditable="editMode"
        @focusout="updateTextOnBlur"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">{{text}}</h1>
    <h2 v-bind:style="styles"
        :class="cssClass"
        v-if="tag === 'h2'"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">

      {{text}}
    </h2>
    <h3 v-bind:style="styles"
        v-if="tag === 'h3'"
        :class="cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{text}}
    </h3>
    <h4 v-bind:style="styles"
        v-if="tag === 'h4'"
        :class="cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">

      {{text}}
    </h4>
    <h5 v-bind:style="styles"
        v-if="tag === 'h5'"
        :class="cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{text}}
    </h5>
    <h6 v-bind:style="styles"
        v-if="tag === 'h6'"
        :class="cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">

      {{text}}
    </h6>
    <span v-bind:style="styles"
          v-if="tag === 'span'"
          :class="cssClass"
          @focusout="updateTextOnBlur"
          :contenteditable="editMode"
          @dblclick="goToEditMode"
          @paste="onPaste"
          @input="updateText">

      {{text}}
    </span>
    <p v-bind:style="styles"
       v-if="tag === 'p'"
       :class="cssClass"
       @focusout="updateTextOnBlur"
       :contenteditable="editMode"
       @dblclick="goToEditMode"
       @paste="onPaste"
       @input="updateText">
      {{text}}
    </p>

    <strong v-bind:style="styles"
       v-if="tag === 'strong'"
       :class="cssClass"
       @focusout="updateTextOnBlur"
       :contenteditable="editMode"
       @dblclick="goToEditMode"
       @paste="onPaste"
       @input="updateText">
      {{text}}
    </strong>

    <em v-bind:style="styles"
            v-if="tag === 'em'"
            :class="cssClass"
            @focusout="updateTextOnBlur"
            :contenteditable="editMode"
            @dblclick="goToEditMode"
            @paste="onPaste"
            @input="updateText">
      {{text}}
    </em>

    <a v-bind:style="styles"
       v-if="tag === 'a'"
       :class="cssClass"
       :href="src"
       target="_blank"
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
        console.log('setPickLinkMode -----------------------------------')
        this.goToEditMode()
        if (this.editMode || noCheckState == true) {
          this.$store.dispatch('layout/setPickLinkMode', true)
          EventBus.$once('pickLink', (linkSrc) => {

            console.log('text editabl picked link')
            this.updateData({
              name: this.name,
              data: {
                src: linkSrc
              }
            })
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
