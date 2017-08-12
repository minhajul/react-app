import React, { Component } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import * as firebase from 'firebase';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedIn: false
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event){
        this.setState({ email : event.target.value })
    }

    handlePasswordChange(event){
        this.setState({ password : event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        let [email, password ] = [this.state.email,this.state.password];

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.catch(error => {
            console.log(error)
        });


        auth.onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                this.setState({
                    loggedIn: true
                })
            }else{
                console.log('User not found');
            }
        }).bind(this);
    }

    render(){
        if (this.state.loggedIn){
            return (
                <div className="container">
                    <Header/>
                    <div className="col-md-8 col-md-offset-2">
                        <h2>Welcome! You are logged in!</h2>
                    </div>
                    <div className="col-md-12">
                        <Footer/>
                    </div>
                </div>
            )
        }

        return(
            <div className="container">
                <Header/>
                <div className="col-md-8 col-md-offset-2">
                    <h2>Login Form</h2>
                    <hr/>
                    <form className="form-horizontal" onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" value={this.state.email} placeholder="Email" onChange={ this.handleEmailChange }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" value={this.state.password} placeholder="Password" onChange={ this.handlePasswordChange }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default">Login</button>
                            </div>
                        </div>
                    </form>
                    <br/>
                </div>
                <div className="col-md-12">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Login;