import React, { Component } from 'react';

class HandleEvent extends Component {
    state = {
        count: 0
    }

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        // bind 'this' with handleIncrement
        console.log('Increment CLicked', this.state.count)
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
            </React.Fragment>
        );
    }
}

export default HandleEvent;