<template>
  <div class="editable-player"
       @dblclick="setPickVideoMode(true)">
    <button v-if="editMode"
            class="btn btn-link editable-player--settings-btn"
            :title="$t('toolbox.bg_settings')"
            @click.prevent.stop="showToolbox">
      <icon name="cog"></icon>
      <EditablePartToolbox @update="updateStyles"
                           :groups="['background', 'border']"
                           :currentStyles="styles"
                           v-if="editMode && toolboxVisible"
                           @hide="hideToolbox"></EditablePartToolbox>
    </button>
    <iframe :src="src"
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
