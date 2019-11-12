import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = ({ submit, changed }) => {
    return (
        <div className="row login_container">
                <div className="col s6 login_col">
                <div className="login_title">Login para participantes</div>
                    <form onSubmit={submit}>
                        <div className="login_item_input">
                            <span>Email</span>
                            <input placeholder="email" name="email" type="email" onChange={e => changed(e)} />
                        </div>
                        <div className="login_item_input">
                            <span>Senha</span>
                            <input placeholder="senha" name="pass" type="password" onChange={e => changed(e)} />
                        </div>
                        <button type="submit" className="light-blue btn-flat right white-text">
                            Avançar
                            <i className="material-icons right">done</i>
                        </button>
                    </form>
                    <div className="login_cadastrese">
                        <p>Login com sua conta <Link>Google</Link></p>
                        <p>Novo por aqui? <Link>Cadastre-se</Link></p>
                    </div>
                </div>
            </div>
    );
}

export default Login;