import React from 'react';

import './ViewInscricao.css';

const ViewInscricao = (props) => {
    return (
        <div className="viewincricao_container">
            <button type="button" name={props.buttonName} className="viewincricao_collapsible" onClick={props.viewColapse}>KIT BASICO - PUBLICO GERAL</button>
            <div className="viewincricao_content" style={{display: (props.buttonName === props.chave) ? 'block' : 'none'}}>
                <h6>KIT BASICO</h6>
                <blockquote>
                    é simplesmente uma simulação de texto da indústria tipográfica e 
                    de impressos, e vem sendo utilizado desde o século XVI, quando 
                    um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
                </blockquote>
                <div>
                <label>
                    <input type="checkbox" className="filled-in" />
                    <span>Concordo com o <a href="#">termo de responsabilidade</a></span>
                    <div className="row">
                        <p>Valor: R$ 80,00 + 2,00 taxas</p>
                        <button className="waves-effect waves-light btn-small">Continuar</button>
                    </div>
                </label>
                </div>
            </div>
        </div>
    );
}

export default ViewInscricao;