import React, { Component } from 'react';
import SinglePost from "./SinglePost";
import PropTypes from 'prop-types';

class Blog extends Component{
    render(){
        if(this.props.loading){
            return (
                <div className="col-lg-12 row marketing">
                    <h3>Loading.....</h3>
                </div>
            )
        }
        return (
            <div className="col-md-12">
                <div className="row marketing">
                    {this.props.posts.map(post => (
                        <SinglePost key={post.title} post={post} />
                    ))}
                </div>
            </div>
        )
    }
}

Blog.propTypes = {
   loading: PropTypes.bool.isRequired,
   posts: PropTypes.array
};

export default Blog;


