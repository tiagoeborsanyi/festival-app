import React from 'react';
import { Link } from 'react-router-dom';

import './Toolbar.css';

const Toolbar = (props) => {
  let auth = null
  if (props.authToken) {
    auth = <li><Link to="/logout">Logout</Link></li>
  } else {
    auth = <li><Link to="/login">Login</Link></li>
  }
  return (
    <header className="mainHeader">
        {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <div className="mainNav__item">
              <Link to="/" className="brand-logo">
                  <img src={require('../../assets/usaclimblogo.png')} alt="Logo" />
              </Link>
            </div>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/add_festival"><span>Crie um evento</span></Link></li>
              {auth}
            </ul>
          </div>
        </nav>
    </header>
)
}

export default Toolbar;