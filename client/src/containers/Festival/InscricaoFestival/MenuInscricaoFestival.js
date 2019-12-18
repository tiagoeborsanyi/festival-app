import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import axios from 'axios';

import MenuInscricao from '../../../components/Inscricoes/MenuInscricao/MenuInscricao';
import SelectCategory from './SelectCategory';
import Identification from './Identification';
import Payment from './Payment';
import Conclusion from './Conclusion';
import Modal from '../../../components/UI/Modal/Modal';

class MenuInscricaoFestival extends Component {
    state = {
            categoria: true,
            identificacao: false,
            pagamento: false,
            conclusao: false,
            objInsc: null,
            objUser: null,
            idInscricaoUser: null,
            userPayment: null,
            checkedId: null,
            isCheckModal: false
    }

    async componentDidMount() {
        if (localStorage.getItem('token') !== null) {
            const res = await axios.get('/api/users/current', { headers: {"Authorization" : localStorage.getItem('token')}});
            console.log(res.data)
            this.setState({objUser: res.data});
        }
        if (this.props.objInscricao === null) {
            this.props.onFestivalLoad(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        console.log('menuinscricao willUnmount')
        // tenho que colocar um obj finish aqui para objFestival e objInscricao
        this.props.onInscricaoUnmount();
    }

    changeCheckbox = (e) => {
        if (e.target.checked) {
            this.setState({checkedId: e.target.name})
        } else {
            this.setState({checkedId: null})
        }
    }

    funcCategoria = async (e) => {
        // Aqui eu vejo se o usuario esta authenticado ou nao
        // se estiver: então é mostrados os dados de e a inscrição escolhida para depois ir para o pagamento
        // se não estiver: então é mandado para fazer login
        e.preventDefault();
        if (this.props.isAuth) {
            const isCheckd = this.props.objInscricao.inscricoes.filter(obj => obj._id === this.state.checkedId && obj._id === e.target.name);
            // console.log(isCheckd)
            if (isCheckd.length > 0) {
                const escolha = this.props.objInscricao.inscricoes.filter(obj => obj._id === e.target.name);
                this.setState({objInsc: escolha, categoria: false, identificacao: true});
            } else {
                this.setState({isCheckModal: true});
            }
        } else {
            this.props.history.push('/login');
        }
    }

    funcIdentificacao = (e) => {
        e.preventDefault();
            console.log(this.state.objInsc)
            this.setState({ identificacao: false, pagamento: true})
    }

    funcPagamento = () => {
        console.log('stripe amount: ', this.state.objUser, this.state.objInsc);
        // tenho que fazer esse setState depois que o pagamento for aprovado
        // this.setState({ pagamento: false, conclusao: true})
    }

    renderContent() {
        if (this.state.categoria) {
            return <SelectCategory categoriaContinuar={this.funcCategoria} obj={this.props.objInscricao} changeCheckbox={this.changeCheckbox} />
        }
        if (this.state.identificacao) {
            return <Identification identificacaoContinuar={this.funcIdentificacao} objUser={this.state.objUser} />
        }
        if (this.state.pagamento) {
            return <Payment pagamentoContinua={this.funcPagamento} obj={this.state.objInsc} objUser={this.state.objUser} />
        }
        if (this.state.conclusao) {
            return <Conclusion />
        }
    }

    clickModal = () => {
        this.setState({isCheckModal: false});
    }

    render() {
        const { categoria, identificacao, pagamento, conclusao } = this.state;
        return(
            <div>
                <Modal show={this.state.isCheckModal}>
                    <p>Termo de responsabilidade para esta modalidade deve ser aceito.</p>
                    <button className="btn" onClick={this.clickModal}>OK</button>
                </Modal>
                <MenuInscricao 
                    categoria={categoria ? "#fff" : "#ccc"}
                    identificacao={identificacao ? "#fff" : "#ccc"}
                    pagamento={pagamento ? "#fff" : "#ccc"}
                    conclusao={conclusao ? "#fff" : "#ccc"}>
                    {this.renderContent()}
                </MenuInscricao>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        objInscricao: state.inscricao.objInscricao,
        isAuth: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onFestivalLoad: (id) => dispatch(actions.festivalLoad(id)),
      onInscricaoUnmount: () => dispatch(actions.inscricaoUnmount())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MenuInscricaoFestival);