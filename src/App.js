import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Battle from './containers/Battle/Battle';
import Town from './components/Town/Town';
import SelectPokemonScreen from './components/SelectPokemonScreen/SelectPokemonScreen';
import PokemonList from './components/PokemonList/PokemonList'
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/battle" component={Battle} />
        <Route path="/town" component={Town} />
        <Route path="/pokemon" component={PokemonList} />
        <Route path="/" exact component={SelectPokemonScreen} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
