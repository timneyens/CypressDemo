import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import toggleTodoItemService from '../../../HttpServices/TodoItems/ToggleTodoItemService';

class TodoItem extends PureComponent {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { todoId, identifier, toggleTodoItem } = this.props;
    toggleTodoItemService(todoId, identifier, toggleTodoItem);
  }

  render() {
    const { identifier, text, checked } = this.props;
    return (
      <li className="list-group-item">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={identifier} checked={checked} onChange={this.toggle} />
          <label className="form-check-label" htmlFor={identifier}>{text}</label>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todoId: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  toggleTodoItem: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  checked: false,
};

export default TodoItem;
