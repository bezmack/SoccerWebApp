import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

const Header = () => (
  <header>
    <div className="navbar-fixed">
       <nav>
            <div className="nav-wrapper"> 
                  <NavLink to="/" activeClassName="is-active" exact={true} className="brand-logo" className="logo">
                    <img src="//placehold.it/155x46"/>
                  </NavLink>
                  <a href="#" data-activates="mobile-demo" className="button-collapse button right"><span className="btn-open"></span></a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> </li>
                      <li><NavLink to="/team" activeClassName="is-active">Team</NavLink> </li>
                      <li><NavLink to="/match" activeClassName="is-active">Match</NavLink> </li>
                      <li> <NavLink to="/about" activeClassName="is-active">About Us</NavLink></li>
                  </ul>
            </div>
      </nav>  
    </div>
  </header>
);

export default Header;
