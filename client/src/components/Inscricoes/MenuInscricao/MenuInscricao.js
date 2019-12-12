import React from 'react';
import { Link } from 'react-router-dom';

const MenuInscricao = ({first, second, third, cor, children}) => {
    return (
        <div>
            <div style={{textAlign: 'left', background: '#1e88e5', paddingLeft: '15px', paddingTop: '6px'}}>
                <div className="col s12">
                    <span className="breadcrumb" style={{color: first ? first : cor }}>First</span>
                    <span className="breadcrumb" style={{color: second ? second : cor }}>Second</span>
                    <span className="breadcrumb" style={{color: third ? third : cor }}>Third</span>
                </div>
            </div>
            {children}
        </div>
    )
}

MenuInscricao.defaultProps = {
    cor: '#ccc'
}

export default MenuInscricao;