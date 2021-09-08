import React, { Fragment } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import Header from './components/header';


const App = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);

export default withErrorBoundary(App, {
      fallback: <div>
                  <h1 className="is-size-3-mobile is-size-2-desktop title">Sorry, we can't load Pokedex now :(</h1>
                  <img src='errorPikachu.png' alt='sad pikachu' className="card-image has-text-centered px-6"/>
                </div>
});
