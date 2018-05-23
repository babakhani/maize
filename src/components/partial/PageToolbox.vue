<!-- Fixed navbar -->
<template>
  <header class="page-toolbox bg-dark rtl"
          data-block-type="headers"
          data-id="2">
    <div class="container p-0">
      <nav class="navbar navbar-expand-lg px-0 py-3">
        <a class="auto-save-status"
           href="https://www.froala.com">
          <span>{{autosaveStatus}}</span>
        </a>

        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav13"
                aria-controls="navbarNav13"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse"
             id="navbarNav13">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-lg-3">

              <a class="nav-link"
                 href="#">
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
                <span class="preview-text">{{ $t("show_header") }}</span>
              </a>

            </li>
            <li class="nav-item mr-lg-3">
              <a class="nav-link"
                 href="#">
                <icon name="eye"></icon>
                <span class="preview-text"> نسخه قابل نمایش</span>
              </a>
            </li>
            <li class="mr-lg-3 btn-published">
              <button class="btn btn-published--link btn-lg"
                      @click="gotToAddWidgetMode">+ Add Widget
              </button>
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
      gotToAddWidgetMode() {
        this.$store.dispatch('main/setAddWidgetMode', true)
      }
    },
    computed: {
      autosaveStatus: function () {
        return this.status;
      }
    }
  }
</script>
