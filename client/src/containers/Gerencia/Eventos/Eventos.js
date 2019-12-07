import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import ListEvents from '../../../components/Gerencia/Evento/ListEvents';
import Modal from '../../../components/UI/Modal/Modal';

class Eventos extends Component {
    state = {
        ev: [],
        status: false,
        load: false,
        idLoad: null,
        refreshPublish: false
    }

    async componentDidMount() {
        const res = await axios.get('/api/evento/all');
        this.setState({ ev: res.data });
    }

    changeCheck = async (e) => {
        const copyObj = [...this.state.ev]
        const objTest = copyObj.filter(x => x._id === e.target.name);
        if (objTest[0].subscription.length > 0) {
            this.setState({load: true, idLoad: e.target.name});
            const index = this.state.ev.findIndex(x => x._id === e.target.name)
            const obj = {
                id: e.target.name,
                active: !this.state.ev[index].active
            }
            const res = await axios.post('/api/evento/publish', obj, { headers: {"Authorization" : this.props.token}});
            // console.log(res);
            if (res.status === 200) {
                const updateObj = [...this.state.ev]
                updateObj[index]['active'] = obj.active;
                this.setState({ ev: updateObj, load: false, idLoad: null});
            }
            return;
        }
        this.setState({refreshPublish: true});
    }

    okModalPublish = () => {
        this.setState({refreshPublish: false});
    }

    render() {
        return (
            <div>
                <Modal show={this.state.refreshPublish}>
                    <p>É necessário cadastrar ao menos um tipo</p>
                    <p>de inscrição, para poder publicar o evento para as pessoas.</p>
                    <button className="blue white-text btn-flat btn-small" onClick={this.okModalPublish}>OK</button>
                </Modal>
                <ListEvents 
                    dados={this.state.ev} 
                    changeCheck={this.changeCheck} 
                    load={this.state.load} 
                    idLoad={this.state.idLoad} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Eventos);