import React, { Component } from 'react';
import SinglePost from "./SinglePost";

class Blog extends Component{
    render(){
        return (
            <div className="row marketing">
                {this.props.posts.map(post => (
                    <SinglePost key={post.title} post={post} />
                ))}
            </div>
        )
    }
}


export default Blog;


