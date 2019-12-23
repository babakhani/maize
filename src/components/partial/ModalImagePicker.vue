<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model="showModal"
    size="lg"
    centered
    class="image-picker-modal"
    :title="$t('choose_pic')">

    <template slot="modal-footer">
      <b-button
        @click="onHide"
        variant="outline-success"
        class="btn-link text-muted">
        {{ $t('modal.cancel') }}
      </b-button>
      <b-button v-if="imageUploadLoading"
              @click="onOk"
              variant="success"
              class="btn-loading">
        {{ $t('modal.ok') }}
        <div class="btn btn-hover">
          <icon class="fa fa-spin"
                name="spinner"></icon>
        </div>
      </b-button>
      <b-button v-else
              @click="onOk"
              variant="success">
        {{ $t('modal.ok') }}
      </b-button>
    </template>

    <!--Start Modal Tab-->
    <b-tabs card>

      <b-tab active class="py-2">
        <template slot="title">
          <icon class="upload-image-icon"
                name="images"></icon>
          <strong> {{ $t('modal.random_image') }}</strong>
        </template>
        <div class="image-picker-modal--body ">
          <div class="row px-2 py-1">
            <div class="col-6 col-sm-6 col-md-3 col-xl-3 h-100 image-picker-modal--image-container"
                 v-for="imageItem in randomImageList">
                <div
                 class="image-picker-modal--image-thumb-box"
                 @click="pick(imageItem.download_url)"
                 @dblclick="pickAndHide(imageItem.download_url)"
                 :class="{'image-picker-modal-selected' : pickedImageSrc == imageItem.download_url }">
                  <img
                    class="image-picker-modal--img p-2 w-100"
                    :src="imageItem.download_url">
                </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab class="h-100"
             title="Upload">
        <template slot="title">
          <icon class="upload-image-icon"
                name="upload"></icon>
          <strong> {{ $t('modal.upload') }}</strong>
        </template>
        <UploadImage @chooseImage="chooseImage"></UploadImage>
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script>
import { EventBus } from '../../events/event-bus'
import UploadImage from './UploaderImage.vue'
import ImageSaver from '../../service/image-saver'

export default {
  name: 'ImagePickerModal',
  components: { UploadImage },
  mounted () {
    this.$store.dispatch('unsplash/loadRandomImages')
  },
  methods: {
    chooseImage (imageSrc) {
      this.pickedImageSrc = imageSrc
    },
    pickAndHide (imageSrc) {
      this.onHide()
      this.pickedImageSrc = imageSrc
      if (this.pickedImageSrc) {
        EventBus.$emit('pickImage', this.pickedImageSrc)
      }
    },
    onHide () {
      this.$store.dispatch('layout/setPickImageMode', false)
    },
    onOk (e) {
      this.imageUploadLoading = true
      e.preventDefault()
      // This is promise example and use image uploader service
      ImageSaver(this.pickedImageSrc).then((imageSrc) => {
        this.onHide()
        EventBus.$emit('pickImage', imageSrc)
        this.imageUploadLoading = false
      }).catch(() => {
        this.imageUploadLoading = false
      })
      return false
    },
    pick (imageSrc) {
      this.pickedImageSrc = imageSrc
    }
  },
  computed: {
    randomImageList () {
      return this.$store.state.unsplash.imageList
    },
    showModal: {
      get () {
        return this.$store.state.layout.pickImageMode
      },
      set (value) {
        this.$store.dispatch('layout/setPickImageMode', value)
      }
    }
  },
  data () {
    return {
      imageUploadLoading: false,
      pickedImageSrc: null
    }
  }
}
</script>
