import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = ({ descUrl, descId }) => (
    <article className="content">
        <div className="item_grid">
        <figure className="image">
            <img src={require("../../assets/escalada.png")} alt="imagem card" />
        </figure>
        <div className="wrapper">
            <header className="entry-content">
            <Link to={`/${descUrl}/${descId}`}>
                <time className="data">
                <span className="year">2019</span>
                <span className="day">30</span>
                <span className="month">Out</span>
                </time>
                <div className="titulo_evento">
                <h2 className="entry_title">Festival de montanha</h2>
                </div>
                <div className="clearfix">
                </div>
                <div className="row_info">
                <div className="citie">
                    <span>São Paulo</span>
                </div>
                </div>
            </Link>
            </header>
        </div>
        </div>
    </article>
);

export default Card;