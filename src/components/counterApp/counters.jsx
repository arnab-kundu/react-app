import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() {
        const { onDelete, onIncrement, onReset, counters } = this.props;
        return (
            <React.Fragment>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    <Counter key={counter.id} counter={counter}
                        onIncrement={onIncrement}
                        onDelete={onDelete} >
                        {/* Children prop */}
                        <h4>Counter #{counter.id}</h4>
                    </Counter>)}
            </React.Fragment>
        );
    }
}

export default Counters;