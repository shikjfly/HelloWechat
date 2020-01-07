//edu.js
//获取应用实例
const app = getApp();
var startN0, endN0, sumN0, rand, sumRand, timerID;
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

Page({
  data: {
    imgSrc: '/images/dog.jpg',
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
  },
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
  }




})