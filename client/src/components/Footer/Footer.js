import React from 'react';
import { Link } from 'react-router-dom';

import "./Footer.css";

const Footer = () => (
    <div className="row footer grey darken-3">
        <div className="col s3">
            <p>PARTICIPANTES</p>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Cadastre-se</Link></li>
                <li><Link to='/ajuda'>Central de ajuda</Link></li>
                <li><Link to="/termos_compra">Termos de compra</Link></li>
                <li><Link to="/politica_cancelamento">Política de cancelamento</Link></li>
            </ul>
        </div>
        <div className="col s3">
            <p>ORGANIZADORES</p>
            <ul>
                <li><Link to="/sobre_plataforma">Sobre a plataforma</Link></li>
                <li><Link to="/add_festival">Crie um Evento</Link></li>
                <li><Link to="/suporte">Suporte</Link></li>
            </ul>
        </div>
        <div className="col s3">
            <p>EMPRESA</p>
            <ul>
                <li><Link to="/quem_somos">Quem somos</Link></li>
                <li><Link to="/trabalhe_conosco">Trabelhe conosco</Link></li>
                <li><Link to="/politica_privacidade">Política de privacidade</Link></li>
            </ul>
        </div>
        <div className="col s3">
            <p>CONECTE-SE</p>

        </div>
    </div>
);

export default Footer;