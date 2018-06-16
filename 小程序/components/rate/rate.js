// componets/rate/rate.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		value: {            // 分值
			type: Number,
			value: 1,
			observer: function (newval, oldval, change) {
				if (!newval) {
					this.setData({         
						newval: 1
					})
				}
				this.setData({         // 将value值向上取整
					newval: Math.ceil(newval)
				})
			}
		},
		count: {             // 总的星数
			type: Number,
			value: 5
		},
		size: {            // 图标大小
			type: Number,
			value: 18
		},
		margin: {           //  图标之间的间距
			type: Number,
			value: 0
		},
		disable: {           //  能否更改
			type: Boolean,
			value: false
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		start: 0,
		newval: 1
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		touch: function (e) {
			let that = this;
			if (that.properties.disable || !e.changedTouches[0]) {
				return;
			}
			let start = that.data.start;
			let count = that.properties.count
			let end = parseInt(e.changedTouches[0].pageX);
			let value = Math.ceil((end - start) / (that.properties.size + (that.properties.margin * 2)))
			if (value < 0) {
				return;
			}
			value = (value > count) ? count : value;
			that.triggerEvent('change', {
				value: value
			})
		},
		touchMove: function (e) {
			let that = this;
			that.touch(e)
		},
		touchEnd: function (e) {
			let that = this;
			that.touch(e)
		}
	},
	ready: function () {
		let that = this;
		let query = wx.createSelectorQuery().in(that);
		query.select('.rate').boundingClientRect(function (res) {
			that.data.start = res.left || 0
		}).exec()
	}
})