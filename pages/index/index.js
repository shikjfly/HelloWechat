//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var navs = this.loadNavData();
    that.setData({
      navs: navs
    })
  },
  navBtn: function (e) {
    console.log(e);
    var id = e.currentTarget.id;
    wx.showToast({
      title: '按钮被点击',
      duration: 2000,
      mask: true,
    })
  },
  eduBtn:function(){
    wx.switchTab({
      url: '../edu/edu',
    })
  },
  loadNavData: function () {
    var navs = [];
    var navs0 = new Object();
    navs0.img = "/images/icons/edu.png";
    navs0.name = "教学";
    navs0.bindtap = "eduBtn"
    navs0.width = "25";
    navs0.height = "25";
    navs[0] = navs0;
    var navs1 = new Object();
    navs1.img = "/images/icons/plane.png";
    navs1.name = "机票";
    navs1.width = "25";
    navs1.height = "25";
    navs[1] = navs1;
    var navs2 = new Object();
    navs2.img = "/images/icons/express.png";
    navs2.name = "快递";
    navs2.width = "25";
    navs2.height = "25";
    navs[2] = navs2;
    var navs3 = new Object();
    navs3.img = "/images/icons/tdd.png";
    navs3.name = "淘点点";
    navs3.width = "25";
    navs3.height = "25";
    navs[3] = navs3;
    var navs4 = new Object();
    navs4.img = "/images/icons/xykhq.png";
    navs4.name = "信用卡还款";
    navs4.width = "25";
    navs4.height = "25";
    navs[4] = navs4;
    var navs5 = new Object();
    navs5.img = "/images/icons/yeb.png";
    navs5.name = "余额宝";
    navs5.width = "25";
    navs5.height = "25";
    navs[5] = navs5;
    var navs6 = new Object();
    navs6.img = "/images/icons/zz.png";
    navs6.name = "转账";
    navs6.width = "25";
    navs6.height = "25";
    navs[6] = navs6;
    var navs7 = new Object();
    navs7.img = "/images/icons/car.png";
    navs7.name = "打车";
    navs7.width = "25";
    navs7.height = "25";
    navs[7] = navs7;

    return navs;
  }


})