<template>
  <div class="editable-video editable-part"
       @dblclick="setPickVideoMode(true)">
    <button v-if="editMode"
            class="btn btn-link editable-part--settings-btn"
            :title="$t('toolbox.settings')"
            v-b-tooltip.hover.bottom.small
            @click="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :groups="['background', 'border', 'general', 'text']"
                           :currentStyles="touchedData.styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
    </button>
    <button v-if="editMode"
            class="btn btn-link editable-part--upload-btn"
            :title="$t('modal.upload')"
            v-b-tooltip.hover.bottom.small
            @click="setPickVideoMode">
      <icon name="upload"></icon>
    </button>
    <!--<input v-if="editMode" class="image&#45;&#45;editable" @change="imageUpload" type="file">-->
    <img v-bind:style="touchedData.styles"
         alt="image"
         @click="setPickVideoMode"
         class="img-fluid editable-image-img"
         :contenteditable="editMode"
         :src="touchedData.src">
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
            this.touchedData.src = imageSrc
            this.updateWidget()
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
