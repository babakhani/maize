<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- <div class="row">
      <div class="col-12">
      <div class="btn" @click="changeLanguage('fa')">FA</div>
      <div class="btn" @click="changeLanguage('en')">EN</div>
      </div>
      </div>-->
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // NOTE: Layout Direction
    let htmlEl = document.querySelector('html')
    let body = document.querySelector('body')
    htmlEl.setAttribute('dir', window.CONFIG.editorDirection)
    htmlEl.setAttribute('lang', window.CONFIG.locale)
    body.setAttribute('style', `font-family: ${window.CONFIG.editorFont}`)
  },
  methods: {
    changeLanguage (lang) {
      this.$store.dispatch('locale/changeLang', lang)
    }
  }
}
</script>

<style lang="sass">
@import "sass/main"
</style>
