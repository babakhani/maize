<!-- Fixed navbar -->
<template>
  <header class="page-toolbox bg-dark rtl"
          data-block-type="headers"
          data-id="2">
    <div class="container p-0">
      <nav class="navbar navbar-expand-lg px-0 py-3">
        <div class="collapse navbar-collapse"
             id="navbarNav13">
          
          <div class="nav-item float-right">
            <a :title="$t('toolbox.add-widget')"
               v-b-tooltip.hover.bottom.small
               class="nav-link"
               @click="goToAddWidgetMode">
              <icon name="plus-square"></icon>
            </a>
          </div>

          <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-lg-3">
              <a :title="$t('toolbox.settings')"
                 v-b-tooltip.hover.top.small
                 class="nav-link"
                 v-b-modal.modal1>
                <icon name="cog"></icon>
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('undo')"
                 @click="undo">
                <icon name="undo"></icon>
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('redo')"
                 @click="redo">
                <icon name="redo"></icon>
              </a>
            </li>
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
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('mobile')"
                 @click="setMobilePreviewMode">
                <icon name="mobile-alt"></icon>
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('tablet')"
                 @click="setTabletPreviewMode">
                <icon name="tablet-alt"></icon>
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('desktop')"
                 @click="setDesktopPreviewMode">
                <icon name="desktop"></icon>
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('language')"
                 @click="toggleLanguage">
                <icon name="language"></icon>
              </a>
            </li>

            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 :title="$t('export')"
                 @click="exportPage">
                <icon name="download"></icon>
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'PageToolbax',
    methods: {
      goToAddWidgetMode() {
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
        this.$store.dispatch('layout/setMobilePreviewMode', !this.mobilePreviewMode)
      },
      setTabletPreviewMode () {
        this.$store.dispatch('layout/setTabletPreviewMode', !this.tabletPreviewMode)
      },
      setDesktopPreviewMode () {
        this.$store.dispatch('layout/setMobilePreviewMode', false)
        this.$store.dispatch('layout/setTabletPreviewMode', false)
      },
      gotToAddWidgetMode () {
        this.$store.dispatch('layout/setAddWidgetMode', true)
      },
      exportPage () {
        this.$store.dispatch('exportPage/exportPage', true)
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
