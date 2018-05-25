<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model.sync="showModal"
    size="lg"
    centered
    class="image-picker-modal"
    title="Choose your pick:">
    <!--Start Modal Tab-->
    <b-tabs card>
      <b-tab active>
        <template slot="title">
          <strong>Random Images</strong>
          <icon name="images"></icon>
        </template>

        <div class="row">
          <div class="col-12 text-center mb-4 image-picker-modal--search-box">
            <b-form-input v-model="text1"
                          type="text"
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
        <UploadImage></UploadImage>
      </b-tab>
      <b-tab title="Comming soon!!"
             disabled>
        <br>Disabled tab!
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script>
  import {EventBus} from '../../events/event-bus'
  import UploadImage from './UploaderImage.vue'

  export default {
    name: 'ImagePickerModal',
      components: {UploadImage},
    methods: {
      pickAndHide(imageSrc) {
        this.pickedImageSrc = imageSrc
        if (this.pickedImageSrc) {
          EventBus.$emit('pickImage', this.pickedImageSrc)
        }
        this.showModal = false
      },
      onHide() {
        this.$store.dispatch('main/setPickImageMode', false)
      },
      onOk() {
        if (this.pickedImageSrc) {
          EventBus.$emit('pickImage', this.pickedImageSrc)
        }
      },
      pick(imageSrc) {
        this.pickedImageSrc = imageSrc
      }
    },
    computed: {
      modalShowGlobalState() {
        return this.$store.state.main.pickImageMode
      }
    },
    data() {
      return {
        showModal: false,
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
    },
    watch: {
      modalShowGlobalState() {
        this.showModal = this.modalShowGlobalState
      }
    }
  }
</script>
