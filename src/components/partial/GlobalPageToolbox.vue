<!-- Fixed navbar -->
<template>
  <header class="page-toolbox bg-dark rtl"
          data-block-type="headers"
          data-id="2">
      <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse"
             id="navbarNav13">

          <ul class="navbar-nav float-right ml-auto pr-0">
            <li class="nav-item mr-lg-3">
              <a class="nav-link"
                 :title="$t('preview_mode')"
                 v-b-tooltip.hover.bottom.small
                 href="#">
                <label class="switch">
                  <input @change="setPreviewMode"
                         :checked="previewMode"
                         type="checkbox">
                  <span class="slider round"></span>
                </label>
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
                 :title="$t('mobile')"
                 @click="setMobilePreviewMode">
                <icon name="mobile-alt"></icon>
              </a>
            </li>
            <li 
              v-if="previewMode"
              class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('tablet')"
                 @click="setTabletPreviewMode">
                <icon name="tablet-alt"></icon>
              </a>
            </li>
            <li 
              v-if="previewMode"
              class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('desktop')"
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
            <a class="navbar-brand" href="#">{{ $t('maize') }}</a>
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
      this.$store.dispatch('layout/setPreviewMode', e.target.checked)
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
