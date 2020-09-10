import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CreateTodo from '../../HttpServices/Todos/CreateTodoService';

class NewTodo extends PureComponent {
  constructor() {
    super();
    this.state = { title: '' };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  addTodo() {
    const { title } = this.state;
    const { addCreatedTodo } = this.props;
    CreateTodo({ title }, addCreatedTodo);
  }

  render() {
    const { title } = this.state;

    return (
      <div className="col-md-3">
        <div className="card shadow mb-4">
          <div className="card-header">
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control" value={title} onChange={this.handleChange} />
              </div>
              <div className="offset-1 col-2">
                <button type="button" className="btn btn-success float-right" onClick={this.addTodo}>Save</button>
              </div>
            </div>
          </div>
          <div className="card-body" />
        </div>
      </div>
    );
  }
}

NewTodo.propTypes = {
  addCreatedTodo: PropTypes.func.isRequired,
};

NewTodo.defaultProps = {
};

export default NewTodo;
