import React, { Component } from 'react';
import SinglePost from "./SinglePost";
import PropTypes from 'prop-types';

class Blog extends Component{
    render(){
        if(this.props.loading){
            return (
                <div className="row marketing col-lg-12">
                    <h3>Loading.....</h3>
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

Blog.propTypes = {
   loading: PropTypes.bool.isRequired,
   posts: PropTypes.array
};

export default Blog;


