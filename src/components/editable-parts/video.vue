<template>
  <div class="widget-block--image-editable" @click="setPickVideoMode">
    <EditablePartToolbox @update="updateStyles"
                         :currentStyles="styles"
                         :groups="['background', 'border']"
                         v-if="editMode && toolboxVisible"
                         @hide="hideToolbox"></EditablePartToolbox>

    <!--<input v-if="editMode" class="image&#45;&#45;editable" @change="imageUpload" type="file">-->
    <img v-bind:style="styles" alt="image" class="img-fluid mb-3 widget-block--image-editable-img" :src="src">
    <b-modal v-if="editMode" id="modal1" title="Bootstrap-Vue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>
<script>
  import EditablePartMixin from '../../mixins/editablePart'
  import {EventBus} from '../../events/event-bus'
  export default {
    name: 'VideoEditable',
    mixins: [EditablePartMixin],
    props: {
      src: {
        default: null,
        require: false
      }
    },
    methods: {
      setPickVideoMode() {
        if (this.editMode) {
          this.$store.dispatch('main/setPickVideoMode', true)
          EventBus.$once('pickVideo', (imageSrc) => {
            this.src = imageSrc
            this.$emit('update', {
              name: this.name,
              data: {
                src: this.src
              }
            })
          })
        }
      },
      imageUpload(e) {
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
