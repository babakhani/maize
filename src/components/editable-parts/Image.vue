<template>
  <div class="editable-image editable-part"
       :data-aos="touchedData.animate.name"
       :data-aos-delay="touchedData.animate.delay"
       :data-aos-duration="touchedData.animate.duration"
       :data-aos-easing="touchedData.animate.easing"
       :data-aos-mirror="touchedData.animate.mirror"
       :data-aos-once="touchedData.animate.once"
       @mouseenter="mouseInElement"
       @mouseleave="mouseLeaveElement"
       @click="showToolbox"
       @dblclick="setPickImageMode"
       :class="{
               'editable-active': editMode,
               'under-edit': toolboxVisible}">
    <EditablePartToolbox
      v-if="editMode && toolboxVisible"
      :visibile-image-selector="true"
      :visibile-link-selector="true"
      :groups="['text', 'link', 'border', 'general']"
      :editableData="touchedData"
      :partData="touchedData"
      @update="updateEditableData"
      @hide="hideToolbox">
    </EditablePartToolbox>
    <a v-if="touchedData.href"
       :contenteditable="editMode"
       :href="touchedData.href">
      <img :style="touchedData.styles"
       :alt="touchedData.alt"
       :class="cssClass"
       :contenteditable="editMode"
       class="img-fluid editable-image-img"
       :src="touchedData.src">
    </a>
    <img v-else
         :style="touchedData.styles"
         :alt="touchedData.alt"
         :class="cssClass"
         :contenteditable="editMode"
         class="img-fluid editable-image-img"
         :src="touchedData.src"
         />
  </div>
</template>

<script>
import EditablePartMixin from '../../mixins/editablePart'
import { EventBus } from '../../events/event-bus'

export default {
  name: 'ImageEditable',
  mixins: [EditablePartMixin],
  methods: {
    setPickImageMode (e) {
      e.preventDefault()
      this.$store.dispatch('layout/setModalView', {
        name: 'extensionloader',
        extensions: ['Picsum_Samples', 'Clinet_Side_Uploader', 'StreamLine_Samples'],
        data: this.touchedData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (data) => {
        if (data) {
          this.touchedData = data
          this.updateWidget()
        }
      })
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.editable-image {
  position: relative;
  border: 0;

  .editable-image--settings-btn {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 2em;
    height: 2em;
    padding: 0;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  img {
    min-height: 1.5em;
    min-width: 1.5em;
    max-width: 100%;
    max-height: 100%;
  }

  .editable-image--toolbox {
    position: absolute;
    top: -20px;
    display: none;
    z-index: 10;
    width: 100%;
    border-radius: 10px;
    background: #333;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 15px;
    padding: 5px 0;
    .dropdown {
      position: absolute;
      display: inline-flex;
    }
  }

  input {
    &.editable-image {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      border: 3px dashed blue;
      background: none;
      width: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }

  &.edit-mode {
    outline: 3px dashed #f1f1f1;
    &:hover {
      .editable-image--toolbox {
        display: block;
      }
    }
  }
}
</style>
