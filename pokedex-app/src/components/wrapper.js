import React from 'react';
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

  export default Wrapper;
  
