import React, { Component } from 'react';

class Identification extends Component {
    render() {
        return(
            <div>
                Identificação
                <button onClick={this.props.identificacaoContinuar}>continuar</button>
            </div>
        )
    }
}

export default Identification;