//imrc to generate code 
import React, { Component } from 'react';

//cc to generate code
class Counter extends Component {
    // state contains data
    state = {
        count: 0,
        //set attribute to image src
        imageUrl: 'https://picsum.photos/200'
    }
    render() {
        return (
            /**
             * return() can have only one single element. It does not support multiple element so while adding another button, 
             * We have to put it in into a <div></div> or <React.Fragment></React.Fragment>
             * Using <div> create a extra <div> in UI, to avoid extra <div> use <React.Fragment>*/
            <React.Fragment>
                {/* set attribute to image src */}
                <img src={this.state.imageUrl} alt="" />
                {/* as class is a key word in HTML. class keyword cannot be use in JSX. 
                In place of class we have to use className in JSX */}
                <h1 className="badge badge-primary">Hello world</h1>
                <span>{this.formatCount()}</span>
                <p>{2 + 3}</p>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    //method also can be called in {}
    formatCount() {
        //object destructuring react
        const { count } = this.state
        //return jsx expression
        return count === 0 ? <h1>Zero</h1> : count
    }

}

export default Counter;