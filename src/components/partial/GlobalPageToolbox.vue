<!-- Fixed navbar -->
<template>
  <nav class="navbar navbar-expand-md shadow-sm navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">
      <img src="imgs/img_logo.png" style="height: 32px;" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
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
             :class="{'disabled': isUndoDisabled}"
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
             :class="{'disabled': isRedoDisabled}"
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
        <li
          v-if="!previewMode"
          class="pointer nav-item mr-lg-3 pr-0">
          <div class="nav-link px-0">
            <b-form-checkbox
              class=""
              :title="$t('toolbox.widget_selector')"
              v-b-tooltip.hover.bottom.small
              v-model.sync="pageSideBarIsActive"
              name="check-button"
              switch
              size="md">
              {{ $t('toolbox.widget_selector') }}
            </b-form-checkbox>
          </div>
        </li>
        <li class="pointer nav-item mr-lg-3 pr-0" style="width: 80px">
          <a class="nav-link px-0"
             :title="previewMode ? $t('toolbox.edit') : $t('preview_mode')"
             @click="setPreviewMode"
             v-b-tooltip.hover.bottom.small
             href="#">
            <b-form-checkbox
              class=""
              v-model="checked"
              name="check-button"
              switch
              size="md"
              @change="setPreviewMode">
              {{ previewMode ? $t('toolbox.edit') : $t('toolbox.preview') }}
            </b-form-checkbox>
          </a>
        </li>
        <li
          class="nav-item mr-lg-3">
          <a :title="$t('toolbox.settings')"
          v-b-tooltip.hover.top.small
          class="nav-link"
          @click="goToSettingsMode">
            <icon name="cog"></icon>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { EventBus } from '@/events/event-bus.js'
export default {
  name: 'PageToolbax',
  data () {
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
      this.$root.$emit('bv::hide::tooltip')
    },
    redo () {
      this.$store.dispatch('redo')
      this.$root.$emit('bv::hide::tooltip')
    },
    setPreviewMode (e) {
      this.checked = !this.checked
      this.$store.dispatch('layout/setPreviewMode', this.checked)
      this.checked
      this.$root.$emit('bv::hide::tooltip')
    },
    setMobilePreviewMode () {
      this.$store.dispatch('layout/setPreviewModeSize', 'phone')
      this.$root.$emit('bv::hide::tooltip')
    },
    setTabletPreviewMode () {
      this.$store.dispatch('layout/setPreviewModeSize', 'tablet')
      this.$root.$emit('bv::hide::tooltip')
    },
    setDesktopPreviewMode () {
      this.$store.dispatch('layout/setPreviewModeSize', 'desktop')
      this.$root.$emit('bv::hide::tooltip')
    },
    gotToAddWidgetMode () {
      this.$store.dispatch('layout/setAddWidgetMode', true)
      this.$root.$emit('bv::hide::tooltip')
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
    isUndoDisabled () {
      return this.currentHistoryIndex === 0
    },
    historyLength () {
      return this.$store.state.main.historyLength
    },
    currentHistoryIndex () {
      return this.$store.state.main.currentHistoryIndex
    },
    isRedoDisabled () {
      return (this.currentHistoryIndex + 1) === this.historyLength
    },
    pageSideBarIsActive: {
      get () {
        return this.$store.state.layout.pageSideBarIsActive
      },
      set (e) {
        this.$store.dispatch('layout/setPageSideBarIsActive', e)
      }
    },
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
      return this.status
    }
  }
}
</script>
