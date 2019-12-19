import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Payment extends Component {
    pagStripe = async (token) => {
        const obj = {
            id: token,
            value: this.props.obj[0].value
        }
        const res = await axios.post('/api/inscricao/stripe', obj);
        console.log('resposta token: ', token, res);
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
                token={token => this.pagStripe(token)}
                stripeKey='ID_TOKEN STRIPE'
                >
                    <button className="waves-effect waves-light btn-small">Pagar</button>
                </StripeCheckout>
            </div>
        )
    }
}

export default Payment;