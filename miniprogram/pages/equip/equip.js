// pages/equip/equip.js
Page({
  data: {
  
  },
  onLoad: function (options) {
  },
  onShow: function () {
    this.getOpenID();
    this.getEquip();
  },
  search_function: function(e) {
    var value = e.detail.value;
    console.log("------->" + value);
  },
  //新增设备
  addEquip:function(){
    wx.navigateTo({
      url: '../equip_add/equip_add',
    })
  },
  //获取设备列表
  getEquip: function () {
    const db = wx.cloud.database();
    db.collection('equipments').where({
      // _openid: "oj8hN5aCF3vp3qoWbFtfP38fqDBE"
    }).get({
      success:res=>{
        this.setData({
          resData:res.data
        })
      }
    })
  },
  // 获取用户ID
  getOpenID: function () {
    var that = this;
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        that.setData({
          openID: res.result.openid,
        })
      },
      fail: err => {
        console.log('[云函数][login] 调用失败', err);
      }
    })
  },


})