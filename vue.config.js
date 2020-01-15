module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/sass/settings.scss";`
      }
    }
  }
}
