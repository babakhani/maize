<!-- Fixed navbar -->
<template>
  <header class="page-toolbox bg-dark rtl"
          data-block-type="headers"
          data-id="2">
    <div class="container p-0">
      <nav class="navbar navbar-expand-lg px-0 py-3">


        <div class="collapse navbar-collapse"
             id="navbarNav13">
          <ul class="navbar-nav mr-auto">


            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 title="Undo"
                 @click="undo">
                <icon name="undo"></icon>
              </a>
            </li>

            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 title="Redo"
                 @click="redo">
                <icon name="redo"></icon>
              </a>
            </li>


            <li class="nav-item mr-lg-3">
              <a class="nav-link"
                 title="Preview Mode"
                 v-b-tooltip.hover.bottom.small
                 href="#">
                <label class="switch">
                  <input @change="setPreviewMode"
                         type="checkbox">
                  <span class="slider round"></span>
                </label>
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 title="Mobile size"
                 @click="setMobilePreviewMode">
                <icon name="mobile-alt"></icon>
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 title="Tablet size"
                 @click="setTabletPreviewMode">
                <icon name="tablet-alt"></icon>
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a v-b-tooltip.hover.bottom.small
                 class="nav-link"
                 title="Desktop size"
                 @click="setDesktopPreviewMode">
                <icon name="desktop"></icon>
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
    data() {
      return {
        status: 'درحال ذخیره سازی تغییرات...'
      }
    },
    methods: {
      undo() {
        this.$store.dispatch('undo')
      },
      redo() {
        this.$store.dispatch('redo')
      },
      setPreviewMode(e) {
        this.$store.dispatch('layout/setPreviewMode', e.target.checked)
      },
      setMobilePreviewMode() {
        this.$store.dispatch('layout/setMobilePreviewMode', !this.mobilePreviewMode)
      },
      setTabletPreviewMode() {
        this.$store.dispatch('layout/setTabletPreviewMode', !this.tabletPreviewMode)
      },
      setDesktopPreviewMode() {
        this.$store.dispatch('layout/setMobilePreviewMode', false)
        this.$store.dispatch('layout/setTabletPreviewMode', false)
      },
      gotToAddWidgetMode() {
        this.$store.dispatch('layout/setAddWidgetMode', true)
      }
    },
    computed: {
      previewMode() {
        return this.$store.state.layout.previewMode
      },
      mobilePreviewMode() {
        return this.$store.state.layout.mobilePreviewMode
      },
      tabletPreviewMode() {
        return this.$store.state.layout.tabletPreviewMode
      },
      autosaveStatus: function () {
        return this.status;
      }
    }
  }
</script>
