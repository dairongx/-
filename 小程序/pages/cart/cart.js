Page({

	/**
	* 页面的初始数据
	*/
	data: {
		carts: [
			{
				pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
				name: "日本资生堂洗颜",
				price: 200,
				isSelect: false,
				// 数据设定
				count: {
					quantity: 2,
					min: 1,
					max: 20
				},
			},
			{
				pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
				name: "倩碧焕妍活力精华露",
				price: 340,
				isSelect: false,
				// 数据设定
				count: {
					quantity: 1,
					min: 1,
					max: 20
				},
			},
			{
				pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
				name: "特效润肤露",
				price: 390,
				isSelect: false,
				// 数据设定
				count: {
					quantity: 3,
					min: 1,
					max: 20
				},
			},
			{
				pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
				name: "倩碧水嫩保湿精华面霜",
				price: 490,
				isSelect: false,
				// 数据设定
				count: {
					quantity: 1,
					min: 1,
					max: 20
				},
			},
			{
				pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
				name: "兰蔻清莹柔肤爽肤水",
				price: 289,
				isSelect: false,
				// 数据设定
				count: {
					quantity: 10,
					min: 1,
					max: 20
				},
			},
			{
				pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
				name: "LANCOME兰蔻小黑瓶精华",
				price: 230,
				isSelect: false,
				// 数据设定
				count: {
					quantity: 1,
					min: 1,
					max: 20
				},
			},
		],
		total: 0, // 总价
		selectAll: false // 是否全选
	},
	/**
* 生命周期函数--监听页面加载
*/
	onLoad: function (options) {

	},

	/**
	* 生命周期函数--监听页面初次渲染完成
	*/
	onReady: function () {

	},
	// 计算总价
	sum: function () {
		let that = this,
			carts = that.data.carts,
			total = 0,
			len = carts.length;
		for (let i = 0; i < len; i++) {
			if (carts[i].isSelect) {
				let sum = parseFloat(carts[i].price) * parseInt(carts[i].count.quantity);
				total += sum;
			}
		}
		that.setData({
			total: total
		})
	},
	// 选择单个
	select: function (e) {
		let index = e.currentTarget.dataset.index;
		let carts = this.data.carts;
		let flag = carts[index].isSelect;
		let change = `carts[${index}].isSelect`;
		this.setData({
			[change]: !flag
		})
		this.sum();
	},
	// 全选
	selectAll: function () {
		let status = !this.data.selectAll;
		let carts = this.data.carts;
		for (let i = 0; i < carts.length; i++) {
			carts[i].isSelect = status;
		}
		this.setData({
			carts: carts,
			selectAll: status
		})
		this.sum();
	},
	//改变数量
	countChange: function (e) {
		let that = this,
			carts = that.data.carts,
			op = e.currentTarget.id,
			index = e.currentTarget.dataset.index,
			quantity = carts[index].count.quantity,
			s = `carts[${index}].count.quantity`,
			q = 0;

		switch (op) {
			case 'reduce':
				q = quantity - 1
				if (q <= carts[index].count.min) {
					q = 1
				}
				that.setData({
					[s]: q
				})
				break;
			case 'add':
				q = quantity + 1
				if (q >= carts[index].count.max) {
					q = carts[index].count.max
				}
				that.setData({
					[s]: q
				})
				break;
			case 'input':
				q = e.detail.value;
				if (q <= carts[index].count.min) {
					q = 1
				} else if (q >= carts[index].count.max) {
					q = carts[index].count.max
				}
				that.setData({
					[s]: q
				})
				break;
			default:
				break;
		}
		this.sum();
	}

})