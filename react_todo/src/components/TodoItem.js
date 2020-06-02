import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };
  // markComplete = () => {
  //   console.log(this.props);
  // };
  render() {
    //   With this we'll reduce the code sto we won't type this.props.todo ... we only extract the properties and call them
    const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {/* We bind this and id so the id would be available at a higher level */}
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {'  '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            {' '}
            x
          </button>
        </p>
      </div>
    );
  }
}

// Proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
