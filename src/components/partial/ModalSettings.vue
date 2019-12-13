<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model="showModal"
    size="lg"
    centered
    class=" add-widget-box"
    id="settings-padding"
    title="Site Settings">
    <form class="p-3" action="#!">
      <p class="d-block m-1 mb-2 h6">Tittle</p>
      <input type="text" id="tittle" class="d-inline form-control mb-3"
      placeholder="Maize">

      <p class="d-block m-1 mb-2 h6">Description</p>
      <input type="email" id="description" class="form-control mb-3"
      placeholder="An awesome landing page">

      <p class="d-block m-1 mb-2 h6">Type</p>
      <input type="text" id="type" class="d-inline form-control mb-3" 
      placeholder="e.g. Splash page">

      <p class="d-block m-1 mb-2 h6">Twitter account</p>
      <input type="text" id="twitter" class="d-inline form-control mb-3"
      placeholder="@Example">

      <p class="d-block m-1 mb-2 h6">Instagram account</p>
      <input type="text" id="instagram" class="d-inline form-control mb-3"
      placeholder="@Example">

      <p class="d-block m-1 mb-2 h6">Canonical</p>
      <input type="text" id="canonical" class="d-inline form-control mb-3"
      placeholder="Canonical">

      <p class="d-block m-1 mb-2 h6">Logo url</p>
      <input type="text" id="logo" class="d-inline form-control mb-3"
      placeholder="http://www.example.com">

      <p class="d-block m-1 mb-2 h6">Banner url</p>
      <input type="text" id="banner" class="d-inline form-control mb-3"
      placeholder="http://www.example.com">

      <p class="d-block m-1 mb-2 h6">Brand color</p>
      <input type="color" id="colorPicker" class="p-0 w-5 form-control mb-3"
      placeholder="Choose a color">
    </form>
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
        // e.preventDefault()
        // this.onHide()
        // EventBus.$emit('pickLink', this.pickedLinkSrc)
        // return false
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
