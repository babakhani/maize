<template>
  <div class="widget-block--image-editable">
    <button v-if="editMode"
            class="btn btn-link img-editable--settings-btn"
            :title="$t('toolbox.bg_settings')"
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :groups="['background', 'border']"
                           :currentStyles="styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
    </button>
    <img v-bind:style="styles"
         alt="image"
         @dblclick="setPickImageMode(true)"
         @click="setPickImageMode"
         class="img-fluid mb-3 widget-block--image-editable-img"
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
        console.log('imageUpload')
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
