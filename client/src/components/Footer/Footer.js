import React from 'react';
import { Link } from 'react-router-dom';

import "./Footer.css";

const Footer = () => (
    <div className="row footer grey darken-3">
        <div className="col s3">
            <p>PARTICIPANTES</p>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li>Cadastre-se</li>
                <li>Central de ajuda</li>
                <li>Termos de compra</li>
                <li>Política de cancelamento</li>
            </ul>
        </div>
        <div className="col s3">
            <p>ORGANIZADORES</p>
            <ul>
                <li>Sobre a plataforma</li>
                <li><Link to="/add_festival">Crie um Evento</Link></li>
                <li>Suporte</li>
            </ul>
        </div>
        <div className="col s3">
            <p>EMPRESA</p>
            <ul>
                <li>Quem somos</li>
                <li>Trabelhe conosco</li>
                <li>Política de privacidade</li>
            </ul>
        </div>
        <div className="col s3">
            <p>CONECTE-SE</p>

        </div>
    </div>
);

export default Footer;