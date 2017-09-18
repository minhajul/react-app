import React, { Component } from 'react';
import Header from "../partials/Header";
import AboutMe from "../partials/AboutMe";
import Footer from "../partials/Footer";

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            myProfile: {}
        };
    }
    
    async fetchGithubProfile(){
        const response = await fetch('https://api.github.com/users/minhajCSE');
        return await response.json();
    }

    componentDidMount(){
        let profile = JSON.parse(localStorage.getItem('profile'));
        if (profile !== null){
            this.setState({
                myProfile : profile
            })
        }else {
            this.fetchGithubProfile()
                .then(myProfile => {
                    this.setState({
                        myProfile: myProfile
                    });
                    localStorage.setItem('profile', JSON.stringify(myProfile));
                }).catch(error => {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="col-md-12">
                   <AboutMe aboutMe={this.state.myProfile} />
                </div>
                <div className="col-md-12">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default About;


