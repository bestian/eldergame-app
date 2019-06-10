module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  chainWebpack: config => {
      config.module.rule('pug')
          .test(/\.pug$/)
          .use('pug-html-loader')
          .loader('pug-html-loader')
          .rule('scss')
          .test(/\.scss$/)
          .use('sass-loader')
          .loader('sass-loader')
          .end()
  }
}
