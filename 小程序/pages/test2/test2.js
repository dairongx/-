//index.js
//获取应用实例
import citys from './citys.js'
const app = getApp()

Page({
	data: {
		cityData: [],
		pros: [],
		citys: [],
		cons: [],
		addr: [0, 0, 0],
		pro: '',
		city: '',
		con: '',
	},
	addrInit(arr) {
		let pros = [],
			citys = [],
			cons = [],
			pro = '',
			city = '',
			con = '',
			that = this,
			addr = that.data.addr;

		if (addr[0] != arr[0]) {
			addr = [arr[0], 0, 0]
			that.setData({
				addr: addr
			})
		} else {
			if (addr[1] != arr[1]) {
				addr = [arr[0], arr[1], 0]
				that.setData({
					addr: addr
				})
			} else {
				addr = [arr[0], arr[1], arr[2]]
				that.setData({
					addr: addr
				})
			}
		}
		let citysData = that.data.cityData
		pros = citysData.map(el => el.name)
		pro = pros[addr[0]]
		if (citysData[arr[0]].sub) {
			citys = citysData[arr[0]].sub.map(el => el.name)
			city = citys[addr[1]]
		} else {
			citys = []
			city = ''
		}
		if (citysData[arr[0]].sub[arr[1]].sub) {
			cons = citysData[arr[0]].sub[arr[1]].sub.map(el => el.name)
			con = cons[addr[2]]
		} else {
			cons = []
			con = ''
		}

		that.setData({
			pros: pros,
			citys: citys,
			cons: cons,
			pro: pro,
			city: city,
			con: con
		})
	},
	bindchange(e) {
		let arr = e.detail.value;
		this.addrInit(arr);
	},

	onLoad: function () {
		let arr = this.data.addr
		this.setData({
			cityData: citys.cityData
		})
		this.addrInit(arr)
	}
})