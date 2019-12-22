<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model="showModal"
    size="lg"
    centered
    class="video-picker-modal"
    :title=" $t('choose_video')">
    <template slot="modal-footer">
      <button @click="onHide"
              class="btn btn-link text-muted">
        {{ $t('modal.cancel') }}
      </button>
      <button v-if="imageUploadLoading"
              @click="onOk"
              class="btn btn-success btn-loading">
        {{ $t('modal.ok') }}
        <div class="btn btn-hover">
          <icon class="fa fa-spin"
                name="spinner"></icon>
        </div>
      </button>
      <button v-else
              @click="onOk"
              class="btn btn-success">
        {{ $t('modal.ok') }}
      </button>
    </template>

    <!--Start Modal Tab-->
    <b-tabs card>
      <b-tab active>
        <template slot="title">
          <!--TODO: i18n-->
          <strong> {{ $t('tamasha') }}</strong>
          <icon name="images"></icon>
        </template>
      </b-tab>

      <!--<b-tab >-->
        <!--<template slot="title">-->
          <!--<strong> {{ $t('modal.random_image') }}</strong>-->
          <!--<icon name="images"></icon>-->
        <!--</template>-->
        <!--<div class="image-picker-modal&#45;&#45;body ">-->
          <!--<div class="row">-->
            <!--<div class="col-6 col-sm-6 col-md-3 col-xl-3 h-100 image-picker-modal&#45;&#45;image-container"-->
                 <!--v-for="imageItem in randomImageList">-->
              <!--<div class="image-picker-modal&#45;&#45;image-thumb-box"-->
                   <!--@click="pick(imageItem.urls.small)"-->
                   <!--@dblclick="pickAndHide(imageItem.urls.small)"-->
                   <!--:class="{'image-picker-modal-selected' : pickedVideoSrc == imageItem.urls.small }">-->
                <!--<img-->
                  <!--class="image-picker-modal&#45;&#45;img p-2"-->
                  <!--:src="imageItem.urls.small">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
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
      chooseImage (imageSrc) {
        this.pickedVideoSrc = imageSrc
      },
      pickAndHide (imageSrc) {
        this.onHide()
        this.pickedVideoSrc = imageSrc
        if (this.pickedVideoSrc) {
          EventBus.$emit('pickVideo', this.pickedVideoSrc)
        }
      },
      onHide () {
        this.$store.dispatch('layout/setPickVideoMode', false)
      },
      onOk (e) {
        this.imageUploadLoading = true
        e.preventDefault()
        // This is promise example and use image uploader service
        ImageSaver(this.pickedVideoSrc).then((imageSrc) => {
          this.onHide()
          EventBus.$emit('pickVideo', imageSrc)
          this.imageUploadLoading = false
        }).catch(() => {
          this.imageUploadLoading = false
        })
        return false
      },
      pick (imageSrc) {
        this.pickedVideoSrc = imageSrc
      }
    },
    computed: {
      randomImageList () {
        return this.$store.state.unsplash.imageList
      },
      pickVideoType (){
        return this.$store.state.layout.pickVideoType
      },
      showModal: {
        get () {
          return this.$store.state.layout.pickVideoMode
        },
        set (value) {
          this.$store.dispatch('layout/setPickVideoMode', value)
        }
      }
    },
    data () {
      return {
        imageUploadLoading: false,
        pickedVideoSrc: null
      }
    }
  }
</script>
