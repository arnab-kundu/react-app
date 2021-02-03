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
                <span className={this.conditionalAttribute()}>{this.conditionalRendering()}</span>
                <button onClick={this.handleIncrement} className="btn btn-primary m-2" >Increment</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
}

export default Counter;