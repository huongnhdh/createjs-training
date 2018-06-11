import React, { Component } from 'react';
import Todo from './Todo'
import PropTypes from 'prop-types';

class Todos extends Component {
  
  render() {
    let todoitems;
    if (this.props.todos) {
        todoitems = this.props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
      });
    }  
    return (
      <div className="Todos">
        {todoitems}
        </div>
    );
  }
}
Todos.propTypes = {
  projects: PropTypes.array
}
export default Todos;
