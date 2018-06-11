# 小程序学习
##  wxml
### 数据绑定：使用{{}}
```
wxml: 
	<view>{{num}}</view>		
	<block wx:for="{{arr}}">
		<view>{{item}}</view>
	</block>	
js:       
	Page（{
		data：{            //只能通过setData改变data里的值
			num： 12,
			arr: [1,2,3]
		}
	}）
```
### 列表渲染：  wx:for
```
<block wx:for="{{arr}}">
		<view>{{index}}--{{item}}</view>
</block> 
     /*   默认下标 index，当前项默认为item
          可以使用wx:for-item="aa" 将默认item改为aa
              使用wx:for-index="ix"  将index改为ix   
     */
```
### wx: key  保证列表中项目的唯一性
```
可以提供2种值
   1.字符串
   2.*this  关键字
在使用wx：for时，{{}}与“”之间不能有空格，有空格则会将其转换成字符串
```
### 条件渲染：
#### wx:if ： 是否渲染
```
wx: if = "{{}}"      // if   true渲染
wx：elif = "{{}}"    // else if   true渲染  
wx：else             // else    else渲染
```
#### hidden：隐藏 ，使用dispaly来控制显示隐藏
```
hidden="{{hide}}"  // hide=true时隐藏，false显示
```