import React from 'react';

import './Description.css';
//https://ticketagora.com.br/e/festival-da-montanha-2019-28813

const Descricao = (props) => {
    const { id } = props.match.params;
    return (
        <div>
            <div className="row">
                <div className="col s12 logo-folder">
                    <img src={require('../../assets/montanha2.jpeg')} alt="montanha" />
                </div>
                <div className="col s8">
                    <h4 className="desc_title">Festival da montanha 2019</h4>
                    <div className="desc_subtitle">
                            <i className="small material-icons desc_icon">flag</i>
                            <span>INSTITUTO ALOUATTA</span>
                    </div>
                    <div className="desc_subtitle">
                            <i className="small material-icons desc_icon">perm_contact_calendar</i>
                            <span>09/11/2019</span>
                    </div>
                    <div className="desc_subtitle">
                            <i className="small material-icons desc_icon">location_on</i>
                            <span>Barragem do Rio São Bento - Siderópolis SC, Siderópolis, SC, Brasil</span>
                    </div>
                    <div className="desc_info_title">
                        Informações Gerais
                    </div>
                    <div className="desc_indo_subtitle">
                        AS EXPERIÊNCIAS DE QUEM OUSOU TRILHAR O SEU CAMINHO.
                    </div>
                    <div className="desc_info_text">
                        <p>
                            Entre trilhas, vales, montanhas e o belíssimo lago da barragem do Rio São Bento, 
                            em Siderópolis, o Festival da Montanha chega a sua V edição reunindo diversas 
                            atividades que podem ser praticadas em ambientes de montanha.
                        </p>
                        <p>
                            No sábado dia 9, a atividade de stand up será APENAS PARA COMPETIDORES, 
                            inscritos no evento. Se você é COMPETIDOR, gentileza entrar em contato via whats 
                            (48) 9 9841-5372. Para demais participantes a inscrição deve ser feita neste site.
                        </p>
                        <p>
                            No sábado dia 9, a atividade de stand up será APENAS PARA COMPETIDORES, 
                            inscritos no evento. Se você é COMPETIDOR, gentileza entrar em contato via whats 
                            (48) 9 9841-5372. Para demais participantes a inscrição deve ser feita neste site.
                        </p>
                        <p>
                            No sábado dia 9, a atividade de stand up será APENAS PARA COMPETIDORES, 
                            inscritos no evento. Se você é COMPETIDOR, gentileza entrar em contato via whats 
                            (48) 9 9841-5372. Para demais participantes a inscrição deve ser feita neste site.
                        </p>
                        <p>
                            Valor da inscrição R$ 85,00 para participar de todas atividades
                        </p>
                        <p>
                            Quem for trazer sua própria prancha ou embarcação deve obrigatoriamente fazer a inscrição 
                            normalmente e contatar a organização através do whats (48) 9 9841-5372 - não será permitida 
                            a entrada na Barragem de pessoas sem inscrição prévia. Não haverá inscrição no local.
                        </p>
                    </div>
                </div>
                <div className="col s4 lime lighten-5">
                    <div className="desc_inscricao_date">
                        Inscrições até 06/11/19 18:00
                    </div>
                    <div className="desc_inscricao_button">
                        <a className="waves-effect waves-light btn-large red lighten-1">INSCREVA_SE</a>
                    </div>
                    <div className="desc_organizacao">
                        <span className="desc_organizacao_title">
                            ORGANIZADOR
                        </span>
                        <span>
                            INSTITUTO ALOUATTA
                        </span>
                        <span>
                            CNPJ: 10.574.595/0001-42
                        </span>
                    </div>
                    <div className="desc_fale_organizador">
                        <a href="#">Fale com o organizador</a>
                    </div>
                    <div className="desc_title_share">
                        <p>COMPARTILHE ESTE EVENTO</p>
                        <img src={require('../../assets/icon_twitter.png')} />
                        <img src={require('../../assets/icon_twitter.png')} />
                        <img src={require('../../assets/icon_twitter.png')} />
                        <img src={require('../../assets/icon_twitter.png')} />
                    </div>
                    <div className="desc_fez_pedido">
                        <p>JÁ FEZ SEU PEDIDO?</p>
                        <ul>
                            <li><a href="#">2º via boleto</a></li>
                            <li><a href="#">Protocolo de inscrição</a></li>
                            <li><a href="#">Área do participante</a></li>
                            <li><a href="#">Dúvidas sobre incrição</a></li>
                            <li><a href="#">Fale conosco</a></li>
                            <li><a href="#">Denunciar evento</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="desc_share_evento_geral">
                        <p>COMPARTILHE ESTE EVENTO</p>
                        <img src={require('../../assets/icon_twitter.png')} />
                        <img src={require('../../assets/icon_twitter.png')} />
                        <img src={require('../../assets/icon_twitter.png')} />
                        <img src={require('../../assets/icon_twitter.png')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Descricao;