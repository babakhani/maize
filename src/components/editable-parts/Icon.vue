<template>
  <div class="editable-image editable-part"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement">
    <button v-if="editMode && showToolboxButton"
            class="btn btn-link editable-part--settings-btn"
            :title="$t('toolbox.settings')"
            v-b-tooltip.hover.bottom.small
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox 
            @update="updateStyles"
            :groups="['background', 'border', 'general']"
            :currentStyles="touchedData.styles"
            v-if="toolboxVisible"
            @hide="hideToolbox"></EditablePartToolbox>
    </button>

    <button v-if="editMode && showToolboxButton"
            :title="$t('toolbox.link')"
            v-b-tooltip.hover.top.small
            @click="openSelector"
            class="btn btn-link editable-part--link-btn">
      <icon name="link"></icon>
    </button>

    <a v-if="touchedData.href"
       :class="touchedData.cssClass"
       :href="touchedData.href">
      <i 
        :class="touchedData.iconName" >
      </i>
    </a>
    <span
      v-else
      :class="touchedData.cssClass">
      <i 
      :class="touchedData.iconName" >
      </i>
    </span>
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'
  import {EventBus} from '../../events/event-bus'

  export default {
    name: 'ImageEditable',
    mixins: [EditablePartMixin],
    methods: {
      openSelector () {
        this.$store.dispatch('layout/setModalView', {
          name: 'icon',
          data: {
            iconName: this.touchedData.iconName
          }
        })
        EventBus.$once('pickIcon', (iconName) => {
          this.touchedData.iconName = iconName
          this.updateWidget()
        })
      }
    }
  }
</script>
