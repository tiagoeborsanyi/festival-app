import React from 'react';
import { Link } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';
import convert from 'htmr';

import './Description.css';
//https://ticketagora.com.br/e/festival-da-montanha-2019-28813

const Descricao = ({evento, inscrever}) => {
    let buttonDisabled = '';
    if (new Date() > new Date(evento.subscription[0].dateFinal)) {
        buttonDisabled = 'disabled';
    }
    return (
        <div>
            <div className="row">
                <div className="col s12 logo-folder">
                    <img src={require('../../assets/montanha2.jpeg')} alt="montanha" />
                </div>
                <div className="col s8">
                    <h4 className="desc_title">{evento.name}</h4>
                    <div className="desc_subtitle">
                            <i className="small material-icons desc_icon">flag</i>
                            <span>{evento.nameCompany.toUpperCase()}</span>
                    </div>
                    <div className="desc_subtitle">
                            <i className="small material-icons desc_icon">perm_contact_calendar</i>
                            <span>{evento.EventDate.split('T')[0].split('-').reverse().join('-')}</span>
                    </div>
                    <div className="desc_subtitle">
                            <i className="small material-icons desc_icon">location_on</i>
                            <span>PEDREIRA DO DIB - {evento.city}, {evento.state} Brasil</span>
                    </div>
                    <div className="desc_info_title">
                        Informações Gerais
                    </div>
                    <div className="desc_indo_subtitle">
                        AS EXPERIÊNCIAS DE QUEM OUSOU TRILHAR O SEU CAMINHO.
                    </div>
                    <div className="desc_info_text">
                        {convert(draftToHtml(evento.description))}
                    </div>
                </div>
                <div className="col s4 lime lighten-5">
                    <div className="desc_inscricao_date">
                        Inscrições até {evento.subscription[0].dateFinal.split('T')[0].split('-').reverse().join('/')} 18:00
                    </div>
                    <div className="desc_inscricao_button">
                    <Link to={"/inscricao/"+evento._id} className={"waves-effect waves-light btn-large red lighten-1 "+buttonDisabled}>{inscrever}</Link>
                    </div>
                    <div className="desc_organizacao">
                        <span className="desc_organizacao_title">
                            ORGANIZADOR
                        </span>
                        <span>
                            {evento.nameCompany.toUpperCase()}
                        </span>
                        <span>
                            CNPJ: 10.574.595/0001-42
                        </span>
                    </div>
                    <div className="desc_fale_organizador">
                        <Link to="/">Fale com o organizador</Link>
                    </div>
                    <div className="desc_title_share">
                        <p>COMPARTILHE ESTE EVENTO</p>
                        <img src={require('../../assets/icon_twitter.png')} alt="twitter" />
                        <img src={require('../../assets/icon_twitter.png')} alt="twitter" />
                        <img src={require('../../assets/icon_twitter.png')} alt="twitter" />
                        <img src={require('../../assets/icon_twitter.png')} alt="twitter" />
                    </div>
                    <div className="desc_fez_pedido">
                        <p>JÁ FEZ SEU PEDIDO?</p>
                        <ul>
                            <li><Link to="/">2º via boleto</Link></li>
                            <li><Link to="/">Protocolo de inscrição</Link></li>
                            <li><Link to="/">Área do participante</Link></li>
                            <li><Link to="/">Dúvidas sobre incrição</Link></li>
                            <li><Link to="/">Fale conosco</Link></li>
                            <li><Link to="/">Denunciar evento</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="desc_share_evento_geral">
                        <p>COMPARTILHE ESTE EVENTO</p>
                        <img src={require('../../assets/icon_twitter.png')} alt="twitter" />
                        <img src={require('../../assets/icon_twitter.png')} alt="twitter" />
                        <img src={require('../../assets/icon_twitter.png')} alt="twitter" />
                        <img src={require('../../assets/icon_twitter.png')} alt="twitter" />
                    </div>
                </div>
            </div>
        </div>
    );
}

Descricao.defaultProps = {
    inscrever: 'INSCREVER-SE'
}

export default Descricao;