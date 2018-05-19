<template>
  <div class="widget-block--image-editable" @click="showToolbox">
    <EditablePartToolbox :styles="styles" v-if="toolboxVisible" @hide="hideToolbox"></EditablePartToolbox>
    <!--<input v-if="editMode" class="image&#45;&#45;editable" @change="imageUpload" type="file">-->
    <img v-bind:style="styles" alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'

  export default {
    name: 'ImageEditable',
    mixins: [EditablePartMixin],
    methods: {
      toggleEditMode() {
        this.editMode = !this.editMode
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
      },
      updateColor(e) {
        this.styles['border-color'] = e.target.value
      },
      setSize(size) {
        this.styles['border'] = size
      }
    },
    props: {
      editMode: {
        default: false
      }
    },
  }
</script>
