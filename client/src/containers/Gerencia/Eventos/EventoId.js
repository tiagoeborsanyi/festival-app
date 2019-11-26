import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import ReviewEvento from '../../../components/ViewReviewAddFestival/ViewReviewAddFestival';
import Modal from '../../../components/UI/Modal/Modal';
import Spinner from '../../../components/UI/Spinner/Spinner';

class EventoId extends Component {
    state = {
        evt: null,
        load: false,
        publish: false,
        delete: false,
        errorDelete: false
    }
    async componentDidMount() {
        const res = await axios.get(`/api/evento/${this.props.match.params.id}`);
        this.setState({ load: true, evt: res.data });
    }

    publishFestival = async () => {
        const obj = {
            id: this.props.match.params.id,
            active: true
        }
        const res = await axios.post('/api/evento/publish', obj, { headers: {"Authorization" : this.props.token}});
        console.log(res);
    }

    editFestival = () => {
        console.log('Editar');
    }

    excludeFestival = async (id) => {
        this.setState({ delete: true });
        if (id) {
            try {
                const res = await axios.delete(`/api/evento/delete/${id}`, { headers: {"Authorization" : this.props.token}});
                console.log(res)
                res.status === 200 && this.props.history.push('/gerencia/list-events')
            } catch (e) {
                console.log(e.response);
            }
        }
    }

    cancelDeleteFestivao = () => {
        this.setState({ delete: false });
    }

    render() {
        let isLoad = <Spinner />;
        if (this.state.load) {
            isLoad = (
                <div>
                    <ReviewEvento
                       onObjFestival={this.state.evt}
                       viewDisplay='inline-block'
                       record='Publicar'
                       onCancel={() => this.props.history.goBack()}
                       recordFestival={this.publishFestival}
                       editFestival={this.editFestival}
                       excludeFestival={this.excludeFestival} />
                </div>
            )
        }

        return (
            <div>
                <Modal show={this.state.delete}>
                    <h4>Tem certeza que deseja apagar este festival?</h4>
                    <button className="yellow darken-3 white-text btn-flat left" onClick={this.cancelDeleteFestivao}>Cancelar</button>
                    <button className="red darken-3 white-text btn-flat right" onClick={() => this.excludeFestival(this.props.match.params.id)}>Apagar</button>
                </Modal>
                {isLoad}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(EventoId);