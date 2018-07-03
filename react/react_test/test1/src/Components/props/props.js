import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class PropsTest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.sex}</p>
                <p>{this.props.cc}</p>
            </div>
        )
    }

}

PropsTest.defaultProps = {
    cc: 'lisi'
}

PropsTest.propTypes = {
    name: PropTypes.string,
    sex: PropTypes.oneOf(['a','b']),
    arr: PropTypes.arrayOf(PropTypes.number)
}