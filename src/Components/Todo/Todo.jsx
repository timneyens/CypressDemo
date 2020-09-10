import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './Item/TodoItem';
import NewTodoItem from './Item/NewTodoItem';

class Todo extends PureComponent {
  render() {
    const { identifier, todoItems, title, addCreatedTodoItem, toggleTodoItem } = this.props;
    return (
      <div className="col-md-3">
        <div className="card shadow mb-4">
          <div className="card-header">
            <span>{title}</span>
          </div>
          <div className="card-body">
            {
              todoItems.map(todoItem => (
                <TodoItem
                  key={todoItem.identifier}
                  todoId={identifier}
                  toggleTodoItem={toggleTodoItem}
                  {...todoItem}
                />
              ))
            }
            <NewTodoItem addCreatedTodoItem={addCreatedTodoItem} identifier={identifier} />
          </div>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string,
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      identifier: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  addCreatedTodoItem: PropTypes.func.isRequired,
  toggleTodoItem: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  title: '',
  todoItems: [],
};

export default Todo;
