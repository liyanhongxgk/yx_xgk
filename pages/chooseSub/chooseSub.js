const app = getApp()

Page({
  onLoad() {
    var that = this;
    wx.request({
      url: 'http://192.168.1.6:3000/user/majors',
      success: function (data) {
        console.log(data);
        that.setData({
          subjects: data.data
        });
      }
    })
  },
  changeColor: function (event) {
    if(event.target.){

    }
  }

})