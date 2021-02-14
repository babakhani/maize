<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="modal-setting modal-box"
    :title="$t('import')">
    <template slot="modal-footer">
      <b-button
        @click="onOk"
        variant="outline-primary">
        {{ $t('modal.ok') }}
      </b-button>
      <b-button
        @click="onHide"
        variant="outline-link"
        class="text-muted">
        {{ $t('modal.cancel') }}
      </b-button>
    </template>
    <b-alert
      show
      class="m-5"
      variant="success"
      v-if="pageJson && pageJson.widgets && pageJson.settings">
      {{ $t('messages.ready_to_import') }}
    </b-alert>
    <div
      v-else
      class="upload-image-widget p-5 m-2">
      <div>
        <h1>
          <icon class="upload-image-widget--icon"
                size="lg"
                name="upload"></icon>
        </h1>
        <button class="btn btn-lg btn-link">
        <h4 class="mt-4 p-2">
          {{ $t('modal.drop_maize_json') }}
          {{ $t('modal.or') }}
          <span>{{ $t('modal.choose_file') }}</span>
        </h4>
        </button>
      </div>
      <input
        @change="onFileUpload"
        type="file"/>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalImport',
  data () {
    return {
      pageJson: false
    }
  },
  methods: {
    onFileUpload (e) {
      const self = this
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
          self.updatePage(e.target.result)
        }
        reader.readAsText(e.target.files[0])
      }
    },
    updatePage (objJsonStr) {
      this.pageJson = JSON.parse(objJsonStr)
    },
    onHide () {
      this.$store.dispatch('layout/setImportMode', false)
    },
    onOk (e) {
      e.preventDefault()
      if (this.pageJson) {
        this.$store.dispatch('main/updateSettings', this.pageJson.settings)
        this.$store.dispatch('main/updateCurrentWidgetList', this.pageJson.widgets)
      }
      this.pageJson = false
      this.onHide()
      return false
    }
  },
  computed: {
    showModal: {
      get () {
        return this.$store.state.layout.importMode
      },
      set (value) {
        this.$store.dispatch('layout/setImportMode', value)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.image-uploader-tab {
  height: calc(100% - 160px);
}
.upload-image-widget {
  position: relative;
  border: 2px dashed #cccccc;
  color: #bfbfbf;
  background: #f8f8f8;
  //padding: 5%;
  height: 100%;
  overflow: auto;
  text-align: center;
  .upload-image-widget--empty-state {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  span,
  h4,
  h6 {
    color: #777;
  }
  button {
    position: relative;
    cursor: pointer !important;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer !important;
  }

  .upload-image-widget--box {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 56.25%;
    @media (min-width: 1024px) {
      padding-top: 30%;
      height: 100%;
      top: 0;
    }
  }
  .upload-image-widget--box--image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
    max-width: 100%;
    bottom: 0;
    right: 0;
    text-align: center;
    font-size: 20px;
    color: white;
    display: block;
    opacity: 1;
    &.upload-image-widget--default {
      opacity: 0;
    }
  }
  svg {
    &.upload-image-widget--icon {
      width: 100px;
      height: 2.2em;
    }
  }
}
</style>
