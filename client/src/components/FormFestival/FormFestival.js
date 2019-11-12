import React from 'react';

import './FormFestival.css';

const FormEvent = ({ festivalSubmit, festivalChanged, festivalTitle }) => {
    return (
        <div className="row festival_container">
            <div className="col s8 festival_col">
    <div className="login_title">{festivalTitle}</div>
                <form onSubmit={festivalSubmit}>
                    <div className="festival_item_input">
                        <span>Nome</span>
                        <input placeholder="Nome" name="name" type="text" onChange={e => festivalChanged(e)} />
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="festival_item_input">
                                <span>Telefone</span>
                                <input placeholder="Telefone" name="phone" type="text" onChange={e => festivalChanged(e)} />
                            </div>
                        </div>
                        <div className="col s6">
                        <div className="festival_item_input">
                            <span>Celular</span>
                            <input placeholder="Celular" name="mobile" type="text" onChange={e => festivalChanged(e)} />
                        </div>
                        </div>
                    </div>
                    <div className="festival_item_input">
                        <span>Nome da Empresa</span>
                        <input placeholder="Nome da empresa" name="nameCompany" type="text" onChange={e => festivalChanged(e)} />
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="festival_item_input">
                                <span>Cidade</span>
                                <input placeholder="Cidade de realização do evento" name="city" type="text" onChange={e => festivalChanged(e)} />
                            </div>
                        </div>
                        <div className="col s6">
                            <div className="festival_item_input">
                                <span>Estado</span>
                                <input placeholder="Estado onde será o evento" name="state" type="text" onChange={e => festivalChanged(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="festival_item_input">
                        <span>Email</span>
                        <input placeholder="Email para informações" name="email" type="email" onChange={e => festivalChanged(e)} />
                    </div>
                    <div className="festival_item_input">
                        <span>Data</span>
                        <input placeholder="Data de realização do evento" name="EventDate" type="date" onChange={e => festivalChanged(e)} />
                    </div>
                    <div className="festival_item_input">
                        <span>Descrição</span>
                        <textarea placeholder="Diga algo a respeido do evento" name="description" className="materialize-textarea" />
                    </div>
                    <button type="submit" className="light-blue btn-flat right white-text">
                        Salvar
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        </div>
    );
}

FormEvent.defaultProps = {
    festivalTitle: 'Cadastre seu evento'
}

export default FormEvent;