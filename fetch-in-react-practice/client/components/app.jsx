import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  addTodo(newTodo) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    };
    fetch('/api/todos', req)
      .then(response => response.json())
      .then(todo => {
        const allTodos = this.state.todos.concat(todo);
        this.setState({ todos: allTodos });
      });
    // v---OR---v ... whatever works, so long as the orig is unchanged
    // .then(data => this.setState({ todos: this.state.todos.map(x => x).concat(data) }));
  }

  toggleCompleted(todoId) {
    const prevToDo = this.state.todos.find(todoItem => {
      return todoItem.todoId === todoId;
    });
    const req = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !prevToDo.isCompleted })
    };
    fetch(`/api/todos/${todoId}`, req)
      .then(response => response.json())
      .then(updated => {
        const allTodos = this.state.todos.map(original => {
          return original.todoId === updated.todoId
            ? updated
            : original;
        });
        this.setState({ todos: allTodos });
      });
  }

  // v------ alt version using index & patchBody --------------v
  //
  // toggleCompleted(todoId) {
  //   const index = this.state.todos.findIndex(todoItem => {
  //     return todoItem.todoId === todoId;
  //   });
  //   const patchBody = {
  //     isCompleted: !this.state.todos[index].isCompleted
  //   };
  //   const req = {
  //     method: 'PATCH',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ patchBody })
  //   };
  //   fetch(`/api/todos/${todoId}`, req)
  //     .then(response => response.json())
  //     .then(updated => {
  //       const todosCopy = [...this.state.todos];
  //       todosCopy[index] = updated;
  //       this.setState({ todos: todosCopy });
  //     });
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
