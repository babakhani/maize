<template>
  <div
    class="editable-part editable-background"
    :style="touchedData.styles"
    @click="showToolbox"
    :class="{
            'editable-active': editMode,
            'under-edit': toolboxVisible}">
    <button v-if="editMode"
            class="btn btn-link no-outline editable-part settings-btn"
            :title="$t('toolbox.bg_settings')"
            v-b-tooltip.hover.bottom.small>
      <icon name="cog"></icon>
    </button>
    <EditablePartToolbox
      :groups="['backgroundimage', 'background', 'border', 'general']"
      @update="updateStyles"
      :currentStyles="touchedData.styles"
      v-if="editMode && toolboxVisible"
      @hide="hideToolbox"></EditablePartToolbox>
     <slot></slot>
  </div>
</template>

<script>
import EditablePartMixin from '../../mixins/editablePart'

export default {
  name: 'BgEditable',
  mixins: [EditablePartMixin],
  props: {
    partData: {
      default () {
        return this.$parent.touchedData.bg
      },
      required: false
    },
    name: {
      default: 'bg',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

.editable-background {
  background: $white;
  .settings-btn {
    position: absolute;
    height: 3em;
    width: 3em;
    z-index: 1000;
  }
  .editor-page-preview-mode & {
    border-top: 0;
    .editable-part--settings-btn {
      display: none;
    }
  }
  outline-offset: -2px;

  &.under-edit:hover,
  &.under-edit {
     outline: 3px dashed rgba($primary-color, .6) !important;
  }

  &:hover{
    outline: none;
  }
}

</style>
