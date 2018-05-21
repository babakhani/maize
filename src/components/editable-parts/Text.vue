<template>
  <div class="widget-text-editable" :class="{'editable-active': editMode}">
    <EditablePartToolbox @update="updateStyles"
                         :currentStyles="styles"
                         v-if="editMode && toolboxVisible"
                         @hide="hideToolbox"></EditablePartToolbox>
    <!--Min Slot-->
    <h1 v-bind:style="styles" v-if="tag === 'h1'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="updateText">
      {{text}}
    </h1>
    <h2 v-bind:style="styles" v-if="tag === 'h2'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="updateText">
      {{text}}
    </h2>
    <h3 v-bind:style="styles" v-if="tag === 'h3'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="updateText">
      {{text}}
    </h3>
    <h4 v-bind:style="styles" v-if="tag === 'h4'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="updateText">
      {{text}}
    </h4>
    <h5 v-bind:style="styles" v-if="tag === 'h5'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="updateText">
      {{text}}
    </h5>
    <h6 v-bind:style="styles" v-if="tag === 'h6'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="updateText">
      {{text}}
    </h6>
    <span v-bind:style="styles" v-if="tag === 'span'" @focusin="showToolbox"
          :contenteditable="editMode"
          @input="updateText">
      {{text}}
    </span>
    <p v-bind:style="styles" v-if="tag === 'p'" @focusin="showToolbox"
       :contenteditable="editMode"
       @input="updateText">
      {{text}}
    </p>
  </div>
</template>
<script>

  import EditablePartMixin from '../../mixins/editablePart'

  export default {
    name: 'TextEditable',
    mixins: [EditablePartMixin],
    created() {
      this.styles = this._.extend(this.styles, this.currentStyles)
    },
    methods: {
      updateText(e) {
        if (e) {
          this.text = e.target.innerText
        }
        this.update()
      },
      updateStyles(e) {
        this.styles = e
        this.update()
      },
      update() {
        this.$emit('update', {
          name: this.name,
          styles: this.styles,
          text: this.text
        })
      }
    },
    props: {
      text: {
        default: "please replace me",
        required: false
      },
      tag: {
        default: 'p',
        required: true
      }
    }
  }
</script>
