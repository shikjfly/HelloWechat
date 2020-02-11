// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env: 'xshi-xzhao',
  traceUser: true,
});
// 云函数入口函数
exports.main = async (event, context) => {
  console.log('event:', event);
  const username=event.username, password=event.password;
  var result='';
  try{
    const db = wx.cloud.database();
    var res = await db.collection('work_done').where({
      username:username,
    }).get();
    console.log('查询成功res：', res)
    if(res.data[0].password === password){
      result = '验证成功'
    }else{
      result = '密码错误'
    }
  } catch (e) {
    console.error('查询失败e：', e);
    result='用户名不存在';
  }
  return result
}