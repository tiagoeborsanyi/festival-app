import React from 'react';

const MenuInscricao = ({
                            categoria, 
                            identificacao, 
                            pagamento, 
                            conclusao, 
                            cor, 
                            children
                        }) => {
    return (
        <div>
            <div style={{textAlign: 'left', background: '#1e88e5', paddingLeft: '15px', paddingTop: '6px'}}>
                <div className="col s12">
                    <span className="breadcrumb" style={{color: categoria ? categoria : cor }}>Selecione a categoria</span>
                    <span className="breadcrumb" style={{color: identificacao ? identificacao : cor }}>Identificação</span>
                    <span className="breadcrumb" style={{color: pagamento ? pagamento : cor }}>Pagamento</span>
                    <span className="breadcrumb" style={{color: conclusao ? conclusao : cor }}>Conclusão</span>
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