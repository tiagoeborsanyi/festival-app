import React from 'react';
import { Link } from 'react-router-dom';

const MenuInscricao = (props) => {
    return (
        <div>
            <div style={{textAlign: 'left', background: '#1e88e5', paddingLeft: '15px', paddingTop: '6px'}}>
                <div className="col s12">
                    <span className="breadcrumb" style={{color: '#fff'}}>First</span>
                    <span className="breadcrumb" style={{color: '#ccc'}}>Second</span>
                    <span className="breadcrumb" style={{color: '#ccc'}}>Third</span>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default MenuInscricao;