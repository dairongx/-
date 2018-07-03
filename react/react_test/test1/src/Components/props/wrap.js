import React,{Component} from 'react'

class Wrap extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default class Content extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Wrap>
                    <h3>这是h3</h3>
                    <p>pppppp</p>
                </Wrap>
            </div>
        )
    }
}