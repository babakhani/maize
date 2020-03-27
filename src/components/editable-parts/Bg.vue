<template>
  <div
    v-if="touchedData"
    class="editable-part editable-background"
    :style="touchedData.styles"
    :data-aos="touchedData.animate.name"
    :data-aos-delay="touchedData.animate.delay"
    :data-aos-duration="touchedData.animate.duration"
    :data-aos-easing="touchedData.animate.easing"
    :data-aos-mirror="touchedData.animate.mirror"
    :data-aos-once="touchedData.animate.once"
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
      @updatewidget="updateEditableData"
      :currentStyles="touchedData.styles"
      :editableData="touchedData"
      v-if="editMode && toolboxVisible"
      @hide="hideToolbox">
      <template v-slot:toolbox>
        <slot name="toolbox">
        </slot>
      </template>
    </EditablePartToolbox>
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
   .settings-btn {
     display: none;
   }
   &:hover{
     outline: none;
     .settings-btn {
       display: block;
     }
   }
 }
</style>
