<template>
  <div class="editable-player editable-part"
       @dblclick="setPickVideoMode(true)">
    <button v-if="editMode"
            class="btn btn-link editable-part--settings-btn"
            :title="$t('toolbox.bg_settings')"
            @click.prevent.stop="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :groups="['background', 'border', 'general']"
                           :currentStyles="styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
    </button>
    <button v-if="editMode"
            class="btn btn-link editable-part--upload-btn"
            :title="$t('toolbox.bg_settings')"
            @click="setPickVideoMode">
      <icon name="upload"></icon>
    </button>
    <iframe :src="src"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            :style="styles"
            @click.self="setPickVideoMode"
            :contenteditable="editMode"
            frameborder="0"></iframe>
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
          this.$store.dispatch('layout/setPickVideoType', 'embed')
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
