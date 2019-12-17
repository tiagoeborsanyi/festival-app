import React, { Component } from 'react';

class Identification extends Component {
    render() {
        return(
            <div>
                <h4>Dados do Usuário</h4>
                <h5>Confira seus dados se estão corretos:</h5>
                <p>Nome: </p>
                <p>Email: </p>
                <button className="waves-effect waves-light btn-small" onClick={this.props.identificacaoContinuar}>continuar</button>
            </div>
        )
    }
}

export default Identification;