<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model="showModal"
    size="lg"
    centered
    class="image-picker-modal modal-box"
    title="Choose your pick:">
    <h1> this is settings modal</h1>

    <!--<template slot="modal-footer">-->
      <!--<button @click="onHide"-->
              <!--class="btn btn-link text-muted">-->
        <!--{{ $t('modal.cancel') }}-->
      <!--</button>-->
      <!--<button-->
              <!--@click="onOk"-->
              <!--class="btn btn-success">-->
        <!--{{ $t('modal.ok') }}-->
      <!--</button>-->
    <!--</template>-->

    <!--&lt;!&ndash;Start Modal Tab&ndash;&gt;-->
    <!--<b-tabs card>-->
      <!--<b-tab active>-->
        <!--<template slot="title">-->
          <!--<strong> {{ $t('modal.pick_link') }}</strong>-->
          <!--<icon class="upload-image-icon"-->
                <!--name="images"></icon>-->
        <!--</template>-->
        <!--<b-form-input type="text"-->
                      <!--v-model="pickedLinkSrc" placeholder="Insert your link">-->
        <!--</b-form-input>-->
      <!--</b-tab>-->
    <!--</b-tabs>-->

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
