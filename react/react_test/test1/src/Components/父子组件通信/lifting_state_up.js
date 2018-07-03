import React, {Component} from 'react'  

export default class Child extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            val: this.props.val
        }*/
        this.handler = this.handler.bind(this)
    }

    handler(e){
        let val = e.target.value;
        /*this.setState({
            val: val
        })*/
        this.props.onChange(val)
    }

    render(){
        return (
            <div className='box3'>
                <input type="text" value={this.props.val} onChange={this.handler}/>
            </div>
        )
    }
}