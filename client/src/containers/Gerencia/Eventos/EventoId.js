import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import ReviewEvento from '../../../components/ViewReviewAddFestival/ViewReviewAddFestival';
import Spinner from '../../../components/UI/Spinner/Spinner';

class EventoId extends Component {
    state = {
        evt: null,
        load: false
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

    excludeFestival = () => {
        console.log('Excluir')
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