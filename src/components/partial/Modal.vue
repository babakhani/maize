<template>
  <b-modal
    :data="widgetDataTrigger"
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
    <AnimatePicker
        @hide="hide"
        v-model="widgetData.animate"
        v-if="modalName == 'animate'" />
    <TextPicker
        @hide="hide"
        v-model="widgetData.text"
        v-if="modalName == 'text'" />
    <MapPicker
        v-model="widgetData.frameSrc"
        v-if="modalName == 'map'" />
    <LinkPicker
        v-model="widgetData.href"
        v-if="modalName == 'link'" />
    <ImagePicker
        v-model="widgetData"
        v-if="modalName == 'image'"
        @hide="hide" />
    <IconPicker
        v-model="widgetData.iconName"
        v-if="modalName == 'icon'"
        @hide="hide" />
  </b-modal>
</template>

<script>
import { EventBus } from '../../events/event-bus'
import IconPicker from './IconPicker'
import LinkPicker from './LinkPicker'
import ImagePicker from './ImagePicker'
import MapPicker from './MapPicker'
import TextPicker from './TextPicker'
import AnimatePicker from './AnimatePicker'

export default {
  name: 'PickersModal',
  data () {
    return {
      widgetData: null
    }
  },
  components: {
    AnimatePicker,
    TextPicker,
    MapPicker,
    ImagePicker,
    IconPicker,
    LinkPicker
  },
  methods: {
    hide () {
      EventBus.$emit('UPDATE_WIDGET_DATA', this.widgetData)
      this.showModal = false
    },
    onShow () {
      this.$store.dispatch('layout/modalEscKeyReserved', true)
    },
    onHide () {
      this.$store.dispatch('layout/modalEscKeyReserved', false)
      this.$store.dispatch('layout/hideModalView')
      EventBus.$emit('UPDATE_WIDGET_DATA', this.widgetData)
    },
    onOk (e) {
      EventBus.$emit('UPDATE_WIDGET_DATA', this.widgetData)
      e.preventDefault()
      this.onHide()
      return false
    }
  },
  computed: {
    widgetDataTrigger () {
      /* eslint-disable */
      this.widgetData = this._.cloneDeep(this.$store.state.layout.modalDefaultData)
      /* eslint-enable */
      return this.widgetData
    },
    modalName () {
      return this.$store.state.layout.modalName
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
