import React from 'react';
import { Link } from 'react-router-dom';

const MenuInscricao = (props) => {
    return (
        <div>
            <nav>
                <div style={{textAlign: 'left', background: '#1e88e5', paddingLeft: '20px'}}>
                <div className="col s12">
                    <a className="breadcrumb">First</a>
                    <a className="breadcrumb">Second</a>
                    <a className="breadcrumb">Third</a>
                </div>
                </div>
            </nav>
            {props.children}
        </div>
    )
}

export default MenuInscricao;