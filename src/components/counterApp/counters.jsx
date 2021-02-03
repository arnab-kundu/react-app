import React, { Component } from 'react';
import Counter from './counter'

class COunters extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </React.Fragment>
        );
    }
}

export default COunters;