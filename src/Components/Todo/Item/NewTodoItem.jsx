import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddTodoItem from '../../../HttpServices/TodoItems/AddTodoItemService';

class Todo extends PureComponent {
  constructor() {
    super();
    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  addTodoItem() {
    const { text } = this.state;
    const { addCreatedTodoItem, identifier } = this.props;
    AddTodoItem(identifier, { text }, addCreatedTodoItem);

    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="row mt-4">
        <div className="col-10">
          <input type="text" className="form-control" value={text} onChange={this.handleChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success float-right" onClick={this.addTodoItem}>+</button>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  identifier: PropTypes.string.isRequired,
  addCreatedTodoItem: PropTypes.func.isRequired,
};

Todo.defaultProps = {
};

export default Todo;
