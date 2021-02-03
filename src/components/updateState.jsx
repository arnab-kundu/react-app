import React, { Component } from 'react';

class UpdateState extends Component {
    state = {
        count: 0
    }
    handleIncrement = (some_id) => {
        // cannot update state like below
        // this.state.count++
        // Update state
        this.setState({ count: this.state.count + 1 })
        // check in chrome element tab. only span element getting updated in DOM, not all the element this is react.
        console.log(some_id);
    }

    // cannot pass parament in method in onClick. 
    // onClick have only the method reference.
    // so to pass parameter in method we can do like this
    // not using anymore
    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 })
    }

    render() {
        return (
            <React.Fragment>
                <span className="badge badge-primary m-2">{this.state.count}</span>
                {/* inline  function to avoid wrapper method like doHandleIncrement */}
                <button onClick={() => { this.handleIncrement({ id: 1 }) }} className="btn btn-secondary m-2">Increment</button>
            </React.Fragment>
        );
    }
}

export default UpdateState;