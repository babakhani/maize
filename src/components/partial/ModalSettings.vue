<template>
  <b-modal
    @hidden="onHide"
    v-model="showModal"
    class="modal-setting modal-box"
    :title="$t('settings.header')">
    <div class="row" >
      <div class="col-12 col-lg-6 m-lg-auto pb-5">
        <form-wizard
          v-model="currentStep"
          @on-complete="onComplete"
          :startIndex="startIndex"
          ref="wizard"
          title=""
          subtitle=""
          stepSize="xs"
          color="#136cb0">
          <button slot="prev"></button>
          <button slot="next"></button>
          <button slot="finish"></button>
          <tab-content
            :title="$t('settings.header')">
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
          </tab-content>
          <tab-content
            :title="$t('settings.header')">
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
          </tab-content>
          <tab-content
            :title="$t('settings.header')">
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
          </tab-content>
          <tab-content
            :title="$t('settings.header')">
            <form action="#!">
              <div class="form-group">
                <label>{{ $t('settings.image') }}</label>
                <b-form-file
                  @change="setImage"
                  v-model="siteSettings.imageFile"
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
            </form>
          </tab-content>
          <tab-content
            :title="$t('settings.contact-info')">
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
          </tab-content>
          <tab-content
            :title="$t('settings.monitoring')">
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
          </tab-content>
          <tab-content
            :title="$t('settings.customCode')">
            <div class="form-group">
              <label>{{ $t('settings.customJavascript') }}</label>
              <b-form-textarea
                v-model="siteSettings.customJavascript"
                :placeholder="$t('settings.customJavascript')"
                class="ltr"
                rows="4"
                max-rows="4"
                ></b-form-textarea>
            </div>
            <div class="form-group">
              <label>{{ $t('settings.customCss') }}</label>
              <b-form-textarea
                v-model="siteSettings.customCss"
                :placeholder="$t('settings.customCss')"
                class="ltr"
                rows="4"
                max-rows="4"
                ></b-form-textarea>
            </div>
          </tab-content>
          <tab-content
            :title="$t('export')">
            <b-form-checkbox
              @change="updateSettings"
              class="mb-3"
              v-model="siteSettings.exportAddIranSansFont"
              :value="true"
              :unchecked-value="false"
              >
              {{ $t('settings.exportAddIranSansFont') }}
            </b-form-checkbox>
              <b-form-checkbox
                @change="updateSettings"
                class="mb-3"
                v-model="siteSettings.exportAddFontIranYekan"
                :value="true"
                :unchecked-value="false"
                >
                {{ $t('settings.exportAddFontIranYekan') }}
              </b-form-checkbox>
                <b-form-checkbox
                  @change="updateSettings"
                  class="mb-3"
                  v-model="siteSettings.exportAddFontIcon"
                  :value="true"
                  :unchecked-value="false"
                  >
                  {{ $t('settings.exportAddFontIcon') }}
                </b-form-checkbox>
                  <b-form-checkbox
                    @change="updateSettings"
                    class="mb-3"
                    v-model="siteSettings.exportCssSingleFile"
                    :value="true"
                    :unchecked-value="false"
                    >
                    {{ $t('settings.exportCssSingleFile') }}
                  </b-form-checkbox>
                    <b-form-checkbox
                      @change="updateSettings"
                      class="mb-3"
                      v-model="siteSettings.exportJavascriptSingleFile"
                      :value="true"
                      :unchecked-value="false"
                      >
                      {{ $t('settings.exportJavascriptSingleFile') }}
                    </b-form-checkbox>
                      <ExportBox></ExportBox>
          </tab-content>
        </form-wizard>
      </div>
    </div>
    <template
      slot="modal-footer" >
      <b-button
        class="float-left"
        @click="onBack"
        variant="outline-primary">
        {{ $t('modal.previews') }}
      </b-button>
      <b-button
        class="float-left"
        @click="onOk"
        variant="outline-primary">
        {{ $t('modal.next') }}
      </b-button>
      <b-button
        class="float-right"
        @click="onHide"
        variant="outline-secandry">
        {{ $t('modal.cancel') }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import ExportBox from './ExportBox'
export default {
  name: 'ModalSettings',
  data () {
    return {
      startIndex: 7,
      currentStep: '',
      siteSettings: {},
      pickedLinkSrc: null
    }
  },
  components: { ExportBox },
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
      this.$refs['wizard'].nextTab()
    },
    updateSettings () {
      this.$store.dispatch('main/updateSettings', this.siteSettings)
    },
    onBack () {
      this.$refs['wizard'].prevTab()
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
