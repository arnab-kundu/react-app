import React, { Component } from 'react';

class Counter extends Component {
    conditionalAttribute() {
        return this.props.counter.value === 0 ? "btn m-2 btn-warning" : "btn m-2 btn-primary";
    }

    conditionalRendering() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        // Here we can compare preProps with current props. 
        // And based on condition we can do API/Ajax call
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
        // Do memory cleanup over here. Like Remove timer or listeners etc.
        // To avoid memory leak.
    }

    render() {
        console.log('Counter - Rendered');
        //console.log(this.props.counter);
        return (
            <div>
                {this.props.children}
                <span className={this.conditionalAttribute()}>{this.conditionalRendering()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary m-2" >Increment</button>
                <button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }
}

export default Counter;