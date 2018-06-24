<template>
  <div class="editable-background"
       :class="{'edit-mode': editMode}">
    <!--<button v-if="editMode"-->
            <!--class="btn btn-link editable-part&#45;&#45;settings-btn"-->
            <!--:title="$t('toolbox.bg_settings')"-->
            <!--v-b-tooltip.hover.bottom.small-->
            <!--@click="showToolbox">-->
      <!--<icon name="cog"></icon>-->
      <!--<EditablePartToolbox @update="updateStyles"-->
                           <!--:currentStyles="touchedData.styles"-->
                           <!--v-if="editMode && toolboxVisible"-->
                           <!--@hide="hideToolbox"></EditablePartToolbox>-->

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
    <div v-bind:style="touchedData.styles">
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
