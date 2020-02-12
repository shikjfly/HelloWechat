// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idBack:'back',
    idClear:'clear',
    idPon:'+-',
    idPlus:'+',
    idMinus:'-',
    idMult:'x',
    idDiv: '÷',
    id9: '9',
    id8: '8',
    id7: '7',
    id6: '6',
    id5: '5',
    id4: '4',
    id3: '3',
    id2: '2',
    id1: '1',
    id0: '0',
    idPoint: '.',
    idIs: '=',
    screenData:'0',
    lastIsOperator:false,
    arr:[],
    logs:[]
  },
  history:function(){
    wx.navigateTo({
      url: '../calList/calList',
    })
  },
  clientButton: function (event) {
    console.log(event.target.id);
    console.log('event:', event);
    console.log('this:', this);
    var id = event.target.id; //获取点击的id号
    var data = this.data.screenData;//获取结果栏数据
    if(id==this.data.idBack){ //点击退格按钮
      if(data=="0"){
        return
      }else{
        data = data.substring(0,data.length-1);//去除最后一个字符串返回
        if(data==""||data=="-"){
          data="0";
        }
      }
      this.data.arr.pop(); //删除数组最后一个元素
      this.setData({
        screenData:data,
      })
    }else if (id == this.data.idClear) { //点击清屏按钮
      this.setData({
        screenData:0, // 结果数据清零
      })
      this.data.arr.length = 0;//数组也清零
    } else if (id == this.data.idPon) { //点击+/-按钮
      if(data.substring(0,1) == "-"){ //如果第一个字符串是负号
        data = data.substring(1, data.length);
        this.data.arr.shift();
      }else{//如果是正号
        data = "-" +data;
        this.data.arr.unshift("-");
      }
      this.setData({
        screenData:data,
      })
    } else if (id == this.data.idIs) { //点击等号按钮
      var data = this.data.screenData;
      if(data=="0"){ return }
      // console.log(data)
      var lastWord = data.substring(data.length-1 , data.length);
      if(isNaN(lastWord)){ return }
      var num = "";
      var optArr=[];
      var arr = this.data.arr;
      // console.log(arr);
      for(var i in arr){
        if(isNaN(arr[i])==false || arr[i]==this.data.idPon || arr[i]==this.data.idPoint){
          num += arr[i];
        }else{
          optArr.push(Number(num));
          optArr.push(arr[i]);
          num = "";
        }
      }
      optArr.push(Number(num));
      // console.log(optArr);
      var result = Number(optArr[i]*1.0);
      for(var i=1; i<optArr.length; i++){
        if (isNaN(optArr[i])) {
          if (optArr[i] == this.data.idPlus) { result += Number(optArr[i + 1]) }
          else if (optArr[i] == this.data.idMinus) { result = Number(optArr[i + 1]) }
          else if (optArr[i] == this.data.idMult) { result *= Number(optArr[i + 1]) }
          else if (optArr[i] == this.data.idDiv) { result /= Number(optArr[i + 1]) };
        }
      }
      var log = data+"="+result;
      this.data.logs.push(log);
      wx.setStorageSync("callLogs", this.data.logs);
      this.data.arr.length = 0;
      this.data.arr.push(result);
      this.setData({
        screenData:result
      })
      console.log(log);

    } else{ //数字及运算符
      if(data == "0"){
        if (id == this.data.idPlus || id == this.data.idMinus || id == this.data.idMult || id == this.data.idDiv ){ 
          return;       
        }
        this.setData({
          screenData:event.target.id
        })
        this.data.arr.push(id);
      } else {   
        if (id == this.data.idPlus || id == this.data.idMinus || id == this.data.idMult || id == this.data.idDiv) {
          if(this.data.lastIsOperator == true){
            return;
          }
        }
        this.setData({
          screenData: event.target.id
        })
        this.data.arr.push(id);   
        console.log(this.data.arr)
        if (id == this.data.idPlus || id == this.data.idMinus || id == this.data.idMult || id == this.data.idDiv) {        
          this.setData({
            lastIsOperator:true 
          })
        }else{
          this.setData({
            lastIsOperator: false
          });
        }
      }
    }
  }

})