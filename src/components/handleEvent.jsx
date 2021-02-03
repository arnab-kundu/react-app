import React, { Component } from 'react';

class HandleEvent extends Component {
    state = {
        count: 0
    }

    // Avoid binding using arrow function
    // arrow function don't rebind 'this'. Its inherit. 
    handleIncrement = () => {
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