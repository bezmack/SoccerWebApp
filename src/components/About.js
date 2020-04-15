import React, { Component } from 'react';
import aboutus from '../images/aboutus.jpg';
// import { NavLink } from 'react-router-dom';
import { NavLink, Link, Route } from "react-router-dom";

class About extends Component {
  constructor(){
    super()
  }

  render(){
   return(
    <div>
      <div className="container-fluid aboutUs"><img src={ aboutus } alt="team image"/></div>

      <div className="subMenu">
        <div className="subNav">
          <div className="block">
            <ul className="aboutMenu">
              <li>
                <Link to="/about" activeClassName="is-active" exact={true}> 
                  <i class="large material-icons">group</i>
                  <span>About Us </span>
                </Link> 
              </li>
              <li>
                <Link to={`/about/info`} activeClassName="is-active"> 
                  <i class="large material-icons">import_contacts</i>
                  <span>Club Profile Info </span>
                </Link> 
              </li>
              <li>
                <Link to={`/about/contact`}  activeClassName="is-active"> 
                  <i class="large material-icons">perm_contact_calendar</i>
                  <span> Contacts</span>
                </Link> 
              </li>
            </ul>
          </div>
          </div>
      </div>

      

      <div className="container">
        <div className="aboutDetail">
          <h2> About the team</h2> </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        </p>

         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
        </p>

         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        </p>

          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
        </p>

          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
        </p>
        </div>
    </div>
  );
  }
}

export default About;
