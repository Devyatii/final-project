import React from "react";
import PokemonImg from "./pokemonImg";

const ErrorMessage = () => (

      <section className="section">
        <div className="container">
          <div className="columns mt-5 is-vcentered is-multiline">
            <div className="column is-5-tablet is-5-desktop has-text-centered">
                <PokemonImg />
            </div>
            <div className="column is-6-tablet is-6-desktop has-text-centered-mobile">
              <h1 className="is-size-3-mobile is-size-2-desktop title has-text-centered">Sorry, the page does not exist</h1>
              <button className="button is-warning" onClick={() => window.history.back()}>Get back</button>
            </div>
          </div>
        </div>
      </section>
    
    )

export default ErrorMessage;