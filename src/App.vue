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
