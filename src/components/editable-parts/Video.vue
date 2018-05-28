<template>
  <div class="editable-video"
       @dblclick="setPickVideoMode(true)">
    <button v-if="editMode"
            class="btn btn-link editable-video--settings-btn"
            :title="$t('toolbox.bg_settings')"
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :groups="['background', 'border']"
                           :currentStyles="styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
    </button>
    <!--<input v-if="editMode" class="image&#45;&#45;editable" @change="imageUpload" type="file">-->
    <img v-bind:style="styles"
         alt="image"
         @click="setPickVideoMode"
         class="img-fluid mb-3 editable-image-img"
         :contenteditable="editMode"
         :src="src">
  </div>
</template>
<script>
  import EditablePartMixin from '../../mixins/editablePart'
  import {EventBus} from '../../events/event-bus'

  export default {
    name: 'VideoEditable',
    mixins: [EditablePartMixin],
    methods: {
      setPickVideoMode (noCheckState) {
        if (this.editMode || noCheckState == true) {
          this.$store.dispatch('layout/setPickVideoMode', true)
          this.$store.dispatch('layout/setPickVideoType', 'thumb')
          EventBus.$once('pickVideo', (imageSrc) => {
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
