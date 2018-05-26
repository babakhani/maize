<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model.sync="showModal"
    size="lg"
    centered
    class="image-picker-modal"
    title="Choose Your Video:">
    <template slot="modal-footer">
      <button @click="onHide"
              class="btn btn-link text-muted">Cancel
      </button>

      <button v-if="imageUploadLoading"
              @click="onOk"
              class="btn btn-success btn-loading">OK
        <div class="btn btn-hover">
          <icon class="fa fa-spin"
                name="spinner"></icon>
        </div>

      </button>
      <button v-else
              @click="onOk"
              class="btn btn-success">OK
      </button>
    </template>
    <b-tabs card>
      <b-tab active>
        <template slot="title">
          <strong>Random Images</strong>
          <icon name="images"></icon>
        </template>

        <!--<div class="row">-->
        <!--<div class="col-12 text-center mb-4 image-picker-modal&#45;&#45;search-box">-->
        <!--<b-form-input type="text"-->
        <!--placeholder="Search Image here">-->

        <!--</b-form-input>-->
        <!--</div>-->
        <!--</div>-->
        <div class="image-picker-modal--body ">
          <div class="row">
            <div class="col-12 col-sm-3 col-md-4 col-lg-2 m-2 float-left image-picker-modal--image-container"
                 v-for="imageItem in randomImageList"
                 :class="{'image-picker-modal-selected' : pickedImageSrc == imageItem.urls.small }">
              <img
                class="image-picker-modal--img p-2"
                @click="pick(imageItem.urls.small)"
                @dblclick="pickAndHide(imageItem.urls.small)"
                :src="imageItem.urls.small">
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Upload">
        <template slot="title">
          <strong>Upload</strong>
          <icon class="upload-image-icon"
                name="upload"></icon>
        </template>
        <!--<UploadImage @chooseImage="chooseImage"></UploadImage>-->
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script>
  import {EventBus} from '../../events/event-bus'
  import UploadImage from './UploaderImage.vue'
  import ImageSaver from '../../service/image-saver'

  export default {
    name: 'VideoPickerModal',
    methods: {
      pickAndHide (imageSrc) {
        this.pickedImageSrc = imageSrc
        if (this.pickedImageSrc) {
          EventBus.$emit('pickVideo', this.pickedImageSrc)
        }
        this.showModal = false
      },
      onHide () {
        this.$store.dispatch('layout/setPickVideoMode', false)
      },
      onOk () {
        if (this.pickedImageSrc) {
          EventBus.$emit('pickVideo', this.pickedImageSrc)
        }
      },
      pick (imageSrc) {
        this.pickedImageSrc = imageSrc
      }
    },
    computed: {
      modalShowGlobalState () {
        return this.$store.state.layout.pickVideoMode
      },
      randomImageList () {
        return this.$store.state.unsplash.imageList
      }
    },
    data () {
      return {
        imageUploadLoading: false,
        showModal: false,
        pickedImageSrc: null
      }
    },
    watch: {
      modalShowGlobalState () {
        this.showModal = this.modalShowGlobalState
      }
    }
  }
</script>
