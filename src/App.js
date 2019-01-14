import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Addtodo from './components/layout/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'
import uuid from 'uuid';
import './App.css';

class App extends Component {
  //mark to complet task
markComplete = (id) => {
  console.log(id)
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })})
}
//delete todo list
delTodo = (id) => {
  console.log("hello BOO")
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}
//add todo list
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed:false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take Out the Trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Take a Bath',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to Indomaret',
        completed: false,
      }
    ]
  }

  render() {
    return (
      <Router>
      <div className="App">
       <div className= "container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Addtodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete=
              {this.markComplete} delTodo={this.delTodo}/>

            </React.Fragment>
          )} />
          <Route path="/About" component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
