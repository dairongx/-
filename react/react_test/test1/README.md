## react学习
### jsx（js拓展语法）
jsx编写起来与html类似，但jsx中的元素必须闭合。可以使用‘{}’将任意js表达式嵌入jsx中。
```
    <div name={obj.name}>   //元素需要闭合 
    
    <div>{1+1}</div> 
    <div>{flag?'a':'b'}</div> 
    <div name={obj.name}/> 
```
- 因为在js中class为关键字，所以在jsx中class需要写成className、for需要写成htmlFor。
- jsx中style需是个对象,css属性采用驼峰式命名：color、fontSize、backgroundColor。
```
    let myStyle = {
        fontSize: '15px',
        color: '#333'
    }
    <p style={myStyle}></p> 
    或
    <p style={{fontSize: '15px',color: '#333'}}></p>  
```
### 元素渲染
使用ReactDom渲染组件。ReactDom.render(element,dom)
### 组件
#### React定义组件的方式
React组件名首字母必须大写
- 函数式组件
```js
    function Child(props) {
        return (
            <div>{props.name}</div>
        )
    }
```
- 类式组件
```js
    class Child extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return (
                <div>{this.props.name}</div>
            )
        }
    }
```
- create-react-class方式创建组件。getDefaultProps和getInitialState是它特有的钩子函数，都是在组件挂载之前被调用。
    - getDefaultProps：在该函数中可以设置默认的props。
    - getInitialState：在该函数中可以访问到props，返回一个对象或null。通过this.state.xxx访问，同类式组件中的state 
```js
    import createReactClass from 'create-react-class'
    var Child = createReactClass({
        getDefaultProps(){  // 为props设置默认值
            return {
                name: 'aa'  
            }  
        },
        getInitialState(){
            return{
                age: 12
            }
        },
        render(){
            return (
                <div>{this.props.name}--{this.state.age}</div>
            )
        }
    })
```
#### props
父组件传递给子组件的数据，在子组件不能直接修改（只读），只能通过父组件修改
- 数据从上到下传递
```
	<Child name={js表达式}></Child>
	<Child name='haha'></Child>
```
- props属性默认为true，以下2种写法效果一致
```
	<Child show={true} />
	<Child show/>
```
- 特殊props属性：props.children(相当于slot)，可以接受jsx、js表达式、组件、Function作为子元素，Boolean、null、undefined则会被忽略
```
	function Parent(props){
		return (
			<div>{props.children}</div>
		)
	}
	function Child(props){
		return (
			<Parent>
				<div>child</div>
			</Parent>
		)
	}
```
- 可以使用prop-types这个库进行props类型检查
```
	import PropTypes from 'prop-types'
	class Child extends Component{
		render(){
			return (<div>{this.props.name}</div>)
		}
	}
	Child.propTypes={
		name: PropTypes.string        // props.name 的类型为string
	}
```
	- 可以检查的类型有： bool、string、array、func、number、symbol、object
	- 也可以是一个react元素
	- 使用PropTypes.instansof(Person)  // 检查是否为Person的一个实例
	- 使用PropTypes.oneOf(['a','b'])  // 检查是否为数组中的一个元素
	- 使用PropTypes.oneOfType检查类型是否为其中的一种
	```
		PropTypes.oneOfType([    // 检查类型是否为其中的一个
			PropTypes.bool,
			PropTypes.string,
		])
	```
	- arrayOf、objectOf :  PropTypes.arrayOf(PropTypes.number)  // 全是数字的数组。
- 默认props值
```
	Child.defaultProps = {
		name: 'asd'
	}
```
#### state:state是组件渲染时的数据依据
```
	通过类构造函数初始化 this.state = { obj }

	不能直接修改state， this.state.date = '123';  // 错误
	需要通过setState来改变state的值 this.setState（{obj}）

	调用setState之后，并不会立即改变状态值，而是将修改的状态放入一个队列中，在多次调用setState时，可能会将多次修改合并成一次修改。

	当state异步更新时，不能采用对象的方式，可以接受一个函数
		this.setState((prevState，props)=>{
			// prevState  当前修改前的state
			// props  
			 return{
				  data: prevState.data+1
			 }
		})
```





