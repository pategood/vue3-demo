module.exports = {
    devServer:{
      open:true,//是否自动弹出浏览器页面
      host:'8081',//端口号
      https:false,//是否使用https协议
      hotOnly:false,//是否开启热更新
      proxy:{
          //关键词
          '/api':{
            target:'http:localhost:5000',//API服务器的地址
            ws:true,//代理websorkets
            changeOrigin:true,//虚拟的站点需要更换origin
            pathRewrite:{
                //重写路径 比如'/api/aaa/bbb'重写为'/aaa/bbb'
                '^api':''
            }
          }
      }
  }
}