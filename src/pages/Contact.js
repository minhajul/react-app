import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Contact extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="col-md-8 col-md-offset-2">
                    <h2>Sign Up Form</h2>
                    <hr/>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" placeholder="Password"/>
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