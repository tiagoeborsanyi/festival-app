import React from 'react';
import { Link } from 'react-router-dom';

const MenuLInkGerencia = props => {
    return (
        <div>
            <div>
                <h5><Link to="/gerencia/list-events">EVENTOS</Link></h5>
                <h5><Link to="/gerencia/list-users">USUARIOS</Link></h5>
            </div>
            {props.children}
        </div>
    )
}

export default MenuLInkGerencia;