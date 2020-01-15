<template>
  <div
    class="editable-part editable-background"
    :class="{
            'editable-active': editMode,
            'under-edit': toolboxVisible}">
    <button v-if="editMode"
            class="btn btn-link no-outline editable-part settings-btn"
            :title="$t('toolbox.bg_settings')"
            v-b-tooltip.hover.bottom.small
            @click="showToolbox">
      <icon name="cog"></icon>
    </button>
    <EditablePartToolbox
      :groups="['backgroundimage', 'background', 'border', 'general']"
      @update="updateStyles"
      :currentStyles="touchedData.styles"
      v-if="toolboxVisible"
      @hide="hideToolbox"></EditablePartToolbox>
    <div v-bind:style="touchedData.styles">
      <slot></slot>
    </div>
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
}


</style>
