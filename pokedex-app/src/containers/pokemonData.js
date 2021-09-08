import React, { useState, useEffect } from 'react';
import PokemonDetails from '../components/pokemonDetails'
import PokemonApiService from '../services/pokemonApi'
import PropTypes from 'prop-types';

const PokemonData = ({ match }) => {
  const id = match.params.id || '';
  const [pokemon, setPokemon] = useState({});
  
  useEffect(() => {
    PokemonApiService.getPokemonData(id)
         .then(response => { 
            setPokemon(response.data);
        })
         .catch(err => err)
    }, [])

  return <PokemonDetails name={pokemon.name}
                         id={pokemon.id}
                         date={pokemon.date}
                         isCaught={pokemon.isCaught}
        />
}

export default PokemonData;

PokemonData.propTypes = {
  match: PropTypes.object.isRequired
}

