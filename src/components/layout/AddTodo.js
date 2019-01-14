import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Addtodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  onSubmit = (e) => {
    const listTitle = this.state.title
    e.preventDefault()
    if(listTitle === ''){
      alert("Wajib di isi")
    }else {
    this.props.addTodo(listTitle);
    this.setState({ title: '' })
  }
  } 

  render() {
    return (
      <form onSubmit= {this.onSubmit} style={{display: 'flex'}}>
          <input 
          type="text" 
          name="title" 
          style={{flex: '10', padding: '5px'}}
          placeholder="Add Todo..." 
          value={this.state.title}
          onChange={this.onChange}
          />
          <input
          type="submit" 
          value="submit" 
          className="btn" 
          style={{flex: '1', border: 'none', boxShadow: 'none'}} />
      </form>
    )
  }
}

Addtodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
export default Addtodo
