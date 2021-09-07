import React from 'react';
import PokemonData from '../containers/pokemonData'
import PropTypes from 'prop-types';

const PokemonPage = ({ match }) => {
  
  return (
    <main>
      <PokemonData match={ match } />
    </main>
  )
}
  
export default PokemonPage;

PokemonPage.propTypes = {
  match: PropTypes.object.isRequired
}