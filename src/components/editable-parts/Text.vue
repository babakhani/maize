<template>
  <div class="editable-text editable-part"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       :class="{'editable-active': editMode}">
    <!--Min Slot-->
    <!--<button v-if="editMode && showToolboxButton"-->
            <!--class="btn btn-link editable-part&#45;&#45;settings-btn"-->
            <!--:title="$t('toolbox.settings')"-->
            <!--v-b-tooltip.hover.bottom.small-->
            <!--@click="showToolbox">-->
      <!--<icon name="cog"></icon>-->
      <!--<EditablePartToolbox @update="updateStyles"-->
                           <!--:currentStyles="touchedData.styles"-->
                           <!--@setPickLinkMode="setPickLinkMode"-->
                           <!--v-if="editMode && toolboxVisible"-->
                           <!--@hide="hideToolbox">-->
      <!--</EditablePartToolbox>-->
    <!--</button>-->
      <button type="button"
              id="sidebarCollapse"
              class="btn btn-link editable-part--settings-btn">
        <icon name="cog"></icon>
        <EditablePartToolbox @update="updateStyles"
                           :currentStyles="touchedData.styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
      </button>
    <h1 v-bind:style="touchedData.styles"
        v-if="tag === 'h1'"
        :class="touchedData.cssClass"
        :contenteditable="editMode"
        @focusout="updateTextOnBlur"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{touchedData.text}}
    </h1>
    <h2 v-bind:style="touchedData.styles"
        v-if="tag === 'h2'"
        :class="touchedData.cssClass"
        :contenteditable="editMode"
        @focusout="updateTextOnBlur"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{touchedData.text}}
    </h2>
    <h3 v-bind:style="touchedData.styles"
        v-if="tag === 'h3'"
        :class="touchedData.cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{touchedData.text}}
    </h3>
    <h4 v-bind:style="touchedData.styles"
        v-if="tag === 'h4'"
        :class="touchedData.cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">

      {{touchedData.text}}
    </h4>
    <h5 v-bind:style="touchedData.styles"
        v-if="tag === 'h5'"
        :class="touchedData.cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{touchedData.text}}
    </h5>
    <h6 v-bind:style="touchedData.styles"
        v-if="tag === 'h6'"
        :class="touchedData.cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">

      {{touchedData.text}}
    </h6>
    <span v-bind:style="touchedData.styles"
          v-if="tag === 'span'"
          :class="touchedData.cssClass"
          @focusout="updateTextOnBlur"
          :contenteditable="editMode"
          @dblclick="goToEditMode"
          @paste="onPaste"
          @input="updateText">

    {{touchedData.text}}
    </span>
    <p v-bind:style="touchedData.styles"
       v-if="tag === 'p'"
       :class="touchedData.cssClass"
       @focusout="updateTextOnBlur"
       :contenteditable="editMode"
       @dblclick="goToEditMode"
       @paste="onPaste"
       @input="updateText">
      {{touchedData.text}}
    </p>

    <strong v-bind:style="touchedData.styles"
            v-if="tag === 'strong'"
            :class="touchedData.cssClass"
            @focusout="updateTextOnBlur"
            :contenteditable="editMode"
            @dblclick="goToEditMode"
            @paste="onPaste"
            @input="updateText">
      {{touchedData.text}}
    </strong>

    <em v-bind:style="touchedData.styles"
        v-if="tag === 'em'"
        :class="touchedData.cssClass"
        @focusout="updateTextOnBlur"
        :contenteditable="editMode"
        @dblclick="goToEditMode"
        @paste="onPaste"
        @input="updateText">
      {{touchedData.text}}
    </em>

    <a v-bind:style="touchedData.styles"
       v-if="tag === 'a'"
       :class="touchedData.cssClass"
       :href="touchedData.src"
       target="_blank"
       @focusout="updateTextOnBlur"
       :contenteditable="editMode"
       @dblclick="goToEditMode"
       @click.native="preventInEditMode"
       @paste="onPaste"
       @input="updateText">
      {{touchedData.text}}
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
