<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="modal-setting modal-box"
    :title="$t('settings.header')">
    <template slot="modal-footer">
      <b-button
        @click="onHide"
        variant="outline-link"
        class="btn btn-link text-muted">
        {{ $t('modal.cancel') }}
      </b-button>
      <b-button
        @click="onOk"
        variant="success">
        {{ $t('modal.ok') }}
      </b-button>
    </template>
    <b-tabs
      align="center"
      vertical
      pills
      no-fade
      nav-wrapper-class="w-25"
      v-if="siteSettings"
      card>
      <b-tab active>
        <template class="ml-2" slot="title">
          <strong> {{ $t('settings.header') }}</strong>
        </template>
        <div class="row" >
          <div class="col-12 col-md-6">
            <form action="#!">
              <div class="form-group">
                <label>{{ $t('settings.name') }}</label>
                <input
                   v-model="siteSettings.name"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.name-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.title') }}</label>
                <input
                   v-model="siteSettings.title"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.title-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.description') }}</label>
                <input
                  v-model="siteSettings.description"
                  type="email"
                  class="form-control"
                  :placeholder="$t('settings.description-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.language') }}</label>
                <input
                   v-model="siteSettings.language"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.language-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.favicon') }}</label>
                <input
                   v-model="siteSettings.favicon"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.favicon-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.secureURL') }}</label>
                <input
                   v-model="siteSettings.secureURL"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.secureURL-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.baseURL') }}</label>
                <input
                   v-model="siteSettings.baseURL"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.baseURL-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.type') }}</label>
                <input
                  v-model="siteSettings.type"
                  type="text"
                  class="form-control"
                  :placeholder="$t('settings.type-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.canonical') }}</label>
                <input
                  v-model="siteSettings.canonical"
                  type="text"
                  class="form-control"
                  :placeholder="$t('settings.canonical-placeholder')">
              </div>
              <div class="form-group w-25">
                <label>{{ $t('settings.color') }}</label>
                <input
                  v-model="siteSettings.color"
                  type="color"
                  class="form-control">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.nextURL') }}</label>
                <input
                   v-model="siteSettings.nextURL"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.nextURL-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.image') }}</label>
                <input
                   v-model="siteSettings.image"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.image-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.imageWidth') }}</label>
                <input
                   v-model="siteSettings.imageWidth"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.imageWidth-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.imageHeight') }}</label>
                <input
                   v-model="siteSettings.imageHeight"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.imageHeight-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.imageType') }}</label>
                <input
                   v-model="siteSettings.imageType"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.imageType-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.facebookAppID') }}</label>
                <input
                   v-model="siteSettings.facebookAppID"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.facebookAppID-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.twitterAccount') }}</label>
                <input
                   v-model="siteSettings.twitterAccount"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.twitterAccount-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.twitterCard') }}</label>
                <input
                   v-model="siteSettings.twitterCard"
                   type="text"
                   class="form-control"
                  :placeholder="$t('settings.twitterCard-placeholder')">
              </div>
            </form>
          </div>
        </div>
      </b-tab>

      <b-tab>
        <template slot="title">
          <strong> {{ $t('settings.contact-info') }}</strong>
        </template>
        <b-form-group
          :label="$t('settings.contact-address')"
          >
          <b-form-textarea
          v-model="siteSettings.contactAddress"
          :placeholder="$t('settings.contact-address-placeholder')"
          trim>
          </b-form-textarea>
        </b-form-group>
        <b-form-group
          :label="$t('settings.contact-mail')"
          >
          <b-form-input
            type="email"
            v-model="siteSettings.contactMail"
            :placeholder="$t('settings.contact-mail-placeholder')"
            trim>
          </b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('settings.contact-phone')"
          >
          <b-form-input
            type="tel"
            v-model="siteSettings.contactPhone1"
            :placeholder="$t('settings.contact-phone-placeholder')"
            trim>
          </b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('settings.contact-phone')"
          >
          <b-form-input
            type="tel"
            v-model="siteSettings.contactPhone2"
            :placeholder="$t('settings.contact-phone-placeholder')"
            trim>
          </b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('settings.contact-fax')"
          >
          <b-form-input
            type="tel"
            v-model="siteSettings.contactFax"
            :placeholder="$t('settings.contact-fax-placeholder')"
            trim>
          </b-form-input>
        </b-form-group>

      </b-tab>
      <b-tab>
        <template slot="title">
          <strong> {{ $t('settings.monitoring') }}</strong>
        </template>
        <b-form-group
          :label="$t('settings.ga')"
          >
          <b-form-textarea
            v-model="siteSettings.gaScript"
            :placeholder="$t('settings.ga-placeholder')"
            rows="3"
            max-rows="6"
            ></b-form-textarea>
        </b-form-group>
        <b-form-group
          :label="$t('settings.hotjar')"
          >
          <b-form-textarea
            v-model="siteSettings.hotjarScript"
            :placeholder="$t('settings.hotjar-placeholder')"
            rows="3"
            max-rows="6"
            ></b-form-textarea>
        </b-form-group>
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalSettings',
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
      this.$store.dispatch('layout/setSettingsMode', false)
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
    console.log()
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
  }
}
</script>
