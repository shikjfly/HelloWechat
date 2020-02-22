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
  // 点击进入详情doDetail
  doDetail:function(e){
    var index = e.currentTarget.dataset.index; //获取点击的坐标
    var resData = this.data.resData; //获取数据库json数组
    var dateTime = resData[index].dateTime;
    var equip_code = resData[index].equip_code;
    var equip_comment = resData[index].equip_comment;
    var equip_fileID = resData[index].equip_fileID;
    var equip_name = resData[index].equip_name;
    var _id = resData[index]._id;
    wx.navigateTo({
      url: '../equip_detail/equip_detail?dateTime=' + dateTime + '&equip_code=' + equip_code + '&equip_comment=' + equip_comment + '&equip_fileID=' + equip_fileID + '&equip_name=' + equip_name + '&_id=' + _id,
    })
  },

  // 预览图片previewImg
  previewImg: function (e) {   
    var index = e.currentTarget.dataset.index; //获取点击的坐标
    var resData = this.data.resData; //获取数据库json数组
    var imgs = []; 
    for(var i=0; i<resData.length; i++){
      imgs[i] = resData[i].equip_fileID //对数据库json解析出图片地址，然后放入imgs图片数组
    }
    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs //预览图片的数组
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