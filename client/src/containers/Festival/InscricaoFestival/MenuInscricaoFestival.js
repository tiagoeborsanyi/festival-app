import React, { Component } from 'react';

import MenuInscricao from '../../../components/Inscricoes/MenuInscricao/MenuInscricao';
import SelectCategory from './SelectCategory';
import Identification from './Identification';
import Payment from './Payment';
import Conclusion from './Conclusion';

class MenuInscricaoFestival extends Component {
    state = {
            categoria: true,
            identificacao: false,
            pagamento: false,
            conclusao: false,
    }

    funcCategoria = (e) => {
        e.preventDefault();
        this.setState({categoria: false, identificacao: true})
    }

    funcIdentificacao = (e) => {
        e.preventDefault();
        this.setState({ identificacao: false, pagamento: true})
    }

    funcPagamento = (e) => {
        e.preventDefault();
        this.setState({ pagamento: false, conclusao: true})
    }

    renderContent() {
        if (this.state.categoria) {
            return <SelectCategory categoriaContinuar={this.funcCategoria} />
        }
        if (this.state.identificacao) {
            return <Identification identificacaoContinuar={this.funcIdentificacao} />
        }
        if (this.state.pagamento) {
            return <Payment pagamentoContinua={this.funcPagamento} />
        }
        if (this.state.conclusao) {
            return <Conclusion />
        }
    }

    render() {
        const { categoria, identificacao, pagamento, conclusao } = this.state;
        return(
            <MenuInscricao 
                categoria={categoria ? "#fff" : "#ccc"}
                identificacao={identificacao ? "#fff" : "#ccc"}
                pagamento={pagamento ? "#fff" : "#ccc"}
                conclusao={conclusao ? "#fff" : "#ccc"}>
                {this.renderContent()}
            </MenuInscricao>
        )
    }
}

export default MenuInscricaoFestival;