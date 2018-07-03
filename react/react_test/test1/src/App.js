import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Move from './test/move'
/*import MyDate from './Components/date/date'
import List from './Components/list'
import MyForm from './Components/form/form'
import Child from './Components/lifting_state_up'
import Content from './Components/wrap'
import PropTest from './Components/props'*/
import Child from './Components/date/create_react_class'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '123',
            arr: [1, 2, 3]
        }
    }

    /*change(val){
        console.log(`val: ${val}`)
        this.setState({
            val: val
        })
    }*/

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Move/>
                <Child name='asddf'/>
                {/*<MyDate/>
                <List/>
                <MyForm/>
                <PropTest name={'asdfh'} sex={'b'} arr={this.state.arr}/>
                <Child val={this.state.val} onChange={this.change.bind(this)}/>
                <Child val={this.state.val} onChange={this.change.bind(this)}/>
                <Content/>*/}
            </div>
        );
    }
}

export default App;
