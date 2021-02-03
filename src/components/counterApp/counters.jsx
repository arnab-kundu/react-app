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
    render() {
        return (
            <React.Fragment>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} >
                        {/* Children prop */}
                        <h4>Counter #{counter.id}</h4>
                    </Counter>)}
            </React.Fragment>
        );
    }
}

export default Counters;