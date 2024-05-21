import { Alert } from "bootstrap";
import React, { Component } from "react";

class LifecycleMethods extends Component {

    state = {
        name: ""
    }

    constructor() {
        super()
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
        return null
    }

    render() {
        console.log("render");
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <button onClick={() => {
                    this.setState({ name: "Arnab Kundu" })
                    alert("Press F12 to chack the logs for lifeCycleMethods");
                }
                }>Submit</button>
            </div>
        );
    }
}

export default LifecycleMethods