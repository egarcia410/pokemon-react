import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Battle from './containers/Battle/Battle';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/battle" component={Battle} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
