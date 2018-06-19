// pages/mine/album/album.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrls: [
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
		current: 0,
		dots: false,
		autoplay: false,
		circular: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	swiperChange: function (e) {
		let current = e.detail.current;
		this.setData({
			current: current
		})
	},
	prev: function () {
		let swiper = this.data.imgUrls;
		let current = this.data.current;
		let prev
		if (this.data.circular){
			prev = current>0 ? current-1 : swiper.length-1; 
		}else{
			prev = current > 0 ? current - 1 : 0;
		}
		this.setData({
			current: prev
		})
	},
	next: function () {
		let swiper = this.data.imgUrls;
		let current = this.data.current;
		let next
		if (this.data.circular) {
			next = current < swiper.length - 1 ? current + 1 : 0;
		}else{
			next = current < swiper.length - 1 ? current + 1 : swiper.length - 1;
		}
		this.setData({
			current: next
		})
	},
	dots: function () {
		let dots = !this.data.dots
		this.setData({
			dots: dots
		})
	},
	autoplay: function () {
		let autoplay = !this.data.autoplay
		this.setData({
			autoplay: autoplay
		})
	},
	circular: function () {
		let circular = !this.data.circular
		this.setData({
			circular: circular
		})
	}
})