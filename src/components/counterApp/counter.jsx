import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value
    }

    conditionalAttribute() {
        return this.state.count === 0 ? "badge m-2 badge-warning" : "badge m-2 badge-primary";
    }

    conditionalRendering() {
        return this.state.count === 0 ? "Zero" : this.state.count
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.children}
                <span className={this.conditionalAttribute()}>{this.conditionalRendering()}</span>
                <button onClick={this.handleIncrement} className="btn btn-primary m-2" >Increment</button>
            </div>
        );
    }

    handleIncrement = () => {
        // props cannot be edited. Its read only. To verify uncomment next line code, hit increment 
        // and check console, will get error mentioned in 2nd next line.
        // this.props.value = 0;
        // Cannot assign to read only property 'value' of object
        this.setState({ count: this.state.count + 1 })
    }
}

export default Counter;