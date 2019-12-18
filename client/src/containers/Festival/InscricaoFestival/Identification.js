import React, { Component } from 'react';
import axios from 'axios';

class Identification extends Component {

    render() {
        return(
            <div>
                <h4>Dados do Usuário</h4>
                <h5>Confira seus dados se estão corretos:</h5>
                <p>Nome: {this.props.objUser ? this.props.objUser.name : null}</p>
                <p>Email: {this.props.objUser ? this.props.objUser.email : null}</p>
                <button className="waves-effect waves-light btn-small" onClick={this.props.identificacaoContinuar}>continuar</button>
            </div>
        )
    }
}

export default Identification;