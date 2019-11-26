import React, { Component } from 'react';
import axios from 'axios';

import ListEvents from '../../../components/Gerencia/Evento/ListEvents';

class Eventos extends Component {
    state = {
        ev: []
    }

    async componentDidMount() {
        const res = await axios.get('/api/evento/all');
        this.setState({ ev: res.data });
        console.log(res);
    }

    render() {
        return (
            <div>
                <ListEvents dados={this.state.ev} />
            </div>
        )
    }
}

export default Eventos;