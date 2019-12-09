import React from 'react';

import './Register.css';

const Register = ({ submit, changed, error }) => {
    return (
        <div className="row register_container">
                <div className="col s6 register_col">
                <div className="register_title">Crie sua conta</div>
                    <form onSubmit={submit}>
                        <div className="register_item_input">
                            <span>Nome</span>
                            <input placeholder="Nome" name="name" type="text" onChange={e => changed(e)} />
                        </div>
                        <div className="register_item_input">
                            <span>Email</span>
                            <input placeholder="email" name="email" type="email" onChange={e => changed(e)} />
                            <span className="helper-text" data-error="wrong" data-success="right">{error ? error.email : null}</span>
                        </div>
                        <div className="register_item_input">
                            <span>Senha</span>
                            <input placeholder="senha" name="password" type="password" onChange={e => changed(e)} />
                        </div>
                        <div className="register_item_input">
                            <span>Repita sua senha</span>
                            <input placeholder="Repita sua senha" name="password2" type="password" onChange={e => changed(e)} />
                            <span className="helper-text" data-error="wrong" data-success="right">{error ? error.password2 : null}</span>
                        </div>
                        <button type="submit" className="light-blue btn-flat right white-text">
                            Cadastrar
                            <i className="material-icons right">done</i>
                        </button>
                    </form>
                </div>
            </div>
    );
}

export default Register;