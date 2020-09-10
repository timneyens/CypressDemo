import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Todo from '../Todo/Todo';
import NewTodo from '../Todo/NewTodo';
import GetTodos from '../../HttpServices/Todos/GetTodosService';
import ToggleTodoItem from '../../Services/ToggleTodoItemService';
import AddTodoItem from '../../Services/AddTodoItemService';
import Navbar from '../Common/Navbar';

export default class Todos extends Component {
  constructor() {
    super();
    this.state = { todos: [] };

    this.addCreatedTodo = this.addCreatedTodo.bind(this);
    this.addCreatedTodoItem = this.addCreatedTodoItem.bind(this);
    this.toggleTodoItem = this.toggleTodoItem.bind(this);
    this.showNewTodo = this.showNewTodo.bind(this);
    this.showTodos = this.showTodos.bind(this);
  }

  componentDidMount() {
    GetTodos(this.showTodos);
  }

  showTodos(todos) {
    this.setState({ todos });
  }

  addCreatedTodo(todo) {
    const { todos } = this.state;
    this.setState({ todos: [...todos, todo], showNew: false });
  }

  addCreatedTodoItem(id, todoItem) {
    const { todos } = this.state;
    const updatedTodos = AddTodoItem(todos, id, todoItem);

    this.setState({ todos: updatedTodos });
  }

  toggleTodoItem(todoId, todoItemId) {
    const { todos } = this.state;
    const updatedTodos = ToggleTodoItem(todos, todoId, todoItemId);
    this.setState({ todos: updatedTodos });
  }

  showNewTodo() {
    this.setState({ showNew: true });
  }

  render() {
    const { todos, showNew } = this.state;
    return (
      <>
        <Navbar showNewTodo={this.showNewTodo} />
        <div className="m-5">
          <div className="container-fluid">
            <div className="row mt-4">
              {
                todos.map(todo => (
                  <Todo
                    key={todo.identifier}
                    addCreatedTodoItem={this.addCreatedTodoItem}
                    toggleTodoItem={this.toggleTodoItem}
                    {...todo}
                  />
                ))
              }
              {
                showNew
                && <NewTodo addCreatedTodo={this.addCreatedTodo} />
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}
