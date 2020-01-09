<!-- Fixed navbar -->
<template>
  <header class="page-toolbox bg-dark rtl"
          data-block-type="headers"
          data-id="2">
      <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse"
             id="navbarNav13">

          <ul class="navbar-nav float-right ml-auto pr-0">
            <li class="pointer nav-item mr-lg-3 pr-0">
              <a class=" nav-link px-0"
                 :title="previewMode ? $t('toolbox.edit') : $t('preview_mode')"
                 @click="setPreviewMode"
                 v-b-tooltip.hover.bottom.small
                 href="#">
                <b-form-checkbox
                 v-model="checked"
                 name="check-button"
                 switch
                 size="lg"
                 @change="setPreviewMode">
                  <span>
                    {{ previewMode ? $t('toolbox.edit') : $t('toolbox.preview') }}
                  </span>
                </b-form-checkbox>
              </a>
            </li>
            <li 
              v-if="!previewMode"
              class="nav-item mr-lg-3">
              <a :title="$t('toolbox.settings')"
                 v-b-tooltip.hover.top.small
                 class="nav-link"
                 @click="goToSettingsMode">
                <icon name="cog"></icon>
              </a>
            </li>
            <li 
              v-if="!previewMode"
              class="nav-item mr-lg-3">
              <a :title="$t('add_widget')"
                 v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 @click="goToAddWidgetMode">
                <icon name="plus-square"></icon>
              </a>
            </li>
            <li 
              v-if="previewMode"
              class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('export')"
                 @click="exportPage">
                <icon name="download"></icon>
              </a>
            </li>
            <li 
              v-if="!previewMode"
              class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('toolbox.undo')"
                 @click="undo">
                <icon name="undo"></icon>
              </a>
            </li>
            <li 
              v-if="!previewMode"
              class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('toolbox.redo')"
                 @click="redo">
                <icon name="redo"></icon>
              </a>
            </li>
            <li 
              v-if="previewMode"
              class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('toolbox.mobile')"
                 @click="setMobilePreviewMode">
                <icon name="mobile-alt"></icon>
              </a>
            </li>
            <li 
              v-if="previewMode"
              class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('toolbox.tablet')"
                 @click="setTabletPreviewMode">
                <icon name="tablet-alt"></icon>
              </a>
            </li>
            <li 
              v-if="previewMode"
              class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('toolbox.desktop')"
                 @click="setDesktopPreviewMode">
                <icon name="desktop"></icon>
              </a>
            </li>
            <!--<li -->
              <!--class="nav-item mr-lg-3">-->
              <!--<a v-b-tooltip.hover.bottom.small-->
                 <!--class="nav-link"-->
                 <!--:title="$t('language')"-->
                 <!--@click="toggleLanguage">-->
                <!--<icon name="language"></icon>-->
              <!--</a>-->
            <!--</li>-->
          </ul>
          <div class="nav-item float-left position-relative maize-brand">
            <!--<a class="navbar-brand" href="#">{{ $t('maize') }}</a>-->
            <a class="navbar-brand" href="#">
              <img src="imgs/img_logo.png" style="height: 32px;" />
            </a>
            <!--<a :title="$t('add_widget')"
               v-b-tooltip.hover.bottom.small
               class="nav-link"
               @click="goToAddWidgetMode">
               Maze
               <img class="position-absolute w-100 h-100"
               src="/static/imgs/customers/intel.svg">-->
            </a>
          </div>
        </div>
      </nav>
  </header>
</template>
<script>
import {EventBus} from '@/events/event-bus.js'
export default {
  name: 'PageToolbax',
  data() {
    return {
      checked: false
    }
  },
  methods: {
    goToAddWidgetMode () {
      this.$store.dispatch('layout/setAddWidgetMode', true)
    },
    toggleLanguage () {
      if (this.currentLocale == 'fa') {
        this.$store.dispatch('locale/changeLang', 'en')
      } else {
        this.$store.dispatch('locale/changeLang', 'fa')
      }
    },
    undo () {
      this.$store.dispatch('undo')
    },
    redo () {
      this.$store.dispatch('redo')
    },
    setPreviewMode (e) {
      this.checked= !this.checked
      this.$store.dispatch('layout/setPreviewMode', this.checked)
      this.checked
    },
    setMobilePreviewMode () {
      this.$store.dispatch('layout/setPreviewModeSize', 'phone')
    },
    setTabletPreviewMode () {
      this.$store.dispatch('layout/setPreviewModeSize', 'tablet')
    },
    setDesktopPreviewMode () {
      this.$store.dispatch('layout/setPreviewModeSize', 'desktop')
    },
    gotToAddWidgetMode () {
      this.$store.dispatch('layout/setAddWidgetMode', true)
    },
    exportPage () {
      // this.$store.dispatch('exportPage/exportPage', true)
      EventBus.$emit('downloadHtml')
    },
    goToSettingsMode () {
      this.$store.dispatch('layout/setSettingsMode', true)
    }
  },
  computed: {
    currentLocale () {
      return this.$store.state.locale.currentLocale
    },
    previewMode () {
      return this.$store.state.layout.previewMode
    },
    mobilePreviewMode () {
      return this.$store.state.layout.mobilePreviewMode
    },
    tabletPreviewMode () {
      return this.$store.state.layout.tabletPreviewMode
    },
    autosaveStatus: function () {
      return this.status;
    }
  }
}
</script>
