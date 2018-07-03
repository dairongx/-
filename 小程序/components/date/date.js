// componets/date/date.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		weeks: ['日', '一', '二', '三', '四', '五', '六'],
		months: [],
		dates: [],
		year: 0,
		month: 0,
		date: 0,
		day: 0,
		now: [],
		ch: -1,
		startX: 0,
		startY: 0,
		endX: 0,
		endY: 0
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		monthInit: function (year) {
			let that = this
			let isleapyear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
			let months
			if (isleapyear) {
				months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
			} else {
				months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
			}
			that.setData({
				months: months
			})
		},
		init: function (now) {
			let that = this
			let year = now.getFullYear()
			that.monthInit(year)
			let month = parseInt(now.getMonth()) + 1
			let date = now.getDate()
			now.setDate(1)
			let day = now.getDay()
			let months = that.data.months
			let dates = []
			let len, lastMonth, nextMonth
			if (month == 12) {
				len = months[0] + day
				lastMonth = months[month - 2]
				nextMonth = months[0]
			} else if (month == 1) {
				len = months[11] + day
				lastMonth = months[11]
				nextMonth = months[month]
			} else {
				len = months[month - 1] + day
				lastMonth = months[month - 2]
				nextMonth = months[month]
			}
			let a = 1
			let b = 1
			for (let i = day - 1; i >= 0; i--) {
				dates[i] = lastMonth--
			}
			for (let j = day; j < len; j++) {
				dates[j] = a++;
			}
			for (let k = len; k < 42; k++) {
				dates[k] = b++
			}

			that.setData({
				year: year,
				month: month,
				date: date,
				day: day,
				dates: dates
			})
		},
		prev: function () {
			let year = this.data.year
			let month = this.data.month
			let prev = new Date()
			if (month == 2) {
				prev.setFullYear(year - 1)
				prev.setMonth(12)
			} else {
				prev.setFullYear(year)
				prev.setMonth(month - 2)
			}
			this.init(prev)
		},
		next: function () {
			let year = this.data.year
			let month = this.data.month
			let next = new Date()
			if (month == 11) {
				next.setFullYear(year + 1)
				next.setMonth(0)
			} else {
				next.setFullYear(year)
				next.setMonth(month)
			}
			this.init(next)
		},
		choose: function (e) {
			let index = e.currentTarget.dataset.index
			this.setData({
				ch: index
			})
		},
		touchStart: function (e) {
			let that = this
			that.setData({
				startX: e.touches[0].pageX,
				startY: e.touches[0].pageY
			})
		},
		touchMove: function (e) {
			let that = this
			that.setData({
				endX: e.touches[0].pageX,
				endY: e.touches[0].pageY
			})
		},
		touchEnd: function () {
			let that = this,
				startX = that.data.startX,
				startY = that.data.startY,
				endX = that.data.endX,
				endY = that.data.endY,
				x = startX - endX,
				y = startY - endY;

			if (x > 15) {
				that.next()
			}
			if (x < -15) {
				that.prev()
			}
		}
	},
	ready: function () {
		let now = new Date()
		let year = now.getFullYear()
		let month = parseInt(now.getMonth()) + 1
		let date = now.getDate()
		let nowDate = [year, month, date]
		this.setData({
			now: nowDate,
		})
		this.init(now)
	}
})