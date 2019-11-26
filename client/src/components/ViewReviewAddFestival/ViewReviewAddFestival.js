import React from 'react';

import './ViewReviewAddFestival.css';

const ViewReviewAddFestival = ({ onObjFestival, onCancel, recordFestival, viewDisplay, record }) => {
    return (
        <div className="row view_review_container">
            <div className="col s8 view_col">
                <div className="view_review_title">Revise os dados antes de mandar para nós.</div>
            <div className="row view_review_item">
                <div className="col s12">
                <span>Nome: {onObjFestival.name}</span>
                
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="view_review_item">
                        <span>Telefone: {onObjFestival.phone}</span>
                    </div>
                </div>
                <div className="col s6">
                <div className="view_review_item">
                    <span>Celular: {onObjFestival.mobile}</span>
                </div>
                </div>
            </div>
            <div className="row view_review_item">
                <div className="col s12">
                    <span>Nome da Empresa: {onObjFestival.nameCompany}</span>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="view_review_item">
                        <span>Cidade: {onObjFestival.city}</span>
                    </div>
                </div>
                <div className="col s6">
                    <div className="view_review_item">
                        <span>Estado: {onObjFestival.state}</span>
                    </div>
                </div>
            </div>
            <div className="row view_review_item">
                <div className="col s12">
                    <span>Email: {onObjFestival.email}</span>
                </div>
            </div>
            <div className="row view_review_item">
                <div className="col s12">
                    <span>Data: {onObjFestival.EventDate}</span>
                </div>
            </div>
            <div className="row view_review_item">
                <div className="col s12">
                    <span>Descrição: {onObjFestival.description}</span>
                </div>
            </div>
            <div>
                <button className="yellow darken-3 white-text btn-flat left" onClick={onCancel}>
                    voltar
                </button>
                <button className="green white-text btn-flat right" onClick={recordFestival}>
                    {record}
                    <i className="material-icons right">done</i>
                </button>
                <button className="red white-text btn-flat right" style={{display: viewDisplay, marginRight: '10px'}}>
                    Excluir
                </button>
                <button className="blue white-text btn-flat right" style={{display: viewDisplay, marginRight: '10px'}}>
                    Editar
                </button>
            </div>
            </div>
        </div>
    )
}

ViewReviewAddFestival.defaultProps = {
    viewDisplay: 'none',
    record: 'Gravar'
}

export default ViewReviewAddFestival;