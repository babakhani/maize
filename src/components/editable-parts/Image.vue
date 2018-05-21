<template>
  <div class="widget-block--image-editable" @click="showToolbox">

    <EditablePartToolbox @update="updateStyles"
                         :currentStyles="styles"
                         :groups="['background', 'border', 'general']"
                         v-if="editMode && toolboxVisible"
                         @hide="hideToolbox"></EditablePartToolbox>

    <!--<input v-if="editMode" class="image&#45;&#45;editable" @change="imageUpload" type="file">-->
    <img v-bind:style="styles" alt="image" class="img-fluid" :src="src">
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'

  export default {
    name: 'ImageEditable',
    mixins: [EditablePartMixin],
    props: {
      src: {
        default: null,
        require: false
      }
    },
    methods: {
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
