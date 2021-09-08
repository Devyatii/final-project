import React from 'react';
import Wrapper from '../components/wrapper';

const MyPokemons = () => {

  const MY_POKEMONS_CATCH_QUERY = 'isCaught=true&';

  return (
    <Wrapper catchQuery={ MY_POKEMONS_CATCH_QUERY } />
  )
};
  
export default MyPokemons;