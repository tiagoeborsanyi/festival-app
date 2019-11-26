import React from 'react';
import { Link } from 'react-router-dom';

import './MenuLinkGerencia.css'

const MenuLInkGerencia = props => {
    return (
        <div>
            <div className="row">
                <div className="col s2">
                    <ul className="menu_link_gerencia_ul">
                        <li><Link to="/gerencia/list-events">Eventos</Link></li>
                        <li><Link to="/gerencia/list-users">Usuários</Link></li>
                    </ul>
                </div>
                <div className="col s10">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default MenuLInkGerencia;