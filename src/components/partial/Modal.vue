<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="modal-box"
    :title="$t('settings.header')">
    <template slot="modal-footer">
      <b-button
        @click="onHide"
        variant="outline-success"
        class="btn btn-link text-muted">
        {{ $t('modal.cancel') }}
      </b-button>
      <b-button
        @click="onOk"
        variant="success">
        {{ $t('modal.ok') }}
      </b-button>
    </template>
    <LinkPicker
        @pick="pick()"
        @pickandhide="onHide"
        v-if="modalName == 'link'"
        :pre-data="preData" />
    <IconSelector 
        @pick="pick()"
        @pickandhide="onHide"
        v-if="modalName == 'icon'"
        :pre-data="preData" />
  </b-modal>
</template>

<script>
import { EventBus } from '../../events/event-bus'
import IconSelector from './IconSelector'
import LinkPicker from './LinkPicker'

export default {
  name: 'ModalSettings',
  data () { return { } },
  components: {
    IconSelector,
    LinkPicker
  },
  methods: {
    pick () {
      console.log('modal pick method')
    },
    onHide () {
      this.$store.dispatch('layout/hideModalView')
    },
    onOk (e) {
      e.preventDefault()
      this.onHide()
      return false
    }
  },
  mounted () {
    console.log()
  },
  computed: {
    modalName () {
      return this.$store.state.layout.modalName
    },
    preData () {
      return this.$store.state.layout.modalDefaultData
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
