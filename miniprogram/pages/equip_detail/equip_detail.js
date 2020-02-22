// pages/equip_detail/equip_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      options:options,
    })
  },
  // 预览图片previewImg
  previewImg: function (e) {
    console.log('this.data.options', this.data.options)
    var imgs = [];
    imgs[0] = this.data.options.equip_fileID
    wx.previewImage({
      //当前显示图片
      current: '',
      //所有图片
      urls: imgs //预览图片的数组
    })
  },
  // 删除
  doDelete:function(){
    // 删除json数据库
    var _id = this.data.options._id;
    wx.cloud.database().collection('equipments').doc(_id).remove({
      success:res=>{
        wx.navigateBack({
          delta:1
        })
      },
    });
    // 删除云端图片
    var equip_fileID = this.data.options.equip_fileID;
    if (equip_fileID != 'cloud://xshi-xzhao.7873-xshi-xzhao-1257979959/imgNo2.png'){
      wx.cloud.deleteFile({
        fileList: [equip_fileID],
      });  
    }   
  },
  doSure:function(){
    wx.navigateBack({
      delta: 1
    })
  }



})