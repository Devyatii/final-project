import React from 'react';
import PokemonImg from '../components/pokemonImg';
import PropTypes from 'prop-types';

const PokemonDetails = ({ name, id, date, isCaught }) => {

    const getCatchDate = (catchDate) => {
      if (catchDate) {
        let date = new Date( Date.parse(catchDate) );
        
        let day = date.getDate();
            day = day > 9 ? day : '0' + day;
        
        let month = date.getMonth() + 1;
            month = month > 9 ? month : '0' + month;

        let year = date.getFullYear();
        return `Catch date: ${day}-${month}-${year}`
      }
    }

    const getCatchStatus = (isCaught) => {
      return isCaught ? "I am caught!" : "I am not caught";
    }
      
    return (
      <section className="section">
        <div className="container">
          <div className="columns mt-5 is-vcentered is-multiline">
            <div className="column is-6-tablet is-6-desktop has-text-centered">
              <PokemonImg name={name} id={id} /> 
            </div>
            <div className="column is-6-tablet is-6-desktop has-text-centered-mobile">
                {id && <h1 className="is-size-3-mobile is-size-2-desktop title">MY NAME IS {name.toUpperCase()}</h1>}
                {id && <div className="is-size-4 mb-1 has-text-weight-semibold">ID: #{id}</div>}
                {id && <div className="is-size-4 mb-1 has-text-weight-semibold">{getCatchStatus(isCaught)}</div>}
                {id && <div className="is-size-4 mb-1 has-text-weight-semibold">{getCatchDate(date)}</div>}
                {id && <button className="button is-success" onClick={() => window.history.back()}>Return</button>}
            </div>
          </div>
        </div>
      </section>
    );
}

export default PokemonDetails;

PokemonDetails.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  date: PropTypes.string,
  isCaught: PropTypes.bool
}

PokemonDetails.defaultProps = {
  isCaught: false
}

