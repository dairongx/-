//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		title: '小程序',
		list:['a','b','c','d'],
		arr: [
			{
				a: 'aaa',
				b: true
			},
			{
				a: 'bbb',
				b: false
			}
		]
	},

	onLoad: function () {

	},
	click:function(e){
		console.log(e)
	},
	change:function(){
		let title = this.data.title;
		console.log(title);
		this.data.title = '改变';
		console.log(this.data.title);
	},
	change2:function(){
		this.data.title = '改变';
		console.log(this.data.title);
		this.setData({
			title: 'setData改变了'
		})
		console.log(this.data.title);
	},
	change3:function(){
		let arr = this.data.arr;
		for(let i=0;i<arr.length;i++){
			arr[i].b = !arr[i].b
		}
		this.setData({
			arr: arr
		})
	},
	change4:function(){
		//改变arr[0].b的值
		//1.
		// this.setData({
		// 	'arr[0].b': false
		// })

		//2.
		let b = 'arr[0].b';
		this.setData({
			[b]: false
		})
	}
})
