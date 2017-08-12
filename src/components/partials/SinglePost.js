import React, { Component } from 'react';

class SinglePost extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.description}</p>
            </div>
        );
    }
}

export default SinglePost;