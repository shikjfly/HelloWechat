//app.js
App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'xshi-xzhao',
        traceUser: true,
      })
    }
    
    // console.log('app.js-----onLaunch小程序初始化')
  },
  onShow: function () {
    // console.log('app.js-----onShow小程序显示')
  },
  onHide: function () {
    // console.log('app.js-----onHide小程序隐藏')
  },
  globalMsg:'我是来自app.js的全局变量',
  globalFunc:function(){
    return '我是来自app.js的全局函数'
  }
})