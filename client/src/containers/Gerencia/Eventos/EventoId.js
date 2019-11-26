import React, { Component } from 'react';
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

    render() {
        let isLoad = <Spinner />;
        if (this.state.load) {
            isLoad = (
                <div>
                    <ReviewEvento
                       onObjFestival={this.state.evt}
                       viewDisplay='inline-block'
                       record='Publicar'
                       onCancel={() => this.props.history.goBack()} />
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

export default EventoId;