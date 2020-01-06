//index.js
//获取应用实例
const app = getApp()
var startN0, endN0,sumN0;
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
  },
  calcNum:function(e){
    var x,y;
    var x = e.detail.value;   //获取input组件的value值，并赋值给x
    if(x<0){
      y = Math.abs(x);
    }else if(x<10){
      y = Math.exp(x)*sin(x);
    }else if (x<20){
      y = Math.pow(x,3);
    }else{
      y = (3+2*x)*Math.log(x);
    }
    this.setData({
      y:y       //将局部变量y赋值给绑定变量y
    })
  },
  data:{
    flag:true,
    name:'',
    chinese_score:'',
    math_score:'',
    avrage:''
  },
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  chineseInput: function (e) {
    this.setData({
      chinese_score: e.detail.value
    })
  },
  mathInput: function (e) {
    this.setData({
      math_score: e.detail.value
    })
  },
  mysubmit:function(){
    if(this.data.name == '' || this.data.chinese_score == '' || this.data.math_score == ''){
      return;
    }else{
      var avg = (this.data.chinese_score*1 + this.data.math_score*1)/2;
      this.setData({
        avrage:avg,
        flag:false
      })
    }
  },
  startNum: function (e) {
    startN0 = parseInt(e.detail.value);
  },
  endNum: function (e) {
    endN0 = parseInt(e.detail.value);
  },
  calcSum: function(){
    sumN0 = 0;
    for(var i = startN0; i<=endN0; i++){
      sumN0 = sumN0 + i;
    }
    this.setData({
      sum : sumN0
    })
  }

})
