import React, { Component } from 'react';

class Payment extends Component {
    render() {
        return(
            <div>
                Pagamento
                <button className="btn btn-flat" onClick={this.props.pagamentoContinua}>Pagamento</button>
            </div>
        )
    }
}

export default Payment;