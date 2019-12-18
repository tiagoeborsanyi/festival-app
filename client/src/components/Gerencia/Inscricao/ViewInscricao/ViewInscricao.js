import React from 'react';

import './ViewInscricao.css';

import formatMoney from '../../../../containers/utils/currencyMoney';

const ViewInscricao = (props) => {
    return (
        <div className="viewincricao_container">
            <button 
                type="button" 
                name={props.buttonName} 
                className="viewincricao_collapsible" 
                onClick={props.viewColapse}>
                    {props.objInscricao.title}
            </button>
            <div className="viewincricao_content" style={{display: (props.buttonName === props.chave) ? 'block' : 'none'}}>
                <h6>{props.objInscricao.subtitle}</h6>
                <img src={props.objInscricao.image} alt="Escalado de pedra" className="viewincricao_image" />
                <blockquote>
                    {props.objInscricao.descrption}
                </blockquote>
                <div>
                <label>
                    <input type="checkbox" className="filled-in" name={props.objInscricao._id} value={props.objInscricao.responsabilidade} onClick={props.changeCheckbox}  />
                    <span>Concordo com o <a href="#">termo de responsabilidade</a></span>
                    <div className="row">
                        <p>Valor: {formatMoney(props.objInscricao.value)} + 2,00 taxas</p>
                        <button className="waves-effect waves-light btn-small"  name={props.objInscricao._id} onClick={props.continuar}>Continuar</button>
                    </div>
                </label>
                </div>
            </div>
        </div>
    );
}

export default ViewInscricao;