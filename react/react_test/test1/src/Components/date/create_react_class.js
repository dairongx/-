import React,{Component} from 'react'
import CreateReactClass from 'create-react-class'

var Child = CreateReactClass({
    getDefaultProps(){
        return {
            name: 'aaa',
            age: 22
        }
    },
    getInitialState(){
        return {
            todo: {title: 'react'}
        }
    },
    render(){
        return (
            <div>{this.props.name}--{this.props.age}--{this.state.todo.title}</div>
        )
    }
})
export default Child