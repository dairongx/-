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
















