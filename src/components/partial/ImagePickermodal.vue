<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model="showModal"
    size="lg"
    centered
    class="image-picker-modal"
    title="Choose your pick:">

    <template slot="modal-footer">
      <button @click="onHide"
              class="btn btn-link text-muted">
        {{ $t('modal.cancel') }}
      </button>
      <button v-if="imageUploadLoading" @click="onOk"
              class="btn btn-success btn-loading">
        {{ $t('modal.ok') }}
          <div class="btn btn-hover">
            <icon class="fa fa-spin" name="spinner"></icon>
          </div>
      </button>
      <button v-else @click="onOk"
              class="btn btn-success">
        {{ $t('modal.ok') }}
      </button>
    </template>

    <!--Start Modal Tab-->
    <b-tabs card>
      <b-tab active>
        <template slot="title">
          <strong> {{ $t('modal.random_image') }}</strong>
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
            <div class="col col-12 col-sm-6 col-md-3 col-xl-4 m-1 h-100 image-picker-modal--image-container"
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
      <b-tab class="h-100" title="Upload">
        <template slot="title">
          <strong> {{ $t('modal.upload') }}</strong>
          <icon class="upload-image-icon" name="upload"></icon>
        </template>
        <UploadImage @chooseImage="chooseImage"></UploadImage>
      </b-tab>
      <!--<b-tab title="Comming soon!!"-->
      <!--disabled>-->
      <!--<br>Disabled tab!-->
      <!--</b-tab>-->
    </b-tabs>
  </b-modal>
</template>

<script>
  import {EventBus} from '../../events/event-bus'
  import UploadImage from './UploaderImage.vue'
  import ImageSaver from '../../service/image-saver'

  export default {
    name: 'ImagePickerModal',
    components: {UploadImage},
    mounted() {
      this.$store.dispatch('unsplash/loadRandomImages')
    },
    methods: {
      chooseImage(imageSrc) {
        this.currentChoosedImage = imageSrc
      },
      pickAndHide(imageSrc) {
        this.onHide()
        this.pickedImageSrc = imageSrc
        if (this.pickedImageSrc) {
          EventBus.$emit('pickImage', this.pickedImageSrc)
        }
      },
      onHide() {
        this.$store.dispatch('layout/setPickImageMode', false)
      },
      onOk(e) {
        this.imageUploadLoading = true
        e.preventDefault()
        // This is promise example and use image uploader service
        ImageSaver(this.currentChoosedImage).then((imageSrc) => {
          this.onHide()
          EventBus.$emit('pickImage', imageSrc)
          this.imageUploadLoading = false
        }).catch(() => {
          this.imageUploadLoading = false
        })
        return false
      },
      pick(imageSrc) {
        this.pickedImageSrc = imageSrc
      }
    },
    computed: {
      randomImageList() {
        return this.$store.state.unsplash.imageList
      },
      showModal: {
        get() {
          return this.$store.state.layout.pickImageMode
        },
        set(value) {
          this.$store.dispatch('layout/setPickImageMode', value)
        }
      }
    },
    data() {
      return {
        imageUploadLoading: false,
        currentChoosedImage: null,
        pickedImageSrc: null
      }
    }
  }
</script>
