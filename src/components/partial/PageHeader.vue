<!-- Fixed navbar -->
<template>
  <nav class="editor-page-navbar navbar navbar-expand-md shadow-sm fixed-top">
    <a class="navbar-brand" href="#">
       <img
       height="32"
       src="http://cdn.landingo.ir/public/imgs/img_logo.png" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsDefault"
      aria-controls="navbarsDefault"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarsDefault" class="collapse navbar-collapse  justify-content-end">
      <ul class="navbar-nav">
        <!--<li-->
          <!--v-if="!previewMode"-->
          <!--class="nav-item mr-lg-3">-->
          <!--<a :title="$t('add_widget')"-->
          <!--v-b-tooltip.hover.bottom.small-->
          <!--class="nav-link"-->
          <!--@click="goToAddWidgetMode">-->
            <!--<icon name="plus-square"></icon>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li-->
          <!--class="nav-item mr-lg-3">-->
          <!--<a v-b-tooltip.hover.bottom.small-->
             <!--class="nav-link"-->
             <!--:title="$t('import')"-->
             <!--@click="setMode('language')">-->
            <!--<icon name="globe"></icon>-->
          <!--</a>-->
        <!--</li>-->
        <li
          v-if="!previewMode"
          class="nav-item">
          <a v-b-tooltip.hover.bottom.small
             class=" btn-light btn"
             :class="{'disabled': isUndoDisabled}"
             :title="$t('toolbox.undo')"
             @click="undo">
            <icon name="undo"></icon>
          </a>
        </li>
        <li
          v-if="!previewMode"
          class="nav-item">
          <a v-b-tooltip.hover.bottom.small
             class=" btn-light btn"
             :class="{'disabled': isRedoDisabled}"
             :title="$t('toolbox.redo')"
             @click="redo">
            <icon name="redo"></icon>
          </a>
        </li>
        <li
          v-if="previewMode"
          class="nav-item">
          <a v-b-tooltip.hover.bottom.small
             class=" btn-light btn"
             :title="$t('toolbox.mobile')"
             @click="setMobilePreviewMode">
            <icon name="mobile-alt"></icon>
          </a>
        </li>
        <li
          v-if="previewMode"
          class="nav-item">
          <a v-b-tooltip.hover.bottom.small
             class=" btn-light btn"
             :title="$t('toolbox.tablet')"
             @click="setTabletPreviewMode">
            <icon name="tablet-alt"></icon>
          </a>
        </li>
        <li
          v-if="previewMode"
          class="nav-item">
          <a v-b-tooltip.hover.bottom.small
             class=" btn-light btn"
             :title="$t('toolbox.desktop')"
             @click="setDesktopPreviewMode">
            <icon name="desktop"></icon>
          </a>
        </li>
        <li
          v-if="!previewMode"
          class="pointer cursor-pointer nav-item pr-0">
          <a v-b-tooltip.hover.bottom.small
             class=" btn-light btn"
             :title="$t('toolbox.widget_selector')"
             :class="{'shadow-sm': pageSideBarIsActive}"
             @click="pageSideBarIsActive = !pageSideBarIsActive">
            <icon name="th"></icon>
          </a>
        </li>
        <li class="pointer nav-item">
            <a v-b-tooltip.hover.bottom.small
               class=" btn-light btn"
               :class="{'shadow-sm': checked}"
               :title="$t('toolbox.preview')"
               @click="setPreviewMode">
              <icon name="eye"></icon>
            </a>
        </li>
        <!--<li-->
          <!--class="nav-item">-->
          <!--<a-->
          <!--:title="$t('toolbox.settings')"-->
          <!--v-b-tooltip.hover.top.small-->
          <!--class="btn-light btn"-->
          <!--@click="setMode('settings')">-->
            <!--<icon name="cog"></icon>-->
          <!--</a>-->
        <!--</li>-->
        <li
          class="nav-item">
          <a v-b-tooltip.hover.bottom.small
             class=" btn-light btn"
             :title="$t('import')"
             @click="setMode('import')">
            <icon name="upload"></icon>
          </a>
        </li>
        <li
          class="nav-item">
          <a v-b-tooltip.hover.bottom.small
             class=" btn-light btn"
             :title="$t('export')"
             @click="setMode('settings')">
            <icon name="download"></icon>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
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
      if (this.currentLocale === 'fa') {
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
    setMode (i) {
      if (i === 'settings') {
        this.$store.dispatch('layout/setSettingsMode', true)
      }
      if (i === 'export') {
        this.$store.dispatch('layout/setExportMode', true)
      }
      if (i === 'import') {
        this.$store.dispatch('layout/setImportMode', true)
      }
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
      return this.$store.state.locale.current
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
