import React, {Component} from 'react';
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import * as firebase from 'firebase';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            loading: true
        };
    }

    componentWillMount() {
        let singlePost = firebase.database().ref('posts').child('0');
        singlePost.on('value', snap => {
            this.setState({
                post: snap.val(),
                loading: false
            })
        });

        console.log(this.state.post);
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="container">
                    <Header/>
                    <div className="col-md-12">
                        <h2>Loading.....</h2>
                    </div>
                    <Footer/>
                </div>
            )
        }
        return (
            <div className="container">
                <Header/>

                <div className="col-md-12">
                    <h4>{this.state.post.title}</h4>
                    <p>{this.state.post.description}</p>
                </div>

                <Footer/>

            </div>
        )
    }
};


export default Details;