Component({
	properties: {      // 组件的对外属性，在组件外可通过 title=“新标题” 的形式改变默认值
		title: {
			type: String,
			value: '提示'
		},
		content: {
			type: String,
			value: '提示内容'
		},
		cancel: {
			type: String,
			value: '取消'
		},
		confirm: {
			type: String,
			value: '确定'
		},
		show:{
			type: Boolean,
			value: false
		}
	},
	data: {                           // 组件data，
		
	},
	methods: {
		// 组件内部方法，建议使用  _  开头明名
		_cancel: function () {
			this.triggerEvent('cancel')   // triggerEvent 触发cancel事件
		},
		_confirm: function () {
			this.triggerEvent('confirm')
		}
	}
})