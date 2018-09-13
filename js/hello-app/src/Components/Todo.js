import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    
    render() {
        return (
            <li className="Project">
                <strong> {this.props.todo.id} - {this.props.todo.title} </strong>: - {this.props.todo.userId} - {this.props.todo.completed} 
            </li>
        );
    }
}
Todo.propTypes = {
    todo: PropTypes.object
}

export default Todo;
