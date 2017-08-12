import React, {Component} from 'react';
import Header from "./Header";
import Content from "./Content";
import Blog from "./Blog";
import Footer from "./Footer";
import * as firebase from 'firebase';

class App extends Component {
    
    constructor(){
        super();
        this.state = {
            posts : [],
            loading : true
        }
    }

    componentWillMount() {
        let postsRef = firebase.database().ref('posts');
        postsRef.on('value', snapshot => {
            this.setState({
                posts: snapshot.val(),
                loading: false
            });
        }).bind(this);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="col-md-12">
                    <Content/>
                </div>
                <div className="col-md-12">
                    <Blog loading={this.state.loading} posts={this.state.posts}/>
                </div>
                <div className="col-md-12">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
