import React from "react";

const ErrorMessage = () => {
   
    return (
            <main>
                <h1 className="is-size-3-mobile is-size-2-desktop title">Sorry, the page does not exist</h1>
                <img src='defaultPokemon.png' alt='sad pikachu' className="card-image has-text-centered px-6"/>
                <button className="button is-warning" onClick={() => window.history.back()}>Get back</button>
            </main>
    )
  };

export default ErrorMessage;