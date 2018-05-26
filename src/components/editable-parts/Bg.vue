<template>
  <div class="background-editable"
       :class="{'edit-mode': editMode}">
    <button v-if="editMode"
            class="btn btn-link background-editable--settings-btn"
            :title="$t('toolbox.bg_settings')"
            v-b-tooltip.hover.right
            @click="showToolbox">
      <icon name="cog"></icon>
    </button>
    <EditablePartToolbox @update="updateStyles"
                         :groups="['background', 'border']"
                         :currentStyles="styles"
                         v-if="editMode && toolboxVisible"
                         @hide="hideToolbox"></EditablePartToolbox>
    <div v-bind:style="styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'

  export default {
    name: 'BgEditable',
    mixins: [EditablePartMixin]
  }
</script>
