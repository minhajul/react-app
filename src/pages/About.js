import React, { Component } from 'react';
import Header from "../Header";
import AboutMe from "../AboutMe";
import Footer from "../Footer";

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            myInfo: {}
        };
    }

    componentDidMount(){
        fetch('https://api.github.com/users/minhajCSE')
            .then(response => response.json())
            .then(myInfo => this.setState({myInfo}));
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="col-md-12">
                   <AboutMe aboutMe={this.state.myInfo} />
                </div>
                <div className="col-md-12">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default About;
