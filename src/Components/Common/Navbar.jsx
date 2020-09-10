import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Navbar extends PureComponent {
  render() {
    const { showNewTodo } = this.props;

    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">React Todo app</span>
        <button type="button" className="btn btn-success" onClick={showNewTodo}>Add todo list</button>
      </nav>
    );
  }
}

Navbar.propTypes = {
  showNewTodo: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
};

export default Navbar;
