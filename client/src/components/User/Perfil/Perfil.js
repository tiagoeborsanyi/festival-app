import React from 'react';

import './Perfil.css';

const Perfil = (props) => {
    return (
        <div>
            <h3>PERFIL DE USUARIO</h3>
            <p><b>Nome:</b> {props.name}</p>
            <p><b>Email:</b> {props.email}</p>
        </div>
    )
}

export default Perfil;