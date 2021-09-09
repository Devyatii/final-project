import React, { useState, useEffect } from 'react';
import PokemonDetails from '../components/pokemonDetails';
import PokemonApiService from '../services/pokemonApi';
import PropTypes from 'prop-types';
import Error from '../components/error';

const PokemonData = ({ match }) => {
  const id = match.params.id || '';
  const [pokemon, setPokemon] = useState({});
  const [responseStatus, setStatus] = useState('');
  
  useEffect(() => {
    PokemonApiService.getPokemonData(id)
         .then(response => { 
            setPokemon(response.data);
        })
         .catch(err => setStatus(err.response.status));
    }, [])

  const isResponseInvalid = (response) => {

    return (response === 404) ? <Error /> : <PokemonDetails name={pokemon.name}
                                                            id={pokemon.id}
                                                            date={pokemon.date}
                                                            isCaught={pokemon.isCaught}
                                                        />
              
  }

  return isResponseInvalid(responseStatus);
  
}

export default PokemonData;

PokemonData.propTypes = {
  match: PropTypes.object.isRequired
}

