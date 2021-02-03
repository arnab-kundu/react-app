import React, { Component } from 'react';

class HandleEvent extends Component {
    state = {
        count: 0
    }

    constructor() {
        super();
        //Must call super constructor in derived class before accessing 'this'
        console.log('constructor', this)
    }

    handleIncrement() {
        // `this` cannot be access here. check console in chrome to see error
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