import React, {Component} from 'react'
import './date.css'

class MyDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        let that = this;
        that.timer = setInterval(function () {
            that.setState({
                date: new Date().toLocaleTimeString()
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className='box'>
                <span>{this.state.date}</span>
            </div>
        )
    }
}

export default MyDate