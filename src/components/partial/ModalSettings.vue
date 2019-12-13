<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="site-settings-modal modal-box"
    :title="$t('settings.header')">
    <template slot="modal-footer">
      <button @click="onHide"
              class="btn btn-link text-muted">
        {{ $t('modal.cancel') }}
      </button>
      <button
              @click="onOk"
              class="btn btn-success">
        {{ $t('modal.ok') }}
      </button>
    </template>
    <div class="row" >
      <div class="col-12 col-md-6">
        <form action="#!">
          <div class="form-group">
            <label>{{ $t('settings.tittle') }}</label>
            <input type="text" id="tittle" class="form-control"
              :placeholder="$t('settings.tittle-placeholder')">
          </div>
          <div class="form-group">
            <label>{{ $t('settings.description') }}</label>
            <input type="email" id="description" class="form-control"
              :placeholder="$t('settings.description-placeholder')">
          </div>
          <div class="form-group">
            <label>{{ $t('settings.type') }}</label>
            <input type="text" id="type" class="form-control" 
              :placeholder="$t('settings.type-placeholder')">
          </div>
          <div class="form-group">
            <label>{{ $t('settings.twitter-account') }}</label>
            <input type="text" id="twitter" class="form-control"
              :placeholder="$t('settings.twitter-placeholder')">
          </div>
          <div class="form-group">
            <label>{{ $t('settings.instagram-account') }}</label>
            <input type="text" id="instagram" class="form-control"
              :placeholder="$t('settings.instagram-placeholder')">
          </div>

          <div class="form-group">
            <label>{{ $t('settings.canonical') }}</label>
            <input type="text" id="canonical" class="form-control"
              :placeholder="$t('settings.canonical-placeholder')">
          </div>

          <div class="form-group">
            <label>{{ $t('settings.logo-url') }}</label>
            <input type="text" id="logo" class="form-control"
              :placeholder="$t('settings.logo-placeholder')">
          </div>

          <div class="form-group">
            <label>{{ $t('settings.banner-url') }}</label>
            <input type="text" id="banner" class="form-control"
              :placeholder="$t('settings.banner-placeholder')">
          </div>

          <div class="form-group w-25">
            <label>{{ $t('settings.banner-color') }}</label>
            <input type="color" id="colorPicker" class="form-control"
              :placeholder="$t('settings.color-placeholder')">
          </div>
        </form>
      </div>
    </div>
  </b-modal>
</template>

<script>
  import {EventBus} from '../../events/event-bus'
  import UploadImage from './UploaderImage.vue'
  import ImageSaver from '../../service/image-saver'


  export default {
    name: 'ModalSettings',
    components: {UploadImage},
    methods: {
      onHide () {
        this.$store.dispatch('layout/setSettingsMode', false)
      },
      onOk (e) {
        e.preventDefault()
        this.onHide()
        return false
      }
    },
    computed: {
      randomImageList () {
        return this.$store.state.unsplash.imageList
      },
      showModal: {
        get () {
          return this.$store.state.layout.settingsMode
        },
        set (value) {
          this.$store.dispatch('layout/setSettingsMode', value)
        }
      }
    },
    data () {
      return {
        pickedLinkSrc: null
      }
    }
  }
</script>
