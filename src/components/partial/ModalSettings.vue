<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="site-settings-modal modal-box"
    title="Site Settings">
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
            <label >Title</label>
            <input type="text" id="tittle" class="form-control"
              placeholder="Maize">
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="email" id="description" class="form-control"
              placeholder="An awesome landing page">
          </div>
          <div class="form-group">
            <label>Type</label>
            <input type="text" id="type" class="form-control" 
              placeholder="e.g. Splash page">
          </div>
          <div class="form-group">
            <label>Twitter account</label>
            <input type="text" id="twitter" class="form-control"
              placeholder="@example">
          </div>
          <div class="form-group">
            <label>Instagram account</label>
            <input type="text" id="instagram" class="form-control"
              placeholder="@example">
          </div>

          <div class="form-group">
            <label>Canonical</label>
            <input type="text" id="canonical" class="form-control"
              placeholder="Canonical">
          </div>

          <div class="form-group">
            <label>Logo URL</label>
            <input type="text" id="logo" class="form-control"
              placeholder="http://www.example.com">
          </div>

          <div class="form-group">
            <label>Banner URL</label>
            <input type="text" id="banner" class="form-control"
              placeholder="http://www.example.com">
          </div>

          <div class="form-group w-25">
            <label>Banner Color</label>
            <input type="color" id="colorPicker" class="form-control"
              Placeholder="Choose a color">
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
