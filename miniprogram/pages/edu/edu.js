//edu.js
//获取应用实例
const app = getApp();
var startN0, endN0, sumN0, rand, sumRand, timerID, RMB;
var numTime = 60;
function createRand() {
  rand = [];
  sumRand = 0;
  for (var i = 0; i < 6; i++) {
    var r = (Math.random() * 100).toFixed(2) * 1;
    rand.push(r);
    sumRand += rand[i]
    // console.log(rand[i]);
  }
  // console.log(sumRand);
};

var eduMsg = '我是来自edu.js的变量';
function eduFunc() {
  return '我是来自edu.js的函数'
};
var util = require('../../utils/util.js');

function Person(name, sex, birthPlace, birthDay, height, weight) {
  this.name = name;
  this.sex = sex;
  this.birthPlace = birthPlace;
  this.birthDay = birthDay;
  this.height = height;
  this.weight = weight;
};

function getRandomColor(){
  let rgb=[];
  for(let i=0; i<3; ++i){
    let color = Math.floor(Math.random()*256).toString(16);
    color = color.length==1?'0'+color:color;
    rgb.push(color);
  }
  return '#'+rgb.join('')
};

function createRandomIndex(){
  return Math.floor(Math.random()*10);
};

var ctxCanvas = wx.createCanvasContext("myCanvas");
var ctxCanvasSins = wx.createCanvasContext("myCanvasSins");
var tempFilePaths, tempFilePath;
var myItemList = ['第一项', '第二项', '第三项', '第四项'];

Page({
  data: {
    imgSrc: '/images/dog.jpg',
    img: '/images/dogs.png',
    srcMusic: "https://files.xiami.com/webh5/files/video/30b4a859bbf33d5fc708685d6ddd2a0f.123222.mp4",
    posterMusic: "https://pic.xiami.net/images/artistlogo/23/14578645251123.jpg?x-oss-process=image/resize,limit_0,m_fill,s_410/quality,q_80/format,jpg",
    nameMusic:"泡沫",
    authorMusic:"G.E.M.邓紫棋",
    flag: true,
    name: '',
    chinese_score: '',
    math_score: '',
    avrage: '',
    numTime: numTime,
    hidden: true,
    a:10,
    b:20,
    c:30,
    Student:{
      studID:'20200107',
      name:"张三",
      birthday:'2019-01-01'
    },
    array:[
      '2018','2019','2020'
    ],
    msg1: app.globalMsg,
    msg2: app.globalFunc(),
    msg3: eduMsg,
    msg4: eduFunc(),
    msg5: util.utilMsg,
    msg6: util.utilFunc(),
    colorIF:'blue',
    lengthIF:15,
    score: '',
    arrayList: [
      '张三', '李四', '王五', '赵六'
    ],
    objectList: {
      姓名: '张三',
      学号: "20200107",
      性别: '男'
    },
    stu01: {
      name: '张三',
      age: 19,
      gender: '男'
    },
    stu02: {
      name: '李四',
      age: 20,
      gender: '女'
    },
    myFontSize:'25px',
    red:50,
    green:100,
    blue:150,
    transparency:1,
    background: ['bc-red', 'bc-green', 'bc-blue'],
    indicatorDots:true,
    autoplay: true,
    circular:false,
    vertical:false,
    interval:2000,
    duration:500,
    genderInfo:["男", "女"],
    imgArray: [{
      mode: 'aspectFit',
      text: 'aspectFit:保持纵横比缩放图片，使图片完整地显示出来'
    }, {
        mode: 'scaleToFill',
        text: 'scaleToFill:不保持纵横比缩放图片，使图片拉升适应'
      }, {
        mode: 'aspectFill',
        text: 'aspectFill:保持纵横比缩放图片，只保证图片的短边能完整地显示出来'
      }, {
        mode: 'top',
        text: 'top:不缩放图片，只显示图片的顶部区域'
      }, {
        mode: 'bottom',
        text: 'bottom:不缩放图片，只显示图片的底部区域'
      }, {
        mode: 'center',
        text: 'center:不缩放图片，只显示图片的中间区域'
      }, {
        mode: 'left',
        text: 'left:不缩放图片，只显示图片的左边区域'
      }, {
        mode: 'right',
        text: 'right:不缩放图片，只显示图片的右边区域'
      }, {
        mode: 'top left',
        text: 'top left:不缩放图片，只显示图片的左上边区域'
      }, {
        mode: 'top right',
        text: 'top right:不缩放图片，只显示图片的右上边区域'
      }, {
        mode: 'bottom left',
        text: 'bottom left:不缩放图片，只显示图片的左下边区域'
      }, {
        mode: 'bottom right',
        text: 'bottom right:不缩放图片，只显示图片的右下边区域'
      }   
    ],
    danmuList: [{
      text: '第1秒出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
        text: '第3秒出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ],
    getEmail4: '',
    getPwd4: '',
    getPwdConfirm4: '',
    imgFaceArray: [
      '/images/01.jpg',
      '/images/02.jpg',
      '/images/03.jpg',
      '/images/04.jpg',
      '/images/05.jpg',
      '/images/06.jpg',
      '/images/07.jpg',
      '/images/08.jpg',
      '/images/09.jpg',
      '/images/10.jpg',
    ],
    indexFace:0,
    pen:5,
    colorFree:'#000000',
    latitude: 29.8620000000, 
    longitude: 121.5363100000,
    markers:[{
      id: 0,
      latitude: 29.8620000000,
      longitude: 121.5363100000,
      iconPath:'/images/location.png',
      label:{
        content:'我的位置',
        color:'#0000FF',
        bgColor:'#FFFF00',
        fontSize:20
      }
    }, {
        latitude: 29.8620000000,
        longitude: 121.5363100000,
        iconPath: '/images/location.png',
    }],
    msgFile:'',
    msgStorage: '--->小程序什么时候使用setStorage 什么时候使用setStorageSync?\n--->前者为异步操作，后者为同步操作，若后续的操作依赖于更改storage后的数据，则需要同步，否则后续操作执行时还是使用的未更新的数据。若后续操作无需用到更改的storage数据，则不需要立即同步，这时用异步操作即可，节省内存。',
    statusWifi:'获取中...',
    phoneName:'',
    phoneNumber:'',
    brightness:'待查询',
    copyBrightness:'',
    hide1:false,
    hide2:true,
    setTitle:'',
    userInfo:{},
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    openID:'',
    detail:'点击头像显示您的详细信息',
    fileID:'',
    cloudPath:'',
    imagePath:'',
    downloadedFilePath:'',
    uploadSuccess:false,
    downloadSuccess:false,
    opName:"",
    opResult: "",
    opResult2: "",
    resData: null,
    resData2: null,
    finished:false,
    checkedResult:'',
  },

  tapVedio: function () {
    let audio = wx.createInnerAudioContext()
    audio.src = '/audios/dog.mp3'
    audio.play()
  },
  calc: function (e) {
    var C, F;
    C = e.detail.value;
    this.setData({
      F: C * 9 / 5 + 32
    })
  },
  calcNum: function (e) {
    var x, y;
    var x = e.detail.value;   //获取input组件的value值，并赋值给x
    if (x < 0) {
      y = Math.abs(x);
    } else if (x < 10) {
      y = Math.exp(x) * sin(x);
    } else if (x < 20) {
      y = Math.pow(x, 3);
    } else {
      y = (3 + 2 * x) * Math.log(x);
    }
    this.setData({
      y: y       //将局部变量y赋值给绑定变量y
    })
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
  mysubmit: function () {
    if (this.data.name == '' || this.data.chinese_score == '' || this.data.math_score == '') {
      return;
    } else {
      var avg = (this.data.chinese_score * 1 + this.data.math_score * 1) / 2;
      this.setData({
        avrage: avg,
        flag: false
      })
    }
  },
  startNum: function (e) {
    startN0 = parseInt(e.detail.value);
  },
  endNum: function (e) {
    endN0 = parseInt(e.detail.value);
  },
  calcSum: function () {
    sumN0 = 0;
    for (var i = startN0; i <= endN0; i++) {
      sumN0 = sumN0 + i;
    }
    this.setData({
      sum: sumN0
    })
  },
  onLoad: function (options) {
    createRand();
    this.setData({
      rand: rand,
      sumRand: sumRand
    });
    var that = this;
    setTimeout(() => {
      that.show()
    }, 2000);
    setInterval(() => {
      that.createColor();
    }, 5000);
    this.audioCtx = wx.createAudioContext("myMusic");
    this.videoCtx = wx.createVideoContext("myVideo");
    this.ctxCanvasParm = wx.createCanvasContext("myCanvasParm", this);
    this.ctxCanvasFree = wx.createCanvasContext("myCanvasFree", this);
    this.drawSinX();
    wx.getNetworkType({
      success: function(res) {
        that.setData({
          statusWifi:res.networkType
        })
      },
    });
    wx.onNetworkStatusChange(function(res){
      if (res.isConnected) {
        that.setData({
          statusWifi: res.networkType
        })        
      } else {
        that.setData({
          statusWifi: '未联网！'
        })
      }
    });
    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:res=>{
              that.setData({
                userInfo:res.userInfo,
                hasUserInfo:true,
              })
            }
          })
        }
      }
    })
    this.getOpenID();
  },

  // end onLoad function函数
  newRand: function () {
    createRand();
    this.setData({
      rand: rand,
      sumRand: sumRand
    })
  },
  show: function () {
    var that = this;
    that.setData({
      hidden: false
    })
  },
  startTime: function () {
    var that = this;
    timerID = setInterval(() => {
      that.timer()
    }, 1000)
  },
  stopTime: function () {
    clearInterval(timerID)
  },
  timer: function () {
    var that = this;
    // console.log(numTime);
    if (numTime > 0) {
      that.setData({
        numTime: numTime--
      })
    } else {
      that.setData({
        numTime: 0
      })
    }
    console.log(numTime);
  },
  createColor: function () {
    var color = [];
    var letters = '0123456789ABCDEF';
    for (var i = 0; i < 3; i++) {
      var c = '#';
      for (var j = 0; j < 6; j++) {
        c += letters[Math.floor(Math.random() * 16)];
      }
      color.push(c);
    }
    // console.log(color);
    this.setData({
      color1: color[0],
      color2: color[1],
      color3: color[2]
    })
  },
  changeColor: function () {
    this.createColor();
  },
  modify:function(){
    this.setData({
      a: 100,
      b: 200,
      c: 300,
      Student: {
        studID: '20200102',
        name: "李四",
        birthday: '2012-12-12'
      },
      array: [
        '2028', '2029', '2030'
      ],
    })
  },
  scoreInput:function(e){
    this.setData({
      score: e.detail.value
    })
  },
  calcMoney: function (e) {
    RMB = parseInt(e.detail.value.moneny);
    this.setData({
      USD: (RMB / 6.8801).toFixed(4),
      KRW: (RMB / 8.7873).toFixed(4),
      HKD: (RMB / 0.8805).toFixed(4),
      EUR: (RMB / 7.8234).toFixed(4),
      KOREA: (RMB / 0.0061).toFixed(4),
      JAY: (RMB / 0.0610).toFixed(4),
    })
  },
  reset: function (e) {
    this.setData({
      USD: '',
      KRW: '',
      HKD: '',
      EUR: '',
      KOREA: '',
      JAY: '',
      triangleArea:'',
    })
  },
  calcArea: function (e) {
    var aArea = parseInt(e.detail.value.aArea);
    var bArea = parseInt(e.detail.value.bArea);
    var cArea = parseInt(e.detail.value.cArea);
    var triangleArea;
    if (aArea + bArea <= cArea || aArea + cArea <= bArea || cArea + bArea <= aArea){
      wx.showToast({
        title: '三角形的两边之和小于第三边！',
        icon:'none',
        duration:2000,
      });
      this.clear();
      return;
    }else{
      var sArea= (aArea+bArea+cArea)/2;
      triangleArea = Math.sqrt(sArea * (sArea - aArea) * (sArea - bArea) * (sArea - cArea) );
    }
    this.setData({
      triangleArea: triangleArea,
    })
  },
  clear:function(){
    this.setData({
      aArea: '',
      bArea: '',
      cArea: '',
      triangleArea:'',
    })
  },
  radioChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      myFontSize: e.detail.value,
    })
  },
  checkboxChange: function (e) {
    console.log(e.detail.value);
    var text=[];
    var myBold='';
    var myItalic='';
    var myUnderline='';
    text = e.detail.value;
    for (var i = 0; i < text.length; i++) {
      if (text[i] == 'isBold') {
        myBold = 'bold';
      }
      if (text[i] == 'isItalic') {
        myItalic = 'italic';
      }
      if (text[i] == 'isUnderline') {
        myUnderline = 'underline';
      }
    }
    this.setData({
      myBold: myBold,
      myItalic: myItalic,
      myUnderline: myUnderline,
    })
  },
  colorChanging:function(e){
    let color = e.currentTarget.dataset.color;
    let value = e.detail.value;
    console.log(color, value);
    this.setData({
      [color]:value
    });
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeCircular: function (e) {
    this.setData({
      circular: !this.data.circular
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  pickerName: function (e) {
    this.name = e.detail.value
  },
  pickerHeight: function (e) {
    this.height = e.detail.value
  },
  pickerWeight: function (e) {
    this.weight = e.detail.value
  },
  pickerDate: function (e) {
    this.birthDay = e.detail.value
    this.setData({
      birthDay: this.birthDay
    })
  },
  pickerSex: function (e) {
    this.sex = this.data.genderInfo[e.detail.value]
    this.setData({
      sex: this.sex
    })
  },
  pickerRegion: function (e) {
    this.birthPlace = e.detail.value
    this.setData({
      birthPlace: this.birthPlace
    })
  },
  showMessage:function(e){
    var p = new Person(this.name, this.sex, this.birthPlace,this.birthDay, this.height, this.weight);
    this.setData({
      flag: false,
      person:p
    })
  },
  musicPlay: function () {
    this.audioCtx.play()
  },
  musicPause: function () {
    this.audioCtx.pause()
  },
  music14: function () {
    this.audioCtx.seek(14)
  },
  musicStart: function () {
    this.audioCtx.seek(0)
  },
  inputVideo:function(e){
    this.inputValue = e.detail.value
  },
  sendDanmu:function(){
    this.videoCtx.sendDanmu({
      text:this.inputValue,
      color:getRandomColor(),
    })
  },
  formSubmit4:function(e){
    if (e.detail.value.email4.length == 0 || e.detail.value.password4.length == 0){
      this.setData({
        showMsg401:'邮箱或密码不得为空！',
      })
    } else if (e.detail.value.password4 != e.detail.value.confirm4){
      this.setData({
        showMsg402: '两次输入密码不一致！',
        getPwd4:'',
        getPwdConfirm4:'',
      })
    }else{
      wx.navigateTo({
        url: '../detail4/detail4',
      })
    }
  },
  inputemail4:function(e){
    var email4 = e.detail.value;
    var checkedNum4 = this.checkemail4(email4)
  },
  checkemail4: function (email4){
    let str = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    if(str.test(email4)){
      return true
    }else{
      wx.showToast({
        title: '邮箱格式错误',
        icon:'loading',
      })
      this.setData({
        getEmail4:''
      })
      return false
    }
  },
  changeFace:function(){
    this.setData({
      indexFace: createRandomIndex()
    })
  },
  onShow:function(){
    var that = this;
    that.isShow = true;
    wx.onAccelerometerChange(function(res){
      if(!that.isShow){
        return
      }
      if(res.x>1.5 || res.y>1.5 || res.z>1.5){
        wx.showToast({
          title: '摇一摇成功',
          icon:'success',
          duration:2000
        })
        that.changeFace();
        var result = 1;
        for(var i=1; i<that.inputValue; i++){
          result = result*i
        }
        that.setData({
          facResult:result
        })
      }
    })
  },
  getFacInput:function(e){
    this.inputValue = e.detail.value
  },
  onHide:function(){
    this.isShow = false;
  },
  clearCanvas: function () {
    ctxCanvas.draw()
  },
  drawDotCanvas: function () {
    ctxCanvas.arc(200,200,10,0,2*Math.PI);
    ctxCanvas.setFillStyle("black");
    ctxCanvas.fill();
    ctxCanvas.draw();
  },
  drawCircleCanvas: function () {
    ctxCanvas.setFillStyle("black");
    ctxCanvas.arc(200, 200, 10, 0, 2 * Math.PI);
    ctxCanvas.fill();
    ctxCanvas.setStrokeStyle("red");
    ctxCanvas.moveTo(300, 200);
    ctxCanvas.arc(200, 200, 100, 0, 2 * Math.PI);
    ctxCanvas.stroke();
    ctxCanvas.draw();
  },
  drawDashCanvas: function () {
    ctxCanvas.setStrokeStyle("red");
    ctxCanvas.setLineDash([20,10]);
    ctxCanvas.setLineWidth(10);
    ctxCanvas.moveTo(50, 100);
    ctxCanvas.lineTo(250, 100);
    ctxCanvas.lineTo(150, 300);
    ctxCanvas.lineTo(50, 100);
    ctxCanvas.stroke();
    ctxCanvas.draw();
    ctxCanvas.setLineDash([0, 0]);
    ctxCanvas.setLineWidth(1);
  },
  capAndJoinCanvas: function () {
    ctxCanvas.setStrokeStyle("red");
    ctxCanvas.setLineWidth(20);
    ctxCanvas.setLineCap("round");
    ctxCanvas.setLineJoin("miter");
    ctxCanvas.moveTo(50, 50);
    ctxCanvas.lineTo(250, 50);
    ctxCanvas.lineTo(50, 250);
    ctxCanvas.lineTo(250, 250);
    ctxCanvas.stroke();
    ctxCanvas.draw();
    ctxCanvas.setLineWidth(1);
    ctxCanvas.setLineCap("butt");
    ctxCanvas.setLineJoin("miter");
  },
  drawTextCanvas: function () {
    ctxCanvas.setFillStyle("red");
    ctxCanvas.setFontSize(40);
    ctxCanvas.setTextBaseline("bottom");
    ctxCanvas.fillText("微EAM", 80, 80);
    ctxCanvas.setFillStyle("yellow");
    ctxCanvas.setTextBaseline("top");
    ctxCanvas.fillText("微EAM", 80, 80);
    ctxCanvas.setFillStyle("black");
    ctxCanvas.rotate(30*Math.PI/180);
    ctxCanvas.fillText("微EAM", 150, 80);
    ctxCanvas.draw();
  },
  circularCanvas: function () {
    var grd = ctxCanvas.createCircularGradient(175, 175, 125);
    grd.addColorStop(0, "purple");
    grd.addColorStop(1, "white");
    ctxCanvas.setFillStyle(grd);
    ctxCanvas.fillRect(50, 50, 250, 250);
    ctxCanvas.draw();
  },
  shadowRectCanvas: function () {
    ctxCanvas.setFillStyle("orange");
    ctxCanvas.setShadow(20, 20, 50, "yellow");
    ctxCanvas.fillRect(50, 50, 250, 250);
    ctxCanvas.draw();
  },
  translucentCanvas: function () {
    ctxCanvas.setFillStyle("red");
    ctxCanvas.setGlobalAlpha(0.2);
    ctxCanvas.fillRect(50, 50, 250, 250);
    ctxCanvas.draw();
    ctxCanvas.setGlobalAlpha(1);
  },
  drawCircleParm: function (e) {
    var x = e.detail.value.xParm;
    var y = e.detail.value.yParm;
    var r = e.detail.value.radiusParm;
    this.ctxCanvasParm.arc(x,y,r,0,2*Math.PI);
    this.ctxCanvasParm.stroke();
    this.ctxCanvasParm.draw(true);
  },
  clearParm:function(){
    this.ctxCanvasParm.draw();
  },
  onReady: function () {
    this.ctxCanvasTrans = wx.createCanvasContext("myCanvasTrans", this);
    this.animation = wx.createAnimation();
  },
  drawRectTrans: function () {
    var ctx = this.ctxCanvasTrans;
    ctx.rect(1,1,50,50);
    ctx.stroke();
    ctx.draw(true);
  },
  scaleTrans: function () {
    this.ctxCanvasTrans.scale(2, 2);
    this.ctxCanvasTrans.drawRect(true);
  },
  translateTrans: function () {
    this.ctxCanvasTrans.translate(20, 20);
    this.drawRect();
  },
  rotateTrans: function () {
    this.ctxCanvasTrans.rotate(30*Math.PI/180);
    this.drawRect();
  },
  drawDot:function(x,y){
    ctxCanvasSins.arc(x,y,5,0,2*Math.PI);
    ctxCanvasSins.setFillStyle("black");
    ctxCanvasSins.fill();
    ctxCanvasSins.draw(true);
  },
  drawSinX:function(){
    for(var x=0; x<2*Math.PI; x+=Math.PI/180){
      var y = Math.sin(x);
      this.drawDot(10+50*x, 60+50*y);
    }
  },
  isClear: false,
  touchStart: function (e) {
    this.x1 = e.changedTouches[0].x;
    this.y1 = e.changedTouches[0].y;
    if(this.isClear){
      this.ctxCanvasFree.setStrokeStyle("#FFFFFF");
      this.ctxCanvasFree.setLineCap("round");
      this.ctxCanvasFree.setLineJoin("round");
      this.ctxCanvasFree.setLineWidth(20);
      this.ctxCanvasFree.beginPath();
    }else{
      this.ctxCanvasFree.setStrokeStyle(this.data.color);
      this.ctxCanvasFree.setLineWidth(this.data.pen);
      this.ctxCanvasFree.setLineCap("round");
      this.ctxCanvasFree.beginPath();
    }
  },
  touchMove: function (e) {
    var x2 = e.changedTouches[0].x;
    var y2 = e.changedTouches[0].y;
    if (this.isClear) {
      this.ctxCanvasFree.save();
      this.ctxCanvasFree.moveTo(this.x1, this.y1);
      this.ctxCanvasFree.lineTo(x2, y2);
      this.ctxCanvasFree.stroke();
      this.x1 = x2;
      this.y1 = y2;
    } else {
      this.ctxCanvasFree.moveTo(this.x1, this.y1);
      this.ctxCanvasFree.lineTo(x2, y2);
      this.ctxCanvasFree.stroke();
      this.x1 = x2;
      this.y1 = y2;
    }
    this.ctxCanvasFree.draw(true);
  },
  touchEnd: function () { },
  penSelect: function (e) {
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param)
    })
    this.isClear = false;
  },
  colorSelect: function (e) {
    console.log(e.currentTarget);
    this.setData({
      color: e.currentTarget.dataset.param
    })
    this.isClear = false;
  },
  clearFree: function () {
    this.isClear = true;
  },
  clearAllFree: function () {
    this.setData({
      pen:5,
      color:"#000000"
    })
    this.ctxCanvasFree.draw();
  },
  rotateAnimation: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  scaleAnimation: function () {
    this.animation.scale(Math.random() * 2).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  translateAnimation: function () {
    this.animation.translate(Math.random()*100-50, Math.random()*100-50).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  skewAnimation: function () {
    this.animation.skew(Math.random()*90 , Math.random()*90).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  rotateAndScaleAnimation: function () {
    this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  rotateThenScaleAnimation: function () {
    this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  allAnimation: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({
      animation: this.animation.export()
    })
  },
  allInQueueAnimation: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  resetAnimation: function () {
    this.animation.rotate(0,0)
      .scale(1)
      .translate(0,0)
      .skew(0,0)
      .step({
        duration:0
      })
    this.setData({
      animation: this.animation.export()
    })
  },
  chooseImage:function(){
    var that = this;
    wx.chooseImage({
      count:1,
      sizeType:['original', 'compressed'],
      sourceType:['album', 'camera'],
      success: function(res) {
        that.setData({
          imgPath:res.tempFilePaths
        })
      },
    })
  },
  chooseVideo:function(){
    var that=this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration:60,
      camera:['front','back'],
      success:function(res){
        wx.showToast({
          title: 'res.tempFillPath',
          icon:'success',
          duration:2000
        })
        that.setData({
          videoPath:res.tempFilePath
        })
      }
    })
  },
  chooseLocation:function(){
    wx.chooseLocation({
      success: function(res) {

      },
    })
  },
  openLocation:function(){
    wx.getLocation({
      type:'gcj02',
      success: function (res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28,
        })
      },
    })
  },
  openFile: function () {
    var that = this;
    wx.chooseImage({
      success: function(res) {
        tempFilePaths = res.tempFilePaths;
        console.log('打开文件路径：'+ tempFilePaths)
        that.setData({
          imgFilePath:tempFilePaths[0],
          hidden:false,
          msgFile:'文件打开成功！'
        })
      },
    })
  },
  saveFile: function () {
    var that = this;
    wx.saveFile({
      tempFilePath: tempFilePaths[0],
      success(res){
        console.log('保存文件路径：'+ res.savedFilePath);
        that.setData({
          hidden: false,
          msgFile: '文件保存成功！'
        })
      }
    })
  },
  getSavedFileInfo: function () {
    var i,file;
    var that = this;
    wx.getSavedFileList({
      success:function(res){
        if (res.fileList.length == 0) {
          that.setData({
            hidden: false,
            msgFile: '没有文件信息'
          })
        }else{
          for(i=0; i<res.fileList.length; i++){
            file = res.fileList[i];
            console.log('第'+i+'个文件路径：'+file.filePath)
            wx.getSavedFileInfo({
              filePath: file.filePath,
              success: function (res) {
                console.log('第' + i + '个文件大小为：' + res.size)
                that.setData({
                  hidden: false,
                  msgFile: '文件数量：'+i+'\n最后一个文件的大小：'+res.size+'\n最后一个文件的创建时间：'+res.createTime
                })                
              }
            })
          }
        }
      }
    })
  },
  removedSavedFile: function () {
    var i, file;
    var that = this;
    wx.getSavedFileList({
      success: function (res) {
        for (i = 0; i < res.fileList.length; i++) {
          file = res.fileList[i];
          wx.removeSavedFile({
            filePath: file.filePath,
          })
          console.log('第' + (i+1) + '个文件被删除')
          that.setData({
            hidden: false,
            msgFile: '文件全部删除'
          })     
        }
      }
    })  
  },
  Student: function (id, name, chinese, math, english) {
    this.id = id;
    this.name = name;
    this.chinese = chinese;
    this.math = math;
    this.english = english;
  },
  loadStudent:function(){
    var students = new Array();
    var stu1 = new this.Student('1', 'TOM', 95, 87, 72);
    var stu2 = new this.Student('2', 'Kevin', 75, 97, 79);
    students.push(stu1);
    students.push(stu2);
    return students;
  },
  setStorage: function () {
    var that = this;
    wx.setStorage({
      key: '高一',
      data: this.loadStudent(),
      success: function () {
        that.setData({
          hidden: false,
          msgStorage: '异步存储数据成功！'
        })
      }
    })
  },
  getStorage: function () {
    var that = this;
    wx.getStorage({
      key: '高一',
      success: function (res) {
        var length = res.data.length;
        if (length > 1) {
          that.setData({
            hidden: false,
            msgStorage: '异步获取缓存数据成功，学生1信息：' +
              '\n学号：' + res.data[length - 2].id +
              '\n姓名：' + res.data[length - 2].name +
              '\n语文成绩：' + res.data[length - 2].chinese +
              '\n数学成绩：' + res.data[length - 2].math +
              '\n英语成绩：' + res.data[length - 2].english
          })
          console.log(res.data)
        }
      },
      fail: function () {
        that.setData({
          hidden: false,
          msgStorage: '异步获取缓存数据 失败！！！'
        })
      }
    })
  },
  getStorageInfo: function () {
    var that = this;
    wx.getStorageInfo({
      success: function (res) {
        that.setData({
          hidden: false,
          msgStorage: '异步获取缓存信息成功！' +
            '\n已使用空间：' + res.currentSize +
            '\n最大空间为：' + res.limitSize
        })
        console.log(res);
      },
      fail: function () {
        that.setData({
          hidden: false,
          msgStorage: '异步获取缓存信息 失败！！！'
        })
      }
    })
  },
  removeStorage: function () {
    var that = this;
    wx.removeStorage({
      key: '高一',
      success: function (res) {
        that.setData({
          hidden: false,
          msgStorage: '异步删除缓存数据成功！'
        })
        console.log(res.data);
      },
      fail: function () {
        that.setData({
          hidden: false,
          msgStorage: '异步删除缓存数据 失败！！！'
        })
      }
    })
  },


  setStorageSync: function () {
    var that = this;
    wx.setStorageSync('高二', this.loadStudent());
    that.setData({
      hidden: false,
      msgStorage: '同步存储数据成功！'
    })
  },
  getStorageSync: function () {
    var that = this;
    try{
      var value = wx.getStorageSync("高二");
      var length = value.length;
      if (length > 1) {
        that.setData({
          hidden: false,
          msgStorage: '同步获取缓存数据成功，学生2信息：' +
            '\n学号：' + value[length - 1].id +
            '\n姓名：' + value[length - 1].name +
            '\n语文成绩：' + value[length - 1].chinese +
            '\n数学成绩：' + value[length - 1].math +
            '\n英语成绩：' + value[length - 1].english
        })
        console.log(value)
      }
    }catch(e){
      that.setData({
        hidden: false,
        msgStorage: '同步获取缓存数据 失败！！！'
      })
      console.log(e);
    }
  },
  getStorageInfoSync: function () {
    var that = this;
    try {
      var res = wx.getStorageInfoSync("高二");
      that.setData({
        hidden: false,
        msgStorage: '同步获取缓存信息成功！' +
          '\n已使用空间：' + res.currentSize +
          '\n最大空间为：' + res.limitSize
      })
      console.log(res)      
    } catch (e) {
      that.setData({
        hidden: false,
        msgStorage: '同步获取缓存信息 失败！！！'
      })
      console.log(e);
    }
  },
  removeStorageSync: function () {
    var that = this;
    try{
      wx.removeStorageSync("高二");
      that.setData({
        hidden: false,
        msgStorage: '同步删除缓存数据成功！'
      })
    } catch (e) {
      that.setData({
        hidden: false,
        msgStorage: '同步删除缓存数据 失败！！！'
      })
      console.log(e);
    }
  },
  wifiStatus:function(){
    var that = this;
    wx.getConnectedWifi({
      success:function(res){
        that.setData({
          res:res.wifi
        })
        console.log(res.wifi);
      },
      fail:function(res){
        console.log(res,'WiFi获取失败...');
        wx.showToast({
          title: res+'WiFi获取失败...',
          icon: 'none',
          duration: 2000,
        });
      }

    })  
  },
  startCompass: function () {
    var that = this;
    wx.startCompass({
      success: function () {
        wx.onCompassChange(function (res) {
          that.setData({
            resCompass: res
          })
          console.log(res + '罗盘已经启动！')
        })
      }
    })
  },
  stopCompass: function () {
    wx.stopCompass({
      success: function (res) {
        console.log(res + '罗盘已经停止！')
      }
    })
  },
  startAcc: function () {
    var that = this;
    wx.startAccelerometer({
      success: function () {
        wx.onAccelerometerChange(function (res) {
          that.setData({
            resAcc: res
          })
          console.log(res + '启动加速度传感器监听')
        })
      }
    })
  },
  stopAcc: function () {
    wx.stopAccelerometer({
      success: function (res) {
        console.log(res + '已经停止加速度传感器监听！')
      }
    })
  },
  startGyroscope: function () {
    var that = this;
    wx.startGyroscope({
      success: function () {
        wx.onGyroscopeChange(function (res) {
          that.setData({
            resGyroscope: res
          })
          console.log(res + '启动陀螺仪传感器监听')
        })
      }
    })
  },
  stopGyroscope: function () {
    wx.stopGyroscope({
      success: function (res) {
        console.log(res + '已经停止陀螺仪传感器监听！')
      }
    })
  },
  scanCode:function(){
    var that = this;
    wx.scanCode({
      onlyFromCamera:false,
      scanType:[],
      success:function(res){
        that.setData({
          resCode:res
        })
      }
    })
  },
  inputPhoneName: function (e) {
    this.phoneName = e.detail.value;
  },
  inputPhoneNumber: function (e) {
    this.phoneNumber = e.detail.value;
  },
  makePhoneCall:function(){
    let phone = this.phoneNumber;
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  addPhonePerson:function(){
    let name = this.phoneName;
    let phone = this.phoneNumber;
    if(name=='' || phone==''){
      wx.showToast({
        title: '姓名和电话不能为空',
        icon:'none',
        duration:2000,
      })
    }else{
      wx.addPhoneContact({
        firstName: name,
        mobilePhoneNumber:phone
      })
    }
  },
  setScreenBrightness:function(e){
    wx.setScreenBrightness({
      value: e.detail.value,
    })
  },
  getScreenBrightness:function(){
    var that = this;
    wx.getScreenBrightness({
      success:function(res){
        that.setData({
          brightness:res.value.toFixed(1),
        })
      },
    })
  },
  setKeepScreenOn:function(e){
    let isKeeping = e.detail.value;
    if(isKeeping){
      wx.setKeepScreenOn({
        keepScreenOn: true,
      })
      wx.vibrateLong()
    }
  },
  copyScreenBrightness:function(){
    var that = this;
    let brightness = this.data.brightness;
    wx.setClipboardData({
      data: brightness,
      success:function(res){
        wx.showToast({
          title: '复制成功',
        })
      }
    })
    wx.getClipboardData({
      success:function(res){
        that.setData({
          copyBrightness:res.data
        })
      }
    })
  },
  getSystemInfo:function(){
    var that = this;
    wx.getSystemInfo({
      success: (res)=> {
        that.setData({
          msgEqu:"异步",
          hide1:false,
          hide2:true,
          modelEqu:res.model,
          pixelRatioEqu:res.pixelRatio,
          screenWidthEqu:res.screenWidth,
          screenHeightEqu:res.screenHeight,
          windowWidthEqu:res.windowWidth,
          windowHeightEqu:res.windowHeight,
          languageEqu:res.language,
          versionEqu:res.version,
          systemEqu:res.system,
          platformEqu:res.platform,
          SDKVersionEqu:res.SDKVersion,
        })
      },
    })
  },
  getSystemInfoSync:function(){
    var that = this;
    try{
      var res = wx.getSystemInfoSync();
      that.setData({
        msgEqu: "同步",
        hide1: false,
        hide2: true,
        modelEqu: res.model,
        pixelRatioEqu: res.pixelRatio,
        screenWidthEqu: res.screenWidth,
        screenHeightEqu: res.screenHeight,
        windowWidthEqu: res.windowWidth,
        windowHeightEqu: res.windowHeight,
        languageEqu: res.language,
        versionEqu: res.version,
        systemEqu: res.system,
        platformEqu: res.platform,
        SDKVersionEqu: res.SDKVersion,
      })
    }catch(e){
      console.log(e);
    }
  },
  inputTitle:function(e){
    this.setData({
      setTitle:e.detail.value
    })
  },
  setNavigationBarTitle:function(){
    let setTitle = this.data.setTitle;
    wx.setNavigationBarTitle({
      title: setTitle,
    })
  },
  setNavigationBarColor:function(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation:{
        duration:4000,
        timingFunc:'easeInOut',
      }
    })
  },
  showNavigationBarLoading: function () {
    wx.showNavigationBarLoading();
  },
  hideNavigationBarLoading: function () {
    wx.hideNavigationBarLoading();
  },
  showTabBar: function () {
    wx.showTabBar({
      animation: true,
    })
  },
  hideTabBar: function () {
    wx.hideTabBar({
      animation: true,
    })
  },
  setTabBarBadge: function () {
    wx.setTabBarBadge({
      index: 1,
      text: '10',
    })
  },
  removeTabBarBadge: function () {
    wx.removeTabBarBadge({
      index: 1,
    })
  },
  showTabBarRedDot: function () {
    wx.showTabBarRedDot({
      index: 0,
    })
  },
  hideTabBarRedDot: function () {
    wx.hideTabBarRedDot({
      index: 0,
    })
  },
  setTabBarStyle:function(){
    wx.setTabBarStyle({
      color:'#ff0000',
      selectedColor:'#0000ff',
      backgroundColor:'#ffff00',
      borderStyle:'',
    })
  },
  setTabBarItem:function(){
    wx.setTabBarItem({
      index: 2,
      text:'云开发',
      iconPath:'/images/home-off.png',
      selectedIconPath:'/images/home-on.png',
    })
  },
  resetTabBar:function(){
    wx.setTabBarStyle({
      color:'#000000',
      selectedColor:'#00ff00',
      backgroundColor:'#fff',
      borderStyle:'',
    })
    wx.setTabBarItem({
      index: 2,
      text: '关于我们',
      iconPath: '/images/us-off.png',
      selectedIconPath: '/images/us-on.png',
    })
  },
  showActionSheet:function(){
    var that = this;
    wx.showActionSheet({
      itemList: myItemList,
      itemColor:'#0000FF',
      success:function(res){
        console.log(myItemList);
        that.setData({
          tapIndex:res.tapIndex,
          tapItem:myItemList[res.tapIndex]
        })
      },
      fail:function(res){
        that.setData({
          tapIndex:-1,
          tapItem:'取消'
        })
      },
      complete:function(res){},
    })
  },
  onGetUserInfo: e => {
    console.log(e);
    if(e.detail.userInfo){
      this.setData({
        userInfo:e.detail.userInfo,
        hasUserInfo:true
      })
    } else {
      wx.showModal({
        title: e.detail.errMsg,
        content: '小程序需要用户授权获取公开信息才可以继续',
      })
    }
  },
  
  getOpenID:function(){
    var that = this;
    wx.showLoading({
      title: '获取openID...',
    })
    wx.cloud.callFunction({
      name:'login',
      data:{},
      complete:res=>{
        wx.hideLoading()
      },
      success:res=>{
        console.log('[云函数][login] user openid:', res.result.openid);
        that.setData({
          openID: '[云函数]获取openID成功： ' + res.result.openid,
          appID: '\n[云函数]获取appID成功： ' + res.result.appid,
          unionID: '\n[云函数]获取unionID成功： ' + res.result.unionid,
        })
      },
      fail: err => {
        console.log('[云函数][login] 调用失败', err);
        that.setData({
          openID: '[云函数]获取openID失败 ' + err,
        })
      }
    })
  },
  getDetail:function(){
    var userInf = this.data.userInfo;
    console.log(this.data);
    var gender = (userInf.gender == 1) ? " 男 " : (userInf.gender == 2) ? " 女 " : "未知";
    var detailStr = "性别：" + gender;
    detailStr = detailStr + "\n国家：" + userInf.country;
    detailStr = detailStr + "\n省份：" + userInf.province;
    detailStr = detailStr + "\n城市：" + userInf.city;
    this.setData({
      detail:detailStr
    })
  },
  doUpload:function(){
    var that = this;
    const fileID = this.data.fileID;
    if(fileID !=''){
      wx.cloud.deleteFile({
        fileList:[fileID]
      })
    }
    console.log(this.data);
    wx.chooseImage({
      count:22,
      sizeType:['compressed'],
      sourceType:['album', 'camera'],
      success: function(res) {
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0];
        console.log('filePath:',filePath);
        const cloudPath = 'img' + Date.now() + filePath.match(/\.[^.]+?$/)[0];
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件]成功：', res);
            that.setData({
              uploadSuccess: true,
              downloadSuccess: false,
              fileID: res.fileID,
              cloudPath: cloudPath,
              imagePath: filePath,
              downloadedFilePath: '',
            })
          },
          fail: e => {
            console.log('[上传文件]失败：', e);
            that.setData({
              uploadSuccess: false,
              fileID: '',
              cloudPath: '',
              imagePath: '',
            })
            wx.showToast({
              title: '上传失败',
              icon:'none',
            })
          },
          complete:()=>{
            wx.hideLoading()
          }
        })
      },
      fail:e=>{
        console.error(e);
      }
    })
  },
  doDownload:function(){
    var that = this;
    wx.showLoading({
      title: '下载中...',
    })
    wx.cloud.downloadFile({
      fileID:that.data.fileID,
      success:res=>{
        console.log("下载文件成功：", res);
        that.setData({
          downloadSuccess:true,
          downloadedFilePath:res.tempFilePath,
        })
        wx:wx.showModal({
          title: '文件下载成功',
          content: '文件路径：'+ that.data.downloadedFilePath,
          showCancel:false,
          confirmText:'确定',
          confirmColor:'#0000ff',
        })
      },
      fail:err=>{
        that.setData({
          downloadSuccess:false,
          downloadedFilePath:'',
        })
      },
      complete:()=>{
        wx.hideLoading();
      }
    })
  },
  previewImg:function(){
    wx.previewImage({
      urls: [this.data.downloadedFilePath],
      current:'',
    })
  },
  addRecord: function () {
    this.setData({
      opName: "add",
      finished: false
    })
  },
  delRecord: function () {
    this.setData({
      opName: "del",
      finished: false
    })
  },
  updRecord: function () {
    this.setData({
      opName: "upd",
      finished: false
    })
  },
  qryRecord: function () {
    this.setData({
      opName: "qry",
      finished: false
    })
  },
  makeDateString: function (dateObj) {
    return dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1) + "-" + dateObj.getDate();
  },
  makeTimeString: function (dateObj) {
    return dateObj.getHours() + ":" + dateObj.getMinutes()  + ":" + dateObj.getSeconds();
  },
  doAdd:function(e){
    console.log(e);
    var workContent = e.detail.value.workContent;
    var username=e.detail.value.username;
    var password=e.detail.value.password;
    if(workContent!=""){
      const db = wx.cloud.database();
      var myDate = new Date();
      db.collection('work_done').add({
        data:{
          date:this.makeDateString(myDate),
          time:this.makeTimeString(myDate),
          content:workContent,
          username:username,
          password:password,
        },
        complete:res=>{
          this.setData({
            finished:true
          })
        },
        success:res=>{
          this.setData({
            opResult:"操作完成，新增一条记录，_id为：\n",
            resData:res._id
          })
          wx.showToast({
            title: '新增记录成功',
          })
          console.log('[数据库][新增记录]成功，记录 _id：', res._id);
        },
        fail:err=>{
          wx.showToast({
            title: '新增记录失败',
            icon:'none'
          })
          console.error('[数据库][新增记录]失败：', err);
        }
      })
    }else{
      wx.showToast({
        title: '请输入事情描述！',
      })
    }
  },
  doDelete:function(e){
    console.log(e);
    var that = this;
    var itemID = e.detail.value.itemID;
    if(itemID != ""){
      const db = wx.cloud.database();
      db.collection('work_done').doc(itemID).get({
        success:res=>{
          console.log(res);
          this.setData({
            opResult:'查询记录成功: \n',
            resData:res.data
          })
          db.collection('work_done').doc(itemID).remove({
            complete:res=>{
              that.setData({
                finished:true
              })
            },
            success: res => {
              console.log('[数据库][删除记录]成功：', res);
              that.setData({
                opResult2:'已成功删除上面的记录。'
              })
            },
            fail: err => {
              wx.showToast({
                title: '删除记录失败',
                icon: 'none'
              })
              console.error('[数据库][删除记录]失败：', err);
            }
          })
        },
        fail: err => {
          wx.showToast({
            title: '查询记录失败',
            icon: 'none'
          })
          console.error('[数据库][查询记录]失败：', err);
        }
      })
    }else{
      wx.showToast({
        title: '请输入itemID!',
      })
    }
  },
  doUpdate:function(e){
    console.log(e);
    var that  = this;
    var itemID = e.detail.value.itemID;
    var workContent = e.detail.value.workContent;
    var username = e.detail.value.username;
    var password = e.detail.value.password;
    if (itemID != "") {
      const db = wx.cloud.database();
      db.collection('work_done').doc(itemID).get({
        success: res => {
          this.setData({
            opResult: '查询记录成功: \n',
            resData: res.data
          })
          db.collection('work_done').doc(itemID).update({
            data:{
              content:workContent,
              username:username,
              password:password,
            },
            complete: res => {
              that.setData({
                finished: true
              })
            },
            success: res => {
              console.log('[数据库][更新记录]成功：', res);
              that.setData({
                opResult2: '已成功更新上面的记录内容为：\n',
                resData2:workContent
              })
            },
            fail: err => {
              wx.showToast({
                title: '更新记录失败',
                icon: 'none'
              })
              console.error('[数据库][更新记录]失败：', err);
            }
          })
        },
        fail: err => {
          wx.showToast({
            title: '查询记录失败',
            icon: 'none'
          })
          console.error('[数据库][查询记录]失败：', err);
        }
      })
    } else {
      wx.showToast({
        title: '请输入itemID!',
      })
    }
  },
  doQuery:function(e){
    console.log(e);
    var workDate = e.detail.value.workDate;
    if(workDate != ""){
      const db = wx.cloud.database();
      db.collection("work_done").where({
        date:workDate
      }).get({
        complete: res => {
          this.setData({
            finished: true
          })
        },
        success: res => {
          this.setData({
            opResult: '操作完成，查询到' + res.data.length +'条记录：\n',
            resData: res.data
          })
          console.log('[数据库][查询记录]成功：', res)
        },
        fail: err => {
          wx.showToast({
            title: '查询记录失败',
            icon: 'none'
          })
          console.error('[数据库][查询记录]失败：', err);
        }
      })
    }else{
      wx.showToast({
        title: '请输入查询日期',
      })
    }
  },
  callFunction: function (e) {
    console.log('点击参数e：', e);
    var that = this;
    const username = e.detail.value.username, password = e.detail.value.password;
    console.log('username：' + username);    
    console.log('password：' + password);
    if(username > ''){
      wx.showLoading({
        title: '调用checkUser。。。',
      });
      wx.cloud.callFunction({
        name:'checkUser',
        data:{
          username:username,
          password:password
        },
        complete:res=>{
          wx.hideLoading();
        },
        success:res=>{
          console.log('[云函数][checkUser]调用成功', res);
          that.setData({
            checkedResult:res.result
          })
        },
        fail: err => {
          console.error('[云函数][checkUser]调用失败', err)
        }
      })
    }else{
      wx.showToast({
        title: '用户名不能为空！',
      })
    }
  },

  testJson: function() {
    var that = this
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url: 'https://api.inews.qq.com/newsqa/v1/query/pubished/daily/list?province=%E6%B9%96%E5%8C%97',
      headers:{
        'Content-Type':'application/json; charset=utf-8'
      },
      success: res => {
        console.log(res)
        console.log(res.data.data)
        console.log(res.data.data[0])
        console.log(res.data.data[0].confirm)
        console.log(res.data.data[0].country)
        console.log(res.data.data[0].date)
        that.setData({
          checkedResult: res.data.data
        })
      },
      complete: res => {
        wx.hideLoading();
      },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})