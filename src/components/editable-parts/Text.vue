<template>
  <div class="widget-text-editable" :class="{'editable-active': editMode}">
    <EditablePartToolbox :styles="styles" v-if="editMode && toolboxVisible" @hide="hideToolbox"></EditablePartToolbox>
    <!--Min Slot-->
    <h1 v-bind:style="styles" v-if="tag === 'h1'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="update">
      {{text}}
    </h1>
    <h2 v-bind:style="styles" v-if="tag === 'h2'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="update">
      {{text}}
    </h2>
    <h3 v-bind:style="styles" v-if="tag === 'h3'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="update">
      {{text}}
    </h3>
    <h4 v-bind:style="styles" v-if="tag === 'h4'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="update">
      {{text}}
    </h4>
    <h5 v-bind:style="styles" v-if="tag === 'h5'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="update">
      {{text}}
    </h5>
    <h6 v-bind:style="styles" v-if="tag === 'h6'" @focusin="showToolbox"
        :contenteditable="editMode"
        @input="update">
      {{text}}
    </h6>
    <span v-bind:style="styles" v-if="tag === 'span'" @focusin="showToolbox"
          :contenteditable="editMode"
          @input="update">
      {{text}}
    </span>
    <p v-bind:style="styles" v-if="tag === 'p'" @focusin="showToolbox"
       :contenteditable="editMode"
       @input="update">
      {{text}}
    </p>
  </div>
</template>
<script>

  import EditablePartMixin from '../../mixins/editablePart'

  export default {
    name: 'TextEditable',
    mixins: [EditablePartMixin],
    methods: {
      update(e) {
        console.log('editable part update method')
        this.$emit('update', {
          name: this.name,
          styles: this.styles,
          text: e.target.innerText
        })
      }
    },
    watch: {
      styles: {
        handler: function () {
          console.log('styles changed:')
          console.log(this.styles)

          this.$emit('update', {
            name: this.name,
            styles: this.styles
          })

        },
        deep: true
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
