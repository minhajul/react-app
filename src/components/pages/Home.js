import React, {Component} from 'react';
import Header from "../partials/Header";
import Blog from "../partials/Blog";
import Footer from "../partials/Footer";
import * as firebase from 'firebase';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            posts : [],
            loading : true
        }
    }

    componentWillMount() {
        let postsRef = firebase.database().ref('posts');
        postsRef.on('child_added', snap => {
            let post = {
                id: snap.key,
                title: snap.val().title,
                description: snap.val().description,
            };
            this.setState({
                posts: [post].concat(this.state.posts),
                loading: false
            });
        }).bind(this);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <Blog loading={this.state.loading} posts={this.state.posts}/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
