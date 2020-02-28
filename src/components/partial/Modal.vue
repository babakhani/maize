<template>
  <b-modal
    @hidden="onHide"
    @shown="onShow"
    v-model="showModal"
    class="modal-box"
    :title="`${$t(modalName)} ${$t('settings.settings')}`">
    <template slot="modal-footer">
      <b-button
        @click="onHide"
        class="text-muted"
        variant="outline-link">
        {{ $t('modal.cancel') }}
      </b-button>
      <b-button
        @click="onOk"
        variant="success">
        {{ $t('modal.ok') }}
      </b-button>
    </template>
    <template v-if="editablePartData">
      <ExtensionsLoader
        :extensions="extensions"
        @hide="hide"
        v-model="editablePartData"
        v-if="modalName == 'extensionloader' && editablePartData" />
    </template>
  </b-modal>
</template>

<script>
import { EventBus } from '../../events/event-bus'
import ExtensionsLoader from './ExtensionsLoader'

export default {
  name: 'PickersModal',
  data () {
    return {
      editablePartData: null
    }
  },
  components: {
    ExtensionsLoader
  },
  methods: {
    hide () {
      this.showModal = false
    },
    onShow () {
      this.$store.dispatch('layout/modalEscKeyReserved', true)
      this.editablePartData = null
      this.editablePartData = this._.cloneDeep(this.$store.state.layout.modalDefaultData)
    },
    onHide () {
      this.$store.dispatch('layout/modalEscKeyReserved', false)
      this.$store.dispatch('layout/hideModalView')
    },
    onOk (e) {
      EventBus.$emit('UPDATE_WIDGET_DATA', this.editablePartData)
      e.preventDefault()
      this.onHide()
      return false
    }
  },
  computed: {
    modalName () {
      return this.$store.state.layout.modalName
    },
    extensions () {
      return this.$store.state.layout.modalExtensions
    },
    showModal: {
      get () {
        return this.$store.state.layout.modalIsVisible
      },
      set (value) {
        this.$store.dispatch('layout/hideModalView')
      }
    }
  }
}
</script>
