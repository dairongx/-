import React, {Component} from 'react'
import '../date/date.css'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    name: 'qq',
                    height: 11
                },
                {
                    name: 'ww',
                    height: 22
                },
                {
                    name: 'ee',
                    height: 33
                }
            ],
        }
    }

    render() {
        return (
            <div className='box1'>
                {
                    this.state.todos.length > 0 && <p>todos</p>
                }
                <ul>
                {this.state.todos.map(function (el) {
                    return (
                            <li key={el.name}>{el.name}--{el.height}</li>
                    )
                })}
                </ul>
            </div>
        )
    }
}