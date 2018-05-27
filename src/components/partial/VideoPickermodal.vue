<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model="showModal"
    size="lg"
    centered
    class="image-picker-modal"
    title="Choose your video:">
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
            <div v-for="imageItem in fakeVideosForTest"

                 @click="pick(imageItem)"
                 class="col col-12 col-sm-6 col-md-3 col-xl-4 m-1 h-100 image-picker-modal--image-container">
              <img :src="imageItem"
                class="image-picker-modal--img p-2">
            </div>
          </div>
        </div>
      </b-tab>
      <!--<b-tab class="h-100" title="Upload">-->
      <!--<template slot="title">-->
      <!--<strong> {{ $t('modal.upload') }}</strong>-->
      <!--<icon class="upload-image-icon" name="upload"></icon>-->
      <!--</template>-->
      <!--<UploadImage @chooseImage="chooseImage"></UploadImage>-->
      <!--</b-tab>-->
      <!--<b-tab title="Comming soon!!"-->
      <!--disabled>-->
      <!--<br>Disabled tab!-->
      <!--</b-tab>-->
    </b-tabs>
  </b-modal>
</template>

<script>
  import {EventBus} from '../../events/event-bus'
  import ImageSaver from '../../service/image-saver'

  export default {
    name: 'VideoPickerModal',

    methods: {
      pick(imageSrc) {
        this.currentChoosedImage = imageSrc
      },

      onHide() {
        this.$store.dispatch('layout/setPickVideoMode', false)
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
    },
    computed: {
      showModal: {
        get() {
          return this.$store.state.layout.pickVideoMode
        },
        set(value) {
          this.$store.dispatch('layout/setPickVideoMode', value)
        }
      }
    },
    data() {
      return {
        imageUploadLoading: false,
        currentChoosedImage: null,
        fakeVideosForTest: [
          'https://source.unsplash.com/user/erondu/160x90',
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
