import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

SinglePost.propTypes = {
     post : PropTypes.object
};

export default SinglePost;

