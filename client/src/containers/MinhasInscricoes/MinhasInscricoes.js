import React, { Component } from 'react';
import axios from 'axios';

import MyInscricoes from '../../components/MyInscricoes/MyInscricoes';

class MinhasInscricoes extends Component {
    state = {
        objArr: null
    }

    async componentDidMount() {
        if (localStorage.getItem('token') !== null) {
            const user = await axios.get('/api/users/current', { headers: {"Authorization" : localStorage.getItem('token')}});
            const email = {email: user.data.email}
            const res = await axios.post('/api/inscricao/my_subscriptions', email);
            this.setState({objArr: res.data})
        }
    }

    render() {
        return <MyInscricoes objArr={this.state.objArr} />
    }
}

export default MinhasInscricoes;