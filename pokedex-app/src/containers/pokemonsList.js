import React, { Fragment, useEffect, useState } from 'react';
import PokemonCard from '../components/pokemonCard';
import PokemonApiService from '../services/pokemonApi';
import PropTypes from 'prop-types';


const PokemonsList = ({ catchQuery }) => {

    const [pokemons, setPokemons] = useState([]),
          [currentPage, setCurrentPage] = useState(1),
          [fetching, setFetching] = useState(true);
    
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function() {
            document.removeEventListener('scroll', scrollHandler);
        }
    })

    useEffect(() => {
        if (fetching) {
            PokemonApiService.fetchPokemonList(currentPage, catchQuery)
                .then(response => { 
                    setPokemons([...pokemons, ...response.data]);
                    setCurrentPage(prevState => prevState + 1);
                })
                // .catch(err => err)
                .finally(() => setFetching(false))    
        }
      
    }, [fetching])

    const scrollHandler = (e) => {
        let scrollHeight = e.target.documentElement.scrollHeight,
            scrollTop = e.target.documentElement.scrollTop,
            innerHeight = window.innerHeight;
        if (scrollHeight - (scrollTop + innerHeight) < 50) {
            setFetching(true);    
        }
    }

    const filterPokemonList = (pokemonsList, isMyPokemons) => {
        return (
            (isMyPokemons) ? pokemonsList.filter(pokemon => pokemon.isCaught) : pokemonsList
        )
    }

    return (
        <Fragment>
            {filterPokemonList(pokemons, catchQuery)
            .map(({ id, name, isCaught }) => 
                <PokemonCard
                    key={id + name} 
                    id={id}
                    name={name}
                    isCaught={isCaught}
                />
            )}
        </Fragment>
    )
};

export default PokemonsList;

PokemonsList.propTypes = {
    catchQuery: PropTypes.string
}

PokemonsList.defaultProps = {
    catchQuery: ''
}