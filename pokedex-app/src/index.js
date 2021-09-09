import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllPokemons from './pages/allPokemons';
import MyPokemons from './pages/myPokemons';
import PokemonPage from './pages/pokemonPage';
import ErrorMessage from './components/error';


ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={AllPokemons} />
        <Route exact path='/myPokemons' component={MyPokemons} />
        <Route path='/pokemons/:id' component={PokemonPage} />
        <Route path='*' component={ErrorMessage} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();

