<!-- Fixed navbar -->
<template>
  <header class="page-toolbox bg-dark rtl" data-block-type="headers" data-id="2">
    <div class="container p-0">
      <nav class="navbar navbar-expand-lg px-0 py-3">
        <div class="collapse navbar-collapse" id="navbarNav13">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-lg-3">
              <a class="nav-link" href="#">
                <label class="switch">
                  <input @change="setPreviewMode" type="checkbox">
                  <span class="slider round"></span>
                </label>
                <!--<span class="preview-text">{{ $t("show_header") }}</span>-->
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a class="nav-link" href="#">
                <icon name="eye"></icon>
                <!--<span class="preview-text">{{ $t("preview_mode") }}</span>-->
              </a>
            </li>
            <li class="nav-item mr-lg-3">
              <a class="nav-link" @click="setMobilePreviewMode">
                <icon name="mobile"></icon>
                <!--<span class="preview-text">{{ $t("mobile_preview_mode") }}</span>-->
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
      setPreviewMode(e) {
        this.$store.dispatch('main/setPreviewMode', e.target.checked)
      },
      setMobilePreviewMode() {
        this.$store.dispatch('main/setMobilePreviewMode', !this.mobilePreviewMode)
      },
      gotToAddWidgetMode() {
        this.$store.dispatch('main/setAddWidgetMode', true)
      }
    },
    computed: {
      previewMode() {
        return this.$store.state.main.previewMode
      },
      mobilePreviewMode() {
        return this.$store.state.main.mobilePreviewMode
      },
      autosaveStatus: function () {
        return this.status;
      }
    }
  }
</script>
