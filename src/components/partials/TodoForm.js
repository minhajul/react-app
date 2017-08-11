import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div className="form-group">
            <input className="form-control" onChange={props.handleChange} value={props.item} required/>
            <br/>
            <button className="btn btn-primary">Add</button>
        </div>
    </form>
);


TodoForm.propTypes = {
    handleSubmit : PropTypes.func,
    item : PropTypes.string
};