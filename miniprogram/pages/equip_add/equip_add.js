// pages/equip_add/equip_add.js
Page({
  data: {
    // 图片添加、预览、删除
    isShowAdd:true,
    isShowImg:false,
    // end 图片添加、预览、删除
  },
  // 格式：2020-12-16 16:40
  makeDateTimeString: function (dateObj) {
    return dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1) + "-" + dateObj.getDate() +" "+ dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
  },  
  // 新增设备信息
  doAdd:function(e){
    var tempFilePaths = this.data.tempFilePaths;
    if (tempFilePaths == undefined || tempFilePaths.length == 0) { //判断没有上传图片，或者删除图片之后，用默认图片替代
      tempFilePaths = [];
      tempFilePaths[0] = 'cloud://xshi-xzhao.7873-xshi-xzhao-1257979959/imgNo2.png';
    } else{
      // 图片文件上传云空间，调用uploadFile接口      
      var filePath = tempFilePaths[0];
      var cloudPath = 'equip' + Date.now() + filePath.match(/\.[^.]+?$/)[0];
      wx.cloud.uploadFile({
        cloudPath,
        filePath,
        success: res => {
          this.setData({
            filePath: res.fileID,
          });
          console.log('upload-xxxxxxxxxxxxxxeID', res)
          filePath = res.fileID;
        },
        fail: e => {
          console.log(e)
        },
      })
    }   

    if (e.detail.value.equip_name != '' && e.detail.value.equip_code != '') {
      console.log(filePath)
      var myDate = new Date();
      wx.cloud.database().collection('equipments').add({
        data: {
          dateTime: this.makeDateTimeString(myDate),
          equip_name: e.detail.value.equip_name,
          equip_code: e.detail.value.equip_code,
          equip_comment: e.detail.value.equip_comment,    
          equip_fileID: filePath              
        },        
        success:res=>{
          wx.showToast({
            title: '新增成功',
            // icon:'none',
          });
          setTimeout(function(){ //加了一个定时器，1秒之后跳转
            wx.navigateBack({
              delta: 1,
            });
          }, 500);          
        }
      })      
    } else {
      wx.showToast({
        title: '请输入设备名称和设备编号！',
        icon:'none',
      })
    }
  },
  //end doAdd新增

  //添加图片
  addImg: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1, // 上传图片上限值
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        that.setData({
          isShowAdd: false,
          isShowImg:true,
          tempFilePaths: res.tempFilePaths
        });             
      }
    })
  },
  // 预览图片previewImg
  previewImg: function (e) {
    wx.previewImage({
      //当前显示图片
      current: '',
      //所有图片
      urls: this.data.tempFilePaths //预览图片的数组
    })
  },
  //end 预览图片previewImg
  // 删除图片deleteImg
  deleteImg: function (e) {
    this.setData({
      isShowAdd: true,
      isShowImg: false,
    })
    this.data.tempFilePaths.splice(0,1); //删除临时路径的文件地址
  },
  //end 删除图片deleteImg


  




})