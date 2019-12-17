import React, { Component } from 'react';

class Payment extends Component {
    render() {
        return(
                <div>
                <h4>Dados do Usuário</h4>
                <h5>Confira seus dados se estão corretos:</h5>
                <p>Nome: </p>
                <p>Email: </p>
                <hr />
                <h4>Dados da Inscrição</h4>
                <p>Titulo: {this.props.obj[0].title}</p>
                <img src={this.props.obj[0].image} alt="Escalado de pedra" className="viewincricao_image" />
                <p>Valor a pagar R$: {this.props.obj[0].value}</p>
                <button className="waves-effect waves-light btn-small" onClick={this.props.pagamentoContinua}>Pagar</button>
            </div>
        )
    }
}

export default Payment;