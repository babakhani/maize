<template>
  <div>
    <div class="row px-2 py-1">
      <div class="col-12">
        <b-input-group
          size="md"
          class="w-100 my-3" >
          <b-form-input
            v-model="pickedImageSrc"></b-form-input>
          <b-input-group-append>
            <b-button
            variant="outline-primary"
            @click="pickAndHide(pickedImageSrc)">
              {{ $t('load_url') }}
            </b-button>
            <b-button
            variant="danger"
            @click="pickAndHide(null)">
              {{ $t('delete') }}
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
    <b-tabs
      class="mazie-tabs"
      v-model="getDefaultTabIndex"
      card>
      <b-tab
        class="py-2">
        <template slot="title">
          <icon class="upload-image-icon"
                name="images"></icon>
          <strong> {{ $t('modal.random_image') }}</strong>
        </template>
        <div class="row px-2 py-1">
          <div class="col-6 col-sm-6 col-md-3 col-xl-3 mb-3 image-picker--image-container"
               :key="imageItem"
               v-for="imageItem in randomImageList">
            <div
              class="image-picker--image-thumb-box"
              @click="pick(imageItem)"
              @dblclick="pickAndHide(imageItem)"
              :class="{'selected' : pickedImageSrc == imageItem }">
              <img
                class="image-picker-modal--img p-2 w-100"
                :src="imageItem">
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab
        class="py-2">
        <template slot="title">
          <icon class="upload-image-icon"
                name="images"></icon>
          <strong> {{ $t('modal.upload') }}</strong>
        </template>
        <UploadImage @chooseImage="chooseImage"></UploadImage>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import UploadImage from './UploaderImage.vue'

export default {
  name: 'ImagePickerModal',
  components: { UploadImage },
  data () {
    return {
      pickedImageSrc: null
    }
  },
  mounted () {
    this.pickedImageSrc = this.value
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    chooseImage (e) {
      this.pickAndHide(e)
    },
    pickAndHide (pickedImageSrc) {
      this.pickedImageSrc = pickedImageSrc
      this.$emit('input', pickedImageSrc)
      this.$emit('hide')
    },
    pick (pickedImageSrc) {
      this.pickedImageSrc = pickedImageSrc
      this.$emit('input', pickedImageSrc)
    }
  },
  computed: {
    getDefaultTabIndex: {
      set () {

      },
      get () {
        return (this.pickedImageSrc && this.pickedImageSrc.indexOf('imgur.com')) >= 0 ? 1 : 0
      }
    },
    randomImageList () {
      return this.$store.state.unsplash.imageList
    }
  }
}
</script>
