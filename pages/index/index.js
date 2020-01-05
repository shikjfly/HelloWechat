//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    imgSrc:'/images/test.jpg'
  },
  tapVedio:function(){
    let audio = wx.createInnerAudioContext()
    audio.src ='/audios/abc.mp3'
    audio.play()
  },
  calc:function(e){
    var C, F;
    C = e.detail.value;
    this.setData({
      F:C*9/5 + 32
    })
  }
})
