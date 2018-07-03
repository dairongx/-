import React, {Component} from 'react'
// import './test.css'
import './test2.less'

export default class Move extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endX: 0,
            endY: 0
        };
        this.flag = false;
       /* this.$width = document.documentElement.clientWidth;
        this.$height = document.documentElement.clientHeight;
        this.x = 0;
        this.y = 0;*/
        this.startX = 0;
        this.startY = 0;
        window.onmousemove = e => this.mousemove(e);
        window.onmouseup = e => this.mouseup(e);
        window.onresize = e => this.resize(e);
    }

    mousedown(e) {
        this.startX = e.clientX;
        this.startY = e.clientY;
     /*   this.x = e.clientX;
        this.y = e.clientY;*/
        this.flag = true;
    }

    mousemove(e) {
        let moveX, moveY;
        if (this.flag) {
            /*if (Math.abs(e.clientX - this.x) <= 0) {
                moveX = 0
            } else if (Math.abs(e.clientX + this.x) >= this.$width) {
                moveX = this.$width - 102
            } else {
                moveX = this.state.endX + (e.clientX - this.startX)
            }

            if (Math.abs(e.clientY - this.y) <= 0) {
                moveY = 0
            } else if (Math.abs(e.clientY + this.y) >= this.$height) {
                moveY = this.$height - 102
            } else {
                moveY = this.state.endY + (e.clientY - this.startY);
            }*/
            moveX = this.state.endX + (e.clientX - this.startX);
            moveY = this.state.endY + (e.clientY - this.startY);
            this.setState({
                endX: moveX,
                endY: moveY
            });
            this.startX = e.clientX;
            this.startY = e.clientY;
        }
    }

    mouseup() {
        this.flag = false;
        this.startX = 0;
        this.startY = 0;
    }

    resize() {
        /*this.$width = document.documentElement.clientWidth;
        this.$height = document.documentElement.clientHeight;*/
    }

    render() {
        return (
            <div className='box' onMouseDown={e => this.mousedown(e)}
                 style={{transform: 'translate(' + this.state.endX + 'px,' + this.state.endY + 'px)'}}>
                <p>font-size:13px</p>
            </div>
        )
    }
}