import React, {Component} from 'react';
import Header from "../partials/Header";
import Blog from "../partials/Blog";
import Footer from "../partials/Footer";
import * as firebase from 'firebase';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            posts : []
            ,
            loading : true
        };
    }

    componentWillMount() {
        const posts = [];
        const postsRef = firebase.database().ref('posts');

        postsRef.once('value', snap => {
            snap.forEach(value => {
                let post = {
                    id: value.key,
                    title: value.val().title,
                    description: value.val().description,
                    posted: value.val().posted
                };
                posts.push(post)
            });

            this.setState({
                posts: posts,
                loading: false
            });
        });
    }

    componentDidMount(){
        const posts = [];
        const postsRef = firebase.database().ref('posts');
        postsRef.on('child_added', snap => {
            let post = {
                id: snap.key,
                title: snap.val().title,
                description: snap.val().description,
                posted: snap.val().posted
            };

            posts.push(post);

            this.setState({
                posts: posts,
                loading: false
            });
        });
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <Blog
                    loading={this.state.loading}
                    posts={this.state.posts}
                />
                <Footer/>
            </div>
        );
    }
}

export default Home;
