// vue.config.js
module.exports = {
  // https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    hot: false,
    liveReload: true,
    port: 8081,
    proxy: { // TODO: verify that this is actually needed
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          isCustomElement: tag => tag.startsWith("el-")
        }
        return options;
      })
  }
}