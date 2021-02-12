<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="modal-setting modal-box"
    :title="$t('settings.header')">
    <form-wizard
      v-model="currentStep"
      @on-complete="onComplete"
      ref="wizard"
      title=""
      subtitle=""
      stepSize="xs"
      shape="square"
      color="#136cb0">
      <button slot="prev"></button>
      <button slot="next"></button>
      <button slot="finish"></button>
      <tab-content
        :title="$t('settings.header')">
        <div class="row" >
          <div class="col-12 col-md-6 pb-5">
            <form>
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
            </form>
          </div>
        </div>
      </tab-content>
      <tab-content
        :title="$t('settings.header')">
        <div class="row" >
          <div class="col-12 col-md-6 pb-5">
              <div class="form-group">
                <label>{{ $t('settings.favicon') }}</label>
                <b-form-file
                  @change="setFavicon"
                  v-model="siteSettings.faviconFile"
                  :placeholder="$t('settings.favicon-placeholder')"
                  :drop-placeholder="$t('settings.favicon-placeholder-drag')">
                </b-form-file>
                <img alt="image"
                     v-if="siteSettings.favicon"
                     class="mt-2 favicon-thumb"
                     :src="siteSettings.favicon"/>
              </div>
              <div class="form-group w-25">
                <label>{{ $t('settings.color') }}</label>
                <input
                  v-model="siteSettings.color"
                  type="color"
                  class="form-control">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.secureURL') }}</label>
                <input
                  v-model="siteSettings.secureURL"
                  type="text"
                  class="ltr form-control"
                  :placeholder="$t('settings.secureURL-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.type') }}</label>
                <input
                  v-model="siteSettings.type"
                  type="text"
                  class="form-control"
                  :placeholder="$t('settings.type-placeholder')">
              </div>
          </div>
        </div>
      </tab-content>
      <tab-content
        :title="$t('settings.header')">
        <div class="row" >
          <div class="col-12 col-md-6 pb-5">
              <div class="form-group">
                <label>{{ $t('settings.canonical') }}</label>
                <input
                  v-model="siteSettings.canonical"
                  type="text"
                  class="ltr form-control"
                  :placeholder="$t('settings.canonical-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.nextURL') }}</label>
                <input
                  v-model="siteSettings.nextURL"
                  type="text"
                  class="ltr form-control"
                  :placeholder="$t('settings.nextURL-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.image') }}</label>
                <b-form-file
                  @change="setImage"
                  :placeholder="$t('settings.favicon-placeholder')"
                  :drop-placeholder="$t('settings.favicon-placeholder-drag')">
                </b-form-file>
                <img alt="image"
                     v-if="siteSettings.imageFile"
                     class="mt-2 favicon-thumb"
                     :src="siteSettings.imageFile"/>
              </div>
              <div class="form-group">
                <label>{{ $t('settings.imageWidth') }}</label>
                <input
                  v-model="siteSettings.imageWidth"
                  type="text"
                  class="form-control"
                  :placeholder="$t('settings.imageWidth-placeholder')">
              </div>
          </div>
        </div>
      </tab-content>
      <tab-content
        :title="$t('settings.header')">
        <div class="row" >
          <div class="col-12 col-md-6 pb-5">
            <form action="#!">
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
                  class="ltr form-control"
                  :placeholder="$t('settings.facebookAppID-placeholder')">
              </div>
              <div class="form-group">
                <label>{{ $t('settings.twitterAccount') }}</label>
                <input
                  v-model="siteSettings.twitterAccount"
                  type="text"
                  class="ltr form-control"
                  :placeholder="$t('settings.twitterAccount-placeholder')">
              </div>
            </form>
          </div>
        </div>
      </tab-content>
      <tab-content
        :title="$t('settings.contact-info')">
        <div class="row" >
          <div class="col-12 col-md-6 pb-5">
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
                class="ltr"
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
              :label="$t('settings.contact-fax')"
              >
              <b-form-input
                type="tel"
                v-model="siteSettings.contactFax"
                :placeholder="$t('settings.contact-fax-placeholder')"
                trim>
              </b-form-input>
            </b-form-group>
          </div>
        </div>
      </tab-content>
      <tab-content
        :title="$t('settings.monitoring')">
        <div class="row" >
          <div class="col-12 col-md-6 pb-5">
            <b-form-group
              :label="$t('settings.ga')">
              <b-form-textarea
                v-model="siteSettings.gaScript"
                :placeholder="$t('settings.ga-placeholder')"
                class="ltr"
                rows="4"
                max-rows="4"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group
              :label="$t('settings.hotjar')"
              >
              <b-form-textarea
                v-model="siteSettings.hotjarScript"
                :placeholder="$t('settings.hotjar-placeholder')"
                class="ltr"
                rows="4"
                max-rows="4"
                ></b-form-textarea>
            </b-form-group>
          </div>
        </div>
      </tab-content>
    </form-wizard>
    <template slot="modal-footer">
      <b-button
        @click="onOk"
        variant="outline-primary">
        {{ $t('modal.next') }}
      </b-button>
      <b-button
        @click="onHide"
        variant="outline-link"
        class="text-muted">
        {{ $t('modal.cancel') }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalSettings',
  data () {
    return {
      currentStep: '',
      siteSettings: {},
      pickedLinkSrc: null
    }
  },
  methods: {
    onHide () {
      this.$store.dispatch('layout/setSettingsMode', false)
    },
    onComplete () {
      this.$store.dispatch('main/updateSettings', this.siteSettings)
      this.onHide()
      return false
    },
    onOk (e) {
      this.$store.dispatch('main/updateSettings', this.siteSettings)
      // e.preventDefault()
      // this.onHide()
      // return false
      this.$refs['wizard'].nextTab()
    },
    setImage (e) {
      const self = this
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (a) => {
        self.$set(this.siteSettings, 'imageFile', reader.result)
      }
    },
    setFavicon (e) {
      const self = this
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (a) => {
        self.$set(this.siteSettings, 'favicon', reader.result)
        self.siteSettings.faviconFile = []
      }
    }
  },
  mounted () {
    this.siteSettings = this._.cloneDeep(this.$store.getters['main/settings'])
  },
  watch: {
    storeSettings () {
      this.siteSettings = this.storeSettings
    }
  },
  computed: {
    storeSettings () {
      return this._.cloneDeep(this.$store.getters['main/settings'])
    },
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

<style lang="scss" >
.favicon-thumb {
  max-width: 64px;
  max-height: 64px;
}
.wizard-card-footer {
  display: none !important;
}

.wizard-tab-container {
  overflow: hidden;
}
</style>
