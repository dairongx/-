import React, {Component} from 'react'
import '../date/date.css'

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: '',
            select: 'b',
            select2: 'b',
            age: 0
        };
        this.change = this.change.bind(this)
    }

    change(e) {
        if (e.target.type === 'text') {
            this.setState({
                name: e.target.value
            })
        } else if (e.target.type === 'textarea') {
            this.setState({
                value: e.target.value
            })
        } else {
            this.setState({
                select: e.target.value
            })
        }

    }

    getFile(e){
        e.preventDefault();
        console.log(this.fileInput.name[0])
    }

    changeAge(e){
        this.setState({
            age: e.target.value
        })
    }

   /* componentDidMount(){
        setTimeout(()=>[
            this.setState({
                age: null
            })
        ],2000)
    }*/

    render() {
        return (
            <div className="box2">
                <form>
                    <input type="text" value={this.state.name} onChange={this.change}/>
                    <input type="number" value={this.state.age} name='age' onChange={e=>this.changeAge(e)}/>
                    <textarea name="" id="" cols="30" rows="10" value={this.state.value} onChange={this.change}/>
                    <select name="" id="" value={this.state.select} onChange={this.change}>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                    </select>
                    <input type="file" ref={input => {
                        this.fileInput = input;
                    }} onChange={this.getFile.bind(this)}/>
                    <input type="submit" value='提交'/>
                </form>
            </div>
        )
    }
}