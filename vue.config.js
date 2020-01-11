module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/maize/demo/'
    : '/',
  lintOnSave: false
}
