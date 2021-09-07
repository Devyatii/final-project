import React from 'react';
import PokemonApiService from '../services/pokemonApi'
import PropTypes from 'prop-types';

const PokemonImg = ({name, id}) => {

    const uri = PokemonApiService.fetchPokemonImg(id);

    return (
      <figure className="image is-256x256">
        <img src={uri} alt={name} />
      </figure>
    
    )
  };
      
export default PokemonImg;

PokemonImg.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
}

PokemonImg.defaultProps = {
  name: '',
  id: 0
}