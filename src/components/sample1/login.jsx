import React, { Component } from "react";
import '../../styles/login.css'
class LoginSample extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h3>Welcome</h3>
                            <p>You are 30 seconds away from earning your own money!</p>
                        </div>
                        <div className="col-md-9 register-right">
                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="newuser-tab" data-toggle="tab" href="#newuser" role="tab" aria-controls="newuser" aria-selected="false">New User</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <h3 className="register-heading">Login</h3>
                                    <div className="row register-form">
                                        <div className="col-md-12 profile_card">
                                            <form className="form-inline">
                                                <div className="form-group">
                                                    <i className="fa fa-envelope-o"></i>
                                                    <input type="text" className="form-control" placeholder="Email" defaultValue=""/>
                                                </div>
                                                <div className="form-group">
                                                    <i className="fa fa-lock"></i>
                                                    <input type="password" className="form-control" placeholder="Password *" defaultValue=""/>
                                                </div>
                                                <div className="float-right">
                                                    <input type="submit" className="btn btn-primary" value="Register" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="newuser" role="tabpanel" aria-labelledby="newuser-tab">
                                    <h3 className="register-heading">New User</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" maxLength="10" minLength="10" className="form-control" placeholder="Phone *" value="" />
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Confirm Password *" />
                                            </div>
                                            <div className="float-right">
                                                <input type="submit" className="btn btn-primary" value="Register" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginSample