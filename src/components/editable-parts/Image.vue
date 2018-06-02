<template>
  <div class="editable-image editable-part"
       @dblclick="setPickImageMode(true)">
    <button v-if="editMode"
            class="btn btn-link editable-part--settings-btn"
            :title="$t('toolbox.settings')"
            v-b-tooltip.hover.bottom.small
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :groups="['background', 'border', 'general', 'text']"
                           :currentStyles="styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
    </button>
    <img :style="styles"
         alt="image"
         :contenteditable="editMode"
         @click="setPickImageMode"
         class="img-fluid mb-3 editable-image-img"
         :src="src">
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'
  import {EventBus} from '../../events/event-bus'

  export default {
    name: 'ImageEditable',
    mixins: [EditablePartMixin],
    methods: {
      setPickImageMode (noCheckState) {
        this.goToEditMode()
        if (this.editMode || noCheckState == true) {
          this.$store.dispatch('layout/setPickImageMode', true)
          EventBus.$once('pickImage', (imageSrc) => {

            console.log('image editable pickImage')
            this.updateData({
              name: this.name,
              data: {
                src: imageSrc
              }
            })
          })
        }
      },
      imageUpload (e) {
        const $img = $(e.target).next('img')
        if (e.target.files && e.target.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $img.attr('src', e.target.result);
          }
          reader.readAsDataURL(e.target.files[0]);
        }
      }
    }
  }
</script>
