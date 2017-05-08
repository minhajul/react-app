import React, { Component } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = { name: '', email: '', password: '' };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event){
        this.setState({ name : event.target.value })
    }

    handleEmailChange(event){
        this.setState({ email : event.target.value })
    }

    handlePasswordChange(event){
        this.setState({ password : event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = {
           name : this.state.name,
           email : this.state.email,
           password : this.state.password,
        };

        console.log(formData);
    }


    render(){
        return(
            <div className="container">
                <Header/>
                <div className="col-md-8 col-md-offset-2">
                    <h2>Sign Up Form</h2>
                    <hr/>
                    <form className="form-horizontal" onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={this.state.name} placeholder="Name" onChange={ this.handleNameChange } />
                            </div>
                        </div>
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
                                <button type="submit" className="btn btn-default">Sign in</button>
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

export default Contact;