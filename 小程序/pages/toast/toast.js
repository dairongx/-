// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  toast(){
	wx.showToast({
		title: 'toast',
		icon: 'success'
	})
  },
  model(){
	wx.showModal({
		title: 'model',
		content: 'showModel',
		success:function(e){
			console.log(e)
			if (e.confirm){
				console.log('点击了确定')
			}
			if(e.cancel){
				console.log('点击了取消')
			}
		}
	})
  },
  loading1(){
	wx.showToast({
		title: '加载中...',
		icon: 'loading'
	})
  },
  loading2(){
	wx.showLoading({
		title: '加载中...',
	})
	setTimeout(function(){
		wx.hideLoading();
	},1500)
  }
})