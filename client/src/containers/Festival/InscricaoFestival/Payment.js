import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
    billing = () => {

    }
    render() {
        return(
                <div>
                <h4>Dados do Usuário</h4>
                <h5>Confira seus dados se estão corretos:</h5>
                <p>Nome: {this.props.objUser ? this.props.objUser.name : null}</p>
                <p>Email: {this.props.objUser ? this.props.objUser.email : null}</p>
                <hr />
                <h4>Dados da Inscrição</h4>
                <p>Titulo: {this.props.obj[0].title}</p>
                <img src={this.props.obj[0].image} alt="Escalado de pedra" className="viewincricao_image" />
                <p>Valor a pagar R$: {this.props.obj[0].value}</p>
                <StripeCheckout
                name="Festival Climb BID"
                description={"Valor que será pago R$ "+this.props.obj[0].value}
                amount={this.props.obj[0].value}
                token={/*aqui a função que vai ser enviada para a api*/this.billing}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                    <button className="waves-effect waves-light btn-small" onClick={this.props.pagamentoContinua}>Pagar</button>
                </StripeCheckout>
            </div>
        )
    }
}

export default Payment;