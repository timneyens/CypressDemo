import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Todos from './Components/Pages/Todos';
import Demo from './Components/Pages/Demo';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Todos} />
          <Route exact path="/Demo" component={Demo} />
        </>
      </Router>
    );
  }
}

export default App;
