<template>
  <b-modal
    lazy
    @hidden="onHide"
    @shown="onShow"
    v-model="showModal"
    class="modal-box"
    :title="`${$t(modalName)} ${$t('settings.settings')}`">
    <template slot="modal-footer">
      <b-button
        @click="onOk"
        variant="outline-primary">
        {{ $t('modal.ok') }}
      </b-button>
      <b-button
        @click="onHide"
        class="text-muted"
        variant="outline-link">
        {{ $t('modal.cancel') }}
      </b-button>
    </template>
    <template>
      <ExtensionsLoader
        :extensions="extensions"
        @hide="saveAndHide"
        v-model="editablePartData"
        v-if="modalName == 'extensionloader'" />
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
      editablePartData: ''
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
      this.editablePartData = ''
      this.editablePartData = this._.cloneDeep(this.$store.state.layout.modalDefaultData)
      if (!this.editablePartData) {
        this.editablePartData = ''
      }
    },
    onHide () {
      this.hide()
    },
    saveAndHide (e) {
      EventBus.$emit('UPDATE_WIDGET_DATA', this.editablePartData)
      this.hide()
    },
    onOk (e) {
      EventBus.$emit('UPDATE_WIDGET_DATA', this.editablePartData)
      e.preventDefault()
      this.hide()
      return false
    }
  },
  mounted () {
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
