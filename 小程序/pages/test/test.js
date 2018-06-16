// pages/test/test.js
let app = getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		value: 2,
		value2: 6.4,
		size: 30,
		disable: true
	},
	click() {
		this.setData({
			show: true
		})
	},
	cancel: function () {
		console.log('取消')
		this.setData({
			show: false
		})
	},
	confirm: function () {
		console.log('确定')
		this.setData({
			show: false
		})
	},
	change:function(e){
		let value = e.detail.value;
		this.setData({
			value: value
		})
	},
	change2: function (e) {
		let value2 = e.detail.value;
		this.setData({
			value2: value2
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// console.log(app.globalData.a)
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})