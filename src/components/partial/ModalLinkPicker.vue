<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model="showModal"
    size="lg"
    centered
    class="image-picker-modal modal-box"
    :title="$t('modal.link.title')">
    <template slot="modal-footer">
      <b-button
              @click="onHide"
              variant="outline-success"
              class="btn-link text-muted">
        {{ $t('modal.cancel') }}
      </b-button>
      <b-button
              variant="success"
              @click="onOk">
        {{ $t('modal.ok') }}
      </b-button>
    </template>
    <!--Start Modal Tab-->
    <b-tabs card>
      <b-tab active>
        <template slot="title">
          <icon class="upload-image-icon"
                name="images"></icon>
          <strong> {{ $t('modal.pick_link') }}</strong>
        </template>
        <b-form-input type="text"
                      v-model="pickLinkCurrent"
                      :placeholder="$t('insert_link')">
        </b-form-input>
      </b-tab>
    </b-tabs>

  </b-modal>
</template>

<script>
import { EventBus } from '../../events/event-bus'
import UploadImage from './UploaderImage.vue'
import ImageSaver from '../../service/image-saver'

export default {
  name: 'LinkPickerModal',
  components: { UploadImage },
  methods: {
    onHide () {
      this.$store.dispatch('layout/setPickLinkMode', false)
    },
    onOk (e) {
      e.preventDefault()
      EventBus.$emit('pickLink', this.pickLinkCurrent)
      this.onHide()
      return false
    }
  },
  computed: {
    randomImageList () {
      return this.$store.state.unsplash.imageList
    },
    pickLinkCurrent: {
      get () {
        return this.$store.state.layout.pickLinkCurrent
      },
      set (value) {
        this.$store.dispatch('layout/setPickLinkCurrent', value)
      }
    },
    showModal: {
      get () {
        return this.$store.state.layout.pickLinkType
      },
      set (value) {
        this.$store.dispatch('layout/setPickLinkMode', value)
      }
    }
  }
}
</script>
