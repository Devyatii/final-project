import React from 'react';
import PokemonImg from './pokemonImg';
import { Link } from 'react-router-dom'
import CatchButton from './catchButton';
import PropTypes from 'prop-types';

const PokemonCard = ({ name, id, isCaught }) => {

  return (
        <div className="column is-4-tablet is-3-desktop">
          <div className="card">
            <Link className="is-hover" to={`/${id}`} aria-label={`link to ${name} page`}>
              <div className="card-content">
                <h2 className="title is-size-5 has-text-centered is-capitalized">{name}</h2>
              </div>
              <div className="card-image has-text-centered px-6">
                  <PokemonImg name={name} id={id} />
              </div>
            </Link>
            <footer className="card-footer">
              <p className="card-footer-item">
                <CatchButton name={name} id={id} isCaught={isCaught} />
              </p>
            </footer>
          </div>
        </div>
  )
};

export default PokemonCard;

PokemonCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  isCaught: PropTypes.bool
}

PokemonCard.defaultProps = {
  name: ''
}

        