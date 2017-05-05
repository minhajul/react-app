import React, { Component } from 'react';
import Header from "../Header";
import AboutContent from "../AboutContent";
import Footer from "../Footer";

class About extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="col-md-12">
                   <AboutContent/>
                </div>
                <div className="col-md-12">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default About;
