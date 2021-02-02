//imrc to generate code 
import React, { Component } from 'react';

//cc to generate code
class Counter extends Component {
    state = {}
    render() {
        return (
            /**
             * return() can have only one single element. It does not support multiple element so while adding another button, 
             * We have to put it in into a <div></div> or <React.Fragment></React.Fragment>
             * Using <div> create a extra <div> in UI, to avoid extra <div> use <React.Fragment>*/
            <React.Fragment>
                <h1>Hello world</h1>
                <button>Increment</button>
            </React.Fragment>
        );
    }

}

export default Counter;