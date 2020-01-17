<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="modal-setting modal-box"
    :title="$t('export')">
    <template slot="modal-footer">
      <b-button
        @click="onHide"
        variant="outline-link"
        class="text-muted">
        {{ $t('modal.cancel') }}
      </b-button>
      <b-button
        @click="onOk"
        variant="success">
        {{ $t('modal.ok') }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalExport',
  data () {
    return {
      siteSettings: {
        title: 'Main'
      },
      pickedLinkSrc: null
    }
  },
  methods: {
    onHide () {
      this.$store.dispatch('layout/setExportMode', false)
    },
    onOk (e) {
      e.preventDefault()
      this.onHide()
      this.$store.dispatch('main/updateSettings', this.siteSettings)
      return false
    }
  },
  mounted () {
    this.siteSettings = this._.cloneDeep(this.$store.getters['main/settings'])
  },
  computed: {
    randomImageList () {
      return this.$store.state.unsplash.imageList
    },
    showModal: {
      get () {
        return this.$store.state.layout.exportMode
      },
      set (value) {
        this.$store.dispatch('layout/setExportMode', value)
      }
    }
  }
}
</script>
