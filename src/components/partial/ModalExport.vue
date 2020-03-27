<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="modal-setting modal-box"
    :title="$t('export')">
    <b-form
      class="pt-4 px-5">
      <b-form-group
        id="input-group-1"
        label="Sample Export config"
        label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input
          id="input-1"
          type="email"
          required
          placeholder="Enter email" >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Sample Export config"
        label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-checkbox 
        name="check-button" 
        switch>
        </b-form-checkbox>
      </b-form-group>
    </b-form>
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
import { EventBus } from '@/events/event-bus.js'
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
      this.exportZip()
      return false
    },
    exportZip () {
      EventBus.$emit('downloadHtml')
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
