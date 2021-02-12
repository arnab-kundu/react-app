import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results[0]);
        this.setState({ person: data.results[0], loading: false })
    }
    reload = async () => {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results[0]);
        this.setState({ person: data.results[0], loading: false })
    }
    render() {
        console.log('Counters - Rendered');
        const { onDelete, onIncrement, onReset, counters } = this.props;
        return (
            <React.Fragment>
                <div className='row'>
                    <div className=".col-sm-4">
                        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                        {counters.map(counter =>
                            <Counter key={counter.id} counter={counter}
                                onIncrement={onIncrement}
                                onDelete={onDelete} >
                                {/* Children prop */}
                                <h4>Counter #{counter.id}</h4>
                            </Counter>)}
                    </div>
                    <div className=".col-sm-4">
                        {this.state.loading ? <p>loading...</p> :
                            <div>
                                <img src={this.state.person.picture.large} alt="" />
                                <p>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</p>
                            </div>}
                        <button onClick={this.reload}>Reload</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Counters;