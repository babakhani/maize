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
              class="btn btn-link text-muted">Cancel
      </button>
      <button @click="onOk"
              class="btn btn-success"
              :class="{'btn-loading': imageUploadLoading}">OK
      </button>
    </template>

    <!--Start Modal Tab-->
    <b-tabs card>
      <b-tab active>
        <template slot="title">
          <strong>Random Images</strong>
          <icon name="images"></icon>
        </template>

        <div class="row">
          <div class="col-12 text-center mb-4 image-picker-modal--search-box">
            <b-form-input type="text"
                          placeholder="Search Image here">

            </b-form-input>
          </div>
        </div>
        <div class="image-picker-modal--body ">
          <div class="row">
            <div class="col-12 col-sm-3 col-md-4 col-lg-2 float-left image-picker-modal--image-container"
                 v-for="imageItem in fakeImagesForTest">
              <img :class="{'image-picker-modal-selected' : pickedImageSrc == imageItem }"
                   class="image-picker-modal--img p-2"
                   @click="pick(imageItem)"
                   @dblclick="pickAndHide(imageItem)"
                   :src="imageItem">
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Upload">
        <template slot="title">
          <strong>Upload</strong>
          <icon name="upload"></icon>
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
        pickedImageSrc: null,
        fakeImagesForTest: [
          'https://source.unsplash.com/user/erondu/160x90',
          'https://source.unsplash.com/collection/190727/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/user/erondu/160x90',
          'https://source.unsplash.com/collection/190727/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/1600x900/?nature,water/160x90',
          'https://source.unsplash.com/user/erondu/160x90',
          'https://source.unsplash.com/collection/190727/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/1600x900/?nature,water/160x90',
          'https://source.unsplash.com/1600x900/?nature,water/160x90',
          'https://source.unsplash.com/user/erondu/160x90',
          'https://source.unsplash.com/collection/190727/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/1600x900/?nature,water/160x90',
        ]
      }
    }
  }
</script>
