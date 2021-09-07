import React, { useState } from 'react';
import PokemonApiService from '../services/pokemonApi'
import PropTypes from 'prop-types';

const CatchButton = ({ id, name, isCaught }) => {
      
    const [isPokemonCaught, setCaught] = useState(isCaught);

    const handleClick = () => {
        if (!isCaught) {
            setCaught(true);
            PokemonApiService.putPokemonData(id, name).catch(err => err);  
        }
    }

    return (
        (isPokemonCaught) ? 
        <button className="button is-success" disabled>DISABLED</button> : 
        <button onClick={handleClick} className="button is-danger is-focused">CATCH ME</button>
    )
}

export default CatchButton;

CatchButton.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    isCaught: PropTypes.bool
  }

CatchButton.defaultProps = {
    isCaught: false
  }