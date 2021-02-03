import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/counterApp/navBar';
import Counters from './components/counterApp/counters';

class App extends Component {
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
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset} />
        </main>
      </React.Fragment >
    );
  }
}

export default App;
