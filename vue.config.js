const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    /* disableHostCheck: true, */
    allowedHosts: 'all',
    //https: true
  },
  chainWebpack: config =>{
    config.plugin('html')
        .tap(args => {
          args[0].title = "思想火花平台";
          return args;
        })
  }
})
 