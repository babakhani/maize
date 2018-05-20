<template>
  <div  class="background-editable" :class="{'edit-mode': editMode}">
    <button class="btn btn-link" @click="showToolbox" >
      <icon name="cog"></icon>
    </button>
    <EditablePartToolbox :groups="['background', 'border']" :styles="styles" v-if="editMode && toolboxVisible" @hide="hideToolbox"></EditablePartToolbox>

    <div v-bind:style="styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'
  export default {
    name: 'BgEditable',
    mixins: [EditablePartMixin],
    methods: {
      updateColor(e) {
        this.styles['background-color'] = e.target.value
      }
    },
    props: {
      editMode: {
        default: 'false'
      }
    }
  }
</script>
