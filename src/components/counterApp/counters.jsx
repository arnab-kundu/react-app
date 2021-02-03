import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters })
    }

    handleDelete = (counterId) => {
        console.log('Delete clicked', counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters: counters })
    }

    handleIncrement = (counter) => {
        console.log(counter);
        //TODO
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} counter={counter} onIncrement={this.handleIncrement} onDelete={this.handleDelete} >
                        {/* Children prop */}
                        <h4>Counter #{counter.id}</h4>
                    </Counter>)}
            </React.Fragment>
        );
    }
}

export default Counters;