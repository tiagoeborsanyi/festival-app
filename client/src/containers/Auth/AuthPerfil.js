import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import Perfil from '../../components/User/Perfil/Perfil';

class AuthPerfil extends Component {
    state = {
        name: '',
        email: ''
    }

    async componentDidMount () {
        const res = await axios.get('/api/users/current', { headers: {"Authorization" : this.props.token}});
        console.log(res)
        const { name, email } = res.data;
        this.setState({ name, email });
    }
    render() {
        return <Perfil name={this.state.name} email={this.state.email} />
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        id: state.auth.userId
    }
}

export default connect(mapStateToProps)(AuthPerfil);