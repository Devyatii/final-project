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
      fallback: <h1 className="is-size-3-mobile is-size-2-desktop title">Sorry, we can't load Pokemons now :(</h1>
});
