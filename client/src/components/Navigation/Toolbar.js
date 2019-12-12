import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Toolbar.css';

const Toolbar = (props) => {
  const boo = localStorage.getItem('admin') === 'true' ? true : false;
  let auth = null
  let admin = null
  if (props.authToken) {
    auth = <li className="mainNav__item list1">
            <span>USUARIO</span>
            <ul className="sublist__color">
              <li><Link to="/perfil">Perfil</Link></li>
              <li><Link to="/minhas_inscricoes">Minhas Inscrições</Link></li>
              <li><Link to="/logout">Sair</Link></li>
            </ul>
          </li>
  } else {
    auth = <li><Link to="/login">Login</Link></li>
  }
  if (boo) {
    admin = <li><Link to="/gerencia">Gerenciar</Link></li>
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
              { admin }
              <li><Link to="/add_festival"><span>Crie um evento</span></Link></li>
              {auth}
            </ul>
          </div>
        </nav>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    isAdmin: state.auth.admin
  }
}

export default connect(mapStateToProps)(Toolbar);