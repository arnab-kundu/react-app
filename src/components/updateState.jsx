import React, { Component } from 'react';

class UpdateState extends Component {
    state = {
        count: 0
    }
    handleIncrement = () => {
        // cannot update state like below
        // this.state.count++
        // Update state
        this.setState({ count: this.state.count + 1 })
        // check in chrome element tab. only span element getting updated in DOM, not all the element this is react.
    }
    render() {
        return (
            <React.Fragment>
                <span className="badge badge-primary m-2">{this.state.count}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary m-2">Increment</button>
            </React.Fragment>
        );
    }
}

export default UpdateState;