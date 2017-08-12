import React, { Component } from 'react';
import SinglePost from "./SinglePost";

class Blog extends Component{
    render(){
        if(this.props.loading){
            return (
                <div className="row marketing col-lg-12">
                    <h2>Loading.....</h2>
                </div>
            )
        }
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


