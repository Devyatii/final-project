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
                .catch(err => err)
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

    const isPomemonListEmpty = (filterPokemonsList) => {
        let pokemonsList = filterPokemonsList;

        if (pokemonsList.length) {
            return (
                <Fragment>
                    {pokemonsList
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
        } else {
            return (
                <div>
                    <h1 className="is-size-3-mobile is-size-2-desktop title ">Waiting for pokemons!</h1>
                    <progress className="progress is-small is-success" max="100">15%</progress>
                </div>
            )
        }
    }

    return isPomemonListEmpty(filterPokemonList(pokemons, catchQuery));
};

export default PokemonsList;

PokemonsList.propTypes = {
    catchQuery: PropTypes.string
}

PokemonsList.defaultProps = {
    catchQuery: ''
}