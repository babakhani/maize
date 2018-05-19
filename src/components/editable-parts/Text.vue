<template>
  <div class="widget-text-editable">
    <EditablePartToolbox :styles="styles" v-if="editMode && toolboxVisible" @hide="hideToolbox"></EditablePartToolbox>
    <!--Min Slot-->
    <h1 v-bind:style="styles" v-if="tag === 'h1'" @focusin="showToolbox"
        :contenteditable="editMode">
      <slot></slot>
    </h1>
    <h2 v-bind:style="styles" v-if="tag === 'h2'" @focusin="showToolbox"
        :contenteditable="editMode">
      <slot></slot>
    </h2>
    <h3 v-bind:style="styles" v-if="tag === 'h3'" @focusin="showToolbox"
        :contenteditable="editMode">
      <slot></slot>
    </h3>
    <h4 v-bind:style="styles" v-if="tag === 'h4'" @focusin="showToolbox"
        :contenteditable="editMode">
      <slot></slot>
    </h4>
    <h5 v-bind:style="styles" v-if="tag === 'h5'" @focusin="showToolbox"
        :contenteditable="editMode">
      <slot></slot>
    </h5>
    <h6 v-bind:style="styles" v-if="tag === 'h6'" @focusin="showToolbox"
        :contenteditable="editMode">
      <slot></slot>
    </h6>
    <span v-bind:style="styles" v-if="tag === 'span'" @focusin="showToolbox"
          :contenteditable="editMode">
      <slot></slot>
    </span>
    <p v-bind:style="styles" v-if="tag === 'p'" @focusin="showToolbox"
       :contenteditable="editMode">
      <slot></slot>
    </p>
  </div>
</template>
<script>

  import EditablePartMixin from '../../mixins/editablePart'
  export default {
    name: 'TextEditable',
    mixins: [EditablePartMixin],
    watch: {
      styles: {
        handler: function () {
          // console.log('styles changed:')
          // console.log(this.styles)
        },
        deep: true
      }
    },
    props: {
      tag: {
        default: 'p',
        required: true
      },
      editMode: {
        default: false
      }
    }
  }
</script>
