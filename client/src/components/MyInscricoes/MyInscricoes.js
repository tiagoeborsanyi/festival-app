import React from 'react';

import './MyInscricoes.css';

const MyInscricoes = (props) => {
    // console.log(props.objArr);
    let lista = '';
    if(props.objArr) {
        lista = props.objArr.map(obj => (
            <li key={obj._id}><b>Nome:</b> {obj.name}</li>
        ))
    }
    return (
        <div>
            <h3>Minhas inscrições</h3>
            <ul>
                {lista}
            </ul>
        </div>
    )
}

export default MyInscricoes;