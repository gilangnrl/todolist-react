import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';

class TodoItem extends Component {

  getStyle = () => {
    const setTodo = this.props.todo.completed
      return {
        padding: '10px',
        background: '#f4f4f4',
        color: setTodo ? '#b6b6b6': '#333',
        borderBottom: '1px #ccc solid',
        textDecoration: setTodo ?'line-through' : 'none'
      }
  }
markComplete=(e)=> {
  console.log(this.props);
}

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          { title }
          <button className="delBtn" onClick={this.props.delTodo.bind(this, id)}>Delete</button>
        </p>
      </div>
    )
  }
}


//PropType
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
export default TodoItem
