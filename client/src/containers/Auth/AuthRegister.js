import React, { Component } from 'react';
import axios from 'axios';

import Register from '../../components/User/Register/Register';

class AuthRegister extends Component {
    state = {
        objRegister: {
            name: '',
            email: '',
            password: '',
            password2: ''
        },
        errorMessage: null
    }

    changed = (e) => {
        const { name, value } = e.target;
        const updateObjRegister = { ...this.state.objRegister };
        updateObjRegister[name] = value;
        this.setState({ objRegister: updateObjRegister });
    }

    submit = async e => {
        e.preventDefault();
        const obj = this.state.objRegister;
        try {
            const res = await axios.post('/api/users/register', obj);
            if (res.status === 200) {
                this.props.history.push('/login');
            }
        } catch (error) {
            console.log(error.response);
            this.setState({ errorMessage: error.response.data });
        }
    }

    render() {
        return <Register changed={this.changed} submit={this.submit} error={this.state.errorMessage} />
    }
}

export default AuthRegister;