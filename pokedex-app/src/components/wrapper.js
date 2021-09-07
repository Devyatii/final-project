import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import PokemonsList from '../containers/pokemonsList';

const Wrapper = ({ catchQuery }) => {

    return (
        <main>
            <section className="section">
                <div className="container">
                    <div className="mt-5 columns is-multiline is-6 is-variable is-centered">
                        <PokemonsList catchQuery={ catchQuery }/>
                    </div>
                </div>
            </section>
        </main>
    )
  };

export default withErrorBoundary(Wrapper, {
    fallback: <h1 className="is-size-3-mobile is-size-2-desktop title">Sorry, we can't load Pokemons now :(</h1>
});