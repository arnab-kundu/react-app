import React, { Component } from "react";
import { useNavigate } from "react-router-dom"
import "../../styles/login_twitter.css"
class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="logo">
                        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""></img>
                    </div>
                    <div className="text-center mt-4 name">
                        Twitter
                    </div>
                    <form className="p-3 mt-3">
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text" name="userName" id="userName" placeholder="Username"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    this.state.username = e.target.value
                                }}
                            ></input>
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password" name="password" id="pwd" placeholder="Password"
                                onChange={(e) => { this.state.password = e.target.value }}
                            ></input>
                        </div>
                        <label className="btn mt-3" onClick={() => console.log("Username: " + this.state.username, "Password: " + this.state.password)}>Login</label>
                    </form>
                    <div className="text-center fs-6">
                        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;