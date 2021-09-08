import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [isActive, setActive] = useState('navbar-menu');
  const handleBurgerMenu = () => {
    isActive === 'navbar-menu' ? setActive('navbar-menu is-active') : setActive('navbar-menu');
  }

  return (
    <header>
      <nav className="navbar has-shadow is-success is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <img src='pokedexLogo.png' alt='pokedex-logo' style={{ maxHeight: '70px' }} className="navbar-item py-2 px-4"/>
          <a className="navbar-burger" aria-label="main navigation" onClick={handleBurgerMenu}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div className={isActive} id="nav-links">
          <div className="navbar-end">
            <NavLink className="navbar-item" activeClassName="is-active" exact to='/'>All Pokemons</NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" exact to='/myPokemons'>Caught Pokemons</NavLink>
          </div> 
        </div>
      </nav>
    </header>
  );
}

export default Header;
