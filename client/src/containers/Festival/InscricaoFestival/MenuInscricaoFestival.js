import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

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

    componentDidMount() {
        if (this.props.objInscricao === null) {
            this.props.onFestivalLoad(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        console.log('menuinscricao willUnmount')
        // tenho que colocar um obj finish aqui para objFestival e objInscricao
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
            return <SelectCategory categoriaContinuar={this.funcCategoria} obj={this.props.objInscricao} />
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

const mapStateToProps = state => {
    return {
        objInscricao: state.inscricao.objInscricao
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onFestivalLoad: (id) => dispatch(actions.festivalLoad(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MenuInscricaoFestival);