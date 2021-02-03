import React, { Component } from 'react';

class NavBar extends Component {
    state = {}

    render() {
        console.log('navbar', this.props.totalCounters)
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <span className="badge badge-pill badge-secondary m-2">{this.props.totalCounters}</span>
                </div>
            </nav>
        );
    }
}

export default NavBar;