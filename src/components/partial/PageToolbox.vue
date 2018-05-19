<!-- Fixed navbar -->
<template>
  <header class="page-toolbox bg-dark rtl" data-block-type="headers" data-id="2">
    <div class="container">
      <nav class="navbar navbar-expand-lg px-0 py-3">
        <a class="auto-save-status" href="https://www.froala.com">
          <span>{{autosaveStatus}}</span>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13"
                aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav13">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-lg-3">
              <a class="nav-link" href="https://www.froala.com">{{ $t("show_header") }}</a>
            </li>
            <li class="nav-item mr-lg-3">
              <a class="nav-link" href="https://www.froala.com">نسخه قابل نمایش</a>
            </li>
            <li class="mr-lg-3">
              <a class="btn btn-published btn-lg" href="https://www.froala.com">درخواست انتشار</a>
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
    data () {
      return {
        status: 'درحال ذخیره سازی تغییرات...'
      }
    },
    computed: {
      autosaveStatus: function () {
        return this.status;
      }
    }
  }
</script>
