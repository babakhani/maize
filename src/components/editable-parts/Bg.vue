<template>
  <div class="editable-background"
       :class="{'edit-mode': editMode}">
    <button v-if="editMode"
            class="btn btn-link editable-background--settings-btn"
            :title="$t('toolbox.bg_settings')"

            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :groups="['background', 'border']"
                           :currentStyles="styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>

    </button>
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
