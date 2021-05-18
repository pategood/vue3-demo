module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],

  configureWebpack:{
    // 配置别名
    resolve:{
      alias: {
        '@': resolve('src'),
      }
    }
  },
}
